/** Italian translations */
export default {
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
      welcome: 'Benvenuto',
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
      login: 'Accedi',
      username: 'Nome Utente',
      password: 'Password',
      enterUsername: 'Inserisci il tuo nome utente',
      enterPassword: 'Inserisci la tua password',
      loginButton: 'Accedi al Sistema',
      loggingIn: 'Accesso in corso...',
      loginSuccessful: 'Bentornato!',
      invalidCredentials: 'Nome utente o password non validi',
      accountPending: 'Il tuo account è in attesa di approvazione dell\'amministratore',
      accountInactive: 'Il tuo account non è attivo',
      loginPrompt: 'Inserisci le tue credenziali per accedere allo Scheduler TDC',

      // Registration
      register: 'Registrati',
      registerButton: 'Crea Account',
      registering: 'Registrazione in corso...',
      confirmPassword: 'Conferma Password',
      confirmPasswordRequired: 'Per favore conferma la tua password',
      carPower: 'Potenza Veicolo (M)',
      towerLevel: 'Livello Torre (1-35)',
      timezone: 'Fuso Orario',
      selectTimezone: 'Per favore seleziona il tuo fuso orario',
      registrationSuccess: 'Registrazione inviata! In attesa di approvazione dell\'amministratore.',
      registrationFailed: 'Registrazione fallita. Per favore riprova.',
      usernameExists: 'Nome utente già in uso',
      usernameTooShort: 'Il nome utente deve avere almeno 3 caratteri',
      usernameTooLong: 'Il nome utente deve avere 20 caratteri o meno',
      usernameInvalid: 'Il nome utente può contenere solo lettere, numeri e trattini bassi',
      usernameHint: '3-20 caratteri, solo lettere, numeri e trattini bassi',
      passwordMismatch: 'Le password non corrispondono',
      weakPassword: 'La password deve avere almeno 8 caratteri',
      dontHaveAccount: 'Non hai un account?',
      alreadyHaveAccount: 'Hai già un account?',
      backToLogin: 'Torna al Login',
      awaitingApproval: 'In Attesa di Approvazione',
      registrationPending: 'La tua registrazione è in attesa di approvazione dell\'amministratore. Potrai accedere una volta approvato.',
      approvalNote: 'Un amministratore esaminerà la tua registrazione a breve.',
      registerPrompt: 'Crea un account per unirti all\'Alleanza TDC. La tua registrazione sarà esaminata da un amministratore.',

      // Password Change
      changePassword: 'Cambia Password',
      changePasswordButton: 'Aggiorna Password',
      oldPassword: 'Password Attuale',
      newPassword: 'Nuova Password',
      tempPassword: 'Password Temporanea',
      enterOldPassword: 'Inserisci la tua password attuale',
      enterNewPassword: 'Inserisci la tua nuova password',
      enterTempPassword: 'Inserisci la password temporanea',
      confirmNewPassword: 'Conferma Nuova Password',
      firstLoginTitle: 'Primo Accesso - Imposta la Tua Password',
      firstLoginMessage: 'Per favore cambia la tua password temporanea per continuare.',
      passwordChanged: 'Password cambiata con successo',
      passwordChangeFailed: 'Impossibile cambiare la password',
      incorrectOldPassword: 'La password attuale non è corretta',
      newPasswordSameAsOld: 'La nuova password deve essere diversa dalla password attuale',
      updating: 'Aggiornamento in corso...',
      securityRequired: 'Aggiornamento di Sicurezza Richiesto',
      changePasswordNote: 'Per la tua sicurezza, devi cambiare la tua password temporanea prima di accedere al sistema.',
      loggedInAs: 'Connesso come',
      cannotSkipPassword: 'Devi cambiare la tua password per continuare',

      // Logout
      logout: 'Esci',
      logoutConfirm: 'Sei sicuro di voler uscire?',
      logoutSuccess: 'Disconnesso con successo'
    },

    // Access Gate
    accessGate: {
      title: 'Accesso alla Piattaforma',
      subtitle: 'Chiave di accesso unica richiesta',
      oneTimeOnly: 'Configurazione Unica',
      explanation: 'Devi inserire questa chiave di accesso solo una volta. Sarà memorizzata in modo sicuro nel tuo browser.',
      reason1: 'Abilita l\'archiviazione e il recupero sicuro dei dati',
      reason2: 'Richiesto per invii e aggiornamenti dello schedule',
      reason3: 'Non deve mai più essere inserito su questo dispositivo',
      accessToken: 'Chiave di Accesso dell\'Alleanza',
      enterToken: 'Inserisci la chiave di accesso...',
      contactAdmin: 'Contatta il tuo amministratore dell\'alleanza per ottenere la chiave di accesso',
      unlockAccess: 'Sblocca Accesso',
      verifying: 'Verifica in corso...',
      accessGranted: 'Accesso concesso! Benvenuto a The Dark Creed',
      invalidToken: 'Chiave di accesso non valida. Per favore controlla e riprova.',
      tokenRequired: 'Per favore inserisci la chiave di accesso',
      securityNote: 'La tua chiave di accesso è memorizzata localmente e non viene mai trasmessa altrove',
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
      title: 'Impostazioni',
      subtitle: 'Gestisci le impostazioni del tuo account',
      settings: 'Impostazioni',
      passwordChangeInfo: 'Per motivi di sicurezza, puoi aggiornare la tua password in qualsiasi momento. Scegli una password forte che non hai utilizzato altrove.',
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
    }
  };

