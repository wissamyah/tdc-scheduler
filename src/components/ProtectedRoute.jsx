import { Navigate } from 'react-router-dom';
import { AlertCircle, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

/**
 * ProtectedRoute - Route guard component
 * Protects routes based on authentication and role requirements
 *
 * @param {React.ReactNode} children - Component to render if authorized
 * @param {string} requiredRole - Required role (admin, officer, member)
 * @param {string} redirectTo - Path to redirect if unauthorized
 */
export default function ProtectedRoute({ children, requiredRole = null, redirectTo = '/' }) {
  const { t } = useLanguage();
  const { currentUser, loading, isAuthenticated } = useAuth();

  // Redirect to login if not authenticated
  if (!isAuthenticated || !currentUser) {
    return <Navigate to={redirectTo} replace />;
  }

  // Check role requirement
  if (requiredRole) {
    const hasRequiredRole = checkRole(currentUser.role, requiredRole);

    if (!hasRequiredRole) {
      return <UnauthorizedScreen requiredRole={requiredRole} currentRole={currentUser.role} />;
    }
  }

  // Render children if authorized
  return children;
}

/**
 * Check if user role meets requirement
 * @param {string} userRole - User's current role
 * @param {string} requiredRole - Required role
 * @returns {boolean} Whether user has required role
 */
function checkRole(userRole, requiredRole) {
  const roleHierarchy = {
    admin: 3,
    officer: 2,
    member: 1
  };

  const userLevel = roleHierarchy[userRole] || 0;
  const requiredLevel = roleHierarchy[requiredRole] || 0;

  return userLevel >= requiredLevel;
}

/**
 * Unauthorized screen component
 */
function UnauthorizedScreen({ requiredRole, currentRole }) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-creed-light border border-creed-danger rounded-lg shadow-tactical p-8">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-creed-danger/20 border-2 border-creed-danger flex items-center justify-center">
              <AlertCircle className="w-12 h-12 text-creed-danger" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-display font-bold text-creed-text uppercase tracking-wide text-center mb-4">
            {t('errors.accessDenied')}
          </h2>

          {/* Message */}
          <p className="text-creed-muted font-body text-center mb-6">
            {t('errors.insufficientPermissions')}
          </p>

          {/* Info Box */}
          <div className="bg-creed-base border border-creed-danger/30 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-creed-danger flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-creed-text font-body text-sm mb-2">
                  <strong className="text-creed-danger">{t('errors.requiredRole')}</strong>{' '}
                  <span className="text-creed-accent font-display font-bold uppercase">
                    {t(`roles.${requiredRole}`)}
                  </span>
                </p>
                <p className="text-creed-muted font-body text-xs">
                  <strong>{t('errors.yourRole')}</strong>{' '}
                  <span className="text-creed-text font-display font-semibold uppercase">
                    {t(`roles.${currentRole}`)}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="w-full px-6 py-3 bg-gradient-to-r from-creed-primary to-creed-accent
                     text-white rounded-lg font-display font-bold uppercase tracking-wider
                     hover:shadow-glow-primary transition-all duration-200"
          >
            {t('common.goBack')}
          </button>
        </div>
      </div>
    </div>
  );
}
