/**
 * Translation dictionaries for English, French, German, Spanish, Portuguese, and Italian
 * All UI text strings organized by feature/component
 */

export const translations = {
  en: {
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
      errors: 'errors',
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
  },

  fr: {
    // Common
    common: {
      loading: 'Chargement...',
      submit: 'Soumettre',
      cancel: 'Annuler',
      delete: 'Supprimer',
      edit: 'Modifier',
      save: 'Enregistrer',
      close: 'Fermer',
      confirm: 'Confirmer',
      yes: 'Oui',
      no: 'Non',
      goBack: 'Go Back',
      to: 'to',
    },

    // Days of the week
    days: {
      monday: 'Lundi',
      tuesday: 'Mardi',
      wednesday: 'Mercredi',
      thursday: 'Jeudi',
      friday: 'Vendredi',
      saturday: 'Samedi',
      sunday: 'Dimanche',
    },

    // App
    app: {
      initializingSystem: 'INITIALISATION DU SYSTÈME...',
    },

    // Header/Navigation
    nav: {
      title: 'THE DARK CREED',
      subtitle: 'CENTRE DE COMMANDEMENT DE L\'ALLIANCE',
      submitSchedule: 'SOUMETTRE L\'HORAIRE',
      submitScheduleShort: 'SOUMETTRE',
      viewRoster: 'VOIR LA LISTE',
      viewRosterShort: 'LISTE',
      optimalSchedule: 'HORAIRE OPTIMAL',
      optimalScheduleShort: 'OPTIMAL',
      adminDashboard: 'ADMIN PANEL',
      adminDashboardShort: 'ADMIN',
    },

    // Authentication
    auth: {
      allianceAccess: 'Accès à l\'Alliance',
      accessToken: 'Jeton d\'Accès de l\'Alliance',
      enterToken: 'Entrez votre jeton d\'accès...',
      verifying: 'Vérification...',
      accessScheduler: 'Accéder au Planificateur',
      contactLeader: 'Contactez votre chef d\'alliance pour obtenir un jeton d\'accès',
      credentialsStored: 'Vos identifiants seront stockés localement pour un accès permanent',
      enterTokenPrompt: 'Entrez votre jeton d\'accès de l\'alliance pour utiliser le Planificateur TDC.',
      invalidToken: 'Jeton d\'accès invalide. Veuillez vérifier vos identifiants.',
      verificationFailed: 'Échec de la vérification des identifiants. Veuillez réessayer.',
      authRequired: 'Authentification requise. Veuillez actualiser la page.',

      // Password prompt
      theDarkCreed: 'The Dark Creed',
      restrictedAccess: 'Accès Restreint - Autorisation Requise',
      alliancePassword: 'Mot de Passe de l\'Alliance',
      enterAccessCode: 'Entrez le code d\'accès',
      verifyingAccess: 'Vérification de l\'Accès',
      accessSystem: 'Accéder au Système',
      contactCommander: 'Contactez votre commandant d\'alliance pour les identifiants',
      accessGranted: 'Accès accordé - Bienvenue à The Dark Creed',
      accessDenied: 'Accès refusé - Identifiants invalides',
      authSystemFailure: 'Échec du système d\'authentification - Réessayez',
      enterPassword: 'Veuillez entrer le mot de passe',
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
      submitSchedule: 'Soumettre l\'Horaire',
      timezoneConfig: 'Configuration du Fuseau Horaire',
      timezoneImportant: 'Important :',
      timezoneDescription: 'Sélectionnez votre fuseau horaire local. Les heures seront affichées dans votre fuseau horaire, puis converties automatiquement vers l\'heure du serveur de jeu (UTC-2).',
      yourTimezone: 'Votre Fuseau Horaire',
      detectingTimezone: 'Détection du fuseau horaire...',
      selected: 'Sélectionné :',
      serverTime: 'Heure du Serveur :',
      serverTimeValue: 'UTC-2 (Serveur de Jeu)',
      operatorInfo: 'Informations de l\'Opérateur',
      inGameUsername: 'Nom d\'Utilisateur en Jeu *',
      yourCallsign: 'Votre indicatif',
      carPower: 'Puissance de Voiture (M) *',
      carPowerPlaceholder: 'ex., 2.5',
      towerLevel: 'Niveau de Tour (1-35) *',
      towerLevelPlaceholder: 'ex., 25',
      availabilitySchedule: 'Horaire de Disponibilité',
      timesInLocalTimezone: 'Les heures affichées ci-dessous sont dans',
      yourLocalTimezone: 'votre fuseau horaire local',
      autoConverted: 'Elles seront automatiquement converties vers l\'heure du serveur (UTC-2) lors de l\'enregistrement.',
      submitting: 'Soumission en cours',
      processingSubmission: 'Traitement de la Soumission...',
      doNotClose: 'Veuillez ne pas fermer cette fenêtre',
      savingAndVerifying: 'Enregistrement et vérification des données...',

      // Validations
      usernameRequired: 'Le nom d\'utilisateur en jeu est requis',
      validCarPowerRequired: 'Une puissance de voiture valide est requise (en millions)',
      towerLevelRange: 'Le niveau de tour doit être entre 1 et 35',
      selectTimeSlot: 'Sélectionnez au moins une plage horaire',

      // Toast messages
      submittingSchedule: 'Soumission de l\'horaire...',
      verifyingData: 'Vérification des données enregistrées...',
      scheduleSubmitted: 'Horaire soumis et vérifié avec succès !',
      submissionFailed: 'Échec de la soumission - Réessayez',
      couldNotVerify: 'Impossible de vérifier l\'enregistrement des données. Veuillez vérifier manuellement la liste des membres.',
    },

    // Time Slot Picker
    timeSlotPicker: {
      missionBrief: 'Brief de Mission :',
      instructions: 'Sélectionnez toutes les plages horaires pendant lesquelles vous êtes disponible pour les opérations. Plusieurs plages par jour peuvent être sélectionnées.',
    },

    // Member Card
    memberCard: {
      updated: 'Mis à jour :',
      carPower: 'Puissance Voiture',
      tower: 'Tour',
      editCarPower: 'Modifier la puissance de voiture',
      editTowerLevel: 'Modifier le niveau de tour',
      save: 'Enregistrer',
      cancel: 'Annuler',
      timezone: 'Fuseau horaire :',
      hideSchedule: 'Masquer',
      showSchedule: 'Afficher',
      schedule: 'Horaire',
      timesInServerTime: 'Heures affichées en',
      serverTimeUTC2: 'Heure du Serveur (UTC-2)',
      noAvailability: 'Aucune donnée de disponibilité',

      // Validations
      invalidCarPower: 'Valeur de puissance de voiture invalide',
      invalidTowerLevel: 'Niveau de tour invalide (1-35)',

      // Toast messages
      updatingCarPower: 'Mise à jour de la puissance de voiture...',
      updatingTowerLevel: 'Mise à jour du niveau de tour...',
      verifyingUpdate: 'Vérification de la mise à jour...',
      carPowerUpdated: 'Puissance de voiture mise à jour avec succès !',
      towerLevelUpdated: 'Niveau de tour mis à jour avec succès !',
      updateFailed: 'Échec de la mise à jour',
      failedToUpdateCarPower: 'Échec de la mise à jour de la puissance de voiture',
      failedToUpdateTowerLevel: 'Échec de la mise à jour du niveau de tour',
      couldNotVerifyUpdate: 'Impossible de vérifier la mise à jour. Veuillez actualiser manuellement.',

      // Delete member
      deleteMember: 'Supprimer le membre',
      deletingMember: 'Suppression du membre...',
      verifyingDeletion: 'Vérification de la suppression...',
      memberDeleted: 'Membre supprimé avec succès !',
      failedToDeleteMember: 'Échec de la suppression du membre',
      couldNotVerifyDeletion: 'Impossible de vérifier la suppression. Veuillez actualiser manuellement.',

      // Edit username
      editUsername: 'Edit username',
      updatingUsername: 'Updating username...',
      usernameUpdated: 'Username updated successfully!',
      failedToUpdateUsername: 'Failed to update username',
      invalidUsername: 'Invalid username',
      usernameTooLong: 'Username too long',
    },

    // Members List
    membersList: {
      allianceRoster: 'Liste de l\'Alliance',
      totalOperatives: 'Total des Opérationnels :',
      deleteAll: 'Tout Supprimer',
      loadingRoster: 'Chargement de la Liste de l\'Alliance...',
      noOperatives: 'Aucun Opérationnel Enregistré',
      beFirstToSubmit: 'Soyez le premier à soumettre votre horaire',
      sortBy: 'Trier Par :',
      username: 'Nom d\'Utilisateur',
      carPower: 'Puissance Voiture',
      towerLevel: 'Niveau de Tour',
      deletingAllMembers: 'Suppression de Tous les Membres...',
      criticalOperation: 'Opération critique en cours...',

      // Toast messages
      failedToLoad: 'Échec du chargement de la liste des membres',
      deletingMembers: 'Suppression de tous les membres...',
      verifyingDeletion: 'Vérification de la suppression...',
      allMembersDeleted: 'Tous les membres supprimés avec succès !',
      deleteFailed: 'Échec de la suppression des membres - Réessayez',
      couldNotVerifyDeletion: 'Impossible de vérifier la suppression. Veuillez actualiser manuellement.',
    },

    // Delete Confirmation Modal
    deleteModal: {
      criticalWarning: 'Avertissement Critique',
      deleteAllMembers: 'SUPPRIMER TOUS LES',
      members: 'MEMBRES',
      youAreAboutToDelete: 'Vous êtes sur le point de',
      fromRoster: 'de la liste de l\'alliance.',
      cannotBeUndone: 'Cette action NE PEUT PAS être annulée !',
      enterPasswordToConfirm: 'Entrez le Mot de Passe pour Confirmer la Suppression',
      enterPasswordPlaceholder: 'Entrez le mot de passe...',
      typeRequired: 'Saisissez le mot de passe requis pour autoriser cette opération critique',
      incorrectPassword: 'Mot de passe incorrect. Suppression annulée.',
      cancel: 'Annuler',
      deleteAll: 'Tout Supprimer',
    },

    // Delete Member Modal
    deleteMemberModal: {
      criticalWarning: 'Avertissement Critique',
      youAreAboutToDelete: 'Vous êtes sur le point de supprimer',
      fromRoster: 'de la liste de l\'alliance.',
      cannotBeUndone: 'Cette action NE PEUT PAS être annulée !',
      enterPasswordToConfirm: 'Entrez le Mot de Passe pour Confirmer la Suppression',
      enterPasswordPlaceholder: 'Entrez le mot de passe...',
      typeRequired: 'Saisissez le mot de passe requis pour autoriser cette opération critique',
      incorrectPassword: 'Mot de passe incorrect. Suppression annulée.',
      cancel: 'Annuler',
      deleteMember: 'Supprimer le Membre',
    },

    // Optimal Schedule Calendar
    optimalSchedule: {
      optimalEventSchedule: 'Horaire d\'Événement Optimal',
      bestTimeSlotsBasedOn: 'Meilleures plages horaires basées sur',
      member: 'membre',
      members: 'membres',
      availability: 'disponibilité',
      allTimesShownIn: 'Toutes les heures affichées en',
      recommendedEventTime: 'Heure d\'Événement Recommandée',
      availabilityPercentage: 'Disponibilité',
      availabilityLegend: 'Légende de Disponibilité',
      excellent: 'Excellent',
      good: 'Bon',
      moderate: 'Modéré',
      low: 'Faible',
      veryLow: 'Très Faible',
      peak: 'Pic :',
      analyzingData: 'Analyse des Données de Disponibilité...',
      noMemberData: 'Aucune Donnée de Membre Disponible',
      submitSchedulesFirst: 'Les membres doivent d\'abord soumettre leurs horaires',
      membersAvailable: 'Membres',
      availableMembers: 'Membres Disponibles',
      available: 'disponibles',
      sortedByCarPower: 'Trié par puissance de voiture (du plus élevé au plus bas)',
    },

    // Timezone
    timezone: {
      serverTime: 'Heure du Serveur (UTC-2)',
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
      export: 'Exporter en CSV',
      import: 'Importer depuis CSV',
      exportSuccess: '{count} membres exportés avec succès',
      exportFailed: 'Échec de l\'exportation CSV',
      importSuccess: '{count} membres importés avec succès',
      importFailed: 'Échec de l\'importation CSV',
      importing: 'Importation des membres...',
      verifyingImport: 'Vérification de l\'importation...',
      couldNotVerifyImport: 'Impossible de vérifier l\'importation. Veuillez actualiser manuellement.',
      dragDropArea: 'Glissez-déposez le fichier CSV ici ou cliquez pour parcourir',
      selectFile: 'Sélectionner un Fichier CSV',
      supportedFormat: 'Format supporté : .csv',
      validating: 'Validation des données CSV...',
      validationSuccess: 'Validation Réussie',
      validationFailed: 'Validation Échouée',
      foundValidMembers: '{count} membres valides trouvés',
      previewTitle: 'Aperçu de l\'Importation',
      selectImportMode: 'Sélectionner le Mode d\'Importation',
      importNote: 'Toutes les heures sont en Heure du Serveur (UTC-2)',
      members: 'membres',
      errors: 'erreurs',
      new: 'Nouveau',
      exists: 'Existe',
      status: 'Statut',
      destructive: 'Destructif',
      recommended: 'Recommandé',
      safe: 'Sûr',
      willDelete: 'Supprimera {count} membres existants',
      willUpdate: 'Mettra à jour : {count}',
      willAdd: 'Ajoutera : {count}',
      willSkip: 'Ignorera : {count}',
      errors: {
        noMembers: 'Aucun membre à exporter',
        noData: 'Aucune donnée à importer',
        invalidFile: 'Format de fichier invalide. Veuillez télécharger un fichier CSV.',
        invalidStructure: 'Structure CSV invalide. Colonnes requises manquantes.',
        emptyFile: 'Le fichier CSV est vide',
      },
      importModes: {
        replace: 'Tout Remplacer',
        replaceDesc: 'Supprimer tous les membres existants et importer les nouveaux',
        merge: 'Fusionner & Mettre à Jour',
        mergeDesc: 'Mettre à jour les membres existants et ajouter les nouveaux',
        addOnly: 'Ajouter Nouveaux Uniquement',
        addOnlyDesc: 'Ajouter uniquement les membres qui n\'existent pas (ignorer les doublons)',
      },
      conflicts: {
        title: 'Conflits Détectés',
        existing: '{count} membres existants seront affectés',
      },
    },
  },

  de: {
    // Common
    common: {
      loading: 'Laden...',
      submit: 'Absenden',
      cancel: 'Abbrechen',
      delete: 'Löschen',
      edit: 'Bearbeiten',
      save: 'Speichern',
      close: 'Schließen',
      confirm: 'Bestätigen',
      yes: 'Ja',
      no: 'Nein',
      goBack: 'Go Back',
      to: 'to',
    },

    // Days of the week
    days: {
      monday: 'Montag',
      tuesday: 'Dienstag',
      wednesday: 'Mittwoch',
      thursday: 'Donnerstag',
      friday: 'Freitag',
      saturday: 'Samstag',
      sunday: 'Sonntag',
    },

    // App
    app: {
      initializingSystem: 'SYSTEM WIRD INITIALISIERT...',
    },

    // Header/Navigation
    nav: {
      title: 'THE DARK CREED',
      subtitle: 'ALLIANZ-KOMMANDOZENTRALE',
      submitSchedule: 'ZEITPLAN EINREICHEN',
      submitScheduleShort: 'EINREICHEN',
      viewRoster: 'MITGLIEDERLISTE',
      viewRosterShort: 'LISTE',
      optimalSchedule: 'OPTIMALER ZEITPLAN',
      optimalScheduleShort: 'OPTIMAL',
      adminDashboard: 'ADMIN PANEL',
      adminDashboardShort: 'ADMIN',
    },

    // Authentication
    auth: {
      allianceAccess: 'Allianz-Zugang',
      accessToken: 'Allianz-Zugriffstoken',
      enterToken: 'Geben Sie Ihr Zugriffstoken ein...',
      verifying: 'Wird überprüft...',
      accessScheduler: 'Zum Planer',
      contactLeader: 'Kontaktieren Sie Ihren Allianzführer, um ein Zugriffstoken zu erhalten',
      credentialsStored: 'Ihre Anmeldedaten werden lokal für dauerhaften Zugriff gespeichert',
      enterTokenPrompt: 'Geben Sie Ihr Allianz-Zugriffstoken ein, um den TDC-Planer zu verwenden.',
      invalidToken: 'Ungültiges Zugriffstoken. Bitte überprüfen Sie Ihre Anmeldedaten.',
      verificationFailed: 'Überprüfung der Anmeldedaten fehlgeschlagen. Bitte versuchen Sie es erneut.',
      authRequired: 'Authentifizierung erforderlich. Bitte aktualisieren Sie die Seite.',

      // Password prompt
      theDarkCreed: 'The Dark Creed',
      restrictedAccess: 'Eingeschränkter Zugang - Autorisierung Erforderlich',
      alliancePassword: 'Allianz-Passwort',
      enterAccessCode: 'Zugangscode eingeben',
      verifyingAccess: 'Zugriff wird überprüft',
      accessSystem: 'System Zugreifen',
      contactCommander: 'Kontaktieren Sie Ihren Allianzkommandanten für Anmeldedaten',
      accessGranted: 'Zugriff gewährt - Willkommen bei The Dark Creed',
      accessDenied: 'Zugriff verweigert - Ungültige Anmeldedaten',
      authSystemFailure: 'Authentifizierungssystemfehler - Versuchen Sie es erneut',
      enterPassword: 'Bitte geben Sie das Passwort ein',
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
      submitSchedule: 'Zeitplan Einreichen',
      timezoneConfig: 'Zeitzonenkonfiguration',
      timezoneImportant: 'Wichtig:',
      timezoneDescription: 'Wählen Sie Ihre lokale Zeitzone. Die Zeiten werden in Ihrer Zeitzone angezeigt und dann automatisch in die Spielserverzeit (UTC-2) umgerechnet.',
      yourTimezone: 'Ihre Zeitzone',
      detectingTimezone: 'Zeitzone wird erkannt...',
      selected: 'Ausgewählt:',
      serverTime: 'Serverzeit:',
      serverTimeValue: 'UTC-2 (Spielserver)',
      operatorInfo: 'Operatorinformationen',
      inGameUsername: 'Spielername *',
      yourCallsign: 'Ihr Rufzeichen',
      carPower: 'Fahrzeugmacht (M) *',
      carPowerPlaceholder: 'z.B., 2.5',
      towerLevel: 'Turmstufe (1-35) *',
      towerLevelPlaceholder: 'z.B., 25',
      availabilitySchedule: 'Verfügbarkeitszeitplan',
      timesInLocalTimezone: 'Die unten angezeigten Zeiten sind in',
      yourLocalTimezone: 'Ihrer lokalen Zeitzone',
      autoConverted: 'Sie werden beim Speichern automatisch in die Serverzeit (UTC-2) umgerechnet.',
      submitting: 'Wird eingereicht',
      processingSubmission: 'Einreichung wird Verarbeitet...',
      doNotClose: 'Bitte schließen Sie dieses Fenster nicht',
      savingAndVerifying: 'Daten werden gespeichert und überprüft...',

      // Validations
      usernameRequired: 'Spielername ist erforderlich',
      validCarPowerRequired: 'Gültige Fahrzeugmacht erforderlich (in Millionen)',
      towerLevelRange: 'Turmstufe muss zwischen 1 und 35 liegen',
      selectTimeSlot: 'Wählen Sie mindestens einen Zeitslot',

      // Toast messages
      submittingSchedule: 'Zeitplan wird eingereicht...',
      verifyingData: 'Gespeicherte Daten werden überprüft...',
      scheduleSubmitted: 'Zeitplan erfolgreich eingereicht und überprüft!',
      submissionFailed: 'Einreichung fehlgeschlagen - Versuchen Sie es erneut',
      couldNotVerify: 'Speicherung der Daten konnte nicht überprüft werden. Bitte überprüfen Sie die Mitgliederliste manuell.',
    },

    // Time Slot Picker
    timeSlotPicker: {
      missionBrief: 'Missionsbesprechung:',
      instructions: 'Wählen Sie alle Zeitfenster aus, in denen Sie für Einsätze verfügbar sind. Es können mehrere Slots pro Tag ausgewählt werden.',
    },

    // Member Card
    memberCard: {
      updated: 'Aktualisiert:',
      carPower: 'Fahrzeugmacht',
      tower: 'Turm',
      editCarPower: 'Fahrzeugmacht bearbeiten',
      editTowerLevel: 'Turmstufe bearbeiten',
      save: 'Speichern',
      cancel: 'Abbrechen',
      timezone: 'Zeitzone:',
      hideSchedule: 'Verbergen',
      showSchedule: 'Anzeigen',
      schedule: 'Zeitplan',
      timesInServerTime: 'Zeiten angezeigt in',
      serverTimeUTC2: 'Serverzeit (UTC-2)',
      noAvailability: 'Keine Verfügbarkeitsdaten',

      // Validations
      invalidCarPower: 'Ungültiger Fahrzeugmachtwert',
      invalidTowerLevel: 'Ungültige Turmstufe (1-35)',

      // Toast messages
      updatingCarPower: 'Fahrzeugmacht wird aktualisiert...',
      updatingTowerLevel: 'Turmstufe wird aktualisiert...',
      verifyingUpdate: 'Aktualisierung wird überprüft...',
      carPowerUpdated: 'Fahrzeugmacht erfolgreich aktualisiert!',
      towerLevelUpdated: 'Turmstufe erfolgreich aktualisiert!',
      updateFailed: 'Aktualisierung fehlgeschlagen',
      failedToUpdateCarPower: 'Fahrzeugmacht-Aktualisierung fehlgeschlagen',
      failedToUpdateTowerLevel: 'Turmstufen-Aktualisierung fehlgeschlagen',
      couldNotVerifyUpdate: 'Aktualisierung konnte nicht überprüft werden. Bitte manuell aktualisieren.',

      // Delete member
      deleteMember: 'Mitglied löschen',
      deletingMember: 'Mitglied wird gelöscht...',
      verifyingDeletion: 'Löschung wird überprüft...',
      memberDeleted: 'Mitglied erfolgreich gelöscht!',
      failedToDeleteMember: 'Mitglied-Löschung fehlgeschlagen',
      couldNotVerifyDeletion: 'Löschung konnte nicht überprüft werden. Bitte manuell aktualisieren.',

      // Edit username
      editUsername: 'Edit username',
      updatingUsername: 'Updating username...',
      usernameUpdated: 'Username updated successfully!',
      failedToUpdateUsername: 'Failed to update username',
      invalidUsername: 'Invalid username',
      usernameTooLong: 'Username too long',
    },

    // Members List
    membersList: {
      allianceRoster: 'Allianz-Mitgliederliste',
      totalOperatives: 'Gesamte Einsatzkräfte:',
      deleteAll: 'Alle Löschen',
      loadingRoster: 'Mitgliederliste wird geladen...',
      noOperatives: 'Keine Einsatzkräfte Registriert',
      beFirstToSubmit: 'Seien Sie der Erste, der seinen Zeitplan einreicht',
      sortBy: 'Sortieren Nach:',
      username: 'Benutzername',
      carPower: 'Fahrzeugmacht',
      towerLevel: 'Turmstufe',
      deletingAllMembers: 'Alle Mitglieder werden Gelöscht...',
      criticalOperation: 'Kritischer Vorgang läuft...',

      // Toast messages
      failedToLoad: 'Laden der Mitgliederliste fehlgeschlagen',
      deletingMembers: 'Alle Mitglieder werden gelöscht...',
      verifyingDeletion: 'Löschung wird überprüft...',
      allMembersDeleted: 'Alle Mitglieder erfolgreich gelöscht!',
      deleteFailed: 'Löschen der Mitglieder fehlgeschlagen - Versuchen Sie es erneut',
      couldNotVerifyDeletion: 'Löschung konnte nicht überprüft werden. Bitte manuell aktualisieren.',
    },

    // Delete Confirmation Modal
    deleteModal: {
      criticalWarning: 'Kritische Warnung',
      deleteAllMembers: 'ALLE LÖSCHEN',
      members: 'MITGLIEDER',
      youAreAboutToDelete: 'Sie sind dabei',
      fromRoster: 'aus der Allianz-Mitgliederliste zu löschen.',
      cannotBeUndone: 'Diese Aktion KANN NICHT rückgängig gemacht werden!',
      enterPasswordToConfirm: 'Passwort zur Bestätigung der Löschung Eingeben',
      enterPasswordPlaceholder: 'Passwort eingeben...',
      typeRequired: 'Geben Sie das erforderliche Passwort ein, um diesen kritischen Vorgang zu autorisieren',
      incorrectPassword: 'Falsches Passwort. Löschung abgebrochen.',
      cancel: 'Abbrechen',
      deleteAll: 'Alle Löschen',
    },

    // Delete Member Modal
    deleteMemberModal: {
      criticalWarning: 'Kritische Warnung',
      youAreAboutToDelete: 'Sie sind dabei zu löschen',
      fromRoster: 'aus der Allianz-Mitgliederliste.',
      cannotBeUndone: 'Diese Aktion KANN NICHT rückgängig gemacht werden!',
      enterPasswordToConfirm: 'Passwort zur Bestätigung der Löschung Eingeben',
      enterPasswordPlaceholder: 'Passwort eingeben...',
      typeRequired: 'Geben Sie das erforderliche Passwort ein, um diesen kritischen Vorgang zu autorisieren',
      incorrectPassword: 'Falsches Passwort. Löschung abgebrochen.',
      cancel: 'Abbrechen',
      deleteMember: 'Mitglied Löschen',
    },

    // Optimal Schedule Calendar
    optimalSchedule: {
      optimalEventSchedule: 'Optimaler Ereigniszeitplan',
      bestTimeSlotsBasedOn: 'Beste Zeitfenster basierend auf',
      member: 'Mitglied',
      members: 'Mitglieder',
      availability: 'Verfügbarkeit',
      allTimesShownIn: 'Alle Zeiten angezeigt in',
      recommendedEventTime: 'Empfohlene Ereigniszeit',
      availabilityPercentage: 'Verfügbarkeit',
      availabilityLegend: 'Verfügbarkeitslegende',
      excellent: 'Ausgezeichnet',
      good: 'Gut',
      moderate: 'Moderat',
      low: 'Niedrig',
      veryLow: 'Sehr Niedrig',
      peak: 'Spitze:',
      analyzingData: 'Verfügbarkeitsdaten werden Analysiert...',
      noMemberData: 'Keine Mitgliederdaten Verfügbar',
      submitSchedulesFirst: 'Mitglieder müssen zuerst ihre Zeitpläne einreichen',
      membersAvailable: 'Mitglieder',
      availableMembers: 'Verfügbare Mitglieder',
      available: 'verfügbar',
      sortedByCarPower: 'Sortiert nach Fahrzeugmacht (höchste bis niedrigste)',
    },

    // Timezone
    timezone: {
      serverTime: 'Serverzeit (UTC-2)',
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
      export: 'Als CSV Exportieren',
      import: 'Aus CSV Importieren',
      exportSuccess: '{count} Mitglieder erfolgreich exportiert',
      exportFailed: 'CSV-Export fehlgeschlagen',
      importSuccess: '{count} Mitglieder erfolgreich importiert',
      importFailed: 'CSV-Import fehlgeschlagen',
      importing: 'Mitglieder werden importiert...',
      verifyingImport: 'Import wird überprüft...',
      couldNotVerifyImport: 'Import konnte nicht überprüft werden. Bitte manuell aktualisieren.',
      dragDropArea: 'CSV-Datei hier ablegen oder klicken zum Durchsuchen',
      selectFile: 'CSV-Datei Auswählen',
      supportedFormat: 'Unterstütztes Format: .csv',
      validating: 'CSV-Daten werden validiert...',
      validationSuccess: 'Validierung Erfolgreich',
      validationFailed: 'Validierung Fehlgeschlagen',
      foundValidMembers: '{count} gültige Mitglieder gefunden',
      previewTitle: 'Import-Vorschau',
      selectImportMode: 'Import-Modus Auswählen',
      importNote: 'Alle Zeiten sind in Serverzeit (UTC-2)',
      members: 'Mitglieder',
      errors: 'Fehler',
      new: 'Neu',
      exists: 'Existiert',
      status: 'Status',
      destructive: 'Destruktiv',
      recommended: 'Empfohlen',
      safe: 'Sicher',
      willDelete: 'Löscht {count} bestehende Mitglieder',
      willUpdate: 'Aktualisiert: {count}',
      willAdd: 'Fügt hinzu: {count}',
      willSkip: 'Überspringt: {count}',
      errors: {
        noMembers: 'Keine Mitglieder zum Exportieren',
        noData: 'Keine Daten zum Importieren',
        invalidFile: 'Ungültiges Dateiformat. Bitte laden Sie eine CSV-Datei hoch.',
        invalidStructure: 'Ungültige CSV-Struktur. Erforderliche Spalten fehlen.',
        emptyFile: 'CSV-Datei ist leer',
      },
      importModes: {
        replace: 'Alle Ersetzen',
        replaceDesc: 'Alle bestehenden Mitglieder löschen und neue importieren',
        merge: 'Zusammenführen & Aktualisieren',
        mergeDesc: 'Bestehende Mitglieder aktualisieren und neue hinzufügen',
        addOnly: 'Nur Neue Hinzufügen',
        addOnlyDesc: 'Nur Mitglieder hinzufügen, die nicht existieren (Duplikate überspringen)',
      },
      conflicts: {
        title: 'Konflikte Erkannt',
        existing: '{count} bestehende Mitglieder werden betroffen sein',
      },
    },
  },

  es: {
    // Common
    common: {
      loading: 'Cargando...',
      submit: 'Enviar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      edit: 'Editar',
      save: 'Guardar',
      close: 'Cerrar',
      confirm: 'Confirmar',
      yes: 'Sí',
      no: 'No',
      goBack: 'Go Back',
      to: 'to',
    },

    // Days of the week
    days: {
      monday: 'Lunes',
      tuesday: 'Martes',
      wednesday: 'Miércoles',
      thursday: 'Jueves',
      friday: 'Viernes',
      saturday: 'Sábado',
      sunday: 'Domingo',
    },

    // App
    app: {
      initializingSystem: 'INICIALIZANDO SISTEMA...',
    },

    // Header/Navigation
    nav: {
      title: 'THE DARK CREED',
      subtitle: 'CENTRO DE COMANDO DE LA ALIANZA',
      submitSchedule: 'ENVIAR HORARIO',
      submitScheduleShort: 'ENVIAR',
      viewRoster: 'VER LISTA',
      viewRosterShort: 'LISTA',
      optimalSchedule: 'HORARIO ÓPTIMO',
      optimalScheduleShort: 'ÓPTIMO',
      adminDashboard: 'ADMIN PANEL',
      adminDashboardShort: 'ADMIN',
    },

    // Authentication
    auth: {
      allianceAccess: 'Acceso a la Alianza',
      accessToken: 'Token de Acceso de la Alianza',
      enterToken: 'Ingrese su token de acceso...',
      verifying: 'Verificando...',
      accessScheduler: 'Acceder al Planificador',
      contactLeader: 'Contacte al líder de su alianza para obtener un token de acceso',
      credentialsStored: 'Sus credenciales se almacenarán localmente para acceso permanente',
      enterTokenPrompt: 'Ingrese su token de acceso de la alianza para usar el Planificador TDC.',
      invalidToken: 'Token de acceso inválido. Verifique sus credenciales.',
      verificationFailed: 'Error al verificar credenciales. Intente nuevamente.',
      authRequired: 'Se requiere autenticación. Actualice la página.',

      // Password prompt
      theDarkCreed: 'The Dark Creed',
      restrictedAccess: 'Acceso Restringido - Se Requiere Autorización',
      alliancePassword: 'Contraseña de la Alianza',
      enterAccessCode: 'Ingrese el código de acceso',
      verifyingAccess: 'Verificando Acceso',
      accessSystem: 'Acceder al Sistema',
      contactCommander: 'Contacte al comandante de su alianza para obtener credenciales',
      accessGranted: 'Acceso concedido - Bienvenido a The Dark Creed',
      accessDenied: 'Acceso denegado - Credenciales inválidas',
      authSystemFailure: 'Fallo del sistema de autenticación - Intente nuevamente',
      enterPassword: 'Por favor ingrese la contraseña',
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
      submitSchedule: 'Enviar Horario',
      timezoneConfig: 'Configuración de Zona Horaria',
      timezoneImportant: 'Importante:',
      timezoneDescription: 'Seleccione su zona horaria local. Los horarios se mostrarán en su zona horaria, luego se convertirán automáticamente a la hora del servidor del juego (UTC-2).',
      yourTimezone: 'Su Zona Horaria',
      detectingTimezone: 'Detectando zona horaria...',
      selected: 'Seleccionado:',
      serverTime: 'Hora del Servidor:',
      serverTimeValue: 'UTC-2 (Servidor del Juego)',
      operatorInfo: 'Información del Operador',
      inGameUsername: 'Nombre de Usuario en el Juego *',
      yourCallsign: 'Su indicativo',
      carPower: 'Poder del Vehículo (M) *',
      carPowerPlaceholder: 'ej., 2.5',
      towerLevel: 'Nivel de Torre (1-35) *',
      towerLevelPlaceholder: 'ej., 25',
      availabilitySchedule: 'Horario de Disponibilidad',
      timesInLocalTimezone: 'Los horarios mostrados abajo están en',
      yourLocalTimezone: 'su zona horaria local',
      autoConverted: 'Se convertirán automáticamente a la hora del servidor (UTC-2) al guardar.',
      submitting: 'Enviando',
      processingSubmission: 'Procesando Envío...',
      doNotClose: 'Por favor no cierre esta ventana',
      savingAndVerifying: 'Guardando datos y verificando...',

      // Validations
      usernameRequired: 'Se requiere nombre de usuario en el juego',
      validCarPowerRequired: 'Se requiere poder de vehículo válido (en millones)',
      towerLevelRange: 'El nivel de torre debe estar entre 1 y 35',
      selectTimeSlot: 'Seleccione al menos un horario',

      // Toast messages
      submittingSchedule: 'Enviando horario...',
      verifyingData: 'Verificando que los datos estén guardados...',
      scheduleSubmitted: '¡Horario enviado y verificado exitosamente!',
      submissionFailed: 'Error al enviar - Intente nuevamente',
      couldNotVerify: 'No se pudo verificar que los datos fueron guardados. Verifique la lista de miembros manualmente.',
    },

    // Time Slot Picker
    timeSlotPicker: {
      missionBrief: 'Informe de Misión:',
      instructions: 'Seleccione todos los horarios en los que está disponible para operaciones. Se pueden seleccionar múltiples horarios por día.',
    },

    // Member Card
    memberCard: {
      updated: 'Actualizado:',
      carPower: 'Poder del Vehículo',
      tower: 'Torre',
      editCarPower: 'Editar poder del vehículo',
      editTowerLevel: 'Editar nivel de torre',
      save: 'Guardar',
      cancel: 'Cancelar',
      timezone: 'Zona Horaria:',
      hideSchedule: 'Ocultar',
      showSchedule: 'Mostrar',
      schedule: 'Horario',
      timesInServerTime: 'Horarios mostrados en',
      serverTimeUTC2: 'Hora del Servidor (UTC-2)',
      noAvailability: 'Sin datos de disponibilidad',

      // Validations
      invalidCarPower: 'Valor de poder de vehículo inválido',
      invalidTowerLevel: 'Nivel de torre inválido (1-35)',

      // Toast messages
      updatingCarPower: 'Actualizando poder del vehículo...',
      updatingTowerLevel: 'Actualizando nivel de torre...',
      verifyingUpdate: 'Verificando actualización...',
      carPowerUpdated: '¡Poder del vehículo actualizado exitosamente!',
      towerLevelUpdated: '¡Nivel de torre actualizado exitosamente!',
      updateFailed: 'Error al actualizar',
      failedToUpdateCarPower: 'Error al actualizar poder del vehículo',
      failedToUpdateTowerLevel: 'Error al actualizar nivel de torre',
      couldNotVerifyUpdate: 'No se pudo verificar la actualización. Actualice manualmente.',

      // Delete member
      deleteMember: 'Eliminar miembro',
      deletingMember: 'Eliminando miembro...',
      verifyingDeletion: 'Verificando eliminación...',
      memberDeleted: '¡Miembro eliminado exitosamente!',
      failedToDeleteMember: 'Error al eliminar miembro',
      couldNotVerifyDeletion: 'No se pudo verificar la eliminación. Actualice manualmente.',

      // Edit username
      editUsername: 'Edit username',
      updatingUsername: 'Updating username...',
      usernameUpdated: 'Username updated successfully!',
      failedToUpdateUsername: 'Failed to update username',
      invalidUsername: 'Invalid username',
      usernameTooLong: 'Username too long',
    },

    // Members List
    membersList: {
      allianceRoster: 'Lista de la Alianza',
      totalOperatives: 'Operativos Totales:',
      deleteAll: 'Eliminar Todo',
      loadingRoster: 'Cargando Lista de la Alianza...',
      noOperatives: 'No Hay Operativos Registrados',
      beFirstToSubmit: 'Sea el primero en enviar su horario',
      sortBy: 'Ordenar Por:',
      username: 'Nombre de Usuario',
      carPower: 'Poder del Vehículo',
      towerLevel: 'Nivel de Torre',
      deletingAllMembers: 'Eliminando Todos los Miembros...',
      criticalOperation: 'Operación crítica en progreso...',

      // Toast messages
      failedToLoad: 'Error al cargar la lista de miembros',
      deletingMembers: 'Eliminando todos los miembros...',
      verifyingDeletion: 'Verificando eliminación...',
      allMembersDeleted: '¡Todos los miembros eliminados exitosamente!',
      deleteFailed: 'Error al eliminar miembros - Intente nuevamente',
      couldNotVerifyDeletion: 'No se pudo verificar la eliminación. Actualice manualmente.',
    },

    // Delete Confirmation Modal
    deleteModal: {
      criticalWarning: 'Advertencia Crítica',
      deleteAllMembers: 'ELIMINAR TODOS LOS',
      members: 'MIEMBROS',
      youAreAboutToDelete: 'Está a punto de',
      fromRoster: 'de la lista de la alianza.',
      cannotBeUndone: '¡Esta acción NO se puede deshacer!',
      enterPasswordToConfirm: 'Ingrese la Contraseña para Confirmar la Eliminación',
      enterPasswordPlaceholder: 'Ingrese la contraseña...',
      typeRequired: 'Escriba la contraseña requerida para autorizar esta operación crítica',
      incorrectPassword: 'Contraseña incorrecta. Eliminación cancelada.',
      cancel: 'Cancelar',
      deleteAll: 'Eliminar Todo',
    },

    // Delete Member Modal
    deleteMemberModal: {
      criticalWarning: 'Advertencia Crítica',
      youAreAboutToDelete: 'Está a punto de eliminar',
      fromRoster: 'de la lista de la alianza.',
      cannotBeUndone: '¡Esta acción NO se puede deshacer!',
      enterPasswordToConfirm: 'Ingrese la Contraseña para Confirmar la Eliminación',
      enterPasswordPlaceholder: 'Ingrese la contraseña...',
      typeRequired: 'Escriba la contraseña requerida para autorizar esta operación crítica',
      incorrectPassword: 'Contraseña incorrecta. Eliminación cancelada.',
      cancel: 'Cancelar',
      deleteMember: 'Eliminar Miembro',
    },

    // Optimal Schedule Calendar
    optimalSchedule: {
      optimalEventSchedule: 'Horario Óptimo de Eventos',
      bestTimeSlotsBasedOn: 'Mejores horarios basados en',
      member: 'miembro',
      members: 'miembros',
      availability: 'disponibilidad',
      allTimesShownIn: 'Todos los horarios mostrados en',
      recommendedEventTime: 'Hora de Evento Recomendada',
      availabilityPercentage: 'Disponibilidad',
      availabilityLegend: 'Leyenda de Disponibilidad',
      excellent: 'Excelente',
      good: 'Bueno',
      moderate: 'Moderado',
      low: 'Bajo',
      veryLow: 'Muy Bajo',
      peak: 'Pico:',
      analyzingData: 'Analizando Datos de Disponibilidad...',
      noMemberData: 'No Hay Datos de Miembros Disponibles',
      submitSchedulesFirst: 'Los miembros deben enviar sus horarios primero',
      membersAvailable: 'Miembros',
      availableMembers: 'Miembros Disponibles',
      available: 'disponibles',
      sortedByCarPower: 'Ordenado por poder de vehículo (de mayor a menor)',
    },

    // Timezone
    timezone: {
      serverTime: 'Hora del Servidor (UTC-2)',
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
      export: 'Exportar a CSV',
      import: 'Importar desde CSV',
      exportSuccess: '{count} miembros exportados exitosamente',
      exportFailed: 'Error al exportar CSV',
      importSuccess: '{count} miembros importados exitosamente',
      importFailed: 'Error al importar CSV',
      importing: 'Importando miembros...',
      verifyingImport: 'Verificando importación...',
      couldNotVerifyImport: 'No se pudo verificar la importación. Actualice manualmente.',
      dragDropArea: 'Arrastra y suelta el archivo CSV aquí o haz clic para explorar',
      selectFile: 'Seleccionar Archivo CSV',
      supportedFormat: 'Formato soportado: .csv',
      validating: 'Validando datos CSV...',
      validationSuccess: 'Validación Exitosa',
      validationFailed: 'Validación Fallida',
      foundValidMembers: '{count} miembros válidos encontrados',
      previewTitle: 'Vista Previa de Importación',
      selectImportMode: 'Seleccionar Modo de Importación',
      importNote: 'Todas las horas están en Hora del Servidor (UTC-2)',
      members: 'miembros',
      errors: 'errores',
      new: 'Nuevo',
      exists: 'Existe',
      status: 'Estado',
      destructive: 'Destructivo',
      recommended: 'Recomendado',
      safe: 'Seguro',
      willDelete: 'Eliminará {count} miembros existentes',
      willUpdate: 'Actualizará: {count}',
      willAdd: 'Agregará: {count}',
      willSkip: 'Omitirá: {count}',
      errors: {
        noMembers: 'No hay miembros para exportar',
        noData: 'No hay datos para importar',
        invalidFile: 'Formato de archivo inválido. Cargue un archivo CSV.',
        invalidStructure: 'Estructura CSV inválida. Faltan columnas requeridas.',
        emptyFile: 'El archivo CSV está vacío',
      },
      importModes: {
        replace: 'Reemplazar Todo',
        replaceDesc: 'Eliminar todos los miembros existentes e importar nuevos',
        merge: 'Fusionar y Actualizar',
        mergeDesc: 'Actualizar miembros existentes y agregar nuevos',
        addOnly: 'Solo Agregar Nuevos',
        addOnlyDesc: 'Solo agregar miembros que no existan (omitir duplicados)',
      },
      conflicts: {
        title: 'Conflictos Detectados',
        existing: '{count} miembros existentes se verán afectados',
      },
    },
  },

  pt: {
    // Common
    common: {
      loading: 'Carregando...',
      submit: 'Enviar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      edit: 'Editar',
      save: 'Guardar',
      close: 'Fechar',
      confirm: 'Confirmar',
      yes: 'Sim',
      no: 'Não',
      goBack: 'Go Back',
      to: 'to',
    },

    // Days of the week
    days: {
      monday: 'Segunda-feira',
      tuesday: 'Terça-feira',
      wednesday: 'Quarta-feira',
      thursday: 'Quinta-feira',
      friday: 'Sexta-feira',
      saturday: 'Sábado',
      sunday: 'Domingo',
    },

    // App
    app: {
      initializingSystem: 'INICIALIZANDO SISTEMA...',
    },

    // Header/Navigation
    nav: {
      title: 'THE DARK CREED',
      subtitle: 'CENTRO DE COMANDO DA ALIANÇA',
      submitSchedule: 'ENVIAR HORÁRIO',
      submitScheduleShort: 'ENVIAR',
      viewRoster: 'VER LISTA',
      viewRosterShort: 'LISTA',
      optimalSchedule: 'HORÁRIO ÓTIMO',
      optimalScheduleShort: 'ÓTIMO',
      adminDashboard: 'ADMIN PANEL',
      adminDashboardShort: 'ADMIN',
    },

    // Authentication
    auth: {
      allianceAccess: 'Acesso à Aliança',
      accessToken: 'Token de Acesso da Aliança',
      enterToken: 'Digite o seu token de acesso...',
      verifying: 'Verificando...',
      accessScheduler: 'Aceder ao Agendador',
      contactLeader: 'Contacte o líder da sua aliança para obter um token de acesso',
      credentialsStored: 'As suas credenciais serão armazenadas localmente para acesso permanente',
      enterTokenPrompt: 'Digite o seu token de acesso da aliança para usar o Agendador TDC.',
      invalidToken: 'Token de acesso inválido. Verifique as suas credenciais.',
      verificationFailed: 'Falha ao verificar credenciais. Tente novamente.',
      authRequired: 'Autenticação necessária. Atualize a página.',

      // Password prompt
      theDarkCreed: 'The Dark Creed',
      restrictedAccess: 'Acesso Restrito - Autorização Necessária',
      alliancePassword: 'Senha da Aliança',
      enterAccessCode: 'Digite o código de acesso',
      verifyingAccess: 'Verificando Acesso',
      accessSystem: 'Aceder ao Sistema',
      contactCommander: 'Contacte o comandante da sua aliança para obter credenciais',
      accessGranted: 'Acesso concedido - Bem-vindo ao The Dark Creed',
      accessDenied: 'Acesso negado - Credenciais inválidas',
      authSystemFailure: 'Falha no sistema de autenticação - Tente novamente',
      enterPassword: 'Por favor digite a senha',
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
      submitSchedule: 'Enviar Horário',
      timezoneConfig: 'Configuração de Fuso Horário',
      timezoneImportant: 'Importante:',
      timezoneDescription: 'Selecione o seu fuso horário local. Os horários serão apresentados no seu fuso horário, depois convertidos automaticamente para a hora do servidor do jogo (UTC-2).',
      yourTimezone: 'Seu Fuso Horário',
      detectingTimezone: 'Detectando fuso horário...',
      selected: 'Selecionado:',
      serverTime: 'Hora do Servidor:',
      serverTimeValue: 'UTC-2 (Servidor do Jogo)',
      operatorInfo: 'Informação do Operador',
      inGameUsername: 'Nome de Utilizador no Jogo *',
      yourCallsign: 'Seu indicativo',
      carPower: 'Poder do Veículo (M) *',
      carPowerPlaceholder: 'ex., 2.5',
      towerLevel: 'Nível da Torre (1-35) *',
      towerLevelPlaceholder: 'ex., 25',
      availabilitySchedule: 'Horário de Disponibilidade',
      timesInLocalTimezone: 'Os horários mostrados abaixo estão no',
      yourLocalTimezone: 'seu fuso horário local',
      autoConverted: 'Serão automaticamente convertidos para a hora do servidor (UTC-2) ao guardar.',
      submitting: 'Enviando',
      processingSubmission: 'Processando Envio...',
      doNotClose: 'Por favor não feche esta janela',
      savingAndVerifying: 'Guardando dados e verificando...',

      // Validations
      usernameRequired: 'Nome de utilizador no jogo é obrigatório',
      validCarPowerRequired: 'Poder de veículo válido é obrigatório (em milhões)',
      towerLevelRange: 'O nível da torre deve estar entre 1 e 35',
      selectTimeSlot: 'Selecione pelo menos um horário',

      // Toast messages
      submittingSchedule: 'Enviando horário...',
      verifyingData: 'Verificando se os dados estão guardados...',
      scheduleSubmitted: 'Horário enviado e verificado com sucesso!',
      submissionFailed: 'Falha ao enviar - Tente novamente',
      couldNotVerify: 'Não foi possível verificar se os dados foram guardados. Verifique a lista de membros manualmente.',
    },

    // Time Slot Picker
    timeSlotPicker: {
      missionBrief: 'Briefing de Missão:',
      instructions: 'Selecione todos os horários em que está disponível para operações. Podem ser selecionados múltiplos horários por dia.',
    },

    // Member Card
    memberCard: {
      updated: 'Atualizado:',
      carPower: 'Poder do Veículo',
      tower: 'Torre',
      editCarPower: 'Editar poder do veículo',
      editTowerLevel: 'Editar nível da torre',
      save: 'Guardar',
      cancel: 'Cancelar',
      timezone: 'Fuso Horário:',
      hideSchedule: 'Ocultar',
      showSchedule: 'Mostrar',
      schedule: 'Horário',
      timesInServerTime: 'Horários mostrados na',
      serverTimeUTC2: 'Hora do Servidor (UTC-2)',
      noAvailability: 'Sem dados de disponibilidade',

      // Validations
      invalidCarPower: 'Valor de poder de veículo inválido',
      invalidTowerLevel: 'Nível da torre inválido (1-35)',

      // Toast messages
      updatingCarPower: 'Atualizando poder do veículo...',
      updatingTowerLevel: 'Atualizando nível da torre...',
      verifyingUpdate: 'Verificando atualização...',
      carPowerUpdated: 'Poder do veículo atualizado com sucesso!',
      towerLevelUpdated: 'Nível da torre atualizado com sucesso!',
      updateFailed: 'Falha ao atualizar',
      failedToUpdateCarPower: 'Falha ao atualizar poder do veículo',
      failedToUpdateTowerLevel: 'Falha ao atualizar nível da torre',
      couldNotVerifyUpdate: 'Não foi possível verificar a atualização. Atualize manualmente.',

      // Delete member
      deleteMember: 'Eliminar membro',
      deletingMember: 'Eliminando membro...',
      verifyingDeletion: 'Verificando eliminação...',
      memberDeleted: 'Membro eliminado com sucesso!',
      failedToDeleteMember: 'Falha ao eliminar membro',
      couldNotVerifyDeletion: 'Não foi possível verificar a eliminação. Atualize manualmente.',

      // Edit username
      editUsername: 'Edit username',
      updatingUsername: 'Updating username...',
      usernameUpdated: 'Username updated successfully!',
      failedToUpdateUsername: 'Failed to update username',
      invalidUsername: 'Invalid username',
      usernameTooLong: 'Username too long',
    },

    // Members List
    membersList: {
      allianceRoster: 'Lista da Aliança',
      totalOperatives: 'Total de Operativos:',
      deleteAll: 'Eliminar Tudo',
      loadingRoster: 'Carregando Lista da Aliança...',
      noOperatives: 'Nenhum Operativo Registado',
      beFirstToSubmit: 'Seja o primeiro a enviar o seu horário',
      sortBy: 'Ordenar Por:',
      username: 'Nome de Utilizador',
      carPower: 'Poder do Veículo',
      towerLevel: 'Nível da Torre',
      deletingAllMembers: 'Eliminando Todos os Membros...',
      criticalOperation: 'Operação crítica em progresso...',

      // Toast messages
      failedToLoad: 'Falha ao carregar a lista de membros',
      deletingMembers: 'Eliminando todos os membros...',
      verifyingDeletion: 'Verificando eliminação...',
      allMembersDeleted: 'Todos os membros eliminados com sucesso!',
      deleteFailed: 'Falha ao eliminar membros - Tente novamente',
      couldNotVerifyDeletion: 'Não foi possível verificar a eliminação. Atualize manualmente.',
    },

    // Delete Confirmation Modal
    deleteModal: {
      criticalWarning: 'Aviso Crítico',
      deleteAllMembers: 'ELIMINAR TODOS OS',
      members: 'MEMBROS',
      youAreAboutToDelete: 'Está prestes a',
      fromRoster: 'da lista da aliança.',
      cannotBeUndone: 'Esta ação NÃO pode ser desfeita!',
      enterPasswordToConfirm: 'Digite a Senha para Confirmar a Eliminação',
      enterPasswordPlaceholder: 'Digite a senha...',
      typeRequired: 'Digite a senha necessária para autorizar esta operação crítica',
      incorrectPassword: 'Senha incorreta. Eliminação cancelada.',
      cancel: 'Cancelar',
      deleteAll: 'Eliminar Tudo',
    },

    // Delete Member Modal
    deleteMemberModal: {
      criticalWarning: 'Aviso Crítico',
      youAreAboutToDelete: 'Está prestes a eliminar',
      fromRoster: 'da lista da aliança.',
      cannotBeUndone: 'Esta ação NÃO pode ser desfeita!',
      enterPasswordToConfirm: 'Digite a Senha para Confirmar a Eliminação',
      enterPasswordPlaceholder: 'Digite a senha...',
      typeRequired: 'Digite a senha necessária para autorizar esta operação crítica',
      incorrectPassword: 'Senha incorreta. Eliminação cancelada.',
      cancel: 'Cancelar',
      deleteMember: 'Eliminar Membro',
    },

    // Optimal Schedule Calendar
    optimalSchedule: {
      optimalEventSchedule: 'Horário Ótimo de Eventos',
      bestTimeSlotsBasedOn: 'Melhores horários baseados em',
      member: 'membro',
      members: 'membros',
      availability: 'disponibilidade',
      allTimesShownIn: 'Todos os horários mostrados na',
      recommendedEventTime: 'Horário de Evento Recomendado',
      availabilityPercentage: 'Disponibilidade',
      availabilityLegend: 'Legenda de Disponibilidade',
      excellent: 'Excelente',
      good: 'Bom',
      moderate: 'Moderado',
      low: 'Baixo',
      veryLow: 'Muito Baixo',
      peak: 'Pico:',
      analyzingData: 'Analisando Dados de Disponibilidade...',
      noMemberData: 'Sem Dados de Membros Disponíveis',
      submitSchedulesFirst: 'Os membros precisam enviar os seus horários primeiro',
      membersAvailable: 'Membros',
      availableMembers: 'Membros Disponíveis',
      available: 'disponíveis',
      sortedByCarPower: 'Ordenado por poder de veículo (do mais alto ao mais baixo)',
    },

    // Timezone
    timezone: {
      serverTime: 'Hora do Servidor (UTC-2)',
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
      export: 'Exportar para CSV',
      import: 'Importar de CSV',
      exportSuccess: '{count} membros exportados com sucesso',
      exportFailed: 'Falha ao exportar CSV',
      importSuccess: '{count} membros importados com sucesso',
      importFailed: 'Falha ao importar CSV',
      importing: 'Importando membros...',
      verifyingImport: 'Verificando importação...',
      couldNotVerifyImport: 'Não foi possível verificar a importação. Atualize manualmente.',
      dragDropArea: 'Arraste e solte o arquivo CSV aqui ou clique para procurar',
      selectFile: 'Selecionar Arquivo CSV',
      supportedFormat: 'Formato suportado: .csv',
      validating: 'Validando dados CSV...',
      validationSuccess: 'Validação Bem-Sucedida',
      validationFailed: 'Validação Falhou',
      foundValidMembers: '{count} membros válidos encontrados',
      previewTitle: 'Pré-visualização de Importação',
      selectImportMode: 'Selecionar Modo de Importação',
      importNote: 'Todos os horários estão em Hora do Servidor (UTC-2)',
      members: 'membros',
      errors: 'erros',
      new: 'Novo',
      exists: 'Existe',
      status: 'Status',
      destructive: 'Destrutivo',
      recommended: 'Recomendado',
      safe: 'Seguro',
      willDelete: 'Excluirá {count} membros existentes',
      willUpdate: 'Atualizará: {count}',
      willAdd: 'Adicionará: {count}',
      willSkip: 'Pulará: {count}',
      errors: {
        noMembers: 'Nenhum membro para exportar',
        noData: 'Nenhum dado para importar',
        invalidFile: 'Formato de arquivo inválido. Carregue um arquivo CSV.',
        invalidStructure: 'Estrutura CSV inválida. Colunas obrigatórias ausentes.',
        emptyFile: 'O arquivo CSV está vazio',
      },
      importModes: {
        replace: 'Substituir Tudo',
        replaceDesc: 'Excluir todos os membros existentes e importar novos',
        merge: 'Mesclar e Atualizar',
        mergeDesc: 'Atualizar membros existentes e adicionar novos',
        addOnly: 'Adicionar Apenas Novos',
        addOnlyDesc: 'Adicionar apenas membros que não existem (pular duplicados)',
      },
      conflicts: {
        title: 'Conflitos Detectados',
        existing: '{count} membros existentes serão afetados',
      },
    },
  },

  it: {
    // Common
    common: {
      loading: 'Caricamento...',
      submit: 'Invia',
      cancel: 'Annulla',
      delete: 'Elimina',
      edit: 'Modifica',
      save: 'Salva',
      close: 'Chiudi',
      confirm: 'Conferma',
      yes: 'Sì',
      no: 'No',
      goBack: 'Go Back',
      to: 'to',
    },

    // Days of the week
    days: {
      monday: 'Lunedì',
      tuesday: 'Martedì',
      wednesday: 'Mercoledì',
      thursday: 'Giovedì',
      friday: 'Venerdì',
      saturday: 'Sabato',
      sunday: 'Domenica',
    },

    // App
    app: {
      initializingSystem: 'INIZIALIZZAZIONE SISTEMA...',
    },

    // Header/Navigation
    nav: {
      title: 'THE DARK CREED',
      subtitle: 'CENTRO DI COMANDO DELL\'ALLEANZA',
      submitSchedule: 'INVIA ORARIO',
      submitScheduleShort: 'INVIA',
      viewRoster: 'VISUALIZZA LISTA',
      viewRosterShort: 'LISTA',
      optimalSchedule: 'ORARIO OTTIMALE',
      optimalScheduleShort: 'OTTIMALE',
      adminDashboard: 'ADMIN PANEL',
      adminDashboardShort: 'ADMIN',
    },

    // Authentication
    auth: {
      allianceAccess: 'Accesso all\'Alleanza',
      accessToken: 'Token di Accesso dell\'Alleanza',
      enterToken: 'Inserisci il tuo token di accesso...',
      verifying: 'Verifica in corso...',
      accessScheduler: 'Accedi al Pianificatore',
      contactLeader: 'Contatta il leader della tua alleanza per ottenere un token di accesso',
      credentialsStored: 'Le tue credenziali saranno archiviate localmente per accesso permanente',
      enterTokenPrompt: 'Inserisci il tuo token di accesso dell\'alleanza per utilizzare il Pianificatore TDC.',
      invalidToken: 'Token di accesso non valido. Verifica le tue credenziali.',
      verificationFailed: 'Verifica delle credenziali fallita. Riprova.',
      authRequired: 'Autenticazione richiesta. Aggiorna la pagina.',

      // Password prompt
      theDarkCreed: 'The Dark Creed',
      restrictedAccess: 'Accesso Limitato - Autorizzazione Richiesta',
      alliancePassword: 'Password dell\'Alleanza',
      enterAccessCode: 'Inserisci il codice di accesso',
      verifyingAccess: 'Verifica Accesso',
      accessSystem: 'Accedi al Sistema',
      contactCommander: 'Contatta il comandante della tua alleanza per le credenziali',
      accessGranted: 'Accesso consentito - Benvenuto a The Dark Creed',
      accessDenied: 'Accesso negato - Credenziali non valide',
      authSystemFailure: 'Errore sistema di autenticazione - Riprova',
      enterPassword: 'Per favore inserisci la password',
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
      submitSchedule: 'Invia Orario',
      timezoneConfig: 'Configurazione Fuso Orario',
      timezoneImportant: 'Importante:',
      timezoneDescription: 'Seleziona il tuo fuso orario locale. Gli orari saranno mostrati nel tuo fuso orario, poi convertiti automaticamente all\'ora del server di gioco (UTC-2).',
      yourTimezone: 'Tuo Fuso Orario',
      detectingTimezone: 'Rilevamento fuso orario...',
      selected: 'Selezionato:',
      serverTime: 'Ora del Server:',
      serverTimeValue: 'UTC-2 (Server di Gioco)',
      operatorInfo: 'Informazioni Operatore',
      inGameUsername: 'Nome Utente nel Gioco *',
      yourCallsign: 'Il tuo nominativo',
      carPower: 'Potenza Veicolo (M) *',
      carPowerPlaceholder: 'es., 2.5',
      towerLevel: 'Livello Torre (1-35) *',
      towerLevelPlaceholder: 'es., 25',
      availabilitySchedule: 'Orario di Disponibilità',
      timesInLocalTimezone: 'Gli orari mostrati sotto sono nel',
      yourLocalTimezone: 'tuo fuso orario locale',
      autoConverted: 'Saranno convertiti automaticamente all\'ora del server (UTC-2) al salvataggio.',
      submitting: 'Invio in corso',
      processingSubmission: 'Elaborazione Invio...',
      doNotClose: 'Non chiudere questa finestra',
      savingAndVerifying: 'Salvataggio dati e verifica...',

      // Validations
      usernameRequired: 'Nome utente nel gioco è obbligatorio',
      validCarPowerRequired: 'Potenza veicolo valida richiesta (in milioni)',
      towerLevelRange: 'Il livello torre deve essere tra 1 e 35',
      selectTimeSlot: 'Seleziona almeno un orario',

      // Toast messages
      submittingSchedule: 'Invio orario...',
      verifyingData: 'Verifica che i dati siano salvati...',
      scheduleSubmitted: 'Orario inviato e verificato con successo!',
      submissionFailed: 'Invio fallito - Riprova',
      couldNotVerify: 'Impossibile verificare che i dati siano stati salvati. Controlla manualmente la lista membri.',
    },

    // Time Slot Picker
    timeSlotPicker: {
      missionBrief: 'Briefing Missione:',
      instructions: 'Seleziona tutti gli orari in cui sei disponibile per operazioni. Si possono selezionare più orari per giorno.',
    },

    // Member Card
    memberCard: {
      updated: 'Aggiornato:',
      carPower: 'Potenza Veicolo',
      tower: 'Torre',
      editCarPower: 'Modifica potenza veicolo',
      editTowerLevel: 'Modifica livello torre',
      save: 'Salva',
      cancel: 'Annulla',
      timezone: 'Fuso Orario:',
      hideSchedule: 'Nascondi',
      showSchedule: 'Mostra',
      schedule: 'Orario',
      timesInServerTime: 'Orari mostrati nell\'',
      serverTimeUTC2: 'Ora del Server (UTC-2)',
      noAvailability: 'Nessun dato di disponibilità',

      // Validations
      invalidCarPower: 'Valore potenza veicolo non valido',
      invalidTowerLevel: 'Livello torre non valido (1-35)',

      // Toast messages
      updatingCarPower: 'Aggiornamento potenza veicolo...',
      updatingTowerLevel: 'Aggiornamento livello torre...',
      verifyingUpdate: 'Verifica aggiornamento...',
      carPowerUpdated: 'Potenza veicolo aggiornata con successo!',
      towerLevelUpdated: 'Livello torre aggiornato con successo!',
      updateFailed: 'Aggiornamento fallito',
      failedToUpdateCarPower: 'Aggiornamento potenza veicolo fallito',
      failedToUpdateTowerLevel: 'Aggiornamento livello torre fallito',
      couldNotVerifyUpdate: 'Impossibile verificare l\'aggiornamento. Aggiorna manualmente.',

      // Delete member
      deleteMember: 'Elimina membro',
      deletingMember: 'Eliminazione membro...',
      verifyingDeletion: 'Verifica eliminazione...',
      memberDeleted: 'Membro eliminato con successo!',
      failedToDeleteMember: 'Eliminazione membro fallita',
      couldNotVerifyDeletion: 'Impossibile verificare l\'eliminazione. Aggiorna manualmente.',

      // Edit username
      editUsername: 'Edit username',
      updatingUsername: 'Updating username...',
      usernameUpdated: 'Username updated successfully!',
      failedToUpdateUsername: 'Failed to update username',
      invalidUsername: 'Invalid username',
      usernameTooLong: 'Username too long',
    },

    // Members List
    membersList: {
      allianceRoster: 'Lista dell\'Alleanza',
      totalOperatives: 'Operativi Totali:',
      deleteAll: 'Elimina Tutto',
      loadingRoster: 'Caricamento Lista dell\'Alleanza...',
      noOperatives: 'Nessun Operativo Registrato',
      beFirstToSubmit: 'Sii il primo a inviare il tuo orario',
      sortBy: 'Ordina Per:',
      username: 'Nome Utente',
      carPower: 'Potenza Veicolo',
      towerLevel: 'Livello Torre',
      deletingAllMembers: 'Eliminazione di Tutti i Membri...',
      criticalOperation: 'Operazione critica in corso...',

      // Toast messages
      failedToLoad: 'Caricamento lista membri fallito',
      deletingMembers: 'Eliminazione di tutti i membri...',
      verifyingDeletion: 'Verifica eliminazione...',
      allMembersDeleted: 'Tutti i membri eliminati con successo!',
      deleteFailed: 'Eliminazione fallita - Riprova',
      couldNotVerifyDeletion: 'Impossibile verificare l\'eliminazione. Aggiorna manualmente.',
    },

    // Delete Confirmation Modal
    deleteModal: {
      criticalWarning: 'Avviso Critico',
      deleteAllMembers: 'ELIMINA TUTTI I',
      members: 'MEMBRI',
      youAreAboutToDelete: 'Stai per',
      fromRoster: 'dalla lista dell\'alleanza.',
      cannotBeUndone: 'Questa azione NON può essere annullata!',
      enterPasswordToConfirm: 'Inserisci la Password per Confermare l\'Eliminazione',
      enterPasswordPlaceholder: 'Inserisci la password...',
      typeRequired: 'Digita la password richiesta per autorizzare questa operazione critica',
      incorrectPassword: 'Password errata. Eliminazione annullata.',
      cancel: 'Annulla',
      deleteAll: 'Elimina Tutto',
    },

    // Delete Member Modal
    deleteMemberModal: {
      criticalWarning: 'Avviso Critico',
      youAreAboutToDelete: 'Stai per eliminare',
      fromRoster: 'dalla lista dell\'alleanza.',
      cannotBeUndone: 'Questa azione NON può essere annullata!',
      enterPasswordToConfirm: 'Inserisci la Password per Confermare l\'Eliminazione',
      enterPasswordPlaceholder: 'Inserisci la password...',
      typeRequired: 'Digita la password richiesta per autorizzare questa operazione critica',
      incorrectPassword: 'Password errata. Eliminazione annullata.',
      cancel: 'Annulla',
      deleteMember: 'Elimina Membro',
    },

    // Optimal Schedule Calendar
    optimalSchedule: {
      optimalEventSchedule: 'Orario Ottimale degli Eventi',
      bestTimeSlotsBasedOn: 'Migliori orari basati su',
      member: 'membro',
      members: 'membri',
      availability: 'disponibilità',
      allTimesShownIn: 'Tutti gli orari mostrati nell\'',
      recommendedEventTime: 'Orario Evento Raccomandato',
      availabilityPercentage: 'Disponibilità',
      availabilityLegend: 'Legenda Disponibilità',
      excellent: 'Eccellente',
      good: 'Buono',
      moderate: 'Moderato',
      low: 'Basso',
      veryLow: 'Molto Basso',
      peak: 'Picco:',
      analyzingData: 'Analisi Dati di Disponibilità...',
      noMemberData: 'Nessun Dato Membro Disponibile',
      submitSchedulesFirst: 'I membri devono prima inviare i loro orari',
      membersAvailable: 'Membri',
      availableMembers: 'Membri Disponibili',
      available: 'disponibili',
      sortedByCarPower: 'Ordinato per potenza veicolo (dal più alto al più basso)',
    },

    // Timezone
    timezone: {
      serverTime: 'Ora del Server (UTC-2)',
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
      export: 'Esporta in CSV',
      import: 'Importa da CSV',
      exportSuccess: '{count} membri esportati con successo',
      exportFailed: 'Esportazione CSV fallita',
      importSuccess: '{count} membri importati con successo',
      importFailed: 'Importazione CSV fallita',
      importing: 'Importazione membri in corso...',
      verifyingImport: 'Verifica importazione...',
      couldNotVerifyImport: 'Impossibile verificare l\'importazione. Aggiorna manualmente.',
      dragDropArea: 'Trascina e rilascia il file CSV qui o clicca per sfogliare',
      selectFile: 'Seleziona File CSV',
      supportedFormat: 'Formato supportato: .csv',
      validating: 'Validazione dati CSV...',
      validationSuccess: 'Validazione Riuscita',
      validationFailed: 'Validazione Fallita',
      foundValidMembers: '{count} membri validi trovati',
      previewTitle: 'Anteprima Importazione',
      selectImportMode: 'Seleziona Modalità di Importazione',
      importNote: 'Tutti gli orari sono in Ora del Server (UTC-2)',
      members: 'membri',
      errors: 'errori',
      new: 'Nuovo',
      exists: 'Esiste',
      status: 'Stato',
      destructive: 'Distruttivo',
      recommended: 'Consigliato',
      safe: 'Sicuro',
      willDelete: 'Eliminerà {count} membri esistenti',
      willUpdate: 'Aggiornerà: {count}',
      willAdd: 'Aggiungerà: {count}',
      willSkip: 'Salterà: {count}',
      errors: {
        noMembers: 'Nessun membro da esportare',
        noData: 'Nessun dato da importare',
        invalidFile: 'Formato file non valido. Carica un file CSV.',
        invalidStructure: 'Struttura CSV non valida. Colonne richieste mancanti.',
        emptyFile: 'Il file CSV è vuoto',
      },
      importModes: {
        replace: 'Sostituisci Tutto',
        replaceDesc: 'Elimina tutti i membri esistenti e importa nuovi',
        merge: 'Unisci e Aggiorna',
        mergeDesc: 'Aggiorna membri esistenti e aggiungi nuovi',
        addOnly: 'Aggiungi Solo Nuovi',
        addOnlyDesc: 'Aggiungi solo membri che non esistono (salta duplicati)',
      },
      conflicts: {
        title: 'Conflitti Rilevati',
        existing: '{count} membri esistenti saranno interessati',
      },
    },
  },
};

/**
 * Get nested translation value
 * @param {Object} obj - Translation object
 * @param {string} path - Dot-separated path (e.g., 'nav.title')
 * @param {string} defaultValue - Default value if not found
 */
export function getNestedValue(obj, path, defaultValue = '') {
  return path.split('.').reduce((acc, part) => acc?.[part], obj) ?? defaultValue;
}
