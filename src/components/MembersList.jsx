import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Users, Loader2, AlertCircle, Filter, Trash2, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { canDeleteAllMembers, canManageCSV } from '../utils/permissions';
import MemberCard from './MemberCard';
import DeleteConfirmModal from './DeleteConfirmModal';
import ExportCSVButton from './ExportCSVButton';
import ImportCSVButton from './ImportCSVButton';
import ImportCSVModal from './ImportCSVModal';
import { fetchData, fetchDataFromAPI, deleteAllMembers, bulkImportMembers } from '../services/github';
import { showToast } from '../utils/toast';
import { useAutoRefresh } from '../hooks/useAutoRefresh';

export default function MembersList() {
  const { t } = useLanguage();
  const { currentUser } = useAuth();
  const location = useLocation();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [sortBy, setSortBy] = useState('carPower'); // username, carPower, towerLevel
  const previousLocationKey = useRef(location.key);

  useEffect(() => {
    loadMembersFromAPI();

    // Reload members when window regains focus - ALWAYS use API fetch for fresh data
    const handleFocus = () => {
      loadMembersFromAPI();
    };

    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  // Reload whenever location changes (e.g., navigating back to this page)
  // ALWAYS use API fetch to ensure fresh data, never use CDN cache
  useEffect(() => {
    if (previousLocationKey.current !== location.key) {
      previousLocationKey.current = location.key;
      loadMembersFromAPI();
    }
  }, [location]);

  const loadMembers = async () => {
    try {
      setLoading(true);
      const data = await fetchData();
      setMembers(data.members || []);
    } catch (err) {
      console.error('Error loading members:', err);
      showToast.error(t('membersList.failedToLoad'));
    } finally {
      setLoading(false);
    }
  };

  const loadMembersFromAPI = async (silent = false) => {
    try {
      if (!silent) setLoading(true);
      const pat = localStorage.getItem('tdc_system_pat');
      const data = await fetchDataFromAPI(pat);
      setMembers(data.members || []);
    } catch (err) {
      console.error('Error loading members from API:', err);
      // Fallback to CDN fetch
      if (!silent) loadMembers();
    } finally {
      if (!silent) setLoading(false);
    }
  };

  // Auto-refresh setup - silent refresh every 60 seconds
  const { isRefreshing, lastRefreshTime, isEnabled, toggleAutoRefresh, manualRefresh } = useAutoRefresh(
    () => loadMembersFromAPI(true), // Silent refresh (no loading spinner)
    60000, // 60 seconds
    true // Enabled by default
  );

  const handleDeleteAllClick = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteAllConfirm = async () => {
    setShowDeleteModal(false);
    setDeleting(true);

    // Scroll to center
    window.scrollTo({
      top: document.documentElement.scrollHeight / 2,
      behavior: 'smooth'
    });

    const toastId = showToast.loading(t('membersList.deletingMembers'));

    try {
      // Get PAT from localStorage
      let pat = localStorage.getItem('tdc_system_pat');

      if (!pat) {
        showToast.dismiss(toastId);
        showToast.error(t('auth.authRequired'));
        setDeleting(false);
        return;
      }

      await deleteAllMembers(pat);

      showToast.loading(t('membersList.verifyingDeletion'), { id: toastId });

      // Verify deletion by polling
      const maxAttempts = 10;
      let attempts = 0;
      let deletionVerified = false;

      // Add initial delay before first verification to allow GitHub to propagate
      await new Promise(resolve => setTimeout(resolve, 3000));

      let verifiedData = null;

      while (attempts < maxAttempts && !deletionVerified) {
        attempts++;

        try {
          const data = await fetchDataFromAPI(pat);

          if (data.members.length === 0) {
            verifiedData = data;
            deletionVerified = true;
            break;
          } else {
            await new Promise(resolve => setTimeout(resolve, 2000));
          }
        } catch (error) {
          console.error('Error verifying deletion:', error);
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }

      if (!deletionVerified || !verifiedData) {
        showToast.dismiss(toastId);
        showToast.error(t('membersList.couldNotVerifyDeletion'));
        setDeleting(false);
        return;
      }

      // Update UI with verified empty data
      setMembers(verifiedData.members);

      showToast.success(t('membersList.allMembersDeleted'), { id: toastId });
    } catch (err) {
      console.error('Delete error:', err);
      showToast.dismiss(toastId);
      showToast.error(t('membersList.deleteFailed'));
    } finally {
      setDeleting(false);
    }
  };

  const handleDeleteAllCancel = () => {
    setShowDeleteModal(false);
  };

  const handleImportClick = () => {
    setShowImportModal(true);
  };

  const handleImport = async (importedMembers, summary, mode) => {
    const toastId = showToast.loading(t('csv.importing'));

    try {
      // Get PAT from localStorage
      const pat = localStorage.getItem('tdc_system_pat');

      if (!pat) {
        showToast.dismiss(toastId);
        showToast.error(t('auth.authRequired'));
        return;
      }

      // Bulk import to GitHub
      await bulkImportMembers(importedMembers, pat, mode);

      showToast.loading(t('csv.verifyingImport'), { id: toastId });

      // Verify import by polling
      const maxAttempts = 15;
      let attempts = 0;
      let importVerified = false;

      // Add initial delay before first verification
      await new Promise(resolve => setTimeout(resolve, 3000));

      while (attempts < maxAttempts && !importVerified) {
        attempts++;

        try {
          const data = await fetchDataFromAPI(pat);

          // Check if import was successful
          if (data.members.length === importedMembers.length) {
            importVerified = true;
            setMembers(data.members);
            break;
          } else {
            await new Promise(resolve => setTimeout(resolve, 2000));
          }
        } catch (error) {
          console.error('Error verifying import:', error);
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }

      if (!importVerified) {
        showToast.dismiss(toastId);
        showToast.error(t('csv.couldNotVerifyImport'));
        // Still refresh the list
        loadMembersFromAPI();
        return;
      }

      showToast.dismiss(toastId);
    } catch (error) {
      console.error('Import error:', error);
      showToast.dismiss(toastId);
      showToast.error(t('csv.importFailed'));
    }
  };

  const sortedMembers = [...members].sort((a, b) => {
    switch (sortBy) {
      case 'carPower':
        return b.carPower - a.carPower;
      case 'towerLevel':
        return b.towerLevel - a.towerLevel;
      case 'username':
      default:
        return a.username.localeCompare(b.username);
    }
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-creed-primary animate-spin mx-auto mb-4" />
          <p className="text-creed-text font-display font-semibold uppercase tracking-wide">
            {t('membersList.loadingRoster')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base py-8 relative">
      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={showDeleteModal}
        onConfirm={handleDeleteAllConfirm}
        onCancel={handleDeleteAllCancel}
        memberCount={members.length}
      />

      {/* Import CSV Modal */}
      <ImportCSVModal
        isOpen={showImportModal}
        onClose={() => setShowImportModal(false)}
        existingMembers={members}
        onImport={handleImport}
      />

      {/* Deleting Overlay - Prevents all interaction during deletion */}
      {deleting && (
        <div className="fixed inset-0 bg-creed-darker/95 backdrop-blur-md z-50 flex items-center justify-center pointer-events-auto">
          <div className="text-center">
            <Loader2 className="w-16 h-16 text-creed-danger animate-spin mx-auto mb-4" />
            <p className="text-creed-text font-display font-semibold uppercase tracking-wide text-xl">
              {t('membersList.deletingAllMembers')}
            </p>
            <p className="text-creed-muted font-body mt-2">
              {t('scheduleForm.doNotClose')}
            </p>
            <div className="mt-4 px-4 py-2 bg-creed-base/50 rounded-lg border border-creed-danger/30">
              <p className="text-xs text-creed-danger font-body">
                {t('membersList.criticalOperation')}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-8 h-8 text-creed-primary" />
                <h1 className="text-4xl font-display font-bold text-creed-text uppercase tracking-wide">
                  {t('membersList.allianceRoster')}
                </h1>
              </div>
              <div className="h-0.5 w-48 bg-gradient-to-r from-creed-primary to-transparent mb-2"></div>
              <p className="text-creed-muted font-body">
                {t('membersList.totalOperatives')}{' '}
                <span className="font-display font-bold text-creed-accent">{members.length}</span>
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {/* Auto-refresh indicator and toggle */}
              <div className="flex items-center gap-2 px-3 py-2 bg-creed-base border border-creed-lighter rounded-lg">
                <button
                  onClick={toggleAutoRefresh}
                  className={`p-1.5 rounded-lg transition-all ${
                    isEnabled
                      ? 'bg-creed-success/20 text-creed-success hover:bg-creed-success/30'
                      : 'bg-creed-muted/20 text-creed-muted hover:bg-creed-muted/30'
                  }`}
                  title={isEnabled ? t('autoRefresh.enabled') : t('autoRefresh.disabled')}
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={manualRefresh}
                  disabled={isRefreshing}
                  className="text-xs text-creed-text hover:text-creed-primary transition-colors font-display font-semibold uppercase tracking-wide disabled:opacity-50"
                  title={t('autoRefresh.manualRefresh')}
                >
                  {t('autoRefresh.refresh')}
                </button>
              </div>

              {/* Export CSV Button */}
              {canDeleteAllMembers(currentUser) && (
                <ExportCSVButton
                  members={members}
                  disabled={loading || deleting}
                />
              )}

              {/* Import CSV Button */}
              {canManageCSV(currentUser) && (
                <ImportCSVButton
                  onClick={handleImportClick}
                  disabled={loading || deleting}
                />
              )}

              {/* Delete All Button */}
              {members.length > 0 && canDeleteAllMembers(currentUser) && (
                <button
                  onClick={handleDeleteAllClick}
                  disabled={loading || deleting}
                  className="flex items-center gap-2 px-4 py-2.5
                           bg-creed-base border border-creed-danger
                           text-creed-danger rounded-lg
                           hover:bg-creed-danger hover:text-white hover:shadow-glow-primary
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all font-display font-semibold uppercase tracking-wide"
                  title={t('membersList.deleteAll')}
                >
                  <Trash2 className="w-5 h-5" />
                  <span className="hidden sm:inline">{t('membersList.deleteAll')}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {members.length === 0 ? (
          <div className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical p-12 text-center">
            <AlertCircle className="mx-auto h-16 w-16 text-creed-muted mb-4" />
            <h3 className="text-xl font-display font-bold text-creed-text uppercase tracking-wide mb-2">
              {t('membersList.noOperatives')}
            </h3>
            <p className="text-creed-muted font-body">{t('membersList.beFirstToSubmit')}</p>
          </div>
        ) : (
          <>
            {/* Sort Controls */}
            <div className="mb-6 flex items-center flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-creed-text" />
                <span className="text-sm font-display font-semibold text-creed-text uppercase tracking-wide">
                  {t('membersList.sortBy')}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSortBy('username')}
                  className={`px-4 py-2 rounded-lg text-sm font-display font-semibold uppercase tracking-wide
                           transition-all ${
                             sortBy === 'username'
                               ? 'bg-gradient-to-r from-creed-primary to-creed-secondary text-white shadow-glow-primary'
                               : 'bg-creed-base border border-creed-lighter text-creed-text hover:border-creed-primary'
                           }`}
                >
                  {t('membersList.username')}
                </button>
                <button
                  onClick={() => setSortBy('carPower')}
                  className={`px-4 py-2 rounded-lg text-sm font-display font-semibold uppercase tracking-wide
                           transition-all ${
                             sortBy === 'carPower'
                               ? 'bg-gradient-to-r from-creed-primary to-creed-secondary text-white shadow-glow-primary'
                               : 'bg-creed-base border border-creed-lighter text-creed-text hover:border-creed-primary'
                           }`}
                >
                  {t('membersList.carPower')}
                </button>
                <button
                  onClick={() => setSortBy('towerLevel')}
                  className={`px-4 py-2 rounded-lg text-sm font-display font-semibold uppercase tracking-wide
                           transition-all ${
                             sortBy === 'towerLevel'
                               ? 'bg-gradient-to-r from-creed-primary to-creed-secondary text-white shadow-glow-primary'
                               : 'bg-creed-base border border-creed-lighter text-creed-text hover:border-creed-primary'
                           }`}
                >
                  {t('membersList.towerLevel')}
                </button>
              </div>
            </div>

            {/* Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedMembers.map(member => (
                <MemberCard key={member.id} member={member} onUpdate={loadMembersFromAPI} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
