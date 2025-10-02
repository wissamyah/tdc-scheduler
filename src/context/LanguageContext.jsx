import { createContext, useContext, useState, useEffect } from 'react';
import { translations, getNestedValue } from '../i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('tdc_language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr' || savedLanguage === 'de' || savedLanguage === 'es' || savedLanguage === 'pt' || savedLanguage === 'it')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference when it changes
  const changeLanguage = (newLanguage) => {
    if (newLanguage === 'en' || newLanguage === 'fr' || newLanguage === 'de' || newLanguage === 'es' || newLanguage === 'pt' || newLanguage === 'it') {
      setLanguage(newLanguage);
      localStorage.setItem('tdc_language', newLanguage);
    }
  };

  // Get translation function
  const t = (key, defaultValue = key) => {
    return getNestedValue(translations[language], key, defaultValue);
  };

  const value = {
    language,
    changeLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
