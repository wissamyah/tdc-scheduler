/**
 * Event Management Service
 * Handles event creation, updates, deletion, and RSVP management
 */

import { fetchDataFromAPI } from './github';

const DATA_REPO_OWNER = 'wissamyah';
const DATA_REPO_NAME = 'tdc-scheduler-data';
const DATA_FILE_PATH = 'data.json';

/**
 * Generate unique event ID
 * @returns {string} Event ID
 */
function generateEventId() {
  return `evt_${Date.now()}`;
}

/**
 * Fetch all events from data.json
 * @param {string} pat - GitHub Personal Access Token
 * @returns {Promise<Array>} Array of events
 */
export async function getEvents(pat) {
  try {
    const data = await fetchDataFromAPI(pat);
    return data.events || [];
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
}

/**
 * Get upcoming events (future date/time)
 * @param {string} pat - GitHub Personal Access Token
 * @returns {Promise<Array>} Array of upcoming events
 */
export async function getUpcomingEvents(pat) {
  const events = await getEvents(pat);
  const now = new Date();

  return events.filter(event => {
    const eventDateTime = new Date(`${event.date}T${event.endTime}`);
    return eventDateTime > now;
  }).sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.startTime}`);
    const dateB = new Date(`${b.date}T${b.startTime}`);
    return dateA - dateB;
  });
}

/**
 * Get past events (past date/time)
 * @param {string} pat - GitHub Personal Access Token
 * @returns {Promise<Array>} Array of past events
 */
export async function getPastEvents(pat) {
  const events = await getEvents(pat);
  const now = new Date();

  return events.filter(event => {
    const eventDateTime = new Date(`${event.date}T${event.endTime}`);
    return eventDateTime <= now;
  }).sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.startTime}`);
    const dateB = new Date(`${b.date}T${b.startTime}`);
    return dateB - dateA; // Most recent first
  });
}

/**
 * Create a new event
 * @param {Object} eventData - Event data
 * @param {string} eventData.name - Event name
 * @param {string} eventData.date - Event date (YYYY-MM-DD)
 * @param {string} eventData.startTime - Start time (HH:MM)
 * @param {string} eventData.endTime - End time (HH:MM)
 * @param {string} eventData.description - Event description (optional)
 * @param {string} eventData.createdBy - Username of creator
 * @param {string} eventData.createdByRole - Role of creator
 * @param {string} pat - GitHub Personal Access Token
 * @returns {Promise<Object>} Created event
 */
