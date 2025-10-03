/**
 * CSV Import utilities for member data
 * Handles parsing, validation, and processing of CSV imports
 */

import {
  parseCSVText,
  validateCSVStructure,
  validateUsername,
  validateCarPower,
  validateTowerLevel,
  validateTimezone,
  validateAvailability,
  validateTimestamp,
  detectDuplicates,
  findConflicts,
  sanitizeMemberData
} from './csvHelpers';

/**
 * Parse and validate CSV file
 * @param {File} file - CSV file object
 * @returns {Promise<Object>} { success: boolean, data: Array, errors: Array, warnings: Array }
 */
export async function parseAndValidateCSV(file) {
  const result = {
    success: false,
    data: [],
    errors: [],
    warnings: []
  };

  try {
    // Validate file
    if (!file) {
      result.errors.push({ type: 'file', message: 'No file provided' });
      return result;
    }

    if (!file.name.endsWith('.csv')) {
      result.errors.push({ type: 'file', message: 'Invalid file format. Please upload a CSV file.' });
      return result;
    }

    // Check file size (max 5MB)
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      result.errors.push({ type: 'file', message: 'File too large. Maximum size is 5MB.' });
      return result;
    }

    // Read file content
    const text = await readFileAsText(file);

    if (!text || text.trim().length === 0) {
      result.errors.push({ type: 'file', message: 'CSV file is empty' });
      return result;
    }

    // Parse CSV
    const rows = parseCSVText(text);

    if (rows.length === 0) {
      result.errors.push({ type: 'file', message: 'No data found in CSV file' });
      return result;
    }

    // First row should be headers
    const headers = rows[0];
    const dataRows = rows.slice(1);

    // Validate structure
    const structureValidation = validateCSVStructure(headers);
    if (!structureValidation.valid) {
      result.errors.push({ type: 'structure', message: structureValidation.error });
      return result;
    }

    // Check row count (max 1000)
    const MAX_ROWS = 1000;
    if (dataRows.length > MAX_ROWS) {
      result.errors.push({
        type: 'file',
        message: `Too many rows. Maximum is ${MAX_ROWS} members per import.`
      });
      return result;
    }

    if (dataRows.length === 0) {
      result.warnings.push({ type: 'data', message: 'No member data found (only headers)' });
      return result;
    }

    // Get column indices (case-insensitive)
    const normalizedHeaders = headers.map(h => h.trim().toLowerCase());
    const usernameIdx = normalizedHeaders.indexOf('username');
    const carPowerIdx = normalizedHeaders.indexOf('car power (m)');
    const towerLevelIdx = normalizedHeaders.indexOf('tower level');
    const timezoneIdx = normalizedHeaders.indexOf('timezone');
    const availabilityIdx = normalizedHeaders.indexOf('availability (json)');
    const lastUpdatedIdx = normalizedHeaders.indexOf('last updated');

    // Validate each row
    const validatedMembers = [];

    for (let i = 0; i < dataRows.length; i++) {
      const row = dataRows[i];
      const rowNum = i + 2; // +2 for header row and 0-index

      // Skip empty rows
      if (row.every(cell => !cell || cell.trim().length === 0)) {
        continue;
      }

      const rowErrors = [];

      // Validate username
      const usernameValidation = validateUsername(row[usernameIdx]);
      if (!usernameValidation.valid) {
        rowErrors.push(`Row ${rowNum}: ${usernameValidation.error}`);
      }

      // Validate car power
      const carPowerValidation = validateCarPower(row[carPowerIdx]);
      if (!carPowerValidation.valid) {
        rowErrors.push(`Row ${rowNum}: ${carPowerValidation.error}`);
      }

      // Validate tower level
      const towerLevelValidation = validateTowerLevel(row[towerLevelIdx]);
      if (!towerLevelValidation.valid) {
        rowErrors.push(`Row ${rowNum}: ${towerLevelValidation.error}`);
      }

      // Validate timezone
      const timezoneValidation = validateTimezone(row[timezoneIdx]);
      if (!timezoneValidation.valid) {
        rowErrors.push(`Row ${rowNum}: ${timezoneValidation.error}`);
      }

      // Validate availability
      const availabilityValidation = validateAvailability(row[availabilityIdx]);
      if (!availabilityValidation.valid) {
        rowErrors.push(`Row ${rowNum}: ${availabilityValidation.error}`);
      }

      // Validate timestamp (optional - will use current time if invalid)
      const timestampValidation = validateTimestamp(row[lastUpdatedIdx]);

      // If any validation failed, add errors and skip this row
      if (rowErrors.length > 0) {
        result.errors.push(...rowErrors.map(error => ({ type: 'validation', message: error })));
        continue;
      }

      // Create member object
      const member = {
        username: usernameValidation.value,
        carPower: carPowerValidation.value,
        towerLevel: towerLevelValidation.value,
        timezone: timezoneValidation.value,
        availability: availabilityValidation.value,
        lastUpdated: timestampValidation.value
      };

      validatedMembers.push(sanitizeMemberData(member));
    }

    // Check for duplicates within import file
    const duplicateCheck = detectDuplicates(validatedMembers);
    if (duplicateCheck.hasDuplicates) {
      duplicateCheck.duplicates.forEach(dup => {
        result.errors.push({
          type: 'duplicate',
          message: `Duplicate username "${dup.username}" found in rows ${dup.rows.join(', ')}`
        });
      });
    }

    // If no valid members after validation
    if (validatedMembers.length === 0 && result.errors.length > 0) {
      return result;
    }

    // Success!
    result.success = result.errors.length === 0;
    result.data = validatedMembers;

    return result;
  } catch (error) {
    console.error('Error parsing CSV:', error);
    result.errors.push({
      type: 'error',
      message: `Failed to parse CSV: ${error.message}`
    });
    return result;
  }
}

