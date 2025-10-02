import { useState, useRef, useEffect } from 'react';
import { Languages, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, changeLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Language options with native names
  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano' }
  ];

  // Get current language display
  const getCurrentLanguage = () => {
    const current = languages.find(lang => lang.code === language);
    return current ? current.nativeName : 'English';
  };

  // Handle language selection
  const selectLanguage = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg
                 bg-gradient-to-r from-creed-primary/20 to-creed-accent/20
                 border border-creed-primary/30 hover:border-creed-accent
                 text-creed-text hover:shadow-glow-accent
                 transition-all duration-200 group"
        title={t('language.selectLanguage') || 'Select Language'}
      >
        <Languages className="w-4 h-4 text-creed-accent group-hover:scale-110 transition-transform" />
        <span className="font-display font-bold text-sm uppercase tracking-wide">
          {getCurrentLanguage()}
        </span>
        <ChevronDown className={`w-4 h-4 text-creed-accent transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 z-50
                      bg-creed-base border border-creed-primary/30
                      rounded-lg shadow-glow-primary overflow-hidden
                      min-w-[140px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className={`w-full flex items-center justify-between px-4 py-2.5
                       transition-all duration-150
                       ${language === lang.code
                         ? 'bg-creed-primary/20 text-creed-accent'
                         : 'text-creed-text hover:bg-creed-primary/10 hover:text-creed-accent'
                       }`}
            >
              <span className="font-display font-semibold text-sm">
                {lang.nativeName}
              </span>
              {language === lang.code && (
                <Check className="w-4 h-4 text-creed-accent" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
