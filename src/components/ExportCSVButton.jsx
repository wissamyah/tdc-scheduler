import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { exportMembersToCSV } from '../utils/csvExport';
import { showToast } from '../utils/toast';

export default function ExportCSVButton({ members, disabled = false }) {
  const { t } = useLanguage();
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    if (!members || members.length === 0) {
      showToast.error(t('csv.errors.noMembers'));
      return;
    }

    setExporting(true);

    try {
      // Generate filename with current date
      const date = new Date().toISOString().split('T')[0];
      const filename = `tdc-members-${date}.csv`;

      // Export to CSV
      const success = exportMembersToCSV(members, filename);

      if (success) {
        showToast.success(t('csv.exportSuccess').replace('{count}', members.length));
      } else {
        showToast.error(t('csv.exportFailed'));
      }
    } catch (error) {
      console.error('Export error:', error);
      showToast.error(t('csv.exportFailed'));
    } finally {
      setExporting(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={disabled || exporting || !members || members.length === 0}
      className="flex items-center gap-2 px-4 py-2.5
               bg-creed-base border border-creed-primary
               text-creed-primary rounded-lg
               hover:bg-creed-primary hover:text-white hover:shadow-glow-primary
               disabled:opacity-50 disabled:cursor-not-allowed
               transition-all font-display font-semibold uppercase tracking-wide"
      title={t('csv.export')}
    >
      {exporting ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <Download className="w-5 h-5" />
      )}
      <span className="hidden sm:inline">{t('csv.export')}</span>
      {members && members.length > 0 && !exporting && (
        <span className="text-xs opacity-75">({members.length})</span>
      )}
    </button>
  );
}
