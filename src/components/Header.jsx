import { Link, useLocation } from 'react-router-dom';
import { Shield, Users, Calendar, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t } = useLanguage();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
    </header>
  );
}
