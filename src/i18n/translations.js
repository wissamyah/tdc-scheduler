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
