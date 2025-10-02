import { useState } from 'react';
import { AlertTriangle, X, Trash2 } from 'lucide-react';

export default function DeleteConfirmModal({ isOpen, onConfirm, onCancel, memberCount }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== 'R5') {
      setError('Incorrect password. Deletion cancelled.');
      return;
    }

    setError('');
    onConfirm();
  };

  const handleCancel = () => {
    setPassword('');
    setError('');
    onCancel();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-creed-darker/95 backdrop-blur-md"
        onClick={handleCancel}
      />

      {/* Modal */}
      <div className="relative bg-creed-light border-2 border-creed-danger rounded-lg shadow-tactical max-w-md w-full animate-scaleIn">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-creed-danger/30">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-creed-danger animate-pulse" />
            <h2 className="text-2xl font-display font-bold text-creed-danger uppercase tracking-wide">
              Critical Warning
            </h2>
          </div>
          <button
            onClick={handleCancel}
            className="text-creed-muted hover:text-creed-text transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="bg-creed-danger/10 border border-creed-danger/30 rounded-lg p-4 mb-6">
            <p className="text-creed-text font-body text-center">
              You are about to <span className="font-bold text-creed-danger">DELETE ALL {memberCount} MEMBERS</span> from the alliance roster.
            </p>
            <p className="text-creed-danger font-display font-bold text-center mt-2 uppercase tracking-wide">
              This action CANNOT be undone!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="delete-password"
                className="block text-sm font-display font-semibold text-creed-text mb-2 uppercase tracking-wide"
              >
                Enter Password to Confirm Deletion
              </label>
              <input
                type="text"
                id="delete-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="w-full px-4 py-3 bg-creed-base border border-creed-lighter rounded-lg
                         focus:ring-2 focus:ring-creed-danger focus:border-creed-danger
                         text-creed-text placeholder-creed-muted font-mono text-lg
                         transition-all duration-200"
                placeholder="Enter password..."
                autoFocus
              />
              {error && (
                <p className="text-creed-danger text-sm font-body mt-2 animate-shake">
                  {error}
                </p>
              )}
              <p className="text-creed-muted text-xs font-body mt-2">
                Type the required password to authorize this critical operation
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 px-4 py-3 bg-creed-base border border-creed-lighter
                         text-creed-text rounded-lg
                         hover:border-creed-accent hover:shadow-glow-accent
                         transition-all font-display font-semibold uppercase tracking-wide"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-3 bg-gradient-to-r from-creed-danger to-red-600
                         text-white rounded-lg
                         hover:shadow-glow-primary
                         transition-all font-display font-bold uppercase tracking-wide
                         flex items-center justify-center gap-2"
              >
                <Trash2 className="w-5 h-5" />
                Delete All
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
}
