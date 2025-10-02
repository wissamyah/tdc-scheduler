/**
 * Timezone utilities for handling user local time and server time (UTC-2)
 */

// Server timezone is UTC-2
export const SERVER_TIMEZONE_OFFSET = -2;

/**
 * Get user's current timezone
 * @returns {string} IANA timezone identifier (e.g., 'America/New_York')
 */
export function getUserTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

/**
 * Get timezone offset in hours from UTC
 * @param {string} timezone - IANA timezone identifier
 * @returns {number} Offset in hours (e.g., -5 for EST, 1 for CET)
 */
export function getTimezoneOffset(timezone) {
  const now = new Date();
  const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
  const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
  const offset = (tzDate - utcDate) / (1000 * 60 * 60);
  return offset;
}

/**
 * Get formatted timezone display name
 * @param {string} timezone - IANA timezone identifier
 * @returns {string} Formatted timezone (e.g., 'UTC-5 (America/New_York)')
 */
export function getTimezoneDisplay(timezone) {
  const offset = getTimezoneOffset(timezone);
  const offsetStr = offset >= 0 ? `+${offset}` : offset;
  return `UTC${offsetStr} (${timezone})`;
}

/**
 * Convert time slot from user's timezone to server timezone (UTC-2)
 * @param {string} slotValue - Time slot value (e.g., '14-16')
 * @param {string} userTimezone - User's IANA timezone
 * @param {string} day - Day of week
 * @returns {Object} Converted slot info { slotValue, day, wrapsToNextDay }
 */
/**
 * Get all valid 2-hour slots that overlap with a given time range
 * @param {number} startHour - Start hour (0-23)
 * @param {number} endHour - End hour (0-23)
 * @returns {Array<string>} Array of overlapping slot values
 */
function getOverlappingSlots(startHour, endHour) {
  const slots = [];
  const validSlotStarts = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];

  validSlotStarts.forEach(slotStart => {
    const slotEnd = (slotStart + 2) % 24;

    // Check if this valid slot overlaps with the converted time range
    // Overlap occurs if: slot starts before range ends AND slot ends after range starts
    const slotOverlaps = (slotStart < endHour || (endHour === 0 && slotStart === 22)) &&
                         (slotEnd > startHour || (slotStart === 22 && slotEnd === 0 && endHour <= 24));

    if (slotOverlaps) {
      const slotValue = `${slotStart.toString().padStart(2, '0')}-${slotEnd.toString().padStart(2, '0')}`;
      slots.push(slotValue);
    }
  });

  return slots;
}

export function convertToServerTime(slotValue, userTimezone, day) {
  const [startHour, endHour] = slotValue.split('-').map(Number);

  const userOffset = getTimezoneOffset(userTimezone);
  const serverOffset = SERVER_TIMEZONE_OFFSET;
  const hourDiff = serverOffset - userOffset;

  let serverStartHour = startHour + hourDiff;
  let serverEndHour = endHour + hourDiff;
  let serverDay = day;
  let wrapsToNextDay = false;
  let wrapsToPrevDay = false;

  // Handle day wrapping for start hour
  if (serverStartHour >= 24) {
    serverStartHour -= 24;
    serverEndHour -= 24;
    wrapsToNextDay = true;
    serverDay = getNextDay(day);
  } else if (serverStartHour < 0) {
    serverStartHour += 24;
    serverEndHour += 24;
    wrapsToPrevDay = true;
    serverDay = getPrevDay(day);
  }

  // Handle end hour wrapping (for slots like 22-00)
  if (serverEndHour >= 24) {
    serverEndHour -= 24;
  } else if (serverEndHour < 0) {
    serverEndHour += 24;
  }

  // Get all valid slots that overlap with the converted time range
  const overlappingSlots = getOverlappingSlots(serverStartHour, serverEndHour);

  return {
    slots: overlappingSlots, // Return multiple slots instead of single slot
    day: serverDay,
    wrapsToNextDay,
    wrapsToPrevDay
  };
}

/**
 * Convert time slot from server timezone (UTC-2) to user's timezone
 * @param {string} slotValue - Time slot value (e.g., '14-16')
 * @param {string} userTimezone - User's IANA timezone
 * @param {string} day - Day of week
 * @returns {Object} Converted slot info { slotValue, day, wrapsToNextDay }
 */
export function convertFromServerTime(slotValue, userTimezone, day) {
  const [startHour, endHour] = slotValue.split('-').map(Number);

  const userOffset = getTimezoneOffset(userTimezone);
  const serverOffset = SERVER_TIMEZONE_OFFSET;
  const hourDiff = userOffset - serverOffset;

  let userStartHour = startHour + hourDiff;
  let userEndHour = endHour + hourDiff;
  let userDay = day;
  let wrapsToNextDay = false;
  let wrapsToPrevDay = false;

  // Handle day wrapping for start hour
  if (userStartHour >= 24) {
    userStartHour -= 24;
    userEndHour -= 24;
    wrapsToNextDay = true;
    userDay = getNextDay(day);
  } else if (userStartHour < 0) {
    userStartHour += 24;
    userEndHour += 24;
    wrapsToPrevDay = true;
    userDay = getPrevDay(day);
  }

  // Handle end hour wrapping (for slots like 22-00)
  if (userEndHour >= 24) {
    userEndHour -= 24;
  } else if (userEndHour < 0) {
    userEndHour += 24;
  }

  const userSlotValue = `${userStartHour.toString().padStart(2, '0')}-${userEndHour.toString().padStart(2, '0')}`;

  return {
    slotValue: userSlotValue,
    day: userDay,
    wrapsToNextDay,
    wrapsToPrevDay
  };
}

