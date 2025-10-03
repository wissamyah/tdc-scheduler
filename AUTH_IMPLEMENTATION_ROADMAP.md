# Authentication System Implementation Roadmap

**Project:** TDC Scheduler - Individual User Authentication with Admin Approval
**Started:** 2025-10-03
**Status:** In Progress (35% Complete)

---

## 🎯 Implementation Overview

Transforming shared GitHub PAT authentication into individual user login system with:
- Self-registration with admin approval
- Role-based permissions (Admin, Officer, Member)
- First-time password change flow
- Admin dashboard for user management
- Migration tool for existing members

---

## ✅ COMPLETED COMPONENTS

### Core Services & Utilities (100%)

#### 1. ✅ `src/services/userAuth.js` - Authentication Service
**Status:** Complete
**Lines:** 450+
**Functions Implemented:**
- `fetchAuthData(pat)` - Fetch auth.json from GitHub
- `updateAuthData(authData, pat, sha)` - Update auth.json
- `initializeAuthSystem(pat, adminUser)` - First-time setup
- `registerUser(userData)` - User registration (pending status)
- `loginUser(username, password)` - User login with validation
- `getCurrentUser()` - Get session data with 30-min timeout
- `logoutUser()` - Clear session
- `changePassword(oldPassword, newPassword)` - Update password
- `approveUser(userId)` - Admin approves pending user
- `rejectUser(userId)` - Admin rejects/deletes pending user
- `updateUserRole(userId, newRole)` - Admin changes user role
- `deleteUser(userId)` - Admin deletes user account
- `getAllUsers()` - Admin fetches all users
- `isAuthSystemInitialized()` - Check if auth.json exists

**Key Features:**
- SHA-256 password hashing
- Session management with timeout
- Role-based authorization checks
- GitHub API integration for data storage

---

#### 2. ✅ `src/context/AuthContext.jsx` - User State Management
**Status:** Complete
**Lines:** 100+
**Exports:**
- `AuthProvider` component
- `useAuth()` hook

**State Managed:**
- `currentUser` - Current logged-in user
- `loading` - Auth check loading state
- `authInitialized` - System initialization status

**Methods Provided:**
- `login(username, password)`
- `register(userData)`
- `logout()`
- `changePassword(oldPassword, newPassword)`
- `refreshAuthStatus()`
- `isAdmin()` - Check if user is admin
- `isOfficer()` - Check if user is officer
- `isMember()` - Check if user is member
- `isAuthenticated` - Boolean flag

---

#### 3. ✅ `src/utils/permissions.js` - Permission Utilities
**Status:** Complete
**Lines:** 180+
**Functions Implemented:**
- `canEditMember(currentUser, memberUsername)` - Edit permission check
- `canDeleteMember(currentUser, memberUsername)` - Delete permission check
- `canDeleteAllMembers(currentUser)` - Bulk delete permission
- `canManageCSV(currentUser)` - CSV import/export permission
- `canAccessAdminDashboard(currentUser)` - Admin panel access
- `canManageUsers(currentUser)` - User management permission
- `canSubmitSchedule(currentUser)` - Schedule submission permission
- `canViewMembers(currentUser)` - Member list view permission
- `canViewOptimalSchedule(currentUser)` - Optimal schedule view permission
- `getRoleDisplay(role)` - Get role styling (color, label, etc.)
- `getStatusDisplay(status)` - Get status styling (color, label, etc.)

**Permission Rules:**
- **Admin:** Full access to everything
- **Officer:** Can manage CSV, view all data
- **Member:** Can edit own data only, view all data

---

### UI Components (40%)

#### 4. ✅ `src/components/AdminInitialSetup.jsx` - First-Time Setup
**Status:** Complete
**Lines:** 350+
**Features:**
- Two-step wizard (PAT → Admin account)
- PAT verification with GitHub API
- Admin account creation with validation
- Progress indicator
- Form validation (username length, password strength, password match)
- Loading states and error handling
- Themed with creed-* colors

**Flow:**
1. User enters GitHub PAT
2. System verifies PAT
3. User creates admin account (username + password)
4. System initializes auth.json in GitHub
5. Admin is logged in automatically

---

