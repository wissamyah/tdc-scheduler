import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import PATPrompt from './components/PATPrompt';
import ScheduleForm from './components/ScheduleForm';
import MembersList from './components/MembersList';
import OptimalScheduleCalendar from './components/OptimalScheduleCalendar';
import { Loader2 } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

function AppContent() {
  const { t } = useLanguage();
  const [appState, setAppState] = useState('loading'); // loading, auth, ready

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // Check if PAT is stored in localStorage
      const pat = localStorage.getItem('tdc_pat');

      if (!pat) {
        setAppState('auth');
        return;
      }

      setAppState('ready');
    } catch (error) {
      console.error('Error initializing app:', error);
      setAppState('auth');
    }
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
          <p className="text-creed-text text-lg font-display tracking-wide">{t('app.initializingSystem')}</p>
        </div>
      </div>
    );
  }

  // Authentication required
  if (appState === 'auth') {
    return <PATPrompt onAuthenticated={handleAuthenticated} />;
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
          <Route path="/optimal" element={<OptimalScheduleCalendar />} />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
