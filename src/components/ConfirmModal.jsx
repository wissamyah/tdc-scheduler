import { AlertCircle, CheckCircle } from 'lucide-react';

/**
 * ConfirmModal - Custom confirmation dialog component
 * Themed confirmation modal for destructive/important actions
 *
 * @param {boolean} isOpen - Whether modal is visible
 * @param {Function} onClose - Close handler
 * @param {Function} onConfirm - Confirm handler
 * @param {string} title - Modal title
 * @param {string} message - Confirmation message
 * @param {string} confirmText - Confirm button text (default: "Confirm")
 * @param {string} cancelText - Cancel button text (default: "Cancel")
 * @param {string} type - Modal type: "danger", "warning", "success", "info" (default: "danger")
 * @param {boolean} loading - Show loading state on confirm button
 */
export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  type = 'danger',
  loading = false
}) {
  if (!isOpen) return null;

  const typeStyles = {
    danger: {
      icon: AlertCircle,
      iconBg: 'bg-creed-danger/20',
      iconBorder: 'border-creed-danger',
      iconColor: 'text-creed-danger',
      border: 'border-creed-danger',
      confirmBg: 'bg-creed-danger',
      confirmHover: 'hover:bg-creed-danger/80',
      confirmShadow: 'hover:shadow-glow-primary'
    },
    warning: {
      icon: AlertCircle,
      iconBg: 'bg-creed-warning/20',
      iconBorder: 'border-creed-warning',
      iconColor: 'text-creed-warning',
      border: 'border-creed-warning',
      confirmBg: 'bg-creed-warning',
      confirmHover: 'hover:bg-creed-warning/80',
      confirmShadow: 'hover:shadow-glow-accent'
    },
    success: {
      icon: CheckCircle,
      iconBg: 'bg-creed-primary/20',
      iconBorder: 'border-creed-primary',
      iconColor: 'text-creed-primary',
      border: 'border-creed-primary',
      confirmBg: 'bg-creed-primary',
      confirmHover: 'hover:bg-creed-primary/80',
      confirmShadow: 'hover:shadow-glow-primary'
    },
    info: {
      icon: AlertCircle,
      iconBg: 'bg-creed-accent/20',
      iconBorder: 'border-creed-accent',
      iconColor: 'text-creed-accent',
      border: 'border-creed-accent',
      confirmBg: 'bg-creed-accent',
      confirmHover: 'hover:bg-creed-accent/80',
      confirmShadow: 'hover:shadow-glow-accent'
    }
  };

  const styles = typeStyles[type] || typeStyles.danger;
  const Icon = styles.icon;

  const handleConfirm = () => {
    if (!loading) {
      onConfirm();
    }
  };

  const handleCancel = () => {
    if (!loading) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity"
        onClick={handleCancel}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className={`max-w-md w-full bg-creed-light border-2 ${styles.border} rounded-lg shadow-tactical
                     pointer-events-auto transform transition-all`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Content */}
          <div className="p-6">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className={`w-16 h-16 rounded-full ${styles.iconBg} border-2 ${styles.iconBorder}
                             flex items-center justify-center`}>
                <Icon className={`w-10 h-10 ${styles.iconColor}`} />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-display font-bold text-creed-text uppercase tracking-wide text-center mb-3">
              {title}
            </h3>

            {/* Message */}
            <p className="text-creed-muted font-body text-center mb-6">
              {message}
            </p>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                disabled={loading}
                className="flex-1 px-4 py-2.5 bg-creed-base border border-creed-lighter
                         text-creed-text rounded-lg
                         hover:bg-creed-lighter
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all font-display font-semibold uppercase tracking-wide"
              >
                {cancelText}
              </button>
              <button
                onClick={handleConfirm}
                disabled={loading}
                className={`flex-1 px-4 py-2.5 ${styles.confirmBg} text-white rounded-lg
                         ${styles.confirmHover} ${styles.confirmShadow}
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all font-display font-bold uppercase tracking-wide
                         flex items-center justify-center gap-2`}
              >
                {loading && (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                )}
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