#### 5. ✅ `src/components/LoginForm.jsx` - User Login
**Status:** Complete
**Lines:** 180+
**Features:**
- Username + password input
- Form validation
- Error handling (invalid credentials, pending approval, inactive account)
- Loading states
- Link to registration form
- Themed with creed-* colors
- Accessible and responsive

**Validation:**
- Required fields check
- Pending approval detection
- Inactive account detection
- Invalid credentials handling

---

## 🚧 IN PROGRESS / TODO COMPONENTS

### Phase 1: Core Authentication UI (60% remaining)

#### 6. ⏳ `src/components/RegisterForm.jsx` - User Registration
**Status:** TODO
**Priority:** HIGH
**Required Features:**
- Username input (3-20 chars, unique)
- Password input (min 8 chars)
- Confirm password input (must match)
- Car power input (float, > 0)
- Tower level input (1-35)
- Timezone selection (dropdown)
- Terms acceptance checkbox (optional)
- Form validation
- Submit registration → status: "pending"
- Show "Awaiting Approval" message after success
- Link back to login

**Validation Rules:**
- Username: 3-20 chars, alphanumeric + underscore, unique
- Password: Min 8 chars, must match confirmation
- Car power: Positive number
- Tower level: Integer 1-35
- Timezone: Must be selected

---

#### 7. ⏳ `src/components/FirstLoginPasswordChange.jsx` - Password Change Modal
**Status:** TODO
**Priority:** HIGH
**Required Features:**
- Modal overlay (cannot dismiss)
- Temporary password input
- New password input (min 8 chars)
- Confirm new password input (must match)
- Validation and error messages
- Submit → clear firstLogin flag
- Auto-redirect to app after success

**Flow:**
1. User logs in with temp password
2. System detects firstLogin = true
3. Modal appears (blocks app access)
4. User enters temp password + new password
5. System validates and updates
6. firstLogin flag set to false
7. User proceeds to app

---

#### 8. ⏳ `src/components/ProtectedRoute.jsx` - Route Guard
**Status:** TODO
**Priority:** HIGH
**Required Features:**
- Check if user is authenticated
- Check if user has required role
- Redirect to login if not authenticated
- Show "Unauthorized" if insufficient permissions
- Support for multiple role requirements

**Usage Example:**
```jsx
<ProtectedRoute requiredRole="admin">
  <AdminDashboard />
</ProtectedRoute>
```

---

### Phase 2: Admin Features (0% complete)

#### 9. ⏳ `src/components/AdminDashboard.jsx` - Admin Panel
**Status:** TODO
**Priority:** MEDIUM
**Required Features:**
- **Pending Approvals Section:**
  - List pending users with memberData preview
  - Approve button (green)
  - Reject button (red)
  - Empty state message
  - Approval/rejection confirmation

- **User Management Section:**
  - Table/grid of all users
  - Columns: Username, Role, Status, Created, Last Login, Actions
  - Filter by role (All, Admin, Officer, Member)
  - Filter by status (All, Active, Pending)
  - Sort options
  - Edit role dropdown
  - Delete user button (with confirmation)
  - Cannot delete self

- **Statistics Cards:**
  - Total users
  - Pending approvals count
  - Active members count
  - Admins count

- **Route:** `/admin`
- **Access:** Admin only

---

#### 10. ⏳ `src/components/MigrationHelper.jsx` - Data Migration Tool
**Status:** TODO
**Priority:** LOW (use after initial deployment)
**Required Features:**
- Fetch all existing members from data.json
- Display member list with checkboxes
- Generate user accounts with:
  - Username = member.username
  - Password = "TDC2025!" (default temp password)
  - Role = "member"
  - Status = "active"
  - firstLogin = true
- Bulk create button
- Progress indicator
- Success/error reporting
- Export temp password list for admin to share

**Flow:**
1. Admin opens migration helper
2. System fetches existing members
3. Admin reviews and selects members
4. Click "Migrate Selected"
5. System creates user accounts
6. Shows summary (success/failed)
7. Admin shares temp password with members

---

### Phase 3: App Integration (0% complete)

#### 11. ⏳ Modify `src/App.jsx` - New Auth Flow
**Status:** TODO
**Priority:** CRITICAL
**Changes Required:**

**Current Flow:**
```
Loading → Check PAT → PATPrompt OR App
```

