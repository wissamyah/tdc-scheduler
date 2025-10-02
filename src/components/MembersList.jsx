import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Users, RefreshCw, Loader2, AlertCircle, Filter, Trash2 } from 'lucide-react';
import MemberCard from './MemberCard';
import DeleteConfirmModal from './DeleteConfirmModal';
import { fetchData, fetchDataFromAPI, deleteAllMembers } from '../services/github';
import { showToast } from '../utils/toast';

export default function MembersList() {
  const location = useLocation();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [sortBy, setSortBy] = useState('username'); // username, carPower, towerLevel
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
      showToast.error('Failed to load members roster');
    } finally {
      setLoading(false);
    }
  };

  const loadMembersFromAPI = async () => {
    try {
      setLoading(true);
      const pat = localStorage.getItem('tdc_pat');
      const data = await fetchDataFromAPI(pat);
      setMembers(data.members || []);
    } catch (err) {
      console.error('Error loading members from API:', err);
      // Fallback to CDN fetch
      loadMembers();
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    const toastId = showToast.loading('Refreshing roster data...');
    try {
      await loadMembersFromAPI();
      showToast.dismiss(toastId);
      showToast.success('Roster updated successfully');
    } catch (err) {
      showToast.dismiss(toastId);
      showToast.error('Refresh failed');
    }
  };

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

    const toastId = showToast.loading('Deleting all members...');

    try {
      // Get PAT from localStorage
      let pat = localStorage.getItem('tdc_pat');

      if (!pat) {
        showToast.dismiss(toastId);
        showToast.error('Authentication required. Please refresh the page.');
        setDeleting(false);
        return;
      }

      await deleteAllMembers(pat);

      showToast.loading('Verifying deletion...', { id: toastId });

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
        showToast.error('Could not verify deletion. Please refresh manually.');
        setDeleting(false);
        return;
      }

      // Update UI with verified empty data
      setMembers(verifiedData.members);

      showToast.success('All members deleted successfully!', { id: toastId });
    } catch (err) {
      console.error('Delete error:', err);
      showToast.dismiss(toastId);
      showToast.error('Failed to delete members - Try again');
    } finally {
      setDeleting(false);
    }
  };

  const handleDeleteAllCancel = () => {
    setShowDeleteModal(false);
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
            Loading Alliance Roster...
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

      {/* Deleting Overlay - Prevents all interaction during deletion */}
      {deleting && (
        <div className="fixed inset-0 bg-creed-darker/95 backdrop-blur-md z-50 flex items-center justify-center pointer-events-auto">
          <div className="text-center">
            <Loader2 className="w-16 h-16 text-creed-danger animate-spin mx-auto mb-4" />
            <p className="text-creed-text font-display font-semibold uppercase tracking-wide text-xl">
              Deleting All Members...
            </p>
            <p className="text-creed-muted font-body mt-2">
              Please do not close this window
            </p>
            <div className="mt-4 px-4 py-2 bg-creed-base/50 rounded-lg border border-creed-danger/30">
              <p className="text-xs text-creed-danger font-body">
                Critical operation in progress...
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
                  Alliance Roster
                </h1>
              </div>
              <div className="h-0.5 w-48 bg-gradient-to-r from-creed-primary to-transparent mb-2"></div>
              <p className="text-creed-muted font-body">
                Total Operatives:{' '}
                <span className="font-display font-bold text-creed-accent">{members.length}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              {members.length > 0 && (
                <button
                  onClick={handleDeleteAllClick}
                  disabled={loading || deleting}
                  className="flex items-center gap-2 px-4 py-2.5
                           bg-creed-base border border-creed-danger
                           text-creed-danger rounded-lg
                           hover:bg-creed-danger hover:text-white hover:shadow-glow-primary
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all font-display font-semibold uppercase tracking-wide"
                >
                  <Trash2 className="w-5 h-5" />
                  <span>Delete All</span>
                </button>
              )}
              <button
                onClick={handleRefresh}
                disabled={loading || deleting}
                className="flex items-center gap-2 px-4 py-2.5
                         bg-creed-base border border-creed-lighter
                         text-creed-text rounded-lg
                         hover:border-creed-accent hover:shadow-glow-accent
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all font-display font-semibold uppercase tracking-wide"
              >
                <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                <span>{loading ? 'Refreshing' : 'Refresh'}</span>
              </button>
            </div>
          </div>
        </div>

        {members.length === 0 ? (
          <div className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical p-12 text-center">
            <AlertCircle className="mx-auto h-16 w-16 text-creed-muted mb-4" />
            <h3 className="text-xl font-display font-bold text-creed-text uppercase tracking-wide mb-2">
              No Operatives Registered
            </h3>
            <p className="text-creed-muted font-body">Be the first to submit your schedule</p>
          </div>
        ) : (
          <>
            {/* Sort Controls */}
            <div className="mb-6 flex items-center flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-creed-text" />
                <span className="text-sm font-display font-semibold text-creed-text uppercase tracking-wide">
                  Sort By:
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
                  Username
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
                  Car Power
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
                  Tower Level
                </button>
              </div>
            </div>

            {/* Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedMembers.map(member => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