/**
 * Read file as text
 * @param {File} file - File object
 * @returns {Promise<string>} File content as text
 */
function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      resolve(event.target.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsText(file);
  });
}

/**
 * Analyze conflicts with existing members
 * @param {Array<Object>} importMembers - Members from CSV
 * @param {Array<Object>} existingMembers - Current members in system
 * @returns {Object} Conflict analysis result
 */
export function analyzeConflicts(importMembers, existingMembers) {
  const conflictAnalysis = findConflicts(importMembers, existingMembers);

  const newMembers = importMembers.filter(
    m => !existingMembers.find(
      em => em.username.toLowerCase() === m.username.toLowerCase()
    )
  );

  return {
    hasConflicts: conflictAnalysis.hasConflicts,
    conflicts: conflictAnalysis.conflicts,
    newMembers,
    existingCount: existingMembers.length,
    importCount: importMembers.length,
    newCount: newMembers.length,
    updateCount: conflictAnalysis.conflicts.length
  };
}

/**
 * Process import based on mode
 * @param {Array<Object>} importMembers - Members from CSV
 * @param {Array<Object>} existingMembers - Current members
 * @param {string} mode - Import mode: 'replace', 'merge', 'add-only'
 * @returns {Object} { members: Array, summary: Object }
 */
export function processImport(importMembers, existingMembers, mode) {
  let finalMembers = [];
  const summary = {
    mode,
    added: 0,
    updated: 0,
    deleted: 0,
    skipped: 0,
    total: 0
  };

  switch (mode) {
    case 'replace':
      // Delete all existing, add all from import
      finalMembers = importMembers;
      summary.deleted = existingMembers.length;
      summary.added = importMembers.length;
      summary.total = importMembers.length;
      break;

    case 'merge':
      // Update existing, add new
      finalMembers = [...existingMembers];

      importMembers.forEach(importMember => {
        const existingIndex = finalMembers.findIndex(
          m => m.username.toLowerCase() === importMember.username.toLowerCase()
        );

        if (existingIndex >= 0) {
          // Update existing (preserve ID)
          finalMembers[existingIndex] = {
            ...importMember,
            id: finalMembers[existingIndex].id
          };
          summary.updated++;
        } else {
          // Add new
          finalMembers.push(importMember);
          summary.added++;
        }
      });

      summary.total = finalMembers.length;
      break;

    case 'add-only':
      // Only add new members, skip existing
      finalMembers = [...existingMembers];

      importMembers.forEach(importMember => {
        const exists = finalMembers.find(
          m => m.username.toLowerCase() === importMember.username.toLowerCase()
        );

        if (!exists) {
          finalMembers.push(importMember);
          summary.added++;
        } else {
          summary.skipped++;
        }
      });

      summary.total = finalMembers.length;
      break;

    default:
      throw new Error(`Invalid import mode: ${mode}`);
  }

  return { members: finalMembers, summary };
}

/**
 * Generate import summary text
 * @param {Object} summary - Import summary object
 * @returns {string} Human-readable summary
 */
export function generateImportSummary(summary) {
  const parts = [];

  if (summary.added > 0) {
    parts.push(`${summary.added} added`);
  }

  if (summary.updated > 0) {
    parts.push(`${summary.updated} updated`);
  }

  if (summary.deleted > 0) {
    parts.push(`${summary.deleted} deleted`);
  }

  if (summary.skipped > 0) {
    parts.push(`${summary.skipped} skipped`);
  }

  return parts.join(', ') || 'No changes';
}