**New Flow:**
```
Loading → Check Auth Status →
  ├─ Not Initialized → AdminInitialSetup
  ├─ Not Logged In → LoginForm OR RegisterForm
  ├─ Logged In + firstLogin → FirstLoginPasswordChange
  └─ Logged In → App
```

**Implementation:**
1. Wrap app in `<AuthProvider>`
2. Check `authInitialized` status
3. Check `currentUser` status
4. Check `firstLogin` flag
5. Route accordingly
6. Keep existing routes (/, /members, /optimal)
7. Add new route: /admin

**Code Structure:**
```jsx
<AuthProvider>
  <AppContent />
</AuthProvider>

function AppContent() {
  const { authInitialized, currentUser, loading } = useAuth();

  if (loading) return <LoadingScreen />;
  if (!authInitialized) return <AdminInitialSetup />;
  if (!currentUser) return <LoginForm /> or <RegisterForm />;
  if (currentUser.firstLogin) return <FirstLoginPasswordChange />;

  return <Router>...</Router>;
}
```

---

#### 12. ⏳ Modify `src/components/Header.jsx` - User Indicator & Logout
**Status:** TODO
**Priority:** HIGH
**Changes Required:**
- Add user indicator (right side of header)
  - Username display
  - Role badge (colored by role)
  - Dropdown menu:
    - "Admin Panel" link (admin only)
    - "Change Password" (future)
    - "Logout" button
- Logout confirmation modal
- Update current user from useAuth()
- Keep existing nav structure

**Layout:**
```
[Logo] [Nav Links] [Language] [User: Admin ▼]
                                   ├─ Admin Panel
                                   └─ Logout
```

---

#### 13. ⏳ Modify `src/components/ScheduleForm.jsx` - Current User
**Status:** TODO
**Priority:** HIGH
**Changes Required:**
- Remove username input field (use currentUser.username)
- Display current user's username (locked/read-only)
- Auto-fill username in memberData
- Show "Submitting as: [username]" message
- Keep all other functionality

**Before:**
```jsx
<input name="username" ... />  // User enters username
```

**After:**
```jsx
<div className="locked-field">
  <label>Submitting As</label>
  <div>{currentUser.username}</div>
</div>
```

---

#### 14. ⏳ Modify `src/components/MembersList.jsx` - Role Checks
**Status:** TODO
**Priority:** MEDIUM
**Changes Required:**
- Import `useAuth()` and permission functions
- Hide "Delete All" button if not admin
- Hide "Import CSV" button if not admin/officer
- Show "Export CSV" to all users
- Add permission checks to button handlers

**Code Example:**
```jsx
const { currentUser } = useAuth();

{canDeleteAllMembers(currentUser) && (
  <button onClick={handleDeleteAll}>Delete All</button>
)}
```

---

#### 15. ⏳ Modify `src/components/MemberCard.jsx` - Edit Permissions
**Status:** TODO
**Priority:** MEDIUM
**Changes Required:**
- Import `useAuth()` and `canEditMember()`, `canDeleteMember()`
- Show edit buttons only if `canEditMember(currentUser, member.username)`
- Show delete button only if `canDeleteMember(currentUser, member.username)`
- Disable actions if no permission
- Add permission error message

**Code Example:**
```jsx
const { currentUser } = useAuth();
const canEdit = canEditMember(currentUser, member.username);

{canEdit && <button onClick={handleEdit}>Edit</button>}
```

---

### Phase 4: Translations (0% complete)

#### 16. ⏳ Update `src/i18n/translations.js` - Add Auth Translations
**Status:** TODO
**Priority:** HIGH
**Required Keys (multiply by 6 languages: en, fr, de, es, pt, it):**

