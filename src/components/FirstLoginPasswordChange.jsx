import { useState } from 'react';
import { Lock, AlertCircle, Loader2, CheckCircle, Shield, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { showToast } from '../utils/toast';
import LanguageToggle from './LanguageToggle';

export default function FirstLoginPasswordChange() {
  const { t } = useLanguage();
  const { changePassword, currentUser } = useAuth();
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Old password validation
    if (!formData.oldPassword) {
      newErrors.oldPassword = t('userAuth.enterOldPassword');
    }

    // New password validation
    if (!formData.newPassword) {
      newErrors.newPassword = t('userAuth.enterNewPassword');
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = t('userAuth.weakPassword');
    } else if (formData.newPassword === formData.oldPassword) {
      newErrors.newPassword = t('userAuth.newPasswordSameAsOld');
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = t('userAuth.confirmPasswordRequired');
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = t('userAuth.passwordMismatch');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await changePassword(formData.oldPassword, formData.newPassword);
      showToast.success(t('userAuth.passwordChanged'));

      // The AuthContext will update currentUser.firstLogin to false
      // and the App component will automatically redirect to main app
    } catch (err) {
      console.error('Password change error:', err);

      if (err.message.includes('incorrect')) {
        setErrors({ oldPassword: t('userAuth.incorrectOldPassword') });
        showToast.error(t('userAuth.incorrectOldPassword'));
      } else {
        showToast.error(t('userAuth.passwordChangeFailed'));
      }

      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-creed-darker/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 z-10">
        <LanguageToggle />
      </div>

      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Password Change Card */}
          <div className="lg:col-span-2 bg-creed-light border-2 border-creed-warning rounded-lg shadow-tactical p-8">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-creed-warning/20 border-2 border-creed-warning flex items-center justify-center">
              <Shield className="w-6 h-6 text-creed-warning" />
            </div>
          </div>
          <h1 className="text-2xl font-display font-bold text-creed-text uppercase tracking-wide text-center mb-2">
            {t('userAuth.firstLoginTitle')}
          </h1>
          <p className="text-creed-muted font-body text-center mb-6">
            {t('userAuth.firstLoginMessage')}
          </p>
          <div className="h-0.5 w-full bg-gradient-to-r from-creed-warning via-creed-accent to-transparent mb-6"></div>

          {/* Info Box */}
          <div className="bg-creed-base border border-creed-warning/30 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-creed-warning flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-creed-text font-body text-sm mb-2">
                  <strong className="text-creed-warning">{t('userAuth.securityRequired')}</strong>
                </p>
                <p className="text-creed-muted font-body text-xs">
                  {t('userAuth.changePasswordNote')}
                </p>
              </div>
            </div>
          </div>

          {/* User Info */}
          <div className="bg-creed-base rounded-lg p-3 mb-6 border border-creed-lighter">
            <p className="text-xs text-creed-muted font-body uppercase tracking-wide mb-1">
              {t('userAuth.loggedInAs')}
            </p>
            <p className="text-creed-text font-display font-bold text-lg">
              {currentUser?.username}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Old/Temporary Password */}
            <div>
              <label
                htmlFor="oldPassword"
                className="block text-sm font-display font-semibold text-creed-text mb-2 uppercase tracking-wide"
              >
                {t('userAuth.tempPassword')}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-creed-muted" />
                <input
                  type="password"
                  id="oldPassword"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleChange}
                  className={`w-full pl-11 pr-4 py-3 bg-creed-base border rounded-lg
                           focus:ring-2 focus:ring-creed-warning focus:border-creed-warning
                           text-creed-text placeholder-creed-muted font-body
                           transition-all duration-200
                           ${errors.oldPassword ? 'border-creed-danger' : 'border-creed-lighter'}`}
                  placeholder={t('userAuth.enterTempPassword')}
                  disabled={loading}
                  autoFocus
                />
              </div>
              {errors.oldPassword && (
                <p className="text-creed-danger text-xs font-body mt-1">{errors.oldPassword}</p>
              )}
            </div>

            {/* New Password */}
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-display font-semibold text-creed-text mb-2 uppercase tracking-wide"
              >
                {t('userAuth.newPassword')}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-creed-muted" />
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className={`w-full pl-11 pr-4 py-3 bg-creed-base border rounded-lg
                           focus:ring-2 focus:ring-creed-warning focus:border-creed-warning
                           text-creed-text placeholder-creed-muted font-body
                           transition-all duration-200
                           ${errors.newPassword ? 'border-creed-danger' : 'border-creed-lighter'}`}
                  placeholder={t('userAuth.enterNewPassword')}
                  disabled={loading}
                />
              </div>
              {errors.newPassword && (
                <p className="text-creed-danger text-xs font-body mt-1">{errors.newPassword}</p>
              )}
              <p className="text-xs text-creed-muted font-body mt-1">
                {t('setup.passwordRequirements')}
              </p>
            </div>

            {/* Confirm New Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-display font-semibold text-creed-text mb-2 uppercase tracking-wide"
              >
                {t('userAuth.confirmNewPassword')}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-creed-muted" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pl-11 pr-4 py-3 bg-creed-base border rounded-lg
                           focus:ring-2 focus:ring-creed-warning focus:border-creed-warning
                           text-creed-text placeholder-creed-muted font-body
                           transition-all duration-200
                           ${errors.confirmPassword ? 'border-creed-danger' : 'border-creed-lighter'}`}
                  placeholder={t('setup.reenterPassword')}
                  disabled={loading}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-creed-danger text-xs font-body mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-creed-warning to-creed-accent
                       text-creed-darker rounded-lg font-display font-bold uppercase tracking-wider
                       hover:shadow-glow-accent disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all duration-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t('userAuth.updating')}</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>{t('userAuth.changePasswordButton')}</span>
                </>
              )}
            </button>
          </form>

            {/* Security Note */}
            <div className="mt-6 pt-6 border-t border-creed-lighter">
              <p className="text-creed-muted text-xs font-body text-center">
                {t('userAuth.cannotSkipPassword')}
              </p>
            </div>
          </div>

          {/* Onboarding Guide Sidebar */}
          <div className="bg-creed-light border border-creed-success/30 rounded-lg shadow-tactical p-6">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-creed-success" />
              <h2 className="text-lg font-display font-bold text-creed-text uppercase">
                {t('onboarding.passwordTitle')}
              </h2>
            </div>

            <div className="space-y-4 mb-6">
              {/* Current Step */}
              <div className="relative pl-6 pb-4 border-l-2 border-creed-success">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-creed-success border-2 border-creed-light flex items-center justify-center">
                  <span className="text-xs font-bold text-white">3</span>
                </div>
                <h3 className="text-sm font-display font-bold text-creed-success mb-1">
                  {t('onboarding.step3Title')}
                </h3>
                <p className="text-xs text-creed-muted font-body mb-2">
                  {t('onboarding.passwordStep3Desc')}
                </p>
                <div className="bg-creed-base rounded px-2 py-1 mb-2">
                  <p className="text-xs font-display font-bold text-creed-text mb-1">
                    {t('onboarding.tempPasswordReminder')}:
                  </p>
                  <p className="text-sm font-mono text-creed-accent">
                    TDC2025
                  </p>
                </div>
              </div>

              {/* Next Step */}
              <div className="relative pl-6">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-creed-primary border-2 border-creed-light flex items-center justify-center">
                  <span className="text-xs font-bold text-white">✓</span>
                </div>
                <h3 className="text-sm font-display font-bold text-creed-text mb-1">
                  {t('onboarding.almostDone')}
                </h3>
                <p className="text-xs text-creed-muted font-body">
                  {t('onboarding.passwordCompleteDesc')}
                </p>
              </div>
            </div>

            {/* Important Notes */}
            <div className="space-y-3">
              <div className="bg-creed-success/10 border border-creed-success/30 rounded-lg p-3">
                <p className="text-xs font-display font-bold text-creed-success mb-1">
                  ✓ {t('onboarding.passwordTips')}
                </p>
                <ul className="text-xs text-creed-muted font-body space-y-1 list-disc list-inside">
                  <li>{t('onboarding.passwordTip1')}</li>
                  <li>{t('onboarding.passwordTip2')}</li>
                  <li>{t('onboarding.passwordTip3')}</li>
                </ul>
              </div>

              <div className="bg-creed-warning/10 border border-creed-warning/30 rounded-lg p-3">
                <p className="text-xs font-display font-bold text-creed-warning mb-1">
                  ⚠️ {t('onboarding.remember')}
                </p>
                <p className="text-xs text-creed-muted font-body">
                  {t('onboarding.passwordRemember')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
