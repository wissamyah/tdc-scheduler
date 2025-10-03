/** Portuguese translations */
export default {
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
      welcome: 'Bem-vindo',
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
      login: 'Entrar',
      username: 'Nome de Usuário',
      password: 'Senha',
      enterUsername: 'Digite seu nome de usuário',
      enterPassword: 'Digite sua senha',
      loginButton: 'Acessar Sistema',
      loggingIn: 'Entrando...',
      loginSuccessful: 'Bem-vindo de volta!',
      invalidCredentials: 'Nome de usuário ou senha inválidos',
      accountPending: 'Sua conta está aguardando aprovação do administrador',
      accountInactive: 'Sua conta não está ativa',
      loginPrompt: 'Digite suas credenciais para acessar o Agendador TDC',

      // Registration
      register: 'Registrar',
      registerButton: 'Criar Conta',
      registering: 'Registrando...',
      confirmPassword: 'Confirmar Senha',
      confirmPasswordRequired: 'Por favor confirme sua senha',
      carPower: 'Poder do Veículo (M)',
      towerLevel: 'Nível da Torre (1-35)',
      timezone: 'Fuso Horário',
      selectTimezone: 'Por favor selecione seu fuso horário',
      registrationSuccess: 'Registro enviado! Aguardando aprovação do administrador.',
      registrationFailed: 'Falha no registro. Por favor tente novamente.',
      usernameExists: 'Nome de usuário já está em uso',
      usernameTooShort: 'O nome de usuário deve ter pelo menos 3 caracteres',
      usernameTooLong: 'O nome de usuário deve ter 20 caracteres ou menos',
      usernameInvalid: 'O nome de usuário só pode conter letras, números e sublinhados',
      usernameHint: '3-20 caracteres, apenas letras, números e sublinhados',
      passwordMismatch: 'As senhas não correspondem',
      weakPassword: 'A senha deve ter pelo menos 8 caracteres',
      dontHaveAccount: 'Não tem uma conta?',
      alreadyHaveAccount: 'Já tem uma conta?',
      backToLogin: 'Voltar ao Login',
      awaitingApproval: 'Aguardando Aprovação',
      registrationPending: 'Seu registro está aguardando aprovação do administrador. Você poderá fazer login assim que for aprovado.',
      approvalNote: 'Um administrador revisará seu registro em breve.',
      registerPrompt: 'Crie uma conta para se juntar à Aliança TDC. Seu registro será revisado por um administrador.',

      // Password Change
      changePassword: 'Alterar Senha',
      changePasswordButton: 'Atualizar Senha',
      oldPassword: 'Senha Atual',
      newPassword: 'Nova Senha',
      tempPassword: 'Senha Temporária',
      enterOldPassword: 'Digite sua senha atual',
      enterNewPassword: 'Digite sua nova senha',
      enterTempPassword: 'Digite a senha temporária',
      confirmNewPassword: 'Confirmar Nova Senha',
      firstLoginTitle: 'Primeiro Login - Defina Sua Senha',
      firstLoginMessage: 'Por favor altere sua senha temporária para continuar.',
      passwordChanged: 'Senha alterada com sucesso',
      passwordChangeFailed: 'Falha ao alterar a senha',
      incorrectOldPassword: 'A senha atual está incorreta',
      newPasswordSameAsOld: 'A nova senha deve ser diferente da senha atual',
      updating: 'Atualizando...',
      securityRequired: 'Atualização de Segurança Necessária',
      changePasswordNote: 'Para sua segurança, você deve alterar sua senha temporária antes de acessar o sistema.',
      loggedInAs: 'Conectado como',
      cannotSkipPassword: 'Você deve alterar sua senha para continuar',

      // Logout
      logout: 'Sair',
      logoutConfirm: 'Tem certeza de que deseja sair?',
      logoutSuccess: 'Desconectado com sucesso'
    },

    // Access Gate
    accessGate: {
      title: 'Acesso à Plataforma',
      subtitle: 'Chave de acesso única necessária',
      oneTimeOnly: 'Configuração Única',
      explanation: 'Você só precisa inserir esta chave de acesso uma vez. Ela será armazenada com segurança no seu navegador.',
      reason1: 'Permite armazenamento e recuperação segura de dados',
      reason2: 'Necessário para envios e atualizações de agendamento',
      reason3: 'Nunca precisa ser inserido novamente neste dispositivo',
      accessToken: 'Chave de Acesso da Aliança',
      enterToken: 'Digite a chave de acesso...',
      contactAdmin: 'Contate seu administrador da aliança para obter a chave de acesso',
      unlockAccess: 'Desbloquear Acesso',
      verifying: 'Verificando...',
      accessGranted: 'Acesso concedido! Bem-vindo ao The Dark Creed',
      invalidToken: 'Chave de acesso inválida. Por favor verifique e tente novamente.',
      tokenRequired: 'Por favor insira a chave de acesso',
      securityNote: 'Sua chave de acesso é armazenada localmente e nunca é transmitida para outro lugar',
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
    }
  };

