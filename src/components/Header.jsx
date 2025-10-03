import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Users, Calendar, TrendingUp, LogOut, User, ChevronDown, Settings as SettingsIcon } from 'lucide-react';
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
        <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">
          {/* Logo/Branding */}
          <div className="flex items-center justify-between lg:justify-start">
            <div className="flex items-center space-x-3">
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

            {/* Language Toggle - Mobile Only */}
            <div className="flex-shrink-0 lg:hidden">
              <LanguageToggle />
            </div>
          </div>

          {/* Navigation + Controls */}
          <div className="flex flex-row gap-1.5 items-center w-full lg:w-auto relative justify-between">
            <nav className="flex flex-row gap-1.5 items-center overflow-x-auto scrollbar-hide flex-1">
              <Link
                to="/"
                className={`
                  flex-shrink-0 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg
                  font-display font-semibold text-xs transition-all duration-200
                  ${isActive('/')
                    ? 'bg-creed-primary text-white shadow-glow-primary'
                    : 'text-creed-text hover:bg-creed-lighter hover:text-creed-primary'
                  }
                `}
              >
                <Calendar className="w-5 h-5" />
                <span className="hidden lg:inline">{t('nav.submitSchedule')}</span>
              </Link>

              <Link
                to="/members"
                className={`
                  flex-shrink-0 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg
                  font-display font-semibold text-xs transition-all duration-200
                  ${isActive('/members')
                    ? 'bg-creed-accent text-creed-darker shadow-glow-accent'
                    : 'text-creed-text hover:bg-creed-lighter hover:text-creed-accent'
                  }
                `}
              >
                <Users className="w-5 h-5" />
                <span className="hidden lg:inline">{t('nav.viewRoster')}</span>
              </Link>

              <Link
                to="/optimal"
                className={`
                  flex-shrink-0 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg
                  font-display font-semibold text-xs transition-all duration-200
                  ${isActive('/optimal')
                    ? 'bg-creed-secondary text-creed-darker shadow-glow-primary'
                    : 'text-creed-text hover:bg-creed-lighter hover:text-creed-secondary'
                  }
                `}
              >
                <TrendingUp className="w-5 h-5" />
                <span className="hidden lg:inline">{t('nav.optimalSchedule')}</span>
              </Link>

              <Link
                to="/events"
                className={`
                  flex-shrink-0 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg
                  font-display font-semibold text-xs transition-all duration-200
                  ${isActive('/events')
                    ? 'bg-creed-warning text-creed-darker shadow-glow-warning'
                    : 'text-creed-text hover:bg-creed-lighter hover:text-creed-warning'
                  }
                `}
              >
                <Calendar className="w-5 h-5" />
                <span className="hidden lg:inline">{t('nav.events')}</span>
              </Link>

              {isAdmin() && (
                <Link
                  to="/admin"
                  className={`
                    flex-shrink-0 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg
                    font-display font-semibold text-xs transition-all duration-200
                    ${isActive('/admin')
                      ? 'bg-creed-danger text-white shadow-glow-primary'
                      : 'text-creed-text hover:bg-creed-lighter hover:text-creed-danger'
                    }
                  `}
                >
                  <Shield className="w-5 h-5" />
                  <span className="hidden lg:inline">{t('nav.adminDashboard')}</span>
                </Link>
              )}

              <div className="w-px h-8 bg-creed-lighter mx-1 flex-shrink-0"></div>
            </nav>

            {/* User Menu - Outside scrolling container */}
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg
                         bg-transparent hover:bg-creed-lighter/50
                         border border-transparent hover:border-creed-lighter
                         transition-all group"
              >
                <User className="w-5 h-5 text-creed-muted group-hover:text-creed-text transition-colors" />
                <span className={`px-1.5 py-0.5 rounded text-xs font-display font-bold uppercase
                               bg-${roleDisplay.bgColor} text-${roleDisplay.color} border border-${roleDisplay.borderColor}`}>
                  {t(roleDisplay.labelKey)}
                </span>
                <ChevronDown className={`w-4 h-4 text-creed-muted transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
              </button>

              {showUserMenu && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowUserMenu(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 w-48 bg-creed-light border border-creed-lighter rounded-lg shadow-tactical z-20 overflow-hidden">
                    <Link
                      to="/settings"
                      onClick={() => setShowUserMenu(false)}
                      className="w-full flex items-center gap-3 px-4 py-3
                               hover:bg-creed-base transition-all
                               text-creed-text font-display font-semibold text-sm uppercase tracking-wide"
                    >
                      <SettingsIcon className="w-4 h-4" />
                      <span>{t('settings.settings')}</span>
                    </Link>
                    <div className="h-px bg-creed-lighter"></div>
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

            {/* Language Toggle - Desktop Only */}
            <div className="hidden lg:block flex-shrink-0 ml-2">
              <LanguageToggle />
            </div>
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
