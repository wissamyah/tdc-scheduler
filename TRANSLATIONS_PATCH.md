# Translations Patch for Authentication System

**Instructions:** Add these translation keys to `src/i18n/translations.js` for each language (en, fr, de, es, pt, it).

For now, I'm providing English only. You can use a translation service or ask for help translating to the other 5 languages.

---

## Add to `en:` object (after existing `auth:` section):

```javascript
// User Authentication
userAuth: {
  // Login
  login: 'Login',
  username: 'Username',
  password: 'Password',
  enterUsername: 'Enter your username',
  enterPassword: 'Enter your password',
  loginButton: 'Access System',
  loggingIn: 'Logging In...',
  loginSuccessful: 'Welcome back!',
  invalidCredentials: 'Invalid username or password',
  accountPending: 'Your account is pending admin approval',
  accountInactive: 'Your account is not active',
  loginPrompt: 'Enter your credentials to access the TDC Scheduler',

  // Registration
  register: 'Register',
  registerButton: 'Create Account',
  registering: 'Registering...',
  confirmPassword: 'Confirm Password',
  confirmPasswordRequired: 'Please confirm your password',
  carPower: 'Car Power (M)',
  towerLevel: 'Tower Level (1-35)',
  timezone: 'Timezone',
  selectTimezone: 'Please select your timezone',
  registrationSuccess: 'Registration submitted! Awaiting admin approval.',
  registrationFailed: 'Registration failed. Please try again.',
  usernameExists: 'Username already taken',
  usernameTooShort: 'Username must be at least 3 characters',
  usernameTooLong: 'Username must be 20 characters or less',
  usernameInvalid: 'Username can only contain letters, numbers, and underscores',
  usernameHint: '3-20 characters, letters, numbers, and underscores only',
  passwordMismatch: 'Passwords do not match',
  weakPassword: 'Password must be at least 8 characters',
  dontHaveAccount: "Don't have an account?",
  alreadyHaveAccount: 'Already have an account?',
  backToLogin: 'Back to Login',
  awaitingApproval: 'Awaiting Approval',
  registrationPending: 'Your registration is pending admin approval. You will be able to log in once approved.',
  approvalNote: 'An administrator will review your registration shortly.',
  registerPrompt: 'Create an account to join the TDC Alliance. Your registration will be reviewed by an administrator.',

  // Password Change
  changePassword: 'Change Password',
  changePasswordButton: 'Update Password',
  oldPassword: 'Current Password',
  newPassword: 'New Password',
  tempPassword: 'Temporary Password',
  enterOldPassword: 'Enter your current password',
  enterNewPassword: 'Enter your new password',
  enterTempPassword: 'Enter temporary password',
  confirmNewPassword: 'Confirm New Password',
  firstLoginTitle: 'First Login - Set Your Password',
  firstLoginMessage: 'Please change your temporary password to continue.',
  passwordChanged: 'Password changed successfully',
  passwordChangeFailed: 'Failed to change password',
  incorrectOldPassword: 'Current password is incorrect',
  newPasswordSameAsOld: 'New password must be different from current password',
  updating: 'Updating...',
  securityRequired: 'Security Update Required',
  changePasswordNote: 'For your security, you must change your temporary password before accessing the system.',
  loggedInAs: 'Logged in as',
  cannotSkipPassword: 'You must change your password to continue',

  // Logout
  logout: 'Logout',
  logoutConfirm: 'Are you sure you want to logout?',
  logoutSuccess: 'Logged out successfully'
},

// Admin Dashboard
admin: {
  // Dashboard
  dashboard: 'Admin Dashboard',
  userManagement: 'User Management',
  pendingApprovals: 'Pending Approvals',
  statistics: 'Statistics',
  loadingUsers: 'Loading users...',

  // Users
  allUsers: 'All Users',
  activeUsers: 'Active Users',
  totalUsers: 'Total Users',
  pendingUsers: 'Pending Users',
  admins: 'Administrators',
  all: 'All',
  active: 'Active',
  pending: 'Pending',
  noUsersFound: 'No users found',
  you: 'You',

  // Actions
  approveUser: 'Approve',
  rejectUser: 'Reject',
  deleteUser: 'Delete User',
  changeRole: 'Change Role',
  userApproved: 'User approved successfully',
  userRejected: 'User rejected successfully',
  userDeleted: 'User deleted successfully',
  roleUpdated: 'Role updated successfully',
  cannotDeleteSelf: 'Cannot delete your own account',

  // Confirmations
  approveConfirm: 'Approve this user registration?',
  rejectConfirm: 'Reject and delete this registration?',
  deleteConfirm: 'Permanently delete this user account for',
  changeRoleConfirm: 'Change role for',

  // Errors
  approveFailed: 'Failed to approve user',
  rejectFailed: 'Failed to reject user',
  deleteFailed: 'Failed to delete user',
  roleUpdateFailed: 'Failed to update role',
  failedToLoadUsers: 'Failed to load users',

  // Migration
  migrationTool: 'Migration Tool',
  migrateMembers: 'Migrate Existing Members',
  migrationSuccess: 'Members migrated successfully',
  migrationFailed: 'Migration failed'
},

// Roles
roles: {
  admin: 'Admin',
  officer: 'Officer',
  member: 'Member'
},

// Status
status: {
  active: 'Active',
  pending: 'Pending',
  inactive: 'Inactive'
},

// Setup
setup: {
  // Initial Setup
  firstTimeSetup: 'First-Time Setup',
  initializeAuthentication: 'Initialize Authentication System',
  githubPAT: 'GitHub PAT',
  adminAccount: 'Admin Account',
  githubAccessToken: 'GitHub Access Token',
  enterPATPlaceholder: 'ghp_...',
  patDescription: 'Enter your GitHub Personal Access Token to enable data storage for the authentication system.',
  patSecurityNote: 'This token will be stored locally and used for all authentication operations.',
  patVerified: 'GitHub token verified successfully',
  invalidPAT: 'Invalid GitHub token',
  patVerificationFailed: 'Failed to verify token',
  verifying: 'Verifying...',
  verifyAndContinue: 'Verify & Continue',

  // Admin Creation
  createAdminDescription: 'Create your administrator account. You will use this to manage users and access the admin panel.',
  adminPrivileges: 'Administrators have full access to all features and can approve new user registrations.',
  adminUsername: 'Admin Username',
  enterAdminUsername: 'Choose a username',
  adminPassword: 'Admin Password',
  enterAdminPassword: 'Choose a strong password',
  confirmPassword: 'Confirm Password',
  reenterPassword: 'Re-enter your password',
  passwordRequirements: 'Minimum 8 characters',
  usernameLength: 'Username must be 3-20 characters',
  passwordLength: 'Password must be at least 8 characters',
  passwordMismatch: 'Passwords do not match',
  enterUsername: 'Please enter a username',
  enterPassword: 'Please enter a password',
  enterPAT: 'Please enter a GitHub PAT',
  initializing: 'Initializing...',
  completeSetup: 'Complete Setup',
  systemInitialized: 'System initialized successfully! Welcome.',
  initializingSystem: 'Initializing authentication system...',
  initializationFailed: 'Initialization failed. Please try again.'
},

// Errors
errors: {
  accessDenied: 'Access Denied',
  insufficientPermissions: 'You do not have permission to access this page.',
  requiredRole: 'Required Role:',
  yourRole: 'Your Role:',
  goBack: 'Go Back'
},
```

