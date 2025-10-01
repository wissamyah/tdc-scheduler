import toast from 'react-hot-toast';

// Custom toast styles matching Dark War theme
const toastConfig = {
  duration: 4000,
  style: {
    background: '#1a2129',
    color: '#e5e7eb',
    border: '1px solid #232b36',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
  },
  success: {
    iconTheme: {
      primary: '#4ade80',
      secondary: '#1a2129',
    },
  },
  error: {
    iconTheme: {
      primary: '#ef4444',
      secondary: '#1a2129',
    },
  },
  loading: {
    iconTheme: {
      primary: '#00d9ff',
      secondary: '#1a2129',
    },
  },
};

export const showToast = {
  success: (message) => toast.success(message, toastConfig),
  error: (message) => toast.error(message, toastConfig),
  loading: (message) => toast.loading(message, toastConfig),
  promise: (promise, messages) => toast.promise(promise, messages, toastConfig),
  dismiss: (id) => toast.dismiss(id),
};
