import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import PasswordSetup from './components/PasswordSetup';
import PasswordPrompt from './components/PasswordPrompt';
import ScheduleForm from './components/ScheduleForm';
import MembersList from './components/MembersList';
import { fetchData } from './services/github';
import { isAuthenticated } from './utils/auth';
import { Loader2 } from 'lucide-react';

function App() {
  const [appState, setAppState] = useState('loading'); // loading, setup, auth, ready
  const [passwordHash, setPasswordHash] = useState(null);

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      const data = await fetchData();

      if (!data.auth || !data.auth.initialized || !data.auth.passwordHash) {
        // Password not initialized - show setup
        setAppState('setup');
      } else {
        // Password exists
        setPasswordHash(data.auth.passwordHash);

        // Check if already authenticated
        if (isAuthenticated()) {
          setAppState('ready');
        } else {
          setAppState('auth');
        }
      }
    } catch (error) {
      console.error('Error initializing app:', error);
      // Default to setup if there's an error
      setAppState('setup');
    }
  };

  const handleSetupComplete = () => {
    // Reload app to get the new password hash
    initializeApp();
  };

  const handleAuthenticated = () => {
    setAppState('ready');
  };

  // Loading state
  if (appState === 'loading') {
    return (
      <div className="min-h-screen bg-creed-darker flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-creed-accent animate-spin mx-auto mb-4" />
          <p className="text-creed-text text-lg font-display tracking-wide">INITIALIZING SYSTEM...</p>
        </div>
      </div>
    );
  }

  // First-time setup
  if (appState === 'setup') {
    return <PasswordSetup onSetupComplete={handleSetupComplete} />;
  }

  // Authentication required
  if (appState === 'auth') {
    return <PasswordPrompt passwordHash={passwordHash} onAuthenticated={handleAuthenticated} />;
  }

  // App ready
  return (
    <Router>
      <div className="min-h-screen bg-creed-dark">
        <Toaster position="top-right" />
        <Header />
        <Routes>
          <Route path="/" element={<ScheduleForm />} />
          <Route path="/members" element={<MembersList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
