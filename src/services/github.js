/**
 * GitHub API service for reading and writing data
 */

const DATA_REPO_OWNER = 'wissamyah';
const DATA_REPO_NAME = 'tdc-scheduler-data';
const DATA_FILE_PATH = 'data.json';
const APP_REPO_OWNER = 'wissamyah';
const APP_REPO_NAME = 'tdc-scheduler';

/**
 * Fetch data.json from the data repository
 * @returns {Promise<Object>} The data object
 */
export async function fetchData() {
  try {
    // Add cache-busting timestamp to prevent stale data
    const cacheBuster = `?t=${Date.now()}`;
    const url = `https://raw.githubusercontent.com/${DATA_REPO_OWNER}/${DATA_REPO_NAME}/main/${DATA_FILE_PATH}${cacheBuster}`;
    const response = await fetch(url);

    if (!response.ok) {
      // If file doesn't exist, return initial structure
      if (response.status === 404) {
        return {
          auth: {
            passwordHash: null,
            initialized: false,
            initDate: null
          },
          members: []
        };
      }
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    // Return initial structure on error
    return {
      auth: {
        passwordHash: null,
        initialized: false,
        initDate: null
      },
      members: []
    };
  }
}

/**
 * Trigger GitHub Actions workflow to update data
 * @param {string} pat - GitHub Personal Access Token
 * @param {Object} payload - Data to update
 * @returns {Promise<boolean>} True if successful
 */
export async function updateData(pat, payload) {
  try {
    const url = `https://api.github.com/repos/${APP_REPO_OWNER}/${APP_REPO_NAME}/dispatches`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `token ${pat}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        event_type: 'update_data',
        client_payload: payload
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to trigger workflow: ${response.statusText}`);
    }

    return true;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
}

/**
 * Initialize password (first-time setup)
 * @param {string} pat - GitHub Personal Access Token
 * @param {string} passwordHash - Hashed password
 * @returns {Promise<boolean>} True if successful
 */
export async function initializePassword(pat, passwordHash) {
  const payload = {
    type: 'init_password',
    data: {
      passwordHash,
      initDate: new Date().toISOString()
    }
  };

  // Store PAT in sessionStorage for this session only (never in repo)
  sessionStorage.setItem('tdc_temp_pat', pat);

  return await updateData(pat, payload);
}

/**
 * Add or update a member's schedule
 * @param {Object} memberData - Member information and availability
 * @param {string} pat - GitHub Personal Access Token
 * @returns {Promise<boolean>} True if successful
 */
export async function saveMemberSchedule(memberData, pat) {
  const payload = {
    type: 'update_member',
    data: {
      ...memberData,
      lastUpdated: new Date().toISOString()
    }
  };

  return await updateData(pat, payload);
}

/**
 * Verify GitHub PAT has correct permissions
 * @param {string} pat - GitHub Personal Access Token
 * @returns {Promise<boolean>} True if PAT is valid
 */
export async function verifyPAT(pat) {
  try {
    const url = `https://api.github.com/repos/${DATA_REPO_OWNER}/${DATA_REPO_NAME}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `token ${pat}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    return response.ok;
  } catch (error) {
    console.error('Error verifying PAT:', error);
    return false;
  }
}