---

## Add to `common:` section:

```javascript
common: {
  loading: 'Loading...',
  submit: 'Submit',
  cancel: 'Cancel',
  delete: 'Delete',
  edit: 'Edit',
  save: 'Save',
  close: 'Close',
  confirm: 'Confirm',
  yes: 'Yes',
  no: 'No',
  goBack: 'Go Back', // ADD THIS
},
```

---

## Add to `nav:` section:

```javascript
nav: {
  title: 'THE DARK CREED',
  subtitle: 'ALLIANCE COMMAND CENTER',
  submitSchedule: 'SUBMIT SCHEDULE',
  submitScheduleShort: 'SUBMIT',
  viewRoster: 'VIEW ROSTER',
  viewRosterShort: 'ROSTER',
  optimalSchedule: 'OPTIMAL SCHEDULE',
  optimalScheduleShort: 'OPTIMAL',
  adminDashboard: 'ADMIN PANEL', // ADD THIS
  adminDashboardShort: 'ADMIN', // ADD THIS
},
```

---

## Modifications Required to `memberCard:` section:

Add these keys:

```javascript
memberCard: {
  // ... existing keys ...

  editUsername: 'Edit username', // ADD THIS
  updatingUsername: 'Updating username...', // ADD THIS
  usernameUpdated: 'Username updated successfully!', // ADD THIS
  failedToUpdateUsername: 'Failed to update username', // ADD THIS
  invalidUsername: 'Invalid username', // ADD THIS
  usernameTooLong: 'Username too long (max 50 characters)', // ADD THIS
},
```

---

## For Other Languages

You'll need to translate all the above keys into:
- French (fr)
- German (de)
- Spanish (es)
- Portuguese (pt)
- Italian (it)

**Recommendation:** Use a translation service like DeepL or Google Translate, or consult native speakers for accuracy. The gaming/military theme should be preserved in translations.

---

## How to Apply This Patch

1. Open `src/i18n/translations.js`
2. Find the `en:` object
3. Add the new sections (`userAuth`, `admin`, `roles`, `status`, `setup`, `errors`) after the existing `auth:` section
4. Update the `common:` and `nav:` sections with the new keys
5. Update the `memberCard:` section with the new keys
6. Repeat for all 6 languages (en, fr, de, es, pt, it)

**Note:** If you only add English translations, the app will work but other languages will show translation keys instead of translated text.

---

## Quick Fix for Testing

If you want to test immediately with just English:
1. Add all the English translations above
2. For other languages, you can duplicate the English translations temporarily
3. Replace them with proper translations later

Example:
```javascript
export const translations = {
  en: {
    // ... English translations ...
  },
  fr: {
    // ... copy English here temporarily ...
  },
  de: {
    // ... copy English here temporarily ...
  },
  // ... etc
};
```
