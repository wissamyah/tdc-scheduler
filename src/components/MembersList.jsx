import { useState, useEffect } from 'react';
import { Users, RefreshCw, Loader2, AlertCircle, Filter } from 'lucide-react';
import MemberCard from './MemberCard';
import { fetchData } from '../services/github';
import { showToast } from '../utils/toast';

export default function MembersList() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('username'); // username, carPower, towerLevel

  useEffect(() => {
    loadMembers();
  }, []);

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

  const handleRefresh = async () => {
    const toastId = showToast.loading('Refreshing roster data...');
    try {
      await loadMembers();
      showToast.dismiss(toastId);
      showToast.success('Roster updated successfully');
    } catch (err) {
      showToast.dismiss(toastId);
      showToast.error('Refresh failed');
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
            Loading Alliance Roster...
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
            <button
              onClick={handleRefresh}
              disabled={loading}
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
                <Filter className="w-4 h-4 text-creed-muted" />
                <span className="text-sm font-display font-semibold text-creed-muted uppercase tracking-wide">
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
