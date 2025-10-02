/**
 * GitHub API service for reading and writing data
 */

const DATA_REPO_OWNER = 'wissamyah';
const DATA_REPO_NAME = 'tdc-scheduler-data';
const DATA_FILE_PATH = 'data.json';
const APP_REPO_OWNER = 'wissamyah';
const APP_REPO_NAME = 'tdc-scheduler';

/**
 * Fetch data.json directly from GitHub API (bypasses CDN cache)
 * @param {string} pat - Optional GitHub Personal Access Token for authenticated requests
 * @returns {Promise<Object>} The data object
 */
export async function fetchDataFromAPI(pat = null) {
  try {
    const fileUrl = `https://api.github.com/repos/${DATA_REPO_OWNER}/${DATA_REPO_NAME}/contents/${DATA_FILE_PATH}`;
    // Add cache buster to force fresh data (query params only, no CORS-triggering headers)
    const cacheBustUrl = `${fileUrl}?ref=main&_t=${Date.now()}`;

    const headers = {
      'Accept': 'application/vnd.github.v3+json'
    };

    if (pat) {
      headers['Authorization'] = `token ${pat}`;
    }

    const response = await fetch(cacheBustUrl, {
      headers,
      cache: 'no-store'
    });

    if (!response.ok) {
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
      throw new Error(`Failed to fetch data from API: ${response.statusText}`);
    }

    const fileData = await response.json();
    // Decode base64 content with proper UTF-8 support
    const base64 = fileData.content.replace(/\n/g, '');
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const content = new TextDecoder('utf-8').decode(bytes);
    const data = JSON.parse(content);

    return data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
}

/**
 * Fetch data.json from the data repository (via CDN - may be cached)
 * @returns {Promise<Object>} The data object
 */
export async function fetchData() {
  try {
    // Add cache-busting timestamp to prevent stale data
    const cacheBuster = `?t=${Date.now()}`;
    const url = `https://raw.githubusercontent.com/${DATA_REPO_OWNER}/${DATA_REPO_NAME}/main/${DATA_FILE_PATH}${cacheBuster}`;

    // Don't add custom headers - raw.githubusercontent.com doesn't support CORS preflight
    const response = await fetch(url, {
      cache: 'no-store' // Prevent browser caching
    });

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

    const data = await response.json();

    return data;
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
 * Update data.json directly via GitHub API
 * @param {string} pat - GitHub Personal Access Token
 * @param {Object} payload - Data to update
 * @returns {Promise<boolean>} True if successful
 */
export async function updateData(pat, payload) {
  try {
    // First, fetch the current file to get its SHA and content
    const fileUrl = `https://api.github.com/repos/${DATA_REPO_OWNER}/${DATA_REPO_NAME}/contents/${DATA_FILE_PATH}`;

    let currentSha = null;
    let currentData = {
      auth: {
        passwordHash: null,
        initialized: false,
        initDate: null
      },
      members: []
    };

    // Try to get existing file (with cache busting to ensure fresh data)
    try {
      // Add cache buster to URL to force fresh data
      const cacheBustUrl = `${fileUrl}?ref=main&_t=${Date.now()}`;

      const getResponse = await fetch(cacheBustUrl, {
        headers: {
          'Authorization': `token ${pat}`,
          'Accept': 'application/vnd.github.v3+json'
        },
        cache: 'no-store'
      });

      if (getResponse.ok) {
        const fileData = await getResponse.json();
        currentSha = fileData.sha;

        // Decode base64 content with proper UTF-8 support
        const base64 = fileData.content.replace(/\n/g, '');
        const binaryString = atob(base64);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        const content = new TextDecoder('utf-8').decode(bytes);
        currentData = JSON.parse(content);
      }
    } catch (err) {
      // File does not exist yet, will create new one
    }

    // Update the data based on payload type
    if (payload.type === 'init_password') {
      currentData.auth = {
        passwordHash: payload.data.passwordHash,
        initialized: true,
        initDate: payload.data.initDate
      };
    } else if (payload.type === 'update_member') {
      const memberIndex = currentData.members.findIndex(m => m.username === payload.data.username);
      if (memberIndex >= 0) {
        currentData.members[memberIndex] = payload.data;
      } else {
        currentData.members.push(payload.data);
      }
    }

    // Encode the updated content as base64 with proper UTF-8 support
    const jsonString = JSON.stringify(currentData, null, 2);
    const encoder = new TextEncoder();
    const bytes = encoder.encode(jsonString);
    const binaryString = Array.from(bytes, byte => String.fromCharCode(byte)).join('');
    const updatedContent = btoa(binaryString);

    // Create or update the file
    const updateResponse = await fetch(fileUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${pat}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Update data: ${payload.type}`,
        content: updatedContent,
        sha: currentSha, // Required for updates, null for new files
        branch: 'main'
      })
    });

    if (!updateResponse.ok) {
      const errorData = await updateResponse.json();
      console.error('Failed to update file:', errorData);
      throw new Error(`Failed to update file: ${errorData.message || updateResponse.statusText}`);
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

  // Store PAT in localStorage for permanent access (never in repo)
  localStorage.setItem('tdc_pat', pat);

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
 * Delete all members from the alliance
 * @param {string} pat - GitHub Personal Access Token
 * @returns {Promise<boolean>} True if successful
 */
export async function deleteAllMembers(pat) {
  try {
    // First, fetch the current file to get its SHA and auth data
    const fileUrl = `https://api.github.com/repos/${DATA_REPO_OWNER}/${DATA_REPO_NAME}/contents/${DATA_FILE_PATH}`;
    const cacheBustUrl = `${fileUrl}?ref=main&_t=${Date.now()}`;

    const getResponse = await fetch(cacheBustUrl, {
      headers: {
        'Authorization': `token ${pat}`,
        'Accept': 'application/vnd.github.v3+json'
      },
      cache: 'no-store'
    });

    if (!getResponse.ok) {
      throw new Error(`Failed to fetch current data: ${getResponse.statusText}`);
    }

    const fileData = await getResponse.json();
    const currentSha = fileData.sha;

    // Decode base64 content with proper UTF-8 support
    const base64 = fileData.content.replace(/\n/g, '');
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const content = new TextDecoder('utf-8').decode(bytes);
    const currentData = JSON.parse(content);

    // Keep auth data, clear members array
    const updatedData = {
      auth: currentData.auth,
      members: []
    };

    // Encode the updated content as base64 with proper UTF-8 support
    const jsonString = JSON.stringify(updatedData, null, 2);
    const encoder = new TextEncoder();
    const encodedBytes = encoder.encode(jsonString);
    const encodedBinaryString = Array.from(encodedBytes, byte => String.fromCharCode(byte)).join('');
    const updatedContent = btoa(encodedBinaryString);

    // Update the file
    const updateResponse = await fetch(fileUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${pat}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Delete all members',
        content: updatedContent,
        sha: currentSha,
        branch: 'main'
      })
    });

    if (!updateResponse.ok) {
      const errorData = await updateResponse.json();
      console.error('Failed to update file:', errorData);
      throw new Error(`Failed to update file: ${errorData.message || updateResponse.statusText}`);
    }

    return true;
  } catch (error) {
    console.error('Error deleting all members:', error);
    throw error;
  }
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