export async function createEvent(eventData, pat) {
  try {
    if (!pat) {
      throw new Error('Authentication required');
    }

    // Fetch current data
    const data = await fetchDataFromAPI(pat);

    // Initialize events array if it doesn't exist
    if (!data.events) {
      data.events = [];
    }

    // Create new event
    const newEvent = {
      id: generateEventId(),
      name: eventData.name,
      date: eventData.date,
      startTime: eventData.startTime,
      endTime: eventData.endTime,
      description: eventData.description || '',
      createdBy: eventData.createdBy,
      createdByRole: eventData.createdByRole,
      createdAt: new Date().toISOString(),
      rsvps: {}
    };

    // Add to events array
    data.events.push(newEvent);

    // Update data.json
    await updateDataFile(data, pat);

    return newEvent;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
}

/**
 * Update an existing event
 * @param {string} eventId - Event ID
 * @param {Object} eventData - Updated event data
 * @param {string} pat - GitHub Personal Access Token
 * @returns {Promise<Object>} Updated event
 */
export async function updateEvent(eventId, eventData, pat) {
  try {
    if (!pat) {
      throw new Error('Authentication required');
    }

    // Fetch current data
    const data = await fetchDataFromAPI(pat);

    if (!data.events) {
      throw new Error('No events found');
    }

    // Find event index
    const eventIndex = data.events.findIndex(e => e.id === eventId);

    if (eventIndex === -1) {
      throw new Error('Event not found');
    }

    // Update event (preserve id, createdBy, createdAt, and rsvps)
    data.events[eventIndex] = {
      ...data.events[eventIndex],
      name: eventData.name,
      date: eventData.date,
      startTime: eventData.startTime,
      endTime: eventData.endTime,
      description: eventData.description || ''
    };

    // Update data.json
    await updateDataFile(data, pat);

    return data.events[eventIndex];
  } catch (error) {
    console.error('Error updating event:', error);
    throw error;
  }
}

/**
 * Delete an event
 * @param {string} eventId - Event ID
 * @param {string} pat - GitHub Personal Access Token
 * @returns {Promise<void>}
 */
export async function deleteEvent(eventId, pat) {
  try {
    if (!pat) {
      throw new Error('Authentication required');
    }

    // Fetch current data
    const data = await fetchDataFromAPI(pat);

    if (!data.events) {
      throw new Error('No events found');
    }

    // Filter out the event
    data.events = data.events.filter(e => e.id !== eventId);

    // Update data.json
    await updateDataFile(data, pat);
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
}

/**
 * Submit or update RSVP for an event
 * @param {string} eventId - Event ID
 * @param {string} username - Username
 * @param {string} status - RSVP status ('going', 'maybe', 'not_going')
 * @param {string} pat - GitHub Personal Access Token
 * @returns {Promise<Object>} Updated event
 */
export async function submitRSVP(eventId, username, status, pat) {
  try {
    if (!pat) {
      throw new Error('Authentication required');
    }

    if (!['going', 'maybe', 'not_going'].includes(status)) {
      throw new Error('Invalid RSVP status');
    }

    // Fetch current data
    const data = await fetchDataFromAPI(pat);

    if (!data.events) {
      throw new Error('No events found');
    }

    // Find event
    const event = data.events.find(e => e.id === eventId);

    if (!event) {
      throw new Error('Event not found');
    }

    // Update RSVP
    if (!event.rsvps) {
      event.rsvps = {};
    }

    event.rsvps[username] = status;

    // Update data.json
    await updateDataFile(data, pat);

    return event;
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    throw error;
  }
}

/**
 * Get RSVP summary for an event
 * @param {Object} event - Event object
 * @returns {Object} RSVP counts
 */
export function getRSVPSummary(event) {
  if (!event.rsvps) {
    return { going: 0, maybe: 0, not_going: 0 };
  }

  const summary = { going: 0, maybe: 0, not_going: 0 };

  Object.values(event.rsvps).forEach(status => {
    if (summary.hasOwnProperty(status)) {
      summary[status]++;
    }
  });

  return summary;
}

/**
 * Get members grouped by RSVP status
 * @param {Object} event - Event object
 * @param {Array} allMembers - All members from data.json
 * @returns {Object} Members grouped by status
 */
export function getMembersByRSVP(event, allMembers) {
  const rsvps = event.rsvps || {};

  const going = [];
  const maybe = [];
  const not_going = [];
  const no_response = [];

  allMembers.forEach(member => {
    const status = rsvps[member.username];

    if (status === 'going') {
      going.push(member);
    } else if (status === 'maybe') {
      maybe.push(member);
    } else if (status === 'not_going') {
      not_going.push(member);
    } else {
      no_response.push(member);
    }
  });

  return { going, maybe, not_going, no_response };
}

/**
 * Check if event is in the past
 * @param {Object} event - Event object
 * @returns {boolean} True if past event
 */
export function isPastEvent(event) {
  const eventDateTime = new Date(`${event.date}T${event.endTime}`);
  return eventDateTime <= new Date();
}

/**
 * Update data.json file on GitHub
 * @param {Object} data - Complete data object
 * @param {string} pat - GitHub Personal Access Token
 * @returns {Promise<void>}
 */
async function updateDataFile(data, pat) {
  try {
    // Get current file SHA
    const fileUrl = `https://api.github.com/repos/${DATA_REPO_OWNER}/${DATA_REPO_NAME}/contents/${DATA_FILE_PATH}`;

    const getResponse = await fetch(fileUrl, {
      headers: {
        'Authorization': `token ${pat}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!getResponse.ok) {
      throw new Error('Failed to fetch current file');
    }

    const fileData = await getResponse.json();
    const sha = fileData.sha;

    // Encode new content
    const content = JSON.stringify(data, null, 2);
    const base64Content = btoa(unescape(encodeURIComponent(content)));

    // Update file
    const updateResponse = await fetch(fileUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${pat}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Update events data',
        content: base64Content,
        sha: sha
      })
    });

    if (!updateResponse.ok) {
      throw new Error('Failed to update file');
    }
  } catch (error) {
    console.error('Error updating data file:', error);
    throw error;
  }
}
