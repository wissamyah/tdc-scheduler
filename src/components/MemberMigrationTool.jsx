import { useState } from 'react';
import { Users, Upload, AlertCircle, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { bulkMigrateMembers } from '../services/userAuth';
import { fetchDataFromAPI } from '../services/github';
import { showToast } from '../utils/toast';

export default function MemberMigrationTool({ onMigrationComplete }) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [tempPassword, setTempPassword] = useState('TDC2025!');
  const [results, setResults] = useState(null);

  const handleLoadMembers = async () => {
    try {
      setLoading(true);
      const pat = localStorage.getItem('tdc_system_pat');
      if (!pat) {
        throw new Error('System not initialized');
      }

      const data = await fetchDataFromAPI(pat);
      setMembers(data.members || []);

      if (data.members.length === 0) {
        showToast.info(t('migration.noMembersFound'));
      } else {
        showToast.success(t('migration.membersLoaded').replace('{count}', data.members.length));
      }
    } catch (error) {
      console.error('Error loading members:', error);
      showToast.error(t('migration.failedToLoadMembers'));
    } finally {
      setLoading(false);
    }
  };

  const handleMigrate = async () => {
    if (members.length === 0) {
      showToast.error(t('migration.noMembersToMigrate'));
      return;
    }

    if (!window.confirm(t('migration.confirmMigration').replace('{count}', members.length))) {
      return;
    }

    try {
      setLoading(true);
      const toastId = showToast.loading(t('migration.migrating'));

      const migrationResults = await bulkMigrateMembers(members, tempPassword);

      showToast.dismiss(toastId);

      setResults(migrationResults);

      if (migrationResults.created > 0) {
        showToast.success(
          t('migration.migrationSuccess')
            .replace('{created}', migrationResults.created)
            .replace('{total}', migrationResults.total)
        );

        if (onMigrationComplete) {
          onMigrationComplete(migrationResults);
        }
      } else {
        showToast.warning(t('migration.noAccountsCreated'));
      }
    } catch (error) {
      console.error('Error migrating members:', error);
      showToast.error(t('migration.migrationFailed'));
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => {
          setIsOpen(true);
          handleLoadMembers();
        }}
        className="flex items-center gap-2 px-4 py-2.5
                 bg-creed-base border border-creed-accent
                 text-creed-accent rounded-lg
                 hover:bg-creed-accent hover:text-creed-darker hover:shadow-glow-accent
                 transition-all font-display font-semibold uppercase tracking-wide"
      >
        <Upload className="w-5 h-5" />
        <span>{t('migration.migrateExistingMembers')}</span>
      </button>
    );
  }

  return (
    <div className="bg-creed-light border-2 border-creed-accent rounded-lg p-6 shadow-tactical">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-creed-accent/20 flex items-center justify-center">
            <Users className="w-6 h-6 text-creed-accent" />
          </div>
          <div>
            <h3 className="text-lg font-display font-bold text-creed-text uppercase tracking-wide">
              {t('migration.memberMigrationTool')}
            </h3>
            <p className="text-sm text-creed-muted font-body">
              {t('migration.toolDescription')}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setIsOpen(false);
            setResults(null);
            setMembers([]);
          }}
          className="text-creed-muted hover:text-creed-text transition-colors"
        >
          <XCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Configuration */}
      {!results && (
        <div className="space-y-4 mb-4">
          <div className="bg-creed-base border border-creed-lighter rounded-lg p-4">
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle className="w-5 h-5 text-creed-accent mt-0.5" />
              <div className="flex-1">
                <h4 className="text-sm font-display font-semibold text-creed-text uppercase mb-1">
                  {t('migration.howItWorks')}
                </h4>
                <ul className="text-xs text-creed-muted font-body space-y-1 list-disc list-inside">
                  <li>{t('migration.step1')}</li>
                  <li>{t('migration.step2')}</li>
                  <li>{t('migration.step3')}</li>
                  <li>{t('migration.step4')}</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-display font-semibold text-creed-text uppercase mb-2">
              {t('migration.temporaryPassword')}
            </label>
            <input
              type="text"
              value={tempPassword}
              onChange={(e) => setTempPassword(e.target.value)}
              className="w-full px-4 py-2 bg-creed-base border border-creed-lighter rounded-lg
                       focus:ring-2 focus:ring-creed-accent focus:border-creed-accent
                       text-creed-text font-mono
                       transition-all duration-200"
              placeholder="TDC2025!"
              disabled={loading}
            />
            <p className="text-xs text-creed-muted font-body mt-1">
              {t('migration.passwordNote')}
            </p>
          </div>

          {members.length > 0 && (
            <div className="bg-creed-base border border-creed-lighter rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-display font-semibold text-creed-text uppercase">
                  {t('migration.membersFound')}
                </span>
                <span className="text-2xl font-display font-bold text-creed-accent">
                  {members.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
                {members.map((member, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-creed-lighter text-creed-text text-xs font-body rounded"
                  >
                    {member.username}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Results */}
      {results && (
        <div className="space-y-3 mb-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-creed-base border border-creed-lighter rounded-lg p-3 text-center">
              <div className="text-2xl font-display font-bold text-creed-text mb-1">
                {results.total}
              </div>
              <div className="text-xs text-creed-muted font-body uppercase">
                {t('migration.totalMembers')}
              </div>
            </div>
            <div className="bg-creed-base border border-creed-primary rounded-lg p-3 text-center">
              <div className="text-2xl font-display font-bold text-creed-primary mb-1">
                {results.created}
              </div>
              <div className="text-xs text-creed-muted font-body uppercase">
                {t('migration.accountsCreated')}
              </div>
            </div>
            <div className="bg-creed-base border border-creed-accent rounded-lg p-3 text-center">
              <div className="text-2xl font-display font-bold text-creed-accent mb-1">
                {results.skipped}
              </div>
              <div className="text-xs text-creed-muted font-body uppercase">
                {t('migration.skipped')}
              </div>
            </div>
          </div>

          {results.createdUsernames.length > 0 && (
            <div className="bg-creed-base border border-creed-primary rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-creed-primary" />
                <span className="text-sm font-display font-semibold text-creed-text uppercase">
                  {t('migration.createdAccounts')}
                </span>
              </div>
              <div className="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
                {results.createdUsernames.map((username, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-creed-primary/20 text-creed-primary text-xs font-body rounded"
                  >
                    {username}
                  </span>
                ))}
              </div>
            </div>
          )}

          {results.errors.length > 0 && (
            <div className="bg-creed-base border border-creed-danger rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-creed-danger" />
                <span className="text-sm font-display font-semibold text-creed-text uppercase">
                  {t('migration.errors')} ({results.errors.length})
                </span>
              </div>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {results.errors.map((error, index) => (
                  <div key={index} className="text-xs text-creed-danger font-body">
                    {error.username}: {error.error}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-creed-accent/10 border border-creed-accent rounded-lg p-3">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-creed-accent mt-0.5" />
              <p className="text-xs text-creed-text font-body">
                {t('migration.successMessage')
                  .replace('{password}', tempPassword)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        {!results ? (
          <>
            <button
              onClick={handleMigrate}
              disabled={loading || members.length === 0 || !tempPassword}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5
                       bg-creed-accent text-creed-darker rounded-lg
                       hover:bg-creed-accent/80 hover:shadow-glow-accent
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all font-display font-semibold uppercase tracking-wide"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t('migration.migrating')}</span>
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  <span>{t('migration.startMigration')}</span>
                </>
              )}
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                setMembers([]);
              }}
              disabled={loading}
              className="px-4 py-2.5 bg-creed-base border border-creed-lighter
                       text-creed-text rounded-lg
                       hover:bg-creed-lighter
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all font-display font-semibold uppercase tracking-wide"
            >
              {t('common.cancel')}
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              setIsOpen(false);
              setResults(null);
              setMembers([]);
            }}
            className="flex-1 px-4 py-2.5 bg-creed-primary text-white rounded-lg
                     hover:bg-creed-primary/80 hover:shadow-glow-primary
                     transition-all font-display font-semibold uppercase tracking-wide"
          >
            {t('common.close')}
          </button>
        )}
      </div>
    </div>
  );
}
