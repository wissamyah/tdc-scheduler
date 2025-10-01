import { useState } from 'react';
import { Shield, Lock, Key, Loader2, CheckCircle2 } from 'lucide-react';
import { hashPassword } from '../utils/auth';
import { initializePassword, verifyPAT } from '../services/github';
import { showToast } from '../utils/toast';

export default function PasswordSetup({ onSetupComplete }) {
  const [pat, setPat] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!pat.trim()) {
      showToast.error('Please enter your access token');
      return;
    }

    if (password.length < 6) {
      showToast.error('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      showToast.error('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      setStatus('Verifying credentials...');
      const isValid = await verifyPAT(pat);
      if (!isValid) {
        showToast.error('Invalid access token');
        setLoading(false);
        setStatus('');
        return;
      }

      setStatus('Creating secure password...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      const passwordHash = await hashPassword(password);

      setStatus('Initializing alliance command...');
      await initializePassword(pat, passwordHash);

      setStatus('Waiting for system synchronization...');
      await new Promise(resolve => setTimeout(resolve, 10000));

      showToast.success('Alliance command initialized!');
      setStatus('Complete! Redirecting...');

      setTimeout(() => {
        onSetupComplete();
      }, 1000);
    } catch (err) {
      console.error('Setup error:', err);
      showToast.error('Initialization failed. Please try again.');
      setLoading(false);
      setStatus('');
    }
  };

  return (
    <div className="min-h-screen bg-creed-darker flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-creed-base border-2 border-creed-primary mb-4 relative">
            <Shield className="w-10 h-10 text-creed-primary" strokeWidth={2.5} />
            <div className="absolute inset-0 bg-creed-primary opacity-20 blur-2xl rounded-full"></div>
          </div>
          <h1 className="text-3xl font-display font-bold text-creed-text mb-2 tracking-wide">
            ALLIANCE INITIALIZATION
          </h1>
          <p className="text-creed-muted font-body">
            Configure secure access for The Dark Creed
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-creed-base border border-creed-lighter rounded-lg shadow-tactical p-6">
          {status && (
            <div className="mb-6 bg-creed-light border border-creed-accent rounded-lg p-4 flex items-center space-x-3">
              <Loader2 className="w-5 h-5 text-creed-accent animate-spin flex-shrink-0" />
              <span className="text-creed-text text-sm font-display">{status}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Access Token */}
            <div>
              <label htmlFor="pat" className="block text-sm font-display font-semibold text-creed-text mb-2 tracking-wide">
                <Key className="w-4 h-4 inline mr-2" />
                ACCESS TOKEN
              </label>
              <input
                type="password"
                id="pat"
                value={pat}
                onChange={(e) => setPat(e.target.value)}
                className="w-full px-4 py-3 bg-creed-darker border border-creed-lighter rounded-lg
                          text-creed-text placeholder-creed-muted
                          focus:border-creed-primary focus:ring-2 focus:ring-creed-primary/20 focus:outline-none
                          transition-all font-body"
                placeholder="Enter access token..."
                disabled={loading}
                autoComplete="off"
              />
              <p className="text-xs text-creed-muted mt-1.5 font-body">
                Used for initial setup only
              </p>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-display font-semibold text-creed-text mb-2 tracking-wide">
                <Lock className="w-4 h-4 inline mr-2" />
                ALLIANCE PASSWORD
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-creed-darker border border-creed-lighter rounded-lg
                          text-creed-text placeholder-creed-muted
                          focus:border-creed-accent focus:ring-2 focus:ring-creed-accent/20 focus:outline-none
                          transition-all font-body"
                placeholder="Create password (min 6 characters)"
                disabled={loading}
                autoComplete="new-password"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-display font-semibold text-creed-text mb-2 tracking-wide">
                <CheckCircle2 className="w-4 h-4 inline mr-2" />
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-creed-darker border border-creed-lighter rounded-lg
                          text-creed-text placeholder-creed-muted
                          focus:border-creed-accent focus:ring-2 focus:ring-creed-accent/20 focus:outline-none
                          transition-all font-body"
                placeholder="Re-enter password"
                disabled={loading}
                autoComplete="new-password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-creed-primary hover:bg-creed-primary/90 disabled:bg-creed-muted
                        text-white font-display font-bold py-3 px-6 rounded-lg
                        transition-all duration-200 shadow-glow-primary
                        disabled:cursor-not-allowed disabled:shadow-none
                        flex items-center justify-center space-x-2 tracking-wide"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>INITIALIZING...</span>
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  <span>INITIALIZE COMMAND</span>
                </>
              )}
            </button>
          </form>

          {/* Info Note */}
          <div className="mt-6 p-4 bg-creed-lighter/50 border border-creed-lighter rounded-lg">
            <p className="text-xs text-creed-muted font-body leading-relaxed">
              <span className="text-creed-accent font-semibold">IMPORTANT:</span> This password will be shared with all alliance members for schedule submissions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
