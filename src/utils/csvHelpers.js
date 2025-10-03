/**
 * Shared CSV utilities for validation and processing
 */

import { getCommonTimezones } from './timezone';
import { DAYS_OF_WEEK, generateTimeSlots } from './timeSlots';

/**
 * Parse CSV text into rows and columns
 * @param {string} csvText - Raw CSV text
 * @returns {Array<Array<string>>} Array of rows, each row is array of values
 */
export function parseCSVText(csvText) {
  const rows = [];
  let currentRow = [];
  let currentValue = '';
  let insideQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        // Escaped quote
        currentValue += '"';
        i++; // Skip next quote
      } else {
        // Toggle quote state
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      // End of value
      currentRow.push(currentValue.trim());
      currentValue = '';
    } else if ((char === '\n' || char === '\r') && !insideQuotes) {
      // End of row
      if (currentValue || currentRow.length > 0) {
        currentRow.push(currentValue.trim());

        // Only add non-empty rows that aren't just comments
        if (currentRow.some(val => val && !val.startsWith('#'))) {
          rows.push(currentRow);
        }

        currentRow = [];
        currentValue = '';
      }

      // Skip \r\n combinations
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
    } else {
      currentValue += char;
    }
  }

  // Add last value/row if exists
  if (currentValue || currentRow.length > 0) {
    currentRow.push(currentValue.trim());
    if (currentRow.some(val => val && !val.startsWith('#'))) {
      rows.push(currentRow);
    }
  }

  // Filter out comment rows and empty rows
  return rows.filter(row => {
    return row.length > 0 && !row[0].startsWith('#');
  });
}

/**
 * Validate CSV structure (headers)
 * @param {Array<string>} headers - First row of CSV (headers)
 * @returns {Object} { valid: boolean, error: string }
 */
export function validateCSVStructure(headers) {
  const requiredHeaders = [
    'Username',
    'Car Power (M)',
    'Tower Level',
    'Timezone',
    'Availability (JSON)',
    'Last Updated'
  ];

  // Normalize headers (trim, case-insensitive)
  const normalizedHeaders = headers.map(h => h.trim().toLowerCase());
  const normalizedRequired = requiredHeaders.map(h => h.toLowerCase());

  // Check if all required headers are present
  for (const required of normalizedRequired) {
    if (!normalizedHeaders.includes(required)) {
      return {
        valid: false,
        error: `Missing required column: ${requiredHeaders[normalizedRequired.indexOf(required)]}`
      };
    }
  }

  return { valid: true, error: null };
}

/**
 * Validate username
 * @param {string} username - Username to validate
 * @returns {Object} { valid: boolean, error: string }
 */
export function validateUsername(username) {
  if (!username || username.trim().length === 0) {
    return { valid: false, error: 'Username is required' };
  }

  const trimmed = username.trim();

  if (trimmed.length > 50) {
    return { valid: false, error: 'Username too long (max 50 characters)' };
  }

  // Check for dangerous characters (HTML/script)
  if (/<|>|&lt;|&gt;/.test(trimmed)) {
    return { valid: false, error: 'Username contains invalid characters' };
  }

  return { valid: true, value: trimmed };
}

/**
 * Validate car power
 * @param {string|number} carPower - Car power value
 * @returns {Object} { valid: boolean, error: string, value: number }
 */
export function validateCarPower(carPower) {
  const num = parseFloat(carPower);

  if (isNaN(num)) {
    return { valid: false, error: 'Car power must be a number' };
  }

  if (num <= 0) {
    return { valid: false, error: 'Car power must be greater than 0' };
  }

  if (num > 1000) {
    return { valid: false, error: 'Car power value seems unrealistic (max 1000M)' };
  }

  // Round to 1 decimal place
  const rounded = Math.round(num * 10) / 10;

  return { valid: true, value: rounded };
}

/**
 * Validate tower level
 * @param {string|number} towerLevel - Tower level value
 * @returns {Object} { valid: boolean, error: string, value: number }
 */
export function validateTowerLevel(towerLevel) {
  const num = parseInt(towerLevel, 10);

  if (isNaN(num)) {
    return { valid: false, error: 'Tower level must be a number' };
  }

  if (num < 1 || num > 35) {
    return { valid: false, error: 'Tower level must be between 1 and 35' };
  }

  return { valid: true, value: num };
}