**New Translation Sections:**
```javascript
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
  confirmPassword: 'Confirm Password',
  carPower: 'Car Power (M)',
  towerLevel: 'Tower Level',
  timezone: 'Timezone',
  registrationSuccess: 'Registration submitted! Awaiting admin approval.',
  registrationFailed: 'Registration failed. Please try again.',
  usernameExists: 'Username already taken',
  passwordMismatch: 'Passwords do not match',
  weakPassword: 'Password must be at least 8 characters',
  dontHaveAccount: "Don't have an account?",
  alreadyHaveAccount: 'Already have an account?',
  awaitingApproval: 'Awaiting Approval',
  registrationPending: 'Your registration is pending admin approval. You will be notified once approved.',

  // Password Change
  changePassword: 'Change Password',
  oldPassword: 'Current Password',
  newPassword: 'New Password',
  tempPassword: 'Temporary Password',
  firstLoginTitle: 'First Login - Set Your Password',
  firstLoginMessage: 'Please change your temporary password to continue.',
  passwordChanged: 'Password changed successfully',
  passwordChangeFailed: 'Failed to change password',
  incorrectOldPassword: 'Current password is incorrect',

  // Logout
  logout: 'Logout',
  logoutConfirm: 'Are you sure you want to logout?',
  logoutSuccess: 'Logged out successfully'
},

admin: {
  // Dashboard
  dashboard: 'Admin Dashboard',
  userManagement: 'User Management',
  pendingApprovals: 'Pending Approvals',
  statistics: 'Statistics',

  // Users
  allUsers: 'All Users',
  activeUsers: 'Active Users',
  totalUsers: 'Total Users',
  approveUser: 'Approve',
  rejectUser: 'Reject',
  deleteUser: 'Delete User',
  changeRole: 'Change Role',
  userApproved: 'User approved successfully',
  userRejected: 'User rejected',
  userDeleted: 'User deleted',
  roleUpdated: 'Role updated',
  cannotDeleteSelf: 'Cannot delete your own account',
  noPendingUsers: 'No pending registrations',

  // Actions
  approveConfirm: 'Approve this user?',
  rejectConfirm: 'Reject and delete this registration?',
  deleteConfirm: 'Permanently delete this user?',

  // Migration
  migrationTool: 'Migration Tool',
  migrateMembers: 'Migrate Existing Members',
  migrationSuccess: 'Members migrated successfully',
  migrationFailed: 'Migration failed'
},

roles: {
  admin: 'Admin',
  officer: 'Officer',
  member: 'Member'
},

status: {
  active: 'Active',
  pending: 'Pending',
  inactive: 'Inactive'
},

setup: {
  // Initial Setup
  firstTimeSetup: 'First-Time Setup',
  initializeAuthentication: 'Initialize Authentication System',
  githubPAT: 'GitHub PAT',
  adminAccount: 'Admin Account',
  githubAccessToken: 'GitHub Access Token',
  enterPATPlaceholder: 'ghp_...',
  patDescription: 'Enter your GitHub Personal Access Token to enable data storage.',
  patSecurityNote: 'This token will be stored locally and used for all data operations.',
  patVerified: 'PAT verified successfully',
  invalidPAT: 'Invalid GitHub token',
  patVerificationFailed: 'Failed to verify token',
  verifying: 'Verifying...',
  verifyAndContinue: 'Verify & Continue',

  // Admin Creation
  createAdminDescription: 'Create your administrator account. You will use this to manage users and access the admin panel.',
  adminPrivileges: 'Admins have full access to all features and can approve new users.',
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
  systemInitialized: 'System initialized successfully',
  initializingSystem: 'Initializing system...',
  initializationFailed: 'Initialization failed'
}
```

**Total Translation Keys to Add:** ~100 keys × 6 languages = 600 translations

---

## 📋 DETAILED TASK CHECKLIST

### Critical Path (Must complete for MVP):
- [ ] Create RegisterForm.jsx
- [ ] Create FirstLoginPasswordChange.jsx
- [ ] Create ProtectedRoute.jsx
- [ ] Add all translations (6 languages)
- [ ] Modify App.jsx (integrate auth flow)
- [ ] Modify Header.jsx (user indicator + logout)
- [ ] Modify ScheduleForm.jsx (auto-fill username)
- [ ] Test complete flow locally

### Secondary Priority (Admin features):
- [ ] Create AdminDashboard.jsx
- [ ] Modify MembersList.jsx (role checks)
- [ ] Modify MemberCard.jsx (permission checks)
- [ ] Test admin approval workflow

### Low Priority (Post-deployment):
- [ ] Create MigrationHelper.jsx
- [ ] Test migration of existing members
- [ ] Documentation updates

---

## 🧪 TESTING CHECKLIST (After Implementation)

