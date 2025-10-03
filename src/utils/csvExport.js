/**
 * CSV Export utilities for member data
 * Exports member data to CSV format with proper formatting and UTF-8 support
 */

/**
 * Escape CSV value - handles quotes, commas, newlines
 * @param {string|number} value - Value to escape
 * @returns {string} Escaped CSV value
 */
function escapeCSVValue(value) {
  if (value == null || value === '') {
    return '""';
  }

  const stringValue = String(value);

  // If value contains quotes, commas, or newlines, wrap in quotes and escape quotes
  if (stringValue.includes('"') || stringValue.includes(',') || stringValue.includes('\n')) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }

  return `"${stringValue}"`;
}

/**
 * Format availability object as JSON string for CSV
 * @param {Object} availability - Availability object with day keys
 * @returns {string} JSON string of availability
 */
function formatAvailabilityForExport(availability) {
  if (!availability) {
    return '{}';
  }

  // Compact JSON format (no extra whitespace)
  return JSON.stringify(availability);
}

/**
 * Generate CSV header with metadata
 * @param {number} memberCount - Total number of members
 * @returns {string} CSV header with metadata comments
 */
function generateCSVHeader(memberCount) {
  const exportDate = new Date().toISOString();

  const header = [
    '# TDC Alliance Member Export',
    `# Export Date: ${exportDate}`,
    `# Total Members: ${memberCount}`,
    '# Timezone Note: All availability times are in Server Time (UTC-2)',
    '# Format: Username,Car Power (M),Tower Level,Timezone,Availability (JSON),Last Updated',
    ''
  ].join('\n');

  return header;
}

/**
 * Generate CSV content from members array
 * @param {Array} members - Array of member objects
 * @returns {string} Complete CSV content
 */
export function generateCSVContent(members) {
  if (!members || members.length === 0) {
    return generateCSVHeader(0) + 'Username,Car Power (M),Tower Level,Timezone,Availability (JSON),Last Updated\n';
  }

  const header = generateCSVHeader(members.length);
  const columnHeaders = 'Username,Car Power (M),Tower Level,Timezone,Availability (JSON),Last Updated';

  const rows = members.map(member => {
    const username = escapeCSVValue(member.username || '');
    const carPower = escapeCSVValue(member.carPower || 0);
    const towerLevel = escapeCSVValue(member.towerLevel || 0);
    const timezone = escapeCSVValue(member.timezone || '');
    const availability = escapeCSVValue(formatAvailabilityForExport(member.availability || {}));
    const lastUpdated = escapeCSVValue(member.lastUpdated || new Date().toISOString());

    return [username, carPower, towerLevel, timezone, availability, lastUpdated].join(',');
  });

  return header + columnHeaders + '\n' + rows.join('\n');
}

/**
 * Trigger browser download of CSV file
 * @param {string} content - CSV content
 * @param {string} filename - Desired filename (without extension)
 */
function downloadCSV(content, filename) {
  // Add UTF-8 BOM for Excel compatibility
  const BOM = '\ufeff';
  const blob = new Blob([BOM + content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.display = 'none';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Clean up URL object
  URL.revokeObjectURL(url);
}

/**
 * Export members to CSV file
 * @param {Array} members - Array of member objects
 * @param {string} filename - Optional custom filename (default: auto-generated)
 * @returns {boolean} True if export successful
 */
export function exportMembersToCSV(members, filename = null) {
  try {
    if (!members || !Array.isArray(members)) {
      throw new Error('Invalid members data: must be an array');
    }

    const csvContent = generateCSVContent(members);

    // Generate filename with timestamp if not provided
    const defaultFilename = filename || `tdc-members-${new Date().toISOString().split('T')[0]}.csv`;

    downloadCSV(csvContent, defaultFilename);

    return true;
  } catch (error) {
    console.error('Error exporting CSV:', error);
    return false;
  }
}

/**
 * Preview CSV content (for debugging/testing)
 * @param {Array} members - Array of member objects
 * @returns {string} CSV content
 */
export function previewCSVContent(members) {
  return generateCSVContent(members);
}
