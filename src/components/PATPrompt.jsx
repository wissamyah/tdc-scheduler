import { useState } from 'react';
import { Key, Shield, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { verifyPAT } from '../services/github';

export default function PATPrompt({ onAuthenticated }) {
  const { t } = useLanguage();
  const [pat, setPat] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pat.trim()) {
      setError(t('auth.authRequired'));
      return;
    }

    setLoading(true);
    setError('');

    try {
      console.log('[PAT-PROMPT] Verifying access token...');

      // Verify the PAT has correct permissions
      const isValid = await verifyPAT(pat.trim());

      if (!isValid) {
        setError(t('auth.invalidToken'));
        setLoading(false);
        return;
      }

      console.log('[PAT-PROMPT] Access token verified successfully');

      // Store in localStorage for permanent access
      localStorage.setItem('tdc_pat', pat.trim());

      // Call the callback to proceed to app
      onAuthenticated();
    } catch (err) {
      console.error('[PAT-PROMPT ERROR] Error verifying token:', err);
      setError(t('auth.verificationFailed'));
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical p-8">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-creed-accent" />
            <h1 className="text-3xl font-display font-bold text-creed-text uppercase tracking-wide">
              {t('auth.allianceAccess')}
            </h1>
          </div>
          <div className="h-0.5 w-full bg-gradient-to-r from-creed-accent via-creed-primary to-transparent mb-6"></div>

          {/* Info Box */}
          <div className="bg-creed-base border border-creed-accent/30 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-creed-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-creed-text font-body text-sm mb-2">
                  {t('auth.enterTokenPrompt')}
                </p>
                <p className="text-creed-muted font-body text-xs">
                  {t('auth.credentialsStored')}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="pat"
                className="block text-sm font-display font-semibold text-creed-text mb-2 uppercase tracking-wide"
              >
                {t('auth.accessToken')}
              </label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-creed-muted" />
                <input
                  type="password"
                  id="pat"
                  value={pat}
                  onChange={(e) => {
                    setPat(e.target.value);
                    setError('');
                  }}
                  className="w-full pl-11 pr-4 py-3 bg-creed-base border border-creed-lighter rounded-lg
                           focus:ring-2 focus:ring-creed-accent focus:border-creed-accent
                           text-creed-text placeholder-gray-500 font-mono text-sm
                           transition-all duration-200"
                  placeholder={t('auth.enterToken')}
                  disabled={loading}
                  autoFocus
                />
              </div>
              {error && (
                <p className="text-creed-danger text-sm font-body mt-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-creed-accent to-creed-primary
                       text-white rounded-lg font-display font-bold uppercase tracking-wider
                       hover:shadow-glow-accent disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all duration-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>{t('auth.verifying')}</span>
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  <span>{t('auth.accessScheduler')}</span>
                </>
              )}
            </button>
          </form>

          {/* Footer Note */}
          <div className="mt-6 pt-6 border-t border-creed-lighter">
            <p className="text-creed-muted text-xs font-body text-center">
              {t('auth.contactLeader')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
