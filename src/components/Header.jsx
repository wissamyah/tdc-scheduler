import { Link, useLocation } from 'react-router-dom';
import { Shield, Users, Calendar, TrendingUp } from 'lucide-react';

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-creed-darker border-b border-creed-lighter shadow-tactical">
      <div className="container mx-auto px-4 py-4">
        {/* Logo/Branding */}
        <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
          <div className="relative flex-shrink-0">
            <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-creed-primary" strokeWidth={2} />
            <div className="absolute inset-0 bg-creed-primary opacity-20 blur-xl"></div>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-creed-text tracking-wide">
              THE DARK CREED
            </h1>
            <p className="text-xs sm:text-sm text-creed-muted font-display tracking-widest">
              ALLIANCE COMMAND CENTER
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-row gap-2 lg:justify-start">
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
            <span className="hidden xs:inline sm:inline">SUBMIT SCHEDULE</span>
            <span className="xs:hidden">SUBMIT</span>
            {isActive('/') && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
            )}
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
            <span className="hidden xs:inline sm:inline">VIEW ROSTER</span>
            <span className="xs:hidden">ROSTER</span>
            {isActive('/members') && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-creed-darker"></div>
            )}
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
            <span className="hidden xs:inline sm:inline">OPTIMAL SCHEDULE</span>
            <span className="xs:hidden">OPTIMAL</span>
            {isActive('/optimal') && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-creed-darker"></div>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
