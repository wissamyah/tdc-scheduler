/** French translations */
export default {
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
      welcome: 'Bienvenue',
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
      login: 'Connexion',
      username: 'Nom d\'utilisateur',
      password: 'Mot de passe',
      enterUsername: 'Entrez votre nom d\'utilisateur',
      enterPassword: 'Entrez votre mot de passe',
      loginButton: 'Accéder au Système',
      loggingIn: 'Connexion en cours...',
      loginSuccessful: 'Bon retour !',
      invalidCredentials: 'Nom d\'utilisateur ou mot de passe invalide',
      accountPending: 'Votre compte est en attente d\'approbation par l\'administrateur',
      accountInactive: 'Votre compte n\'est pas actif',
      loginPrompt: 'Entrez vos identifiants pour accéder au Planificateur TDC',

      // Registration
      register: 'Inscription',
      registerButton: 'Créer un Compte',
      registering: 'Inscription en cours...',
      confirmPassword: 'Confirmer le Mot de Passe',
      confirmPasswordRequired: 'Veuillez confirmer votre mot de passe',
      carPower: 'Puissance Voiture (M)',
      towerLevel: 'Niveau de Tour (1-35)',
      timezone: 'Fuseau Horaire',
      selectTimezone: 'Veuillez sélectionner votre fuseau horaire',
      registrationSuccess: 'Inscription soumise ! En attente d\'approbation par l\'administrateur.',
      registrationFailed: 'Échec de l\'inscription. Veuillez réessayer.',
      usernameExists: 'Nom d\'utilisateur déjà pris',
      usernameTooShort: 'Le nom d\'utilisateur doit comporter au moins 3 caractères',
      usernameTooLong: 'Le nom d\'utilisateur doit comporter 20 caractères ou moins',
      usernameInvalid: 'Le nom d\'utilisateur ne peut contenir que des lettres, des chiffres et des tirets bas',
      usernameHint: '3-20 caractères, lettres, chiffres et tirets bas uniquement',
      passwordMismatch: 'Les mots de passe ne correspondent pas',
      weakPassword: 'Le mot de passe doit comporter au moins 8 caractères',
      dontHaveAccount: "Vous n'avez pas de compte ?",
      alreadyHaveAccount: 'Vous avez déjà un compte ?',
      backToLogin: 'Retour à la Connexion',
      awaitingApproval: 'En Attente d\'Approbation',
      registrationPending: 'Votre inscription est en attente d\'approbation par l\'administrateur. Vous pourrez vous connecter une fois approuvé.',
      approvalNote: 'Un administrateur examinera votre inscription sous peu.',
      registerPrompt: 'Créez un compte pour rejoindre l\'Alliance TDC. Votre inscription sera examinée par un administrateur.',

      // Password Change
      changePassword: 'Changer le Mot de Passe',
      changePasswordButton: 'Mettre à Jour le Mot de Passe',
      oldPassword: 'Mot de Passe Actuel',
      newPassword: 'Nouveau Mot de Passe',
      tempPassword: 'Mot de Passe Temporaire',
      enterOldPassword: 'Entrez votre mot de passe actuel',
      enterNewPassword: 'Entrez votre nouveau mot de passe',
      enterTempPassword: 'Entrez le mot de passe temporaire',
      confirmNewPassword: 'Confirmer le Nouveau Mot de Passe',
      firstLoginTitle: 'Première Connexion - Définir Votre Mot de Passe',
      firstLoginMessage: 'Veuillez changer votre mot de passe temporaire pour continuer.',
      passwordChanged: 'Mot de passe changé avec succès',
      passwordChangeFailed: 'Échec du changement de mot de passe',
      incorrectOldPassword: 'Le mot de passe actuel est incorrect',
      newPasswordSameAsOld: 'Le nouveau mot de passe doit être différent du mot de passe actuel',
      updating: 'Mise à jour...',
      securityRequired: 'Mise à Jour de Sécurité Requise',
      changePasswordNote: 'Pour votre sécurité, vous devez changer votre mot de passe temporaire avant d\'accéder au système.',
      loggedInAs: 'Connecté en tant que',
      cannotSkipPassword: 'Vous devez changer votre mot de passe pour continuer',

      // Logout
      logout: 'Déconnexion',
      logoutConfirm: 'Êtes-vous sûr de vouloir vous déconnecter ?',
      logoutSuccess: 'Déconnexion réussie'
    },

    // Access Gate
    accessGate: {
      title: 'Accès à la Plateforme',
      subtitle: 'Clé d\'accès unique requise',
      oneTimeOnly: 'Configuration Unique',
      explanation: 'Vous n\'avez besoin d\'entrer cette clé d\'accès qu\'une seule fois. Elle sera stockée en toute sécurité dans votre navigateur.',
      reason1: 'Permet le stockage et la récupération sécurisés des données',
      reason2: 'Requis pour les soumissions et mises à jour d\'horaire',
      reason3: 'N\'a plus jamais besoin d\'être entré sur cet appareil',
      accessToken: 'Clé d\'Accès de l\'Alliance',
      enterToken: 'Entrez la clé d\'accès...',
      contactAdmin: 'Contactez votre administrateur d\'alliance pour obtenir la clé d\'accès',
      unlockAccess: 'Déverrouiller l\'Accès',
      verifying: 'Vérification...',
      accessGranted: 'Accès accordé ! Bienvenue à The Dark Creed',
      invalidToken: 'Clé d\'accès invalide. Veuillez vérifier et réessayer.',
      tokenRequired: 'Veuillez entrer la clé d\'accès',
      securityNote: 'Votre clé d\'accès est stockée localement et n\'est jamais transmise ailleurs',
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
      title: 'Paramètres',
      subtitle: 'Gérer les paramètres de votre compte',
      settings: 'Paramètres',
      passwordChangeInfo: 'Pour des raisons de sécurité, vous pouvez mettre à jour votre mot de passe à tout moment. Choisissez un mot de passe fort que vous n\'avez pas utilisé ailleurs.',
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
    }
  };

