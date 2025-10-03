/** English translations */
export default {
    // Common
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
      goBack: 'Go Back',
      to: 'to',
    },

    // Days of the week
    days: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
    },

    // App
    app: {
      initializingSystem: 'INITIALIZING SYSTEM...',
    },

    // Header/Navigation
    nav: {
      title: 'THE DARK CREED',
      subtitle: 'ALLIANCE COMMAND CENTER',
      submitSchedule: 'SUBMIT SCHEDULE',
      submitScheduleShort: 'SUBMIT',
      viewRoster: 'VIEW ROSTER',
      viewRosterShort: 'ROSTER',
      optimalSchedule: 'OPTIMAL SCHEDULE',
      optimalScheduleShort: 'OPTIMAL',
      adminDashboard: 'ADMIN PANEL',
      adminDashboardShort: 'ADMIN',
      welcome: 'Welcome',
    },

    // Authentication
    auth: {
      allianceAccess: 'Alliance Access',
      accessToken: 'Alliance Access Token',
      enterToken: 'Enter your access token...',
      verifying: 'Verifying...',
      accessScheduler: 'Access Scheduler',
      contactLeader: 'Contact your alliance leader to obtain an access token',
      credentialsStored: 'Your credentials will be stored locally for permanent access',
      enterTokenPrompt: 'Enter your alliance access token to use the TDC Scheduler.',
      invalidToken: 'Invalid access token. Please check your credentials.',
      verificationFailed: 'Failed to verify credentials. Please try again.',
      authRequired: 'Authentication required. Please refresh the page.',

      // Password prompt
      theDarkCreed: 'The Dark Creed',
      restrictedAccess: 'Restricted Access - Authorization Required',
      alliancePassword: 'Alliance Password',
      enterAccessCode: 'Enter access code',
      verifyingAccess: 'Verifying Access',
      accessSystem: 'Access System',
      contactCommander: 'Contact your alliance commander for credentials',
      accessGranted: 'Access granted - Welcome to The Dark Creed',
      accessDenied: 'Access denied - Invalid credentials',
      authSystemFailure: 'Authentication system failure - Try again',
      enterPassword: 'Please enter the password',
    },

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

    // Access Gate
    accessGate: {
      title: 'Platform Access',
      subtitle: 'One-time access key required',
      oneTimeOnly: 'One-Time Setup',
      explanation: 'You only need to enter this access key once. It will be stored securely in your browser.',
      reason1: 'Enables secure data storage and retrieval',
      reason2: 'Required for schedule submissions and updates',
      reason3: 'Never needs to be entered again on this device',
      accessToken: 'Alliance Access Key',
      enterToken: 'Enter access key...',
      contactAdmin: 'Contact your alliance administrator to obtain the access key',
      unlockAccess: 'Unlock Access',
      verifying: 'Verifying...',
      accessGranted: 'Access granted! Welcome to The Dark Creed',
      invalidToken: 'Invalid access key. Please check and try again.',
      tokenRequired: 'Please enter the access key',
      securityNote: 'Your access key is stored locally and never transmitted elsewhere',
    },

    // Admin Dashboard
    admin: {
      // Dashboard
      dashboard: 'Admin Dashboard',
      userManagement: 'User Management',
      pendingApprovals: 'Pending Approvals',
      statistics: 'Statistics',
      loadingUsers: 'Loading users...',
      searchUsers: 'Search users...',

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

      // Role Permissions
      rolePermissions: 'Role Permissions',
      adminPermissions: 'Full access - manage users, roles, approvals, delete all, export/import CSV',
      officerPermissions: 'Import CSV files, manage own schedule',
      memberPermissions: 'View roster, submit own schedule, manage own data',

    },

    // Member Migration
    migration: {
      migrateExistingMembers: 'Migrate Existing Members',
      memberMigrationTool: 'Member Migration Tool',
      toolDescription: 'Bulk create user accounts for existing members',
      howItWorks: 'How it works',
      step1: 'Loads all members from data.json',
      step2: 'Creates user accounts with temporary password',
      step3: 'All users start as "Member" role, auto-approved',
      step4: 'Users must change password on first login',
      temporaryPassword: 'Temporary Password',
      passwordNote: 'All migrated users will receive this password',
      membersFound: 'Members Found',
      noMembersFound: 'No members found in data.json',
      membersLoaded: 'Loaded {count} members from data.json',
      failedToLoadMembers: 'Failed to load members',
      noMembersToMigrate: 'No members to migrate',
      confirmMigration: 'Create accounts for {count} members?',
      migrating: 'Migrating members...',
      migrationSuccess: 'Created {created} of {total} accounts successfully',
      migrationFailed: 'Migration failed',
      noAccountsCreated: 'No new accounts created (all may already exist)',
      totalMembers: 'Total',
      accountsCreated: 'Created',
      skipped: 'Skipped',
      createdAccounts: 'Successfully Created',
      errors: 'Errors',
      successMessage: 'All users can now login with password: {password}',
      startMigration: 'Start Migration',
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

    // Settings
    settings: {
      title: 'Settings',
      subtitle: 'Manage your account settings',
      settings: 'Settings',
      passwordChangeInfo: 'For security purposes, you can update your password at any time. Choose a strong password that you haven\'t used elsewhere.',
    },

    // Errors
    errors: {
      accessDenied: 'Access Denied',
      insufficientPermissions: 'You do not have permission to access this page.',
      requiredRole: 'Required Role:',
      yourRole: 'Your Role:',
      goBack: 'Go Back',
      to: 'to'
    },

    // Schedule Form
    scheduleForm: {
      submitSchedule: 'Submit Schedule',
      timezoneConfig: 'Timezone Configuration',
      timezoneImportant: 'Important:',
      timezoneDescription: 'Select your local timezone. Times will be shown in your timezone, then converted to game server time (UTC-2) automatically.',
      yourTimezone: 'Your Timezone',
      detectingTimezone: 'Detecting timezone...',
      selected: 'Selected:',
      serverTime: 'Server Time:',
      serverTimeValue: 'UTC-2 (Game Server)',
      operatorInfo: 'Operator Information',
      inGameUsername: 'In-Game Username *',
      yourCallsign: 'Your callsign',
      carPower: 'Car Power (M) *',
      carPowerPlaceholder: 'e.g., 2.5',
      towerLevel: 'Tower Level (1-35) *',
      towerLevelPlaceholder: 'e.g., 25',
      availabilitySchedule: 'Availability Schedule',
      timesInLocalTimezone: 'Times shown below are in',
      yourLocalTimezone: 'your local timezone',
      autoConverted: 'They will be automatically converted to server time (UTC-2) when saved.',
      submitting: 'Submitting',
      processingSubmission: 'Processing Submission...',
      doNotClose: 'Please do not close this window',
      savingAndVerifying: 'Saving data and verifying...',

      // Validations
      usernameRequired: 'In-game username is required',
      validCarPowerRequired: 'Valid car power is required (in millions)',
      towerLevelRange: 'Tower level must be between 1 and 35',
      selectTimeSlot: 'Select at least one time slot',

      // Toast messages
      submittingSchedule: 'Submitting schedule...',
      verifyingData: 'Verifying data is saved...',
      scheduleSubmitted: 'Schedule submitted and verified successfully!',
      submissionFailed: 'Submission failed - Try again',
      couldNotVerify: 'Could not verify data was saved. Please check the members list manually.',
    },

    // Time Slot Picker
    timeSlotPicker: {
      missionBrief: 'Mission Brief:',
      instructions: 'Select all time slots when you are available for operations. Multiple slots per day can be selected.',
    },

    // Member Card
    memberCard: {
      updated: 'Updated:',
      carPower: 'Car Power',
      tower: 'Tower',
      editCarPower: 'Edit car power',
      editTowerLevel: 'Edit tower level',
      save: 'Save',
      cancel: 'Cancel',
      timezone: 'Timezone:',
      hideSchedule: 'Hide',
      showSchedule: 'Show',
      schedule: 'Schedule',
      timesInServerTime: 'Times shown in',
      serverTimeUTC2: 'Server Time (UTC-2)',
      noAvailability: 'No availability data',

      // Validations
      invalidCarPower: 'Invalid car power value',
      invalidTowerLevel: 'Invalid tower level (1-35)',

      // Toast messages
      updatingCarPower: 'Updating car power...',
      updatingTowerLevel: 'Updating tower level...',
      verifyingUpdate: 'Verifying update...',
      carPowerUpdated: 'Car power updated successfully!',
      towerLevelUpdated: 'Tower level updated successfully!',
      updateFailed: 'Failed to update',
      failedToUpdateCarPower: 'Failed to update car power',
      failedToUpdateTowerLevel: 'Failed to update tower level',
      couldNotVerifyUpdate: 'Could not verify update. Please refresh manually.',

      // Delete member
      deleteMember: 'Delete member',
      deletingMember: 'Deleting member...',
      verifyingDeletion: 'Verifying deletion...',
      memberDeleted: 'Member deleted successfully!',
      failedToDeleteMember: 'Failed to delete member',
      couldNotVerifyDeletion: 'Could not verify deletion. Please refresh manually.',

      // Edit username
      editUsername: 'Edit username',
      updatingUsername: 'Updating username...',
      usernameUpdated: 'Username updated successfully!',
      failedToUpdateUsername: 'Failed to update username',
      invalidUsername: 'Invalid username',
      usernameTooLong: 'Username too long (max 50 characters)',
    },

    // Members List
    membersList: {
      allianceRoster: 'Alliance Roster',
      totalOperatives: 'Total Operatives:',
      deleteAll: 'Delete All',
      loadingRoster: 'Loading Alliance Roster...',
      noOperatives: 'No Operatives Registered',
      beFirstToSubmit: 'Be the first to submit your schedule',
      sortBy: 'Sort By:',
      username: 'Username',
      carPower: 'Car Power',
      towerLevel: 'Tower Level',
      deletingAllMembers: 'Deleting All Members...',
      criticalOperation: 'Critical operation in progress...',

      // Toast messages
      failedToLoad: 'Failed to load members roster',
      deletingMembers: 'Deleting all members...',
      verifyingDeletion: 'Verifying deletion...',
      allMembersDeleted: 'All members deleted successfully!',
      deleteFailed: 'Failed to delete members - Try again',
      couldNotVerifyDeletion: 'Could not verify deletion. Please refresh manually.',
    },

    // Delete Confirmation Modal
    deleteModal: {
      criticalWarning: 'Critical Warning',
      deleteAllMembers: 'DELETE ALL',
      members: 'MEMBERS',
      youAreAboutToDelete: 'You are about to',
      fromRoster: 'from the alliance roster.',
      cannotBeUndone: 'This action CANNOT be undone!',
      enterPasswordToConfirm: 'Enter Password to Confirm Deletion',
      enterPasswordPlaceholder: 'Enter password...',
      typeRequired: 'Type the required password to authorize this critical operation',
      incorrectPassword: 'Incorrect password. Deletion cancelled.',
      cancel: 'Cancel',
      deleteAll: 'Delete All',
    },

    // Delete Member Modal
    deleteMemberModal: {
      criticalWarning: 'Critical Warning',
      youAreAboutToDelete: 'You are about to delete',
      fromRoster: 'from the alliance roster.',
      cannotBeUndone: 'This action CANNOT be undone!',
      enterPasswordToConfirm: 'Enter Password to Confirm Deletion',
      enterPasswordPlaceholder: 'Enter password...',
      typeRequired: 'Type the required password to authorize this critical operation',
      incorrectPassword: 'Incorrect password. Deletion cancelled.',
      cancel: 'Cancel',
      deleteMember: 'Delete Member',
    },

    // Optimal Schedule Calendar
    optimalSchedule: {
      optimalEventSchedule: 'Optimal Event Schedule',
      bestTimeSlotsBasedOn: 'Best time slots based on',
      member: 'member',
      members: 'members',
      availability: 'availability',
      allTimesShownIn: 'All times shown in',
      recommendedEventTime: 'Recommended Event Time',
      availabilityPercentage: 'Availability',
      availabilityLegend: 'Availability Legend',
      excellent: 'Excellent',
      good: 'Good',
      moderate: 'Moderate',
      low: 'Low',
      veryLow: 'Very Low',
      peak: 'Peak:',
      analyzingData: 'Analyzing Availability Data...',
      noMemberData: 'No Member Data Available',
      submitSchedulesFirst: 'Members need to submit their schedules first',
      membersAvailable: 'Members',
      availableMembers: 'Available Members',
      available: 'available',
      sortedByCarPower: 'Sorted by car power (highest to lowest)',
    },

    // Timezone
    timezone: {
      serverTime: 'Server Time (UTC-2)',
    },

    // Language
    language: {
      english: 'English',
      french: 'Français',
      german: 'Deutsch',
      spanish: 'Español',
      portuguese: 'Português',
      italian: 'Italiano',
    },

    // CSV Import/Export
    csv: {
      export: 'Export to CSV',
      import: 'Import from CSV',
      exportSuccess: 'Successfully exported {count} members',
      exportFailed: 'Failed to export CSV',
      importSuccess: 'Successfully imported {count} members',
      importFailed: 'Failed to import CSV',
      importing: 'Importing members...',
      verifyingImport: 'Verifying import...',
      couldNotVerifyImport: 'Could not verify import. Please refresh manually.',
      dragDropArea: 'Drag & drop CSV file here or click to browse',
      selectFile: 'Select CSV File',
      supportedFormat: 'Supported format: .csv',
      validating: 'Validating CSV data...',
      validationSuccess: 'Validation Successful',
      validationFailed: 'Validation Failed',
      foundValidMembers: 'Found {count} valid members',
      previewTitle: 'Import Preview',
      selectImportMode: 'Select Import Mode',
      importNote: 'All times are in Server Time (UTC-2)',
      members: 'members',
      new: 'New',
      exists: 'Exists',
      status: 'Status',
      destructive: 'Destructive',
      recommended: 'Recommended',
      safe: 'Safe',
      willDelete: 'Will delete {count} existing members',
      willUpdate: 'Will update: {count}',
      willAdd: 'Will add: {count}',
      willSkip: 'Will skip: {count}',
      errors: {
        noMembers: 'No members to export',
        noData: 'No data to import',
        invalidFile: 'Invalid file format. Please upload a CSV file.',
        invalidStructure: 'Invalid CSV structure. Missing required columns.',
        emptyFile: 'CSV file is empty',
      },
      importModes: {
        replace: 'Replace All',
        replaceDesc: 'Delete all existing members and import new ones',
        merge: 'Merge & Update',
        mergeDesc: 'Update existing members and add new ones',
        addOnly: 'Add New Only',
        addOnlyDesc: 'Only add members that don\'t exist (skip duplicates)',
      },
      conflicts: {
        title: 'Conflicts Detected',
        existing: '{count} existing members will be affected',
      },
    },

    // Onboarding Guide
    onboarding: {
      title: 'Getting Started',
      loginTitle: 'Login Steps',
      passwordTitle: 'Final Step',

      // Step titles
      step1Title: 'Enter Access Token',
      step2Title: 'Login with Credentials',
      step3Title: 'Change Your Password',

      // Step descriptions
      step1Desc: 'Contact your alliance administrator to get the GitHub access token. Enter it once - it will be saved.',
      step2Desc: 'Use the EXACT username you submitted when you first registered on the web app, and the temporary password below.',
      step2Password: 'Temporary Password: TDC2025',
      step3Desc: 'After first login, you will be required to change your password immediately.',

      // Login page specific
      loginStep2Desc: 'Enter the EXACT username you used when registering (case-sensitive), and use the temporary password below.',
      loginStep3Desc: 'You will be automatically redirected to change your password after login.',
      tempPassword: 'Temporary Password',

      // Password page specific
      passwordStep3Desc: 'Enter the temporary password (TDC2025) and create your new secure password.',
      tempPasswordReminder: 'Use this temporary password',
      almostDone: 'Almost Done!',
      passwordCompleteDesc: 'After changing your password, you can access all features of the TDC Scheduler.',

      // Important notes
      important: 'Important',
      importantNote: 'Your username is case-sensitive. Make sure it matches exactly.',
      usernameCase: 'Username is CASE-SENSITIVE! Use the exact username you submitted when you first registered.',

      // Tips
      tip: 'Tip',
      loginTip: 'Use the same username spelling you used when you first submitted your schedule to the web app.',
      passwordTips: 'Password Tips',
      passwordTip1: 'Minimum 8 characters',
      passwordTip2: 'Choose something memorable',
      passwordTip3: 'Avoid using TDC2025',

      // Remember
      remember: 'Remember',
      passwordRemember: 'Save your new password securely. You will need it for all future logins.',
    },

    // Auto-refresh
    autoRefresh: {
      enabled: 'Auto-refresh enabled',
      disabled: 'Auto-refresh disabled',
      refresh: 'Refresh',
      manualRefresh: 'Click to refresh now',
      updating: 'Updating...',
    },
  };

