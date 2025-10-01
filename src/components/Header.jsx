import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold">
              <span className="text-purple-300">The Dark Creed</span>
            </div>
            <div className="hidden md:block text-sm text-purple-200">
              Alliance Scheduler
            </div>
          </div>

          <nav className="flex space-x-6">
            <Link
              to="/"
              className="hover:text-purple-300 transition-colors font-medium"
            >
              Submit Schedule
            </Link>
            <Link
              to="/members"
              className="hover:text-purple-300 transition-colors font-medium"
            >
              View Members
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
