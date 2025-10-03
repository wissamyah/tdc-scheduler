import { useState } from 'react';
import { Shield, User, Lock, Loader2, AlertCircle, LogIn, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { showToast } from '../utils/toast';
import LanguageToggle from './LanguageToggle';

export default function RegisterForm({ onShowLogin }) {
  const { t } = useLanguage();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = t('userAuth.enterUsername');
    } else if (formData.username.length < 3) {
      newErrors.username = t('userAuth.usernameTooShort');
    } else if (formData.username.length > 20) {
      newErrors.username = t('userAuth.usernameTooLong');
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = t('userAuth.usernameInvalid');
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = t('userAuth.enterPassword');
    } else if (formData.password.length < 8) {
      newErrors.password = t('userAuth.weakPassword');
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = t('userAuth.confirmPasswordRequired');
    } else if (formData.password !== formData.confirmPassword) {
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
      await register({
        username: formData.username.trim(),
        password: formData.password
      });

      setRegistered(true);
      showToast.success(t('userAuth.registrationSuccess'));
    } catch (err) {
      console.error('Registration error:', err);

      if (err.message.includes('already exists')) {
        setErrors({ username: t('userAuth.usernameExists') });
        showToast.error(t('userAuth.usernameExists'));
      } else {
        showToast.error(t('userAuth.registrationFailed'));
      }

      setLoading(false);
    }
  };

  // Show success state after registration
  if (registered) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base flex items-center justify-center p-4 relative">
        {/* Language Toggle */}
        <div className="absolute top-4 right-4">
          <LanguageToggle />
        </div>

        <div className="max-w-md w-full">
          <div className="bg-creed-light border border-creed-success rounded-lg shadow-tactical p-8">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-creed-success/20 border-2 border-creed-success flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-creed-success" />
              </div>
            </div>

            {/* Success Message */}
            <h2 className="text-2xl font-display font-bold text-creed-text uppercase tracking-wide text-center mb-4">
              {t('userAuth.awaitingApproval')}
            </h2>
            <p className="text-creed-muted font-body text-center mb-6">
              {t('userAuth.registrationPending')}
            </p>

            {/* Info Box */}
            <div className="bg-creed-base border border-creed-accent/30 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-creed-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-creed-text font-body text-sm">
                    {t('userAuth.approvalNote')}
                  </p>
                </div>
              </div>
            </div>

            {/* Back to Login Button */}
            <button
              onClick={onShowLogin}
              className="w-full px-6 py-3 bg-gradient-to-r from-creed-accent to-creed-primary
                       text-white rounded-lg font-display font-bold uppercase tracking-wider
                       hover:shadow-glow-accent transition-all duration-200 flex items-center justify-center gap-2"
            >
              <LogIn className="w-5 h-5" />
              <span>{t('userAuth.backToLogin')}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base flex items-center justify-center p-4 relative">
      {/* Language Toggle */}
      <div className="absolute top-4 right-4">
        <LanguageToggle />
      </div>

      <div className="max-w-md w-full mt-16 sm:mt-0">
        <div className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical p-8">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-creed-primary" />
            <h1 className="text-3xl font-display font-bold text-creed-text uppercase tracking-wide">
              {t('userAuth.register')}
            </h1>
          </div>
          <div className="h-0.5 w-full bg-gradient-to-r from-creed-primary via-creed-accent to-transparent mb-6"></div>

          {/* Info Box */}
          <div className="bg-creed-base border border-creed-primary/30 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-creed-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-creed-text font-body text-sm">
                  {t('userAuth.registerPrompt')}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-display font-semibold text-creed-text mb-2 uppercase tracking-wide"
              >
                {t('userAuth.username')} *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-creed-muted" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full pl-11 pr-4 py-3 bg-creed-base border rounded-lg
                           focus:ring-2 focus:ring-creed-primary focus:border-creed-primary
                           text-creed-text placeholder-creed-muted font-body
                           transition-all duration-200
                           ${errors.username ? 'border-creed-danger' : 'border-creed-lighter'}`}
                  placeholder={t('userAuth.enterUsername')}
                  disabled={loading}
                  autoFocus
                />
              </div>
              {errors.username && (
                <p className="text-creed-danger text-xs font-body mt-1">{errors.username}</p>
              )}
              <p className="text-xs text-creed-muted font-body mt-1">
                {t('userAuth.usernameHint')}
              </p>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-display font-semibold text-creed-text mb-2 uppercase tracking-wide"
              >
                {t('userAuth.password')} *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-creed-muted" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-11 pr-4 py-3 bg-creed-base border rounded-lg
                           focus:ring-2 focus:ring-creed-primary focus:border-creed-primary
                           text-creed-text placeholder-creed-muted font-body
                           transition-all duration-200
                           ${errors.password ? 'border-creed-danger' : 'border-creed-lighter'}`}
                  placeholder={t('userAuth.enterPassword')}
                  disabled={loading}
                />
              </div>
              {errors.password && (
                <p className="text-creed-danger text-xs font-body mt-1">{errors.password}</p>
              )}
              <p className="text-xs text-creed-muted font-body mt-1">
                {t('setup.passwordRequirements')}
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-display font-semibold text-creed-text mb-2 uppercase tracking-wide"
              >
                {t('userAuth.confirmPassword')} *
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
                           focus:ring-2 focus:ring-creed-primary focus:border-creed-primary
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

            {/* Register Button */}
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
                  <span>{t('userAuth.registering')}</span>
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  <span>{t('userAuth.registerButton')}</span>
                </>
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 pt-6 border-t border-creed-lighter text-center">
            <p className="text-creed-muted text-sm font-body mb-3">
              {t('userAuth.alreadyHaveAccount')}
            </p>
            <button
              onClick={onShowLogin}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 bg-creed-base border border-creed-accent/30
                       text-creed-accent rounded-lg font-display font-semibold uppercase tracking-wide text-sm
                       hover:bg-creed-accent/10 hover:border-creed-accent transition-all
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <LogIn className="w-4 h-4" />
              <span>{t('userAuth.backToLogin')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