/**
 * Validate timezone
 * @param {string} timezone - IANA timezone string
 * @returns {Object} { valid: boolean, error: string, value: string }
 */
export function validateTimezone(timezone) {
  if (!timezone || timezone.trim().length === 0) {
    return { valid: false, error: 'Timezone is required' };
  }

  const trimmed = timezone.trim();
  const validTimezones = getCommonTimezones().map(tz => tz.value);

  if (!validTimezones.includes(trimmed)) {
    return {
      valid: false,
      error: `Invalid timezone "${trimmed}". Use IANA format (e.g., "America/New_York")`
    };
  }

  return { valid: true, value: trimmed };
}

/**
 * Validate availability JSON
 * @param {string} availabilityJSON - JSON string of availability
 * @returns {Object} { valid: boolean, error: string, value: Object }
 */
export function validateAvailability(availabilityJSON) {
  if (!availabilityJSON || availabilityJSON.trim().length === 0) {
    // Empty availability is allowed
    return { valid: true, value: {} };
  }

  let availability;
  try {
    availability = JSON.parse(availabilityJSON);
  } catch (error) {
    return { valid: false, error: 'Invalid JSON format in availability data' };
  }

  if (typeof availability !== 'object' || Array.isArray(availability)) {
    return { valid: false, error: 'Availability must be an object' };
  }

  // Validate each day
  const validSlots = generateTimeSlots().map(s => s.value);

  for (const [day, slots] of Object.entries(availability)) {
    // Check if day is valid
    if (!DAYS_OF_WEEK.includes(day)) {
      return { valid: false, error: `Invalid day "${day}" in availability` };
    }

    // Check if slots is an array
    if (!Array.isArray(slots)) {
      return { valid: false, error: `Availability for ${day} must be an array` };
    }

    // Validate each slot
    for (const slot of slots) {
      if (!validSlots.includes(slot)) {
        return {
          valid: false,
          error: `Invalid time slot "${slot}" for ${day}. Must be format like "00-02", "14-16", etc.`
        };
      }
    }
  }

  return { valid: true, value: availability };
}

/**
 * Validate timestamp
 * @param {string} timestamp - ISO timestamp string
 * @returns {Object} { valid: boolean, error: string, value: string }
 */
export function validateTimestamp(timestamp) {
  if (!timestamp || timestamp.trim().length === 0) {
    // Use current time if not provided
    return { valid: true, value: new Date().toISOString() };
  }

  const trimmed = timestamp.trim();
  const date = new Date(trimmed);

  if (isNaN(date.getTime())) {
    return { valid: false, error: 'Invalid timestamp format' };
  }

  return { valid: true, value: date.toISOString() };
}

/**
 * Detect duplicate usernames in array
 * @param {Array<Object>} members - Array of member objects
 * @returns {Object} { duplicates: Array<string>, hasDuplicates: boolean }
 */
export function detectDuplicates(members) {
  const usernames = new Map();
  const duplicates = [];

  members.forEach((member, index) => {
    const username = member.username.toLowerCase();

    if (usernames.has(username)) {
      duplicates.push({
        username: member.username,
        rows: [usernames.get(username), index + 2] // +2 for header row and 0-index
      });
    } else {
      usernames.set(username, index + 2);
    }
  });

  return {
    duplicates,
    hasDuplicates: duplicates.length > 0
  };
}

/**
 * Find conflicts with existing members
 * @param {Array<Object>} importMembers - Members from CSV
 * @param {Array<Object>} existingMembers - Current members
 * @returns {Object} { conflicts: Array, hasConflicts: boolean }
 */
export function findConflicts(importMembers, existingMembers) {
  const conflicts = [];

  importMembers.forEach(importMember => {
    const existing = existingMembers.find(
      m => m.username.toLowerCase() === importMember.username.toLowerCase()
    );

    if (existing) {
      conflicts.push({
        username: importMember.username,
        existingData: existing,
        newData: importMember
      });
    }
  });

  return {
    conflicts,
    hasConflicts: conflicts.length > 0
  };
}

/**
 * Sanitize member data (strip dangerous content)
 * @param {Object} member - Member object
 * @returns {Object} Sanitized member object
 */
export function sanitizeMemberData(member) {
  return {
    ...member,
    username: member.username.replace(/<[^>]*>/g, '').trim(), // Strip HTML tags
    id: member.id || `member-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  };
}
