import { useState } from 'react';
import { Lock, AlertCircle, Loader2, CheckCircle, Shield, Key } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { showToast } from '../utils/toast';

export default function Settings() {
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

      // Clear form
      setFormData({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (err) {
      console.error('Password change error:', err);

      if (err.message.includes('incorrect')) {
        setErrors({ oldPassword: t('userAuth.incorrectOldPassword') });
        showToast.error(t('userAuth.incorrectOldPassword'));
      } else {
        showToast.error(t('userAuth.passwordChangeFailed'));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-creed-dark py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-creed-primary/20 border-2 border-creed-primary flex items-center justify-center">
              <Shield className="w-6 h-6 text-creed-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-display font-bold text-creed-text uppercase tracking-wide">
                {t('settings.title')}
              </h1>
              <p className="text-creed-muted font-body text-sm">
                {t('settings.subtitle')}
              </p>
            </div>
          </div>
          <div className="h-0.5 w-full bg-gradient-to-r from-creed-primary via-creed-accent to-transparent"></div>
        </div>

        {/* User Info Card */}
        <div className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-creed-primary/20 border-2 border-creed-primary flex items-center justify-center">
              <Key className="w-8 h-8 text-creed-primary" />
            </div>
            <div>
              <p className="text-xs text-creed-muted font-body uppercase tracking-wide mb-1">
                {t('userAuth.loggedInAs')}
              </p>
              <p className="text-creed-text font-display font-bold text-xl">
                {currentUser?.username}
              </p>
              <p className="text-xs text-creed-muted font-body mt-1">
                {t(`roles.${currentUser?.role}`)}
              </p>
            </div>
          </div>
        </div>

        {/* Password Change Section */}
        <div className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical p-8">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-creed-accent" />
            <h2 className="text-xl font-display font-bold text-creed-text uppercase tracking-wide">
              {t('userAuth.changePassword')}
            </h2>
          </div>

          {/* Info Box */}
          <div className="bg-creed-base border border-creed-accent/30 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-creed-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-creed-text font-body text-sm">
                  {t('settings.passwordChangeInfo')}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Current Password */}
            <div>
              <label
                htmlFor="oldPassword"
                className="block text-sm font-display font-semibold text-creed-text mb-2 uppercase tracking-wide"
              >
                {t('userAuth.oldPassword')}
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
                           focus:ring-2 focus:ring-creed-accent focus:border-creed-accent
                           text-creed-text placeholder-creed-muted font-body
                           transition-all duration-200
                           ${errors.oldPassword ? 'border-creed-danger' : 'border-creed-lighter'}`}
                  placeholder={t('userAuth.enterOldPassword')}
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
                           focus:ring-2 focus:ring-creed-accent focus:border-creed-accent
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
                           focus:ring-2 focus:ring-creed-accent focus:border-creed-accent
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
              className="w-full px-6 py-3 bg-gradient-to-r from-creed-accent to-creed-primary
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
        </div>
      </div>
    </div>
  );
}
