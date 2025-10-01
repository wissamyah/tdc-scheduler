/**
 * Utility functions for generating and managing time slots
 */

/**
 * Days of the week
 */
export const DAYS_OF_WEEK = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
];

/**
 * Generate all 2-hour time slots for a day (12 slots total)
 * Slots: 00-02, 02-04, 04-06, 06-08, 08-10, 10-12, 12-14, 14-16, 16-18, 18-20, 20-22, 22-00
 * @returns {Array<{value: string, label: string}>} Array of time slot objects
 */
export function generateTimeSlots() {
  const slots = [];

  for (let hour = 0; hour < 24; hour += 2) {
    const startHour = hour;
    const endHour = (hour + 2) % 24;

    const startFormatted = formatHour(startHour);
    const endFormatted = formatHour(endHour);

    const value = `${startHour.toString().padStart(2, '0')}-${endHour.toString().padStart(2, '0')}`;
    const label = `${startFormatted} - ${endFormatted}`;

    slots.push({ value, label });
  }

  return slots;
}

/**
 * Format hour to 12-hour format with AM/PM
 * @param {number} hour - Hour in 24-hour format (0-23)
 * @returns {string} Formatted time string
 */
function formatHour(hour) {
  if (hour === 0) return '12 AM';
  if (hour < 12) return `${hour} AM`;
  if (hour === 12) return '12 PM';
  return `${hour - 12} PM`;
}

/**
 * Get display name for a day
 * @param {string} day - Day key (e.g., 'monday')
 * @returns {string} Capitalized day name
 */
export function getDayDisplayName(day) {
  return day.charAt(0).toUpperCase() + day.slice(1);
}

/**
 * Initialize empty availability object for all days
 * @returns {Object} Object with empty arrays for each day
 */
export function initializeAvailability() {
  const availability = {};
  DAYS_OF_WEEK.forEach(day => {
    availability[day] = [];
  });
  return availability;
}

/**
 * Format availability for display
 * @param {Object} availability - Availability object
 * @returns {Array<{day: string, slots: Array<string>}>} Formatted availability
 */
export function formatAvailabilityForDisplay(availability) {
  return DAYS_OF_WEEK.map(day => ({
    day: getDayDisplayName(day),
    slots: availability[day] || []
  })).filter(item => item.slots.length > 0);
}

/**
 * Get time slot label from value
 * @param {string} value - Time slot value (e.g., '00-02')
 * @returns {string} Time slot label (e.g., '12 AM - 2 AM')
 */
export function getTimeSlotLabel(value) {
  const slots = generateTimeSlots();
  const slot = slots.find(s => s.value === value);
  return slot ? slot.label : value;
}