/**
 * Get next day of week
 * @param {string} day - Current day
 * @returns {string} Next day
 */
function getNextDay(day) {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const index = days.indexOf(day);
  return days[(index + 1) % 7];
}

/**
 * Get previous day of week
 * @param {string} day - Current day
 * @returns {string} Previous day
 */
function getPrevDay(day) {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const index = days.indexOf(day);
  return days[(index - 1 + 7) % 7];
}

/**
 * Convert user's availability (in their timezone) to server timezone for storage
 * @param {Object} availability - User's availability object
 * @param {string} userTimezone - User's IANA timezone
 * @returns {Object} Availability in server timezone
 */
export function convertAvailabilityToServerTime(availability, userTimezone) {
  const serverAvailability = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  };

  Object.entries(availability).forEach(([day, slots]) => {
    slots.forEach(slot => {
      const converted = convertToServerTime(slot, userTimezone, day);
      // converted.slots is now an array of overlapping slots
      converted.slots.forEach(serverSlot => {
        if (!serverAvailability[converted.day].includes(serverSlot)) {
          serverAvailability[converted.day].push(serverSlot);
        }
      });
    });
  });

  return serverAvailability;
}

/**
 * Convert server availability to user's timezone for display
 * @param {Object} availability - Server availability object
 * @param {string} userTimezone - User's IANA timezone
 * @returns {Object} Availability in user timezone
 */
export function convertAvailabilityFromServerTime(availability, userTimezone) {
  const userAvailability = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  };

  Object.entries(availability).forEach(([day, slots]) => {
    slots.forEach(slot => {
      const converted = convertFromServerTime(slot, userTimezone, day);
      if (!userAvailability[converted.day].includes(converted.slotValue)) {
        userAvailability[converted.day].push(converted.slotValue);
      }
    });
  });

  return userAvailability;
}

/**
 * Get list of common timezones grouped by region
 * @returns {Array} Array of timezone objects with region grouping
 */
export function getCommonTimezones() {
  return [
    // Americas
    { value: 'America/New_York', label: 'Eastern Time (ET)', region: 'Americas' },
    { value: 'America/Chicago', label: 'Central Time (CT)', region: 'Americas' },
    { value: 'America/Denver', label: 'Mountain Time (MT)', region: 'Americas' },
    { value: 'America/Los_Angeles', label: 'Pacific Time (PT)', region: 'Americas' },
    { value: 'America/Phoenix', label: 'Arizona (MST)', region: 'Americas' },
    { value: 'America/Anchorage', label: 'Alaska', region: 'Americas' },
    { value: 'Pacific/Honolulu', label: 'Hawaii', region: 'Americas' },
    { value: 'America/Toronto', label: 'Toronto', region: 'Americas' },
    { value: 'America/Mexico_City', label: 'Mexico City', region: 'Americas' },
    { value: 'America/Sao_Paulo', label: 'São Paulo', region: 'Americas' },
    { value: 'America/Buenos_Aires', label: 'Buenos Aires', region: 'Americas' },

    // Europe
    { value: 'Europe/London', label: 'London (GMT/BST)', region: 'Europe' },
    { value: 'Europe/Paris', label: 'Paris (CET)', region: 'Europe' },
    { value: 'Europe/Berlin', label: 'Berlin (CET)', region: 'Europe' },
    { value: 'Europe/Rome', label: 'Rome (CET)', region: 'Europe' },
    { value: 'Europe/Madrid', label: 'Madrid (CET)', region: 'Europe' },
    { value: 'Europe/Amsterdam', label: 'Amsterdam (CET)', region: 'Europe' },
    { value: 'Europe/Brussels', label: 'Brussels (CET)', region: 'Europe' },
    { value: 'Europe/Stockholm', label: 'Stockholm (CET)', region: 'Europe' },
    { value: 'Europe/Athens', label: 'Athens (EET)', region: 'Europe' },
    { value: 'Europe/Moscow', label: 'Moscow (MSK)', region: 'Europe' },
    { value: 'Europe/Istanbul', label: 'Istanbul (TRT)', region: 'Europe' },

    // Asia
    { value: 'Asia/Dubai', label: 'Dubai (GST)', region: 'Asia' },
    { value: 'Asia/Kolkata', label: 'India (IST)', region: 'Asia' },
    { value: 'Asia/Bangkok', label: 'Bangkok (ICT)', region: 'Asia' },
    { value: 'Asia/Singapore', label: 'Singapore (SGT)', region: 'Asia' },
    { value: 'Asia/Hong_Kong', label: 'Hong Kong (HKT)', region: 'Asia' },
    { value: 'Asia/Shanghai', label: 'China (CST)', region: 'Asia' },
    { value: 'Asia/Tokyo', label: 'Tokyo (JST)', region: 'Asia' },
    { value: 'Asia/Seoul', label: 'Seoul (KST)', region: 'Asia' },

    // Pacific
    { value: 'Australia/Sydney', label: 'Sydney (AEDT)', region: 'Pacific' },
    { value: 'Australia/Melbourne', label: 'Melbourne (AEDT)', region: 'Pacific' },
    { value: 'Australia/Perth', label: 'Perth (AWST)', region: 'Pacific' },
    { value: 'Pacific/Auckland', label: 'Auckland (NZDT)', region: 'Pacific' },

    // Africa
    { value: 'Africa/Cairo', label: 'Cairo (EET)', region: 'Africa' },
    { value: 'Africa/Johannesburg', label: 'Johannesburg (SAST)', region: 'Africa' },
  ];
}

/**
 * Get server time display
 * @returns {string} Server timezone display
 */
export function getServerTimezoneDisplay() {
  return `UTC${SERVER_TIMEZONE_OFFSET} (Game Server Time)`;
}
