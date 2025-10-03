import { useState } from 'react';
import { Shield, Key, Lock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { showToast } from '../utils/toast';

const DATA_REPO_OWNER = 'wissamyah';
const DATA_REPO_NAME = 'tdc-scheduler-data';

/**
 * AccessGate - One-time PAT entry to unlock platform access
 * This is NOT the admin setup - just unlocking access to login/register
 */
export default function AccessGate({ onAccessGranted }) {
  const { t } = useLanguage();
  const [pat, setPat] = useState('');
  const [verifying, setVerifying] = useState(false);

  const handleVerifyAccess = async (e) => {
    e.preventDefault();

    if (!pat.trim()) {
      showToast.error(t('accessGate.tokenRequired'));
      return;
    }

    setVerifying(true);

    try {
      // Verify PAT by attempting to access the data repo
      const response = await fetch(
        `https://api.github.com/repos/${DATA_REPO_OWNER}/${DATA_REPO_NAME}`,
        {
          headers: {
            'Authorization': `token ${pat}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        }
      );

      if (!response.ok) {
        throw new Error('Invalid access token');
      }

      // Store PAT and grant access
      localStorage.setItem('tdc_system_pat', pat);
      showToast.success(t('accessGate.accessGranted'));

      // Notify parent to refresh and show login
      if (onAccessGranted) {
        onAccessGranted();
      }
    } catch (error) {
      console.error('Access verification error:', error);
      showToast.error(t('accessGate.invalidToken'));
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base flex items-center justify-center p-4">
      <div className="max-w-xl w-full">
        {/* Card */}
        <div className="bg-creed-light border-2 border-creed-accent rounded-lg shadow-tactical p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-creed-accent to-creed-primary
                             flex items-center justify-center shadow-glow-accent">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-creed-accent opacity-20 blur-xl rounded-full"></div>
              </div>
            </div>
            <h1 className="text-3xl font-display font-bold text-creed-text uppercase tracking-wide mb-2">
              {t('accessGate.title')}
            </h1>
            <p className="text-creed-muted font-body text-sm">
              {t('accessGate.subtitle')}
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-creed-base border border-creed-accent/30 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-creed-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-display font-bold text-creed-accent uppercase mb-2">
                  {t('accessGate.oneTimeOnly')}
                </h3>
                <p className="text-xs text-creed-muted font-body mb-2">
                  {t('accessGate.explanation')}
                </p>
                <ul className="text-xs text-creed-muted font-body space-y-1 list-disc list-inside">
                  <li>{t('accessGate.reason1')}</li>
                  <li>{t('accessGate.reason2')}</li>
                  <li>{t('accessGate.reason3')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleVerifyAccess}>
            <div className="mb-6">
              <label className="block text-xs font-display font-semibold text-creed-text uppercase tracking-wide mb-2">
                {t('accessGate.accessToken')}
              </label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-creed-accent" />
                <input
                  type="password"
                  value={pat}
                  onChange={(e) => setPat(e.target.value)}
                  placeholder={t('accessGate.enterToken')}
                  disabled={verifying}
                  className="w-full pl-12 pr-4 py-3 bg-creed-base border-2 border-creed-accent/30 rounded-lg
                           focus:ring-2 focus:ring-creed-accent focus:border-creed-accent
                           text-creed-text placeholder-creed-muted font-mono text-sm
                           disabled:opacity-50
                           transition-all duration-200"
                />
              </div>
              <p className="text-xs text-creed-muted font-body mt-2">
                {t('accessGate.contactAdmin')}
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={verifying || !pat.trim()}
              className="w-full px-6 py-3 bg-gradient-to-r from-creed-accent to-creed-primary
                       text-white rounded-lg font-display font-bold uppercase tracking-wider
                       hover:shadow-glow-accent disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all duration-200 flex items-center justify-center gap-2"
            >
              {verifying ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{t('accessGate.verifying')}</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>{t('accessGate.unlockAccess')}</span>
                </>
              )}
            </button>
          </form>

          {/* Footer Note */}
          <div className="mt-6 text-center">
            <p className="text-xs text-creed-muted font-body">
              {t('accessGate.securityNote')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
