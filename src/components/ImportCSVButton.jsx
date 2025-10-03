import { Upload } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ImportCSVButton({ onClick, disabled = false }) {
  const { t } = useLanguage();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-2 px-4 py-2.5
               bg-creed-base border border-creed-accent
               text-creed-accent rounded-lg
               hover:bg-creed-accent hover:text-white hover:shadow-glow-accent
               disabled:opacity-50 disabled:cursor-not-allowed
               transition-all font-display font-semibold uppercase tracking-wide"
      title={t('csv.import')}
    >
      <Upload className="w-5 h-5" />
      <span className="hidden sm:inline">{t('csv.import')}</span>
    </button>
  );
}
