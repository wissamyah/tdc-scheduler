import { useState } from 'react';
import { Shield, Lock, Loader2 } from 'lucide-react';
import { verifyPassword, setAuthToken } from '../utils/auth';
import { showToast } from '../utils/toast';

export default function PasswordPrompt({ passwordHash, onAuthenticated }) {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password.trim()) {
      showToast.error('Please enter the password');
      return;
    }

    setLoading(true);

    try {
      const isValid = await verifyPassword(password, passwordHash);

      if (isValid) {
        // Store auth token in session
        setAuthToken(passwordHash);
        showToast.success('Access granted - Welcome to The Dark Creed');
        onAuthenticated();
      } else {
        showToast.error('Access denied - Invalid credentials');
        setPassword('');
      }
    } catch (err) {
      console.error('Authentication error:', err);
      showToast.error('Authentication system failure - Try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

      <div className="relative bg-creed-light border border-creed-lighter rounded-lg shadow-tactical p-8 max-w-md w-full">
        {/* Tactical corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-creed-primary"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-creed-primary"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-creed-primary"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-creed-primary"></div>

        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Shield className="w-16 h-16 text-creed-primary" strokeWidth={1.5} />
              <Lock className="w-6 h-6 text-creed-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
          <h1 className="text-4xl font-display font-bold text-creed-text mb-2 tracking-wider uppercase">
            The Dark Creed
          </h1>
          <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-creed-primary to-transparent mx-auto mb-4"></div>
          <p className="text-creed-muted font-body uppercase text-sm tracking-wide">
            Restricted Access - Authorization Required
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-display font-semibold text-creed-text mb-2 uppercase tracking-wide"
            >
              Alliance Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-creed-muted" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-creed-base border border-creed-lighter rounded-lg
                         focus:ring-2 focus:ring-creed-primary focus:border-creed-primary
                         text-creed-text placeholder-creed-muted font-body
                         transition-all duration-200"
                placeholder="Enter access code"
                disabled={loading}
                autoFocus
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-creed-primary to-creed-secondary
                     text-white py-3 rounded-lg font-display font-bold uppercase tracking-wider
                     hover:shadow-glow-primary disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-200 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Verifying Access</span>
              </>
            ) : (
              <span>Access System</span>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-creed-muted font-body">
            Contact your alliance commander for credentials
          </p>
        </div>
      </div>
    </div>
  );
}