### Authentication Flow:
- [ ] First-time setup (PAT + admin creation)
- [ ] Admin login
- [ ] Admin logout
- [ ] User registration (pending status)
- [ ] Login attempt with pending account (blocked)
- [ ] Admin approval of user
- [ ] User login after approval
- [ ] First-time password change flow
- [ ] Normal login (no first-time prompt)
- [ ] Session timeout (30 minutes)
- [ ] Invalid credentials handling
- [ ] Inactive account handling

### Permissions:
- [ ] Member can edit own schedule
- [ ] Member cannot edit others' schedules
- [ ] Member cannot delete others
- [ ] Member cannot access admin panel
- [ ] Admin can edit any member
- [ ] Admin can delete any member
- [ ] Admin can access admin panel
- [ ] Admin can approve users
- [ ] Admin can change roles
- [ ] CSV import/export (admin/officer only)

### UI/UX:
- [ ] All forms validate correctly
- [ ] Loading states work properly
- [ ] Error messages display correctly
- [ ] Success toasts appear
- [ ] Responsive design (mobile/desktop)
- [ ] All 6 languages work
- [ ] Theme consistency (creed-* colors)

### Data Integrity:
- [ ] auth.json created correctly
- [ ] User passwords hashed
- [ ] Sessions persist on refresh
- [ ] Session expires after 30 min
- [ ] No PAT exposed in client code
- [ ] Existing member data preserved
- [ ] GitHub API rate limits respected

---

## 🚀 DEPLOYMENT PLAN

### Pre-Deployment:
1. ✅ Complete all critical path tasks
2. ✅ Test locally (all scenarios)
3. ✅ Admin review and approval
4. ✅ Backup current data repo

### Deployment:
1. Commit all changes to feature branch
2. Test on feature branch deployment
3. Run migration helper (if needed)
4. Merge to main branch
5. Monitor for issues

### Post-Deployment:
1. Share temp passwords with existing members
2. Monitor user adoption
3. Provide support for login issues
4. Collect feedback
5. Iterate on improvements

---

## 📝 NOTES & DECISIONS

### Technical Decisions:
- **Password Hashing:** SHA-256 (via Web Crypto API)
- **Session Storage:** localStorage (30-min timeout)
- **Data Storage:** auth.json in GitHub (separate from data.json)
- **PAT Storage:** localStorage (key: 'tdc_system_pat')
- **Session Key:** localStorage (key: 'tdc_current_user')

### Security Considerations:
- PAT never exposed in client code
- Passwords hashed before storage
- Session timeout enforced
- Role checks on all sensitive operations
- Cannot delete own admin account

### UX Considerations:
- Self-registration reduces admin burden
- Admin approval prevents spam
- First-time password change ensures security
- Clear error messages for all scenarios
- Consistent theme throughout

---

## 🐛 KNOWN ISSUES / RISKS

### Potential Issues:
1. **PAT exposure:** PAT stored in localStorage (acceptable for this use case)
2. **No password recovery:** Users must contact admin (future feature)
3. **No email notifications:** Manual communication required (future feature)
4. **Session timeout UX:** Users logged out after 30 min (could add warning)
5. **Migration complexity:** Existing members need temp password (one-time)

### Mitigation Strategies:
- Document PAT security best practices
- Add "Contact Admin" links throughout
- Clear messaging about approval process
- Admin dashboard highlights pending users
- Migration tool with clear instructions

---

## 📊 PROGRESS TRACKING

**Overall Progress:** 35%

**By Category:**
- Core Services: ████████████████████ 100% (3/3)
- UI Components: ████████░░░░░░░░░░░░ 40% (2/5)
- App Integration: ░░░░░░░░░░░░░░░░░░░░ 0% (0/5)
- Translations: ░░░░░░░░░░░░░░░░░░░░ 0% (0/1)
- Testing: ░░░░░░░░░░░░░░░░░░░░ 0% (0/1)

**Next Immediate Tasks:**
1. RegisterForm.jsx
2. FirstLoginPasswordChange.jsx
3. ProtectedRoute.jsx
4. Translations
5. App.jsx integration

---

**Last Updated:** 2025-10-03
**Estimated Completion:** Phase 1 (MVP) - 2-3 hours remaining work
**Estimated Testing:** 1-2 hours
**Total Estimated Time to Production-Ready:** 3-5 hours
