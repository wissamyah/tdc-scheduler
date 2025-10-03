import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import AdminInitialSetup from './components/AdminInitialSetup';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import FirstLoginPasswordChange from './components/FirstLoginPasswordChange';
import ScheduleForm from './components/ScheduleForm';
import MembersList from './components/MembersList';
import OptimalScheduleCalendar from './components/OptimalScheduleCalendar';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { Loader2 } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

function AppContent() {
  const { t } = useLanguage();
  const { currentUser, loading, authInitialized, refreshAuthStatus } = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  // Step 1: Auth system not initialized - show admin setup
  if (!authInitialized) {
    return <AdminInitialSetup onComplete={refreshAuthStatus} />;
  }

  // Step 2: User not logged in - show login or register
  if (!currentUser) {
    if (showRegister) {
      return <RegisterForm onShowLogin={() => setShowRegister(false)} />;
    }
    return <LoginForm onShowRegister={() => setShowRegister(true)} />;
  }

  // Step 3: First login - force password change
  if (currentUser.firstLogin) {
    return <FirstLoginPasswordChange />;
  }

  // Step 4: User authenticated and ready - show main app
  return (
    <Router>
      <div className="min-h-screen bg-creed-dark">
        <Toaster position="top-right" />
        <Header />
        <Routes>
          <Route path="/" element={<ScheduleForm />} />
          <Route path="/members" element={<MembersList />} />
          <Route path="/optimal" element={<OptimalScheduleCalendar />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
