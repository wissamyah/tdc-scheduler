import { useState } from 'react';
import { Shield, Key, User, Lock, AlertCircle, Loader2, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { verifyPAT } from '../services/github';
import { initializeAuthSystem } from '../services/userAuth';
import { showToast } from '../utils/toast';

export default function AdminInitialSetup({ onComplete }) {
  const { t } = useLanguage();
  const [step, setStep] = useState(1); // 1: PAT, 2: Admin account
  const [pat, setPat] = useState('');
  const [adminData, setAdminData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [patVerified, setPatVerified] = useState(false);

  const handlePATSubmit = async (e) => {
    e.preventDefault();

    if (!pat.trim()) {
      showToast.error(t('setup.enterPAT'));
      return;
    }

    setLoading(true);

    try {
      // Verify the PAT
      const isValid = await verifyPAT(pat.trim());

      if (!isValid) {
        showToast.error(t('setup.invalidPAT'));
        setLoading(false);
        return;
      }

      // Store PAT temporarily
      localStorage.setItem('tdc_system_pat', pat.trim());
      setPatVerified(true);
      showToast.success(t('setup.patVerified'));

      // Move to next step
      setStep(2);
    } catch (error) {
      console.error('PAT verification error:', error);
      showToast.error(t('setup.patVerificationFailed'));
    } finally {
      setLoading(false);
    }
  };

  const handleAdminSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!adminData.username.trim()) {
      showToast.error(t('setup.enterUsername'));
      return;
    }

    if (adminData.username.length < 3 || adminData.username.length > 20) {
      showToast.error(t('setup.usernameLength'));
      return;
    }

    if (!adminData.password) {
      showToast.error(t('setup.enterPassword'));
      return;
    }

    if (adminData.password.length < 8) {
      showToast.error(t('setup.passwordLength'));
      return;
    }

    if (adminData.password !== adminData.confirmPassword) {
      showToast.error(t('setup.passwordMismatch'));
      return;
    }

    setLoading(true);
    const toastId = showToast.loading(t('setup.initializingSystem'));

    try {
      await initializeAuthSystem(pat, {
        username: adminData.username.trim(),
        password: adminData.password
      });

      showToast.success(t('setup.systemInitialized'), { id: toastId });

      // Wait a bit then complete
      setTimeout(() => {
        onComplete();
      }, 1500);
    } catch (error) {
      console.error('System initialization error:', error);
      showToast.error(t('setup.initializationFailed'), { id: toastId });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical p-8">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-creed-accent" />
            <div>
              <h1 className="text-3xl font-display font-bold text-creed-text uppercase tracking-wide">
                {t('setup.firstTimeSetup')}
              </h1>
              <p className="text-creed-muted font-body text-sm">
                {t('setup.initializeAuthentication')}
              </p>
            </div>
          </div>
          <div className="h-0.5 w-full bg-gradient-to-r from-creed-accent via-creed-primary to-transparent mb-6"></div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-creed-accent' : 'text-creed-muted'}`}>
              {patVerified ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2
                              ${step === 1 ? 'border-creed-accent bg-creed-accent/20' : 'border-creed-lighter'}`}>
                  <span className="font-display font-bold">1</span>
                </div>
              )}
              <span className="font-display font-semibold uppercase tracking-wide text-sm">
                {t('setup.githubPAT')}
              </span>
            </div>
            <div className={`h-0.5 w-12 ${step >= 2 ? 'bg-creed-accent' : 'bg-creed-lighter'}`}></div>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-creed-accent' : 'text-creed-muted'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2
                            ${step === 2 ? 'border-creed-accent bg-creed-accent/20' : 'border-creed-lighter'}`}>
                <span className="font-display font-bold">2</span>
              </div>
              <span className="font-display font-semibold uppercase tracking-wide text-sm">
                {t('setup.adminAccount')}
              </span>
            </div>
          </div>

          {/* Step 1: PAT Input */}
          {step === 1 && (
            <form onSubmit={handlePATSubmit} className="space-y-6">
              {/* Info Box */}
              <div className="bg-creed-base border border-creed-accent/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-creed-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-creed-text font-body text-sm mb-2">
                      {t('setup.patDescription')}
                    </p>
                    <p className="text-creed-muted font-body text-xs">
                      {t('setup.patSecurityNote')}
                    </p>
                  </div>
                </div>
              </div>

              {/* PAT Input */}
              <div>
                <label
                  htmlFor="pat"
                  className="block text-sm font-display font-semibold text-creed-text mb-2 uppercase tracking-wide"
                >
                  {t('setup.githubAccessToken')}
                </label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-creed-muted" />
                  <input
                    type="password"
                    id="pat"
                    value={pat}
                    onChange={(e) => setPat(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-creed-base border border-creed-lighter rounded-lg
                             focus:ring-2 focus:ring-creed-accent focus:border-creed-accent
                             text-creed-text placeholder-gray-500 font-mono text-sm
                             transition-all duration-200"
                    placeholder={t('setup.enterPATPlaceholder')}
                    disabled={loading}
                    autoFocus
                  />
                </div>
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
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{t('setup.verifying')}</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>{t('setup.verifyAndContinue')}</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Step 2: Admin Account Creation */}
          {step === 2 && (
            <form onSubmit={handleAdminSubmit} className="space-y-6">
              {/* Info Box */}
              <div className="bg-creed-base border border-creed-primary/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-creed-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-creed-text font-body text-sm mb-2">
                      {t('setup.createAdminDescription')}
                    </p>
                    <p className="text-creed-muted font-body text-xs">
                      {t('setup.adminPrivileges')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Username Input */}
              <div>
                <label
                  htmlFor="adminUsername"
                  className="block text-sm font-display font-semibold text-creed-text mb-2 uppercase tracking-wide"
                >
                  {t('setup.adminUsername')}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-creed-muted" />
                  <input
                    type="text"
                    id="adminUsername"
                    value={adminData.username}
                    onChange={(e) => setAdminData({ ...adminData, username: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-creed-base border border-creed-lighter rounded-lg
                             focus:ring-2 focus:ring-creed-primary focus:border-creed-primary
                             text-creed-text placeholder-creed-muted font-body
                             transition-all duration-200"
                    placeholder={t('setup.enterAdminUsername')}
                    disabled={loading}
                    autoFocus
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="adminPassword"
                  className="block text-sm font-display font-semibold text-creed-text mb-2 uppercase tracking-wide"
                >
                  {t('setup.adminPassword')}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-creed-muted" />
                  <input
                    type="password"
                    id="adminPassword"
                    value={adminData.password}
                    onChange={(e) => setAdminData({ ...adminData, password: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-creed-base border border-creed-lighter rounded-lg
                             focus:ring-2 focus:ring-creed-primary focus:border-creed-primary
                             text-creed-text placeholder-creed-muted font-body
                             transition-all duration-200"
                    placeholder={t('setup.enterAdminPassword')}
                    disabled={loading}
                  />
                </div>
                <p className="text-xs text-creed-muted font-body mt-1">
                  {t('setup.passwordRequirements')}
                </p>
              </div>

              {/* Confirm Password Input */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-display font-semibold text-creed-text mb-2 uppercase tracking-wide"
                >
                  {t('setup.confirmPassword')}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-creed-muted" />
                  <input
                    type="password"
                    id="confirmPassword"
                    value={adminData.confirmPassword}
                    onChange={(e) => setAdminData({ ...adminData, confirmPassword: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-creed-base border border-creed-lighter rounded-lg
                             focus:ring-2 focus:ring-creed-primary focus:border-creed-primary
                             text-creed-text placeholder-creed-muted font-body
                             transition-all duration-200"
                    placeholder={t('setup.reenterPassword')}
                    disabled={loading}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-creed-primary to-creed-secondary
                         text-white rounded-lg font-display font-bold uppercase tracking-wider
                         hover:shadow-glow-primary disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{t('setup.initializing')}</span>
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5" />
                    <span>{t('setup.completeSetup')}</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
