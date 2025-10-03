import { useState } from 'react';
import { Lock, AlertCircle, Loader2, CheckCircle, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { showToast } from '../utils/toast';

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
      <div className="max-w-md w-full">
        <div className="bg-creed-light border-2 border-creed-warning rounded-lg shadow-tactical p-8">
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
      </div>
    </div>
  );
}
