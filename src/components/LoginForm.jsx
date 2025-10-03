import { useState } from 'react';
import { Shield, User, Lock, Loader2, AlertCircle, UserPlus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { showToast } from '../utils/toast';

export default function LoginForm({ onShowRegister }) {
  const { t } = useLanguage();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username.trim()) {
      setError(t('userAuth.enterUsername'));
      return;
    }

    if (!formData.password) {
      setError(t('userAuth.enterPassword'));
      return;
    }

    setLoading(true);
    setError('');

    try {
      await login(formData.username.trim(), formData.password);
      showToast.success(t('userAuth.loginSuccessful'));
    } catch (err) {
      console.error('Login error:', err);

      if (err.message.includes('pending approval')) {
        setError(t('userAuth.accountPending'));
      } else if (err.message.includes('not active')) {
        setError(t('userAuth.accountInactive'));
      } else {
        setError(t('userAuth.invalidCredentials'));
      }

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
              {t('userAuth.login')}
            </h1>
          </div>
          <div className="h-0.5 w-full bg-gradient-to-r from-creed-accent via-creed-primary to-transparent mb-6"></div>

          {/* Info Box */}
          <div className="bg-creed-base border border-creed-accent/30 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-creed-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-creed-text font-body text-sm">
                  {t('userAuth.loginPrompt')}
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
                {t('userAuth.username')}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-creed-muted" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-creed-base border border-creed-lighter rounded-lg
                           focus:ring-2 focus:ring-creed-accent focus:border-creed-accent
                           text-creed-text placeholder-creed-muted font-body
                           transition-all duration-200"
                  placeholder={t('userAuth.enterUsername')}
                  disabled={loading}
                  autoFocus
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-display font-semibold text-creed-text mb-2 uppercase tracking-wide"
              >
                {t('userAuth.password')}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-creed-muted" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-creed-base border border-creed-lighter rounded-lg
                           focus:ring-2 focus:ring-creed-accent focus:border-creed-accent
                           text-creed-text placeholder-creed-muted font-body
                           transition-all duration-200"
                  placeholder={t('userAuth.enterPassword')}
                  disabled={loading}
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-creed-danger/10 border border-creed-danger/30 rounded-lg">
                <AlertCircle className="w-4 h-4 text-creed-danger flex-shrink-0" />
                <p className="text-creed-danger text-sm font-body">{error}</p>
              </div>
            )}

            {/* Login Button */}
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
                  <span>{t('userAuth.loggingIn')}</span>
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  <span>{t('userAuth.loginButton')}</span>
                </>
              )}
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-6 pt-6 border-t border-creed-lighter text-center">
            <p className="text-creed-muted text-sm font-body mb-3">
              {t('userAuth.dontHaveAccount')}
            </p>
            <button
              onClick={onShowRegister}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 bg-creed-base border border-creed-primary/30
                       text-creed-primary rounded-lg font-display font-semibold uppercase tracking-wide text-sm
                       hover:bg-creed-primary/10 hover:border-creed-primary transition-all
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <UserPlus className="w-4 h-4" />
              <span>{t('userAuth.registerButton')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
