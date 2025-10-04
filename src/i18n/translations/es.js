/** Spanish translations */
export default {
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
      events: 'EVENTOS',
      eventsShort: 'EVENTOS',
      adminDashboard: 'ADMIN PANEL',
      adminDashboardShort: 'ADMIN',
      welcome: 'Bienvenido',
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
      login: 'Iniciar Sesión',
      username: 'Nombre de Usuario',
      password: 'Contraseña',
      enterUsername: 'Ingresa tu nombre de usuario',
      enterPassword: 'Ingresa tu contraseña',
      loginButton: 'Acceder al Sistema',
      loggingIn: 'Iniciando Sesión...',
      loginSuccessful: '¡Bienvenido de nuevo!',
      invalidCredentials: 'Nombre de usuario o contraseña inválidos',
      accountPending: 'Tu cuenta está pendiente de aprobación del administrador',
      accountInactive: 'Tu cuenta no está activa',
      loginPrompt: 'Ingresa tus credenciales para acceder al Programador TDC',

      // Registration
      register: 'Registrarse',
      registerButton: 'Crear Cuenta',
      registering: 'Registrando...',
      confirmPassword: 'Confirmar Contraseña',
      confirmPasswordRequired: 'Por favor confirma tu contraseña',
      carPower: 'Potencia del Vehículo (M)',
      towerLevel: 'Nivel de Torre (1-35)',
      timezone: 'Zona Horaria',
      selectTimezone: 'Por favor selecciona tu zona horaria',
      registrationSuccess: '¡Registro enviado! Esperando aprobación del administrador.',
      registrationFailed: 'Registro fallido. Por favor intenta de nuevo.',
      usernameExists: 'Nombre de usuario ya está en uso',
      usernameTooShort: 'El nombre de usuario debe tener al menos 3 caracteres',
      usernameTooLong: 'El nombre de usuario debe tener 20 caracteres o menos',
      usernameInvalid: 'El nombre de usuario solo puede contener letras, números y guiones bajos',
      usernameHint: '3-20 caracteres, solo letras, números y guiones bajos',
      passwordMismatch: 'Las contraseñas no coinciden',
      weakPassword: 'La contraseña debe tener al menos 8 caracteres',
      dontHaveAccount: '¿No tienes una cuenta?',
      alreadyHaveAccount: '¿Ya tienes una cuenta?',
      backToLogin: 'Volver al Inicio de Sesión',
      awaitingApproval: 'Esperando Aprobación',
      registrationPending: 'Tu registro está pendiente de aprobación del administrador. Podrás iniciar sesión una vez aprobado.',
      approvalNote: 'Un administrador revisará tu registro en breve.',
      registerPrompt: 'Crea una cuenta para unirte a la Alianza TDC. Tu registro será revisado por un administrador.',

      // Password Change
      changePassword: 'Cambiar Contraseña',
      changePasswordButton: 'Actualizar Contraseña',
      oldPassword: 'Contraseña Actual',
      newPassword: 'Nueva Contraseña',
      tempPassword: 'Contraseña Temporal',
      enterOldPassword: 'Ingresa tu contraseña actual',
      enterNewPassword: 'Ingresa tu nueva contraseña',
      enterTempPassword: 'Ingresa la contraseña temporal',
      confirmNewPassword: 'Confirmar Nueva Contraseña',
      firstLoginTitle: 'Primer Inicio de Sesión - Establece tu Contraseña',
      firstLoginMessage: 'Por favor cambia tu contraseña temporal para continuar.',
      passwordChanged: 'Contraseña cambiada exitosamente',
      passwordChangeFailed: 'Error al cambiar la contraseña',
      incorrectOldPassword: 'La contraseña actual es incorrecta',
      newPasswordSameAsOld: 'La nueva contraseña debe ser diferente de la contraseña actual',
      updating: 'Actualizando...',
      securityRequired: 'Actualización de Seguridad Requerida',
      changePasswordNote: 'Por tu seguridad, debes cambiar tu contraseña temporal antes de acceder al sistema.',
      loggedInAs: 'Conectado como',
      cannotSkipPassword: 'Debes cambiar tu contraseña para continuar',

      // Logout
      logout: 'Cerrar Sesión',
      logoutConfirm: '¿Estás seguro de que quieres cerrar sesión?',
      logoutSuccess: 'Sesión cerrada exitosamente'
    },

    // Access Gate
    accessGate: {
      title: 'Acceso a la Plataforma',
      subtitle: 'Clave de acceso única requerida',
      oneTimeOnly: 'Configuración Única',
      explanation: 'Solo necesitas ingresar esta clave de acceso una vez. Se almacenará de forma segura en tu navegador.',
      reason1: 'Permite el almacenamiento y recuperación segura de datos',
      reason2: 'Requerido para envíos y actualizaciones de horarios',
      reason3: 'Nunca necesita ser ingresado nuevamente en este dispositivo',
      accessToken: 'Clave de Acceso de la Alianza',
      enterToken: 'Ingresa la clave de acceso...',
      contactAdmin: 'Contacta a tu administrador de alianza para obtener la clave de acceso',
      unlockAccess: 'Desbloquear Acceso',
      verifying: 'Verificando...',
      accessGranted: '¡Acceso concedido! Bienvenido a The Dark Creed',
      invalidToken: 'Clave de acceso inválida. Por favor verifica e intenta de nuevo.',
      tokenRequired: 'Por favor ingresa la clave de acceso',
      securityNote: 'Tu clave de acceso se almacena localmente y nunca se transmite a otro lugar',
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
      neverLoggedIn: 'Nunca Conectado',
      noUsersFound: 'No users found',
      you: 'You',
      copyUsername: 'Copiar nombre de usuario',
      usernameCopied: '¡Nombre de usuario copiado al portapapeles!',
      copyAll: 'Copiar Todos',
      copyAllUsernames: 'Copiar todos los nombres de usuario',
      allUsernamesCopied: '¡{count} nombres de usuario copiados al portapapeles!',

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
      title: 'Configuración',
      subtitle: 'Administrar la configuración de tu cuenta',
      settings: 'Configuración',
      passwordChangeInfo: 'Por razones de seguridad, puedes actualizar tu contraseña en cualquier momento. Elige una contraseña segura que no hayas usado en otro lugar.',
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
      submittingAs: 'Enviando como',
      usernameAutoFilled: 'Rellenado automáticamente desde su cuenta',
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

    // Auto-refresh
    autoRefresh: {
      enabled: 'Actualización automática activada',
      disabled: 'Actualización automática desactivada',
      refresh: 'Actualizar',
      manualRefresh: 'Haga clic para actualizar ahora',
      updating: 'Actualizando...',
    },

    // Events
    events: {
      events: 'Eventos', upcomingEvents: 'Próximos Eventos', pastEvents: 'Eventos Pasados',
      noEvents: 'Sin eventos', createEvent: 'Crear Evento', editEvent: 'Editar Evento',
      deleteEvent: 'Eliminar Evento', filter: 'Filtrar', all: 'Todos', upcoming: 'Próximos',
      past: 'Pasados', eventName: 'Nombre del Evento', eventDate: 'Fecha', startTime: 'Hora de Inicio',
      endTime: 'Hora de Fin', description: 'Descripción', createdBy: 'Creado por',
      serverTime: 'Hora del Servidor', timesInServerTime: 'Todas las horas mostradas en hora del servidor',
      rsvp: 'RSVP', going: 'Asistiré', maybe: 'Tal vez', notGoing: 'No asistiré',
      noResponse: 'Sin Respuesta', yourResponse: 'Tu Respuesta', rsvpUpdated: 'RSVP actualizado',
      rsvpFailed: 'Error al actualizar RSVP', loadingEvents: 'Cargando eventos...', loadFailed: 'Error al cargar eventos',
      eventCreated: 'Evento creado exitosamente', eventUpdated: 'Evento actualizado exitosamente',
      eventDeleted: 'Evento eliminado', createFailed: 'Error al crear evento', updateFailed: 'Error al actualizar evento',
      deleteFailed: 'Error al eliminar evento', deleteConfirm: '¿Eliminar este evento y todos los RSVPs?',
      noUpcomingEvents: 'No hay eventos próximos', noPastEvents: 'No hay eventos pasados',
      noEventsYet: 'Aún no se han creado eventos', createFirstEvent: 'Crear Primer Evento',
      manageEventsAndRSVPs: 'Gestionar eventos de la alianza y seguir RSVPs',
      noMembersInCategory: 'No hay miembros en esta categoría', eventNamePlaceholder: 'ej., Raid del Sábado por la Noche',
      descriptionPlaceholder: 'Agregar detalles o instrucciones del evento...',
      nameRequired: 'El nombre del evento es obligatorio', dateRequired: 'La fecha es obligatoria',
      startTimeRequired: 'La hora de inicio es obligatoria', endTimeRequired: 'La hora de fin es obligatoria',
      endTimeAfterStart: 'La hora de fin debe ser después de la hora de inicio',
      dateInFuture: 'La fecha debe ser en el futuro',
    },
  };

