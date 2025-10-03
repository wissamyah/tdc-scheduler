import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { translations, getNestedValue } from '../i18n/translations/index';

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
  const changeLanguage = useCallback((newLanguage) => {
    if (newLanguage === 'en' || newLanguage === 'fr' || newLanguage === 'de' || newLanguage === 'es' || newLanguage === 'pt' || newLanguage === 'it') {
      setLanguage(newLanguage);
      localStorage.setItem('tdc_language', newLanguage);
    }
  }, []);

  // Get translation function with variable interpolation support
  const t = useCallback((key, params = {}) => {
    const defaultValue = typeof params === 'string' ? params : key;
    const translation = getNestedValue(translations[language], key, defaultValue);

    // If params is an object and translation contains placeholders, interpolate
    if (typeof params === 'object' && params !== null && typeof translation === 'string') {
      return translation.replace(/\{(\w+)\}/g, (match, placeholder) => {
        return params[placeholder] !== undefined ? params[placeholder] : match;
      });
    }

    return translation;
  }, [language]);

  const value = useMemo(() => ({
    language,
    changeLanguage,
    t,
  }), [language, changeLanguage, t]);

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
