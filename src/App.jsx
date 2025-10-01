import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PasswordSetup from './components/PasswordSetup';
import PasswordPrompt from './components/PasswordPrompt';
import ScheduleForm from './components/ScheduleForm';
import MembersList from './components/MembersList';
import { fetchData } from './services/github';
import { isAuthenticated } from './utils/auth';

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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
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
    <Router basename="/tdc-scheduler">
      <div className="min-h-screen bg-gray-50">
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
