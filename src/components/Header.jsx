import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Users, Calendar, TrendingUp, LogOut, User, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import LanguageToggle from './LanguageToggle';
import ConfirmModal from './ConfirmModal';
import { getRoleDisplay } from '../utils/permissions';

export default function Header() {
  const { t } = useLanguage();
  const { currentUser, logout, isAdmin } = useAuth();
  const location = useLocation();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleLogoutClick = () => {
    setShowUserMenu(false);
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    setShowLogoutModal(false);
    logout();
  };

  if (!currentUser) {
    return null; // Don't show header if not logged in
  }

  const roleDisplay = getRoleDisplay(currentUser.role);

  return (
    <header className="bg-creed-darker border-b border-creed-lighter shadow-tactical">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Logo/Branding */}
          <div className="flex items-center justify-center lg:justify-start space-x-3">
            <div className="relative flex-shrink-0">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-creed-primary" strokeWidth={2} />
              <div className="absolute inset-0 bg-creed-primary opacity-20 blur-xl"></div>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-creed-text tracking-wide">
                {t('nav.title')}
              </h1>
              <p className="text-xs sm:text-sm text-creed-muted font-display tracking-widest">
                {t('nav.subtitle')}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-row gap-2 items-center">
          <Link
            to="/"
            className={`
              flex-1 lg:flex-none flex items-center justify-center space-x-2 px-4 py-3 rounded-lg
              font-display font-semibold text-xs sm:text-sm whitespace-nowrap
              transition-all duration-200 relative overflow-hidden group
              ${isActive('/')
                ? 'bg-creed-primary text-white shadow-glow-primary'
                : 'text-creed-text hover:bg-creed-lighter hover:text-creed-primary'
              }
            `}
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">{t('nav.submitSchedule')}</span>
            <span className="sm:hidden">{t('nav.submitScheduleShort')}</span>
          </Link>

          <Link
            to="/members"
            className={`
              flex-1 lg:flex-none flex items-center justify-center space-x-2 px-4 py-3 rounded-lg
              font-display font-semibold text-xs sm:text-sm whitespace-nowrap
              transition-all duration-200 relative overflow-hidden group
              ${isActive('/members')
                ? 'bg-creed-accent text-creed-darker shadow-glow-accent'
                : 'text-creed-text hover:bg-creed-lighter hover:text-creed-accent'
              }
            `}
          >
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">{t('nav.viewRoster')}</span>
            <span className="sm:hidden">{t('nav.viewRosterShort')}</span>
          </Link>

          <Link
            to="/optimal"
            className={`
              flex-1 lg:flex-none flex items-center justify-center space-x-2 px-4 py-3 rounded-lg
              font-display font-semibold text-xs sm:text-sm whitespace-nowrap
              transition-all duration-200 relative overflow-hidden group
              ${isActive('/optimal')
                ? 'bg-creed-secondary text-creed-darker shadow-glow-primary'
                : 'text-creed-text hover:bg-creed-lighter hover:text-creed-secondary'
              }
            `}
          >
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">{t('nav.optimalSchedule')}</span>
            <span className="sm:hidden">{t('nav.optimalScheduleShort')}</span>
          </Link>

          {/* Admin Panel Link */}
          {isAdmin() && (
            <Link
              to="/admin"
              className={`
                flex-1 lg:flex-none flex items-center justify-center space-x-2 px-4 py-3 rounded-lg
                font-display font-semibold text-xs sm:text-sm whitespace-nowrap
                transition-all duration-200 relative overflow-hidden group
                ${isActive('/admin')
                  ? 'bg-creed-danger text-white shadow-glow-primary'
                  : 'text-creed-text hover:bg-creed-lighter hover:text-creed-danger'
                }
              `}
            >
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">{t('nav.adminDashboard')}</span>
              <span className="sm:hidden">{t('nav.adminDashboardShort')}</span>
            </Link>
          )}

          {/* User Menu */}
          <div className="relative ml-2">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 px-4 py-3 rounded-lg
                       bg-creed-lighter hover:bg-creed-base
                       border border-creed-lighter hover:border-creed-primary
                       transition-all group"
            >
              <User className="w-4 h-4 text-creed-text" />
              <span className="hidden md:inline text-creed-text font-display font-semibold text-sm">
                {currentUser.username}
              </span>
              <span className={`px-2 py-0.5 rounded text-xs font-display font-bold uppercase
                             bg-${roleDisplay.bgColor} text-${roleDisplay.color} border border-${roleDisplay.borderColor}`}>
                {t(roleDisplay.labelKey)}
              </span>
              <ChevronDown className={`w-4 h-4 text-creed-muted transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <>
                {/* Backdrop to close menu */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowUserMenu(false)}
                />
                {/* Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-creed-light border border-creed-lighter rounded-lg shadow-tactical z-20 overflow-hidden">
                  <button
                    onClick={handleLogoutClick}
                    className="w-full flex items-center gap-3 px-4 py-3
                             hover:bg-creed-base transition-all
                             text-creed-danger font-display font-semibold text-sm uppercase tracking-wide"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>{t('userAuth.logout')}</span>
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Language Toggle */}
          <div className="hidden sm:block ml-2">
            <LanguageToggle />
          </div>
        </nav>

        {/* Language Toggle - Mobile (below navigation) */}
        <div className="sm:hidden flex justify-center mt-2">
          <LanguageToggle />
        </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      <ConfirmModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleConfirmLogout}
        title={t('userAuth.logout')}
        message={t('userAuth.logoutConfirm')}
        confirmText={t('userAuth.logout')}
        cancelText={t('common.cancel')}
        type="warning"
      />
    </header>
  );
}
