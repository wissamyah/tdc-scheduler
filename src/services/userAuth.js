/**
 * User Authentication Service
 * Handles user registration, login, and account management
 */

import { hashPassword, verifyPassword } from '../utils/auth';

const AUTH_FILE_PATH = 'auth.json';
const DATA_REPO_OWNER = 'wissamyah';
const DATA_REPO_NAME = 'tdc-scheduler-data';

/**
 * Fetch auth.json from GitHub
 * @param {string} pat - GitHub Personal Access Token
 * @returns {Promise<Object>} Auth data with users array
 */
export async function fetchAuthData(pat) {
  try {
    const fileUrl = `https://api.github.com/repos/${DATA_REPO_OWNER}/${DATA_REPO_NAME}/contents/${AUTH_FILE_PATH}`;
    const cacheBustUrl = `${fileUrl}?ref=main&_t=${Date.now()}`;

    const response = await fetch(cacheBustUrl, {
      headers: {
        'Authorization': `token ${pat}`,
        'Accept': 'application/vnd.github.v3+json'
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      if (response.status === 404) {
        // Auth file doesn't exist yet
        return { users: [], initialized: false };
      }
      throw new Error(`Failed to fetch auth data: ${response.statusText}`);
    }

    const fileData = await response.json();
    const base64 = fileData.content.replace(/\n/g, '');
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const content = new TextDecoder('utf-8').decode(bytes);
    const data = JSON.parse(content);

    return { ...data, initialized: true, sha: fileData.sha };
  } catch (error) {
    console.error('Error fetching auth data:', error);
    throw error;
  }
}

/**
 * Update auth.json in GitHub
 * @param {Object} authData - Updated auth data
 * @param {string} pat - GitHub Personal Access Token
 * @param {string} sha - Current file SHA (required for updates)
 * @returns {Promise<boolean>} Success status
 */
export async function updateAuthData(authData, pat, sha = null) {
  try {
    const fileUrl = `https://api.github.com/repos/${DATA_REPO_OWNER}/${DATA_REPO_NAME}/contents/${AUTH_FILE_PATH}`;

    // Encode content as base64
    const jsonString = JSON.stringify(authData, null, 2);
    const encoder = new TextEncoder();
    const bytes = encoder.encode(jsonString);
    const binaryString = Array.from(bytes, byte => String.fromCharCode(byte)).join('');
    const encodedContent = btoa(binaryString);

    const response = await fetch(fileUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${pat}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Update user authentication data',
        content: encodedContent,
        sha: sha,
        branch: 'main'
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to update auth data: ${errorData.message || response.statusText}`);
    }

    return true;
  } catch (error) {
    console.error('Error updating auth data:', error);
    throw error;
  }
}

/**
 * Initialize authentication system (first-time setup)
 * @param {string} pat - GitHub Personal Access Token
 * @param {Object} adminUser - First admin user data
 * @returns {Promise<boolean>} Success status
 */
export async function initializeAuthSystem(pat, adminUser) {
  try {
    const authData = {
      users: [
        {
          id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          username: adminUser.username,
          passwordHash: await hashPassword(adminUser.password),
          role: 'admin',
          status: 'active',
          firstLogin: false,
          createdAt: new Date().toISOString(),
          lastLogin: null
        }
      ],
      initialized: true,
      createdAt: new Date().toISOString()
    };

    await updateAuthData(authData, pat, null);

    // Store PAT in localStorage for system use
    localStorage.setItem('tdc_system_pat', pat);

    return true;
  } catch (error) {
    console.error('Error initializing auth system:', error);
    throw error;
  }
}

/**
 * Register a new user (pending approval)
 * @param {Object} userData - User registration data
 * @returns {Promise<boolean>} Success status
 */
export async function registerUser(userData) {
  try {
    const pat = localStorage.getItem('tdc_system_pat');

    if (!pat) {
      throw new Error('System not initialized');
    }

    const authData = await fetchAuthData(pat);

    if (!authData.initialized) {
      throw new Error('Authentication system not initialized');
    }

    // Check if username already exists
    const existingUser = authData.users.find(u => u.username.toLowerCase() === userData.username.toLowerCase());
    if (existingUser) {
      throw new Error('Username already exists');
    }

    // Create new user with pending status
    const newUser = {
      id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      username: userData.username,
      passwordHash: await hashPassword(userData.password),
      role: 'member',
      status: 'pending',
      firstLogin: false,
      createdAt: new Date().toISOString(),
      lastLogin: null,
      // Store additional member data for when approved
      memberData: {
        carPower: userData.carPower,
        towerLevel: userData.towerLevel,
        timezone: userData.timezone
      }
    };

    authData.users.push(newUser);

    await updateAuthData(authData, pat, authData.sha);

    return true;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

/**
 * Login user with username and password
 * @param {string} username - Username
 * @param {string} password - Password
 * @returns {Promise<Object>} User data (without password hash)
 */
export async function loginUser(username, password) {
  try {
    const pat = localStorage.getItem('tdc_system_pat');

    if (!pat) {
      throw new Error('System not initialized');
    }

    const authData = await fetchAuthData(pat);

    if (!authData.initialized) {
      throw new Error('Authentication system not initialized');
    }

    // Find user by username (case-insensitive)
    const user = authData.users.find(u => u.username.toLowerCase() === username.toLowerCase());

    if (!user) {
      throw new Error('Invalid username or password');
    }

    // Check if user is approved
    if (user.status === 'pending') {
      throw new Error('Account pending approval');
    }

    if (user.status !== 'active') {
      throw new Error('Account is not active');
    }

    // Verify password
    const isValid = await verifyPassword(password, user.passwordHash);

    if (!isValid) {
      throw new Error('Invalid username or password');
    }

    // Update last login time
    user.lastLogin = new Date().toISOString();
    await updateAuthData(authData, pat, authData.sha);

    // Store session
    const session = {
      id: user.id,
      username: user.username,
      role: user.role,
      firstLogin: user.firstLogin,
      loginTime: new Date().toISOString()
    };

    localStorage.setItem('tdc_current_user', JSON.stringify(session));

    // Return user without sensitive data
    return {
      id: user.id,
      username: user.username,
      role: user.role,
      firstLogin: user.firstLogin,
      createdAt: user.createdAt,
      lastLogin: user.lastLogin
    };
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}

/**
 * Get current logged-in user from session
 * @returns {Object|null} User session data
 */
export function getCurrentUser() {
  try {
    const session = localStorage.getItem('tdc_current_user');
    if (!session) return null;

    const user = JSON.parse(session);

    // Check session timeout (30 minutes)
    const loginTime = new Date(user.loginTime);
    const now = new Date();
    const diffMinutes = (now - loginTime) / (1000 * 60);

    if (diffMinutes > 30) {
      // Session expired
      logoutUser();
      return null;
    }

    return user;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

/**
 * Logout current user
 */
export function logoutUser() {
  localStorage.removeItem('tdc_current_user');
}

/**
 * Change user password
 * @param {string} oldPassword - Current password
 * @param {string} newPassword - New password
 * @returns {Promise<boolean>} Success status
 */
export async function changePassword(oldPassword, newPassword) {
  try {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      throw new Error('Not logged in');
    }

    const pat = localStorage.getItem('tdc_system_pat');
    if (!pat) {
      throw new Error('System not initialized');
    }

    const authData = await fetchAuthData(pat);
    const user = authData.users.find(u => u.id === currentUser.id);

    if (!user) {
      throw new Error('User not found');
    }

    // Verify old password
    const isValid = await verifyPassword(oldPassword, user.passwordHash);
    if (!isValid) {
      throw new Error('Current password is incorrect');
    }

    // Update password and clear firstLogin flag
    user.passwordHash = await hashPassword(newPassword);
    user.firstLogin = false;
    user.lastPasswordChange = new Date().toISOString();

    await updateAuthData(authData, pat, authData.sha);

    // Update session
    const session = getCurrentUser();
    if (session) {
      session.firstLogin = false;
      localStorage.setItem('tdc_current_user', JSON.stringify(session));
    }

    return true;
  } catch (error) {
    console.error('Error changing password:', error);
    throw error;
  }
}

/**
 * Approve a pending user (admin only)
 * @param {string} userId - User ID to approve
 * @returns {Promise<boolean>} Success status
 */
export async function approveUser(userId) {
  try {
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== 'admin') {
      throw new Error('Unauthorized');
    }

    const pat = localStorage.getItem('tdc_system_pat');
    if (!pat) {
      throw new Error('System not initialized');
    }

    const authData = await fetchAuthData(pat);
    const user = authData.users.find(u => u.id === userId);

    if (!user) {
      throw new Error('User not found');
    }

    if (user.status !== 'pending') {
      throw new Error('User is not pending approval');
    }

    // Approve user
    user.status = 'active';
    user.approvedAt = new Date().toISOString();
    user.approvedBy = currentUser.username;

    await updateAuthData(authData, pat, authData.sha);

    return true;
  } catch (error) {
    console.error('Error approving user:', error);
    throw error;
  }
}

/**
 * Reject/delete a pending user (admin only)
 * @param {string} userId - User ID to reject
 * @returns {Promise<boolean>} Success status
 */
export async function rejectUser(userId) {
  try {
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== 'admin') {
      throw new Error('Unauthorized');
    }

    const pat = localStorage.getItem('tdc_system_pat');
    if (!pat) {
      throw new Error('System not initialized');
    }

    const authData = await fetchAuthData(pat);
    const userIndex = authData.users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    // Remove user
    authData.users.splice(userIndex, 1);

    await updateAuthData(authData, pat, authData.sha);

    return true;
  } catch (error) {
    console.error('Error rejecting user:', error);
    throw error;
  }
}

/**
 * Update user role (admin only)
 * @param {string} userId - User ID
 * @param {string} newRole - New role (admin, officer, member)
 * @returns {Promise<boolean>} Success status
 */
export async function updateUserRole(userId, newRole) {
  try {
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== 'admin') {
      throw new Error('Unauthorized');
    }

    if (!['admin', 'officer', 'member'].includes(newRole)) {
      throw new Error('Invalid role');
    }

    const pat = localStorage.getItem('tdc_system_pat');
    if (!pat) {
      throw new Error('System not initialized');
    }

    const authData = await fetchAuthData(pat);
    const user = authData.users.find(u => u.id === userId);

    if (!user) {
      throw new Error('User not found');
    }

    // Update role
    user.role = newRole;
    user.roleUpdatedAt = new Date().toISOString();
    user.roleUpdatedBy = currentUser.username;

    await updateAuthData(authData, pat, authData.sha);

    // If updating current user's role, update session
    if (userId === currentUser.id) {
      const session = getCurrentUser();
      if (session) {
        session.role = newRole;
        localStorage.setItem('tdc_current_user', JSON.stringify(session));
      }
    }

    return true;
  } catch (error) {
    console.error('Error updating user role:', error);
    throw error;
  }
}

/**
 * Delete a user (admin only)
 * @param {string} userId - User ID to delete
 * @returns {Promise<boolean>} Success status
 */
export async function deleteUser(userId) {
  try {
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== 'admin') {
      throw new Error('Unauthorized');
    }

    // Prevent deleting yourself
    if (userId === currentUser.id) {
      throw new Error('Cannot delete your own account');
    }

    const pat = localStorage.getItem('tdc_system_pat');
    if (!pat) {
      throw new Error('System not initialized');
    }

    const authData = await fetchAuthData(pat);
    const userIndex = authData.users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    // Remove user
    authData.users.splice(userIndex, 1);

    await updateAuthData(authData, pat, authData.sha);

    return true;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

/**
 * Bulk create user accounts from existing members in data.json
 * Creates accounts with temporary password for all members
 * @param {Array} members - Array of member objects from data.json
 * @param {string} defaultPassword - Temporary password for all users (default: 'TDC2025!')
 * @returns {Promise<Object>} Results with success/failure counts
 */
export async function bulkMigrateMembers(members, defaultPassword = 'TDC2025!') {
  try {
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== 'admin') {
      throw new Error('Unauthorized');
    }

    const pat = localStorage.getItem('tdc_system_pat');
    if (!pat) {
      throw new Error('System not initialized');
    }

    const authData = await fetchAuthData(pat);

    const results = {
      total: members.length,
      created: 0,
      skipped: 0,
      errors: [],
      createdUsernames: []
    };

    // Create accounts for each member
    for (const member of members) {
      try {
        // Check if username already exists
        const existingUser = authData.users.find(
          u => u.username.toLowerCase() === member.username.toLowerCase()
        );

        if (existingUser) {
          results.skipped++;
          continue;
        }

        // Hash the temporary password
        const passwordHash = await hashPassword(defaultPassword);

        // Create new user
        const newUser = {
          id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          username: member.username,
          passwordHash: passwordHash,
          role: 'member', // All migrated users start as members
          status: 'active', // Auto-approve migrated users
          firstLogin: true, // Force password change on first login
          createdAt: new Date().toISOString(),
          createdBy: currentUser.username
        };

        authData.users.push(newUser);
        results.created++;
        results.createdUsernames.push(member.username);
      } catch (error) {
        results.errors.push({
          username: member.username,
          error: error.message
        });
      }
    }

    // Save all changes at once
    if (results.created > 0) {
      await updateAuthData(authData, pat, authData.sha);
    }

    return results;
  } catch (error) {
    console.error('Error migrating members:', error);
    throw error;
  }
}

/**
 * Get all users (admin only)
 * @returns {Promise<Array>} Array of users (without password hashes)
 */
export async function getAllUsers() {
  try {
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== 'admin') {
      throw new Error('Unauthorized');
    }

    const pat = localStorage.getItem('tdc_system_pat');
    if (!pat) {
      throw new Error('System not initialized');
    }

    const authData = await fetchAuthData(pat);

    // Return users without password hashes
    return authData.users.map(u => ({
      id: u.id,
      username: u.username,
      role: u.role,
      status: u.status,
      firstLogin: u.firstLogin,
      createdAt: u.createdAt,
      lastLogin: u.lastLogin,
      approvedAt: u.approvedAt,
      approvedBy: u.approvedBy,
      memberData: u.memberData
    }));
  } catch (error) {
    console.error('Error getting all users:', error);
    throw error;
  }
}

/**
 * Check if authentication system is initialized (publicly readable check)
 * @returns {Promise<boolean>} Initialization status
 */
export async function isAuthSystemInitialized() {
  try {
    // First check if PAT exists locally
    const pat = localStorage.getItem('tdc_system_pat');

    // If no PAT, try to check GitHub auth.json WITHOUT authentication
    // This prevents showing setup screen to users on new devices
    if (!pat) {
      // Check if old PAT exists for migration
      const oldPat = localStorage.getItem('tdc_system_pat');
      if (oldPat) {
        localStorage.setItem('tdc_system_pat', oldPat);
      }

      // Try to fetch auth.json without authentication (check if repo is public)
      try {
        const checkUrl = `https://api.github.com/repos/${DATA_REPO_OWNER}/${DATA_REPO_NAME}/contents/auth.json`;
        const response = await fetch(`${checkUrl}?t=${Date.now()}`, {
          headers: { 'Accept': 'application/vnd.github.v3+json' },
          cache: 'no-store'
        });

        // If auth.json exists (even without authentication), system is initialized
        if (response.status === 200) {
          return true; // System initialized, user needs to login
        }
      } catch (error) {
        // If we can't check, assume not initialized
        console.log('Cannot check auth.json without PAT');
      }

      return false; // No PAT and can't verify = not initialized
    }

    // If PAT exists, verify with authentication
    const authData = await fetchAuthData(pat);
    return authData.initialized === true;
  } catch (error) {
    return false;
  }
}
