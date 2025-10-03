/**
 * Permission utility functions for role-based access control
 */

/**
 * Check if user can edit a member's data
 * @param {Object} currentUser - Current logged-in user
 * @param {string} memberUsername - Username of the member to edit
 * @returns {boolean} Permission status
 */
export function canEditMember(currentUser, memberUsername) {
  if (!currentUser) return false;

  // Admins can edit anyone
  if (currentUser.role === 'admin') return true;

  // Users can edit their own data
  return currentUser.username === memberUsername;
}

/**
 * Check if user can delete a member
 * @param {Object} currentUser - Current logged-in user
 * @param {string} memberUsername - Username of the member to delete
 * @returns {boolean} Permission status
 */
export function canDeleteMember(currentUser, memberUsername) {
  if (!currentUser) return false;

  // Only admins can delete members
  if (currentUser.role === 'admin') return true;

  // Users cannot delete themselves
  return false;
}

/**
 * Check if user can delete all members
 * @param {Object} currentUser - Current logged-in user
 * @returns {boolean} Permission status
 */
export function canDeleteAllMembers(currentUser) {
  if (!currentUser) return false;

  // Only admins can delete all members
  return currentUser.role === 'admin';
}

/**
 * Check if user can import/export CSV
 * @param {Object} currentUser - Current logged-in user
 * @returns {boolean} Permission status
 */
export function canManageCSV(currentUser) {
  if (!currentUser) return false;

  // Admins and officers can manage CSV
  return currentUser.role === 'admin' || currentUser.role === 'officer';
}

/**
 * Check if user can access admin dashboard
 * @param {Object} currentUser - Current logged-in user
 * @returns {boolean} Permission status
 */
export function canAccessAdminDashboard(currentUser) {
  if (!currentUser) return false;

  // Only admins can access admin dashboard
  return currentUser.role === 'admin';
}

/**
 * Check if user can approve/reject users
 * @param {Object} currentUser - Current logged-in user
 * @returns {boolean} Permission status
 */
export function canManageUsers(currentUser) {
  if (!currentUser) return false;

  // Only admins can manage users
  return currentUser.role === 'admin';
}

/**
 * Check if user can submit their own schedule
 * @param {Object} currentUser - Current logged-in user
 * @returns {boolean} Permission status
 */
export function canSubmitSchedule(currentUser) {
  if (!currentUser) return false;

  // All authenticated users can submit their schedule
  return ['admin', 'officer', 'member'].includes(currentUser.role);
}

/**
 * Check if user can view members list
 * @param {Object} currentUser - Current logged-in user
 * @returns {boolean} Permission status
 */
export function canViewMembers(currentUser) {
  if (!currentUser) return false;

  // All authenticated users can view members
  return ['admin', 'officer', 'member'].includes(currentUser.role);
}

/**
 * Check if user can view optimal schedule
 * @param {Object} currentUser - Current logged-in user
 * @returns {boolean} Permission status
 */
export function canViewOptimalSchedule(currentUser) {
  if (!currentUser) return false;

  // All authenticated users can view optimal schedule
  return ['admin', 'officer', 'member'].includes(currentUser.role);
}

/**
 * Check if user can create events
 * @param {Object} currentUser - Current logged-in user
 * @returns {boolean} Permission status
 */
export function canCreateEvent(currentUser) {
  if (!currentUser) return false;

  // Admins and officers can create events
  return currentUser.role === 'admin' || currentUser.role === 'officer';
}

/**
 * Get role display name with styling
 * @param {string} role - User role
 * @returns {Object} Role display info with color and label
 */
export function getRoleDisplay(role) {
  const roleMap = {
    admin: {
      label: 'Admin',
      labelKey: 'roles.admin',
      color: 'creed-danger',
      bgColor: 'creed-danger/20',
      borderColor: 'creed-danger'
    },
    officer: {
      label: 'Officer',
      labelKey: 'roles.officer',
      color: 'creed-accent',
      bgColor: 'creed-accent/20',
      borderColor: 'creed-accent'
    },
    member: {
      label: 'Member',
      labelKey: 'roles.member',
      color: 'creed-primary',
      bgColor: 'creed-primary/20',
      borderColor: 'creed-primary'
    }
  };

  return roleMap[role] || roleMap.member;
}

/**
 * Get status display info
 * @param {string} status - User status
 * @returns {Object} Status display info with color and label
 */
export function getStatusDisplay(status) {
  const statusMap = {
    active: {
      label: 'Active',
      labelKey: 'status.active',
      color: 'creed-success',
      bgColor: 'creed-success/20',
      borderColor: 'creed-success'
    },
    pending: {
      label: 'Pending',
      labelKey: 'status.pending',
      color: 'creed-warning',
      bgColor: 'creed-warning/20',
      borderColor: 'creed-warning'
    },
    inactive: {
      label: 'Inactive',
      labelKey: 'status.inactive',
      color: 'creed-muted',
      bgColor: 'creed-lighter/20',
      borderColor: 'creed-lighter'
    }
  };

  return statusMap[status] || statusMap.inactive;
}
