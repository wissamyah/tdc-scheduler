import { useState, useEffect } from 'react';
import { Shield, Users, CheckCircle, XCircle, Trash2, Loader2, AlertCircle, UserCheck, UserX, Settings, Search, X, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { showToast } from '../utils/toast';
import { getAllUsers, approveUser, rejectUser, updateUserRole, deleteUser } from '../services/userAuth';
import { getRoleDisplay, getStatusDisplay } from '../utils/permissions';
import ConfirmModal from './ConfirmModal';

export default function AdminDashboard() {
  const { t } = useLanguage();
  const { currentUser, refreshAuthStatus } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, pending, active
  const [searchQuery, setSearchQuery] = useState('');
  const [actionLoading, setActionLoading] = useState(null);
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, type: null, data: null });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const allUsers = await getAllUsers();
      setUsers(allUsers);
    } catch (error) {
      console.error('Error loading users:', error);
      showToast.error(t('admin.failedToLoadUsers'));
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = (userId, username) => {
    setConfirmModal({
      isOpen: true,
      type: 'approve',
      data: { userId, username }
    });
  };

  const handleReject = (userId, username) => {
    setConfirmModal({
      isOpen: true,
      type: 'reject',
      data: { userId, username }
    });
  };

  const handleRoleChange = (userId, newRole, username) => {
    setConfirmModal({
      isOpen: true,
      type: 'roleChange',
      data: { userId, newRole, username }
    });
  };

  const handleDelete = (userId, username) => {
    if (userId === currentUser.id) {
      showToast.error(t('admin.cannotDeleteSelf'));
      return;
    }

    setConfirmModal({
      isOpen: true,
      type: 'delete',
      data: { userId, username }
    });
  };

  const executeAction = async () => {
    const { type, data } = confirmModal;
    setActionLoading(data.userId);

    try {
      switch (type) {
        case 'approve':
          await approveUser(data.userId);
          showToast.success(t('admin.userApproved'));
          break;
        case 'reject':
          await rejectUser(data.userId);
          showToast.success(t('admin.userRejected'));
          break;
        case 'roleChange':
          await updateUserRole(data.userId, data.newRole);
          showToast.success(t('admin.roleUpdated'));
          await refreshAuthStatus();
          break;
        case 'delete':
          await deleteUser(data.userId);
          showToast.success(t('admin.userDeleted'));
          break;
      }
      await loadUsers();
      setConfirmModal({ isOpen: false, type: null, data: null });
    } catch (error) {
      console.error(`Error ${type}:`, error);
      const errorKey = {
        approve: 'approveFailed',
        reject: 'rejectFailed',
        roleChange: 'roleUpdateFailed',
        delete: 'deleteFailed'
      }[type];
      showToast.error(t(`admin.${errorKey}`));
    } finally {
      setActionLoading(null);
    }
  };

  const getConfirmModalProps = () => {
    const { type, data } = confirmModal;
    if (!data) return {};

    const configs = {
      approve: {
        title: t('admin.approveUser'),
        message: `${t('admin.approveConfirm')} ${data.username}?`,
        confirmText: t('admin.approveUser'),
        type: 'success'
      },
      reject: {
        title: t('admin.rejectUser'),
        message: `${t('admin.rejectConfirm')} ${data.username}?`,
        confirmText: t('admin.rejectUser'),
        type: 'danger'
      },
      roleChange: {
        title: t('admin.changeRole'),
        message: `${t('admin.changeRoleConfirm')} ${data.username} ${t('common.to')} ${t(`roles.${data.newRole}`)}?`,
        confirmText: t('common.confirm'),
        type: 'warning'
      },
      delete: {
        title: t('admin.deleteUser'),
        message: `${t('admin.deleteConfirm')} ${data.username}?`,
        confirmText: t('common.delete'),
        type: 'danger'
      }
    };

    return configs[type] || {};
  };

  const pendingUsers = users.filter(u => u.status === 'pending');
  const activeUsers = users.filter(u => u.status === 'active');

  // Sort users by role hierarchy: admin > officer > member
  const roleOrder = { admin: 1, officer: 2, member: 3 };

  const filteredUsers = users
    .filter(u => {
      // Filter by status
      if (filter === 'pending' && u.status !== 'pending') return false;
      if (filter === 'active' && u.status !== 'active') return false;

      // Filter by search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          u.username.toLowerCase().includes(query) ||
          u.role.toLowerCase().includes(query) ||
          u.status.toLowerCase().includes(query)
        );
      }

      return true;
    })
    .sort((a, b) => {
      // Sort by role first
      const roleComparison = (roleOrder[a.role] || 99) - (roleOrder[b.role] || 99);
      if (roleComparison !== 0) return roleComparison;

      // If same role, sort by username alphabetically
      return a.username.localeCompare(b.username);
    });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-creed-primary animate-spin mx-auto mb-4" />
          <p className="text-creed-text font-display font-semibold uppercase tracking-wide">
            {t('admin.loadingUsers')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-creed-danger" />
            <h1 className="text-4xl font-display font-bold text-creed-text uppercase tracking-wide">
              {t('admin.dashboard')}
            </h1>
          </div>
          <div className="h-0.5 w-48 bg-gradient-to-r from-creed-danger to-transparent"></div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<Users className="w-6 h-6 text-creed-primary" />}
            label={t('admin.totalUsers')}
            value={users.length}
            color="creed-primary"
          />
          <StatCard
            icon={<UserCheck className="w-6 h-6 text-creed-success" />}
            label={t('admin.activeUsers')}
            value={activeUsers.length}
            color="creed-success"
          />
          <StatCard
            icon={<UserX className="w-6 h-6 text-creed-warning" />}
            label={t('admin.pendingApprovals')}
            value={pendingUsers.length}
            color="creed-warning"
            highlight={pendingUsers.length > 0}
          />
          <StatCard
            icon={<Shield className="w-6 h-6 text-creed-danger" />}
            label={t('admin.admins')}
            value={users.filter(u => u.role === 'admin').length}
            color="creed-danger"
          />
        </div>

        {/* Pending Approvals Section */}
        {pendingUsers.length > 0 && (
          <div className="mb-8 bg-creed-light border-2 border-creed-warning rounded-lg shadow-tactical p-6">
            <h2 className="text-2xl font-display font-bold text-creed-text uppercase tracking-wide mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-creed-warning" />
              {t('admin.pendingApprovals')} ({pendingUsers.length})
            </h2>
            <div className="space-y-3">
              {pendingUsers.map(user => (
                <PendingUserCard
                  key={user.id}
                  user={user}
                  onApprove={handleApprove}
                  onReject={handleReject}
                  loading={actionLoading === user.id}
                  t={t}
                />
              ))}
            </div>
          </div>
        )}

        {/* User Management Section */}
        <div className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical p-6">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-display font-bold text-creed-text uppercase tracking-wide flex items-center gap-2 mb-4">
              <Settings className="w-6 h-6 text-creed-accent" />
              {t('admin.userManagement')}
            </h2>

            {/* Search Bar and Filter Buttons */}
            <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-creed-muted" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('admin.searchUsers')}
                  className="w-full pl-10 pr-10 py-2.5 bg-creed-base border border-creed-lighter rounded-lg
                           focus:ring-2 focus:ring-creed-accent focus:border-creed-accent
                           text-creed-text placeholder-creed-muted font-body
                           transition-all duration-200"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded
                             text-creed-muted hover:text-creed-text hover:bg-creed-lighter
                             transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-display font-semibold uppercase tracking-wide
                         transition-all ${
                           filter === 'all'
                             ? 'bg-gradient-to-r from-creed-primary to-creed-accent text-white shadow-glow-primary'
                             : 'bg-creed-base border border-creed-lighter text-creed-text hover:border-creed-primary'
                         }`}
              >
                {t('admin.all')} ({users.length})
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`px-4 py-2 rounded-lg text-sm font-display font-semibold uppercase tracking-wide
                         transition-all ${
                           filter === 'active'
                             ? 'bg-gradient-to-r from-creed-success to-creed-accent text-white'
                             : 'bg-creed-base border border-creed-lighter text-creed-text hover:border-creed-success'
                         }`}
              >
                {t('admin.active')} ({activeUsers.length})
              </button>
              <button
                onClick={() => setFilter('pending')}
                className={`px-4 py-2 rounded-lg text-sm font-display font-semibold uppercase tracking-wide
                         transition-all ${
                           filter === 'pending'
                             ? 'bg-gradient-to-r from-creed-warning to-creed-accent text-creed-darker'
                             : 'bg-creed-base border border-creed-lighter text-creed-text hover:border-creed-warning'
                         }`}
              >
                {t('admin.pending')} ({pendingUsers.length})
              </button>
              </div>
            </div>
          </div>

          {/* Users Table */}
          {filteredUsers.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-creed-muted mx-auto mb-4" />
              <p className="text-creed-muted font-body">{t('admin.noUsersFound')}</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredUsers.map(user => (
                <UserRow
                  key={user.id}
                  user={user}
                  currentUser={currentUser}
                  onRoleChange={handleRoleChange}
                  onDelete={handleDelete}
                  loading={actionLoading === user.id}
                  t={t}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Confirm Modal */}
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal({ isOpen: false, type: null, data: null })}
        onConfirm={executeAction}
        loading={actionLoading !== null}
        cancelText={t('common.cancel')}
        {...getConfirmModalProps()}
      />
    </div>
  );
}

// StatCard component
function StatCard({ icon, label, value, color, highlight }) {
  return (
    <div className={`bg-creed-light border rounded-lg shadow-tactical p-4
                   ${highlight ? 'border-' + color + ' animate-pulse' : 'border-creed-lighter'}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-creed-muted text-xs font-display uppercase tracking-wide mb-1">{label}</p>
          <p className={`text-3xl font-display font-bold text-${color}`}>{value}</p>
        </div>
        <div className={`w-12 h-12 rounded-lg bg-${color}/20 flex items-center justify-center`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

// PendingUserCard component
function PendingUserCard({ user, onApprove, onReject, loading, t }) {
  const roleDisplay = getRoleDisplay(user.role);

  return (
    <div className="bg-creed-base border border-creed-warning/30 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-display font-bold text-creed-text">{user.username}</h3>
            <span className={`px-2 py-1 rounded text-xs font-display font-bold uppercase
                           bg-${roleDisplay.bgColor} border border-${roleDisplay.borderColor} text-${roleDisplay.color}`}>
              {t(roleDisplay.labelKey)}
            </span>
          </div>
          {user.memberData && (
            <div className="flex items-center gap-4 text-sm text-creed-muted font-body">
              <span>Car: {user.memberData.carPower}M</span>
              <span>Tower: {user.memberData.towerLevel}</span>
              <span>TZ: {user.memberData.timezone}</span>
            </div>
          )}
          <p className="text-xs text-creed-muted font-body mt-1">
            Registered: {new Date(user.createdAt).toLocaleString()}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onApprove(user.id, user.username)}
            disabled={loading}
            className="px-4 py-2 bg-creed-success text-white rounded-lg font-display font-semibold
                     hover:bg-creed-success/80 disabled:opacity-50 transition-all flex items-center gap-2"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4" />}
            <span>{t('admin.approveUser')}</span>
          </button>
          <button
            onClick={() => onReject(user.id, user.username)}
            disabled={loading}
            className="px-4 py-2 bg-creed-danger text-white rounded-lg font-display font-semibold
                     hover:bg-creed-danger/80 disabled:opacity-50 transition-all flex items-center gap-2"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <XCircle className="w-4 h-4" />}
            <span>{t('admin.rejectUser')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// UserRow component
function UserRow({ user, currentUser, onRoleChange, onDelete, loading, t }) {
  const roleDisplay = getRoleDisplay(user.role);
  const statusDisplay = getStatusDisplay(user.status);
  const isCurrentUser = user.id === currentUser.id;
  const [showRoleTooltip, setShowRoleTooltip] = useState(false);

  return (
    <div className={`bg-creed-base border rounded-lg p-4
                   ${isCurrentUser ? 'border-creed-accent' : 'border-creed-lighter'}`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-display font-bold text-creed-text">
              {user.username}
              {isCurrentUser && (
                <span className="ml-2 text-xs text-creed-accent font-body">({t('admin.you')})</span>
              )}
            </h3>
            <span className={`px-2 py-1 rounded text-xs font-display font-bold uppercase
                           bg-${roleDisplay.bgColor} border border-${roleDisplay.borderColor} text-${roleDisplay.color}`}>
              {t(roleDisplay.labelKey)}
            </span>
            <span className={`px-2 py-1 rounded text-xs font-display font-bold uppercase
                           bg-${statusDisplay.bgColor} border border-${statusDisplay.borderColor} text-${statusDisplay.color}`}>
              {t(statusDisplay.labelKey)}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-creed-muted font-body">
            <span>Joined: {new Date(user.createdAt).toLocaleDateString()}</span>
            {user.lastLogin && <span>Last Login: {new Date(user.lastLogin).toLocaleDateString()}</span>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Role Select */}
          {user.status === 'active' && (
            <div className="flex items-center gap-2">
              {/* Role Info Tooltip */}
              <div className="relative">
                <button
                  onMouseEnter={() => setShowRoleTooltip(true)}
                  onMouseLeave={() => setShowRoleTooltip(false)}
                  className="p-1 text-creed-muted hover:text-creed-accent transition-colors"
                  type="button"
                >
                  <Info className="w-4 h-4" />
                </button>
                {showRoleTooltip && (
                  <div className="absolute bottom-full right-0 mb-2 w-72 z-30">
                    <div className="bg-creed-light border border-creed-accent rounded-lg shadow-tactical p-4">
                      <h4 className="text-xs font-display font-bold text-creed-accent uppercase mb-2">
                        {t('admin.rolePermissions')}
                      </h4>
                      <div className="space-y-2 text-xs font-body">
                        <div>
                          <span className="font-bold text-creed-danger">{t('roles.admin')}:</span>
                          <span className="text-creed-muted"> {t('admin.adminPermissions')}</span>
                        </div>
                        <div>
                          <span className="font-bold text-creed-warning">{t('roles.officer')}:</span>
                          <span className="text-creed-muted"> {t('admin.officerPermissions')}</span>
                        </div>
                        <div>
                          <span className="font-bold text-creed-primary">{t('roles.member')}:</span>
                          <span className="text-creed-muted"> {t('admin.memberPermissions')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <select
                value={user.role}
                onChange={(e) => onRoleChange(user.id, e.target.value, user.username)}
                disabled={loading}
                className="px-3 py-2 bg-creed-light border border-creed-lighter rounded-lg
                         text-creed-text font-display font-semibold text-sm
                         focus:ring-2 focus:ring-creed-primary focus:border-creed-primary
                         disabled:opacity-50 transition-all"
              >
                <option value="member">{t('roles.member')}</option>
                <option value="officer">{t('roles.officer')}</option>
                <option value="admin">{t('roles.admin')}</option>
              </select>
            </div>
          )}
          {/* Delete Button */}
          {!isCurrentUser && (
            <button
              onClick={() => onDelete(user.id, user.username)}
              disabled={loading}
              className="p-2 bg-creed-base border border-creed-danger/30 text-creed-danger rounded-lg
                       hover:bg-creed-danger hover:text-white disabled:opacity-50 transition-all"
              title={t('admin.deleteUser')}
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Trash2 className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
