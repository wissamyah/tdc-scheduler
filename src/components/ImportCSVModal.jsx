import { useState, useRef } from 'react';
import { X, Upload, FileText, AlertTriangle, CheckCircle, XCircle, Loader2, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { parseAndValidateCSV, analyzeConflicts, processImport, generateImportSummary } from '../utils/csvImport';
import { showToast } from '../utils/toast';

export default function ImportCSVModal({ isOpen, onClose, existingMembers, onImport }) {
  const { t } = useLanguage();
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [parsing, setParsing] = useState(false);
  const [parsedData, setParsedData] = useState(null);
  const [validationErrors, setValidationErrors] = useState([]);
  const [conflicts, setConflicts] = useState(null);
  const [importMode, setImportMode] = useState('merge');
  const [importing, setImporting] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleFileSelect = async (selectedFile) => {
    if (!selectedFile) return;

    setFile(selectedFile);
    setParsing(true);
    setValidationErrors([]);
    setParsedData(null);
    setConflicts(null);

    try {
      const result = await parseAndValidateCSV(selectedFile);

      if (!result.success) {
        setValidationErrors(result.errors);
        setParsedData(null);
      } else {
        setParsedData(result.data);
        setValidationErrors([]);

        // Analyze conflicts
        const conflictAnalysis = analyzeConflicts(result.data, existingMembers);
        setConflicts(conflictAnalysis);
      }
    } catch (error) {
      console.error('Parse error:', error);
      setValidationErrors([{ type: 'error', message: `Failed to parse CSV: ${error.message}` }]);
    } finally {
      setParsing(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleImport = async () => {
    if (!parsedData || parsedData.length === 0) {
      showToast.error(t('csv.errors.noData'));
      return;
    }

    setImporting(true);

    try {
      // Process import based on mode
      const { members, summary } = processImport(parsedData, existingMembers, importMode);

      // Call parent's onImport with processed members
      await onImport(members, summary, importMode);

      // Generate and show summary
      const summaryText = generateImportSummary(summary);
      showToast.success(`${t('csv.importSuccess').replace('{count}', summary.total)}: ${summaryText}`);

      // Reset and close
      handleReset();
      onClose();
    } catch (error) {
      console.error('Import error:', error);
      showToast.error(t('csv.importFailed'));
    } finally {
      setImporting(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setParsedData(null);
    setValidationErrors([]);
    setConflicts(null);
    setImportMode('merge');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  if (!isOpen) return null;

  const hasErrors = validationErrors.length > 0;
  const canImport = parsedData && parsedData.length > 0 && !hasErrors && !importing;

  return (
    <div className="fixed inset-0 bg-creed-darker/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-creed-light border-2 border-creed-primary rounded-lg shadow-glow-primary max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-creed-base to-creed-dark p-6 border-b border-creed-lighter">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Upload className="w-6 h-6 text-creed-accent" />
              <h2 className="text-2xl font-display font-bold text-creed-text uppercase tracking-wide">
                {t('csv.import')}
              </h2>
            </div>
            <button
              onClick={handleClose}
              disabled={importing}
              className="p-2 rounded hover:bg-creed-lighter transition-all disabled:opacity-50"
            >
              <X className="w-6 h-6 text-creed-muted" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* File Upload Area */}
          {!file && (
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                dragActive
                  ? 'border-creed-accent bg-creed-accent/10'
                  : 'border-creed-lighter hover:border-creed-primary'
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <FileText className="w-16 h-16 text-creed-muted mx-auto mb-4" />
              <p className="text-creed-text font-display font-semibold mb-2">
                {t('csv.dragDropArea')}
              </p>
              <p className="text-sm text-creed-muted mb-4">
                {t('csv.supportedFormat')}
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                onChange={(e) => handleFileSelect(e.target.files[0])}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-2 bg-creed-primary text-white rounded-lg
                         font-display font-semibold uppercase tracking-wide
                         hover:bg-creed-primary/80 transition-all"
              >
                {t('csv.selectFile')}
              </button>
            </div>
          )}

          {/* File Selected */}
          {file && (
            <div className="bg-creed-base border border-creed-lighter rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-creed-accent" />
                  <div>
                    <p className="text-creed-text font-display font-semibold">{file.name}</p>
                    <p className="text-xs text-creed-muted">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                {!importing && (
                  <button
                    onClick={handleReset}
                    className="px-3 py-1 bg-creed-lighter hover:bg-creed-danger/20
                             text-creed-text hover:text-creed-danger
                             rounded font-display text-sm uppercase tracking-wide
                             transition-all"
                  >
                    {t('common.cancel')}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Parsing */}
          {parsing && (
            <div className="text-center py-8">
              <Loader2 className="w-12 h-12 text-creed-primary animate-spin mx-auto mb-4" />
              <p className="text-creed-text font-display font-semibold">
                {t('csv.validating')}
              </p>
            </div>
          )}

          {/* Validation Errors */}
          {hasErrors && (
            <div className="bg-creed-danger/10 border border-creed-danger rounded-lg p-4">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-creed-danger flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-creed-danger font-display font-bold uppercase tracking-wide mb-2">
                    {t('csv.validationFailed')} ({validationErrors.length} {t('csv.errors')})
                  </h3>
                  <div className="space-y-1 max-h-48 overflow-y-auto">
                    {validationErrors.map((error, idx) => (
                      <p key={idx} className="text-sm text-creed-text">
                        ❌ {error.message}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Preview & Import Options */}
          {parsedData && parsedData.length > 0 && !hasErrors && (
            <>
              {/* Success Message */}
              <div className="bg-creed-success/10 border border-creed-success rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-creed-success flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-creed-success font-display font-bold uppercase tracking-wide mb-1">
                      {t('csv.validationSuccess')}
                    </h3>
                    <p className="text-sm text-creed-text">
                      {t('csv.foundValidMembers').replace('{count}', parsedData.length)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Conflict Warning */}
              {conflicts && conflicts.hasConflicts && (
                <div className="bg-creed-warning/10 border border-creed-warning rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-creed-warning flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="text-creed-warning font-display font-bold uppercase tracking-wide mb-2">
                        {t('csv.conflicts.title')}
                      </h3>
                      <p className="text-sm text-creed-text mb-2">
                        {t('csv.conflicts.existing').replace('{count}', conflicts.updateCount)}
                      </p>
                      <div className="text-xs text-creed-muted">
                        {conflicts.conflicts.slice(0, 5).map((c, idx) => (
                          <div key={idx}>• {c.username}</div>
                        ))}
                        {conflicts.conflicts.length > 5 && (
                          <div>... and {conflicts.conflicts.length - 5} more</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Import Mode Selection */}
              <div>
                <h3 className="text-sm font-display font-semibold text-creed-text uppercase tracking-wide mb-3">
                  {t('csv.selectImportMode')}
                </h3>
                <div className="space-y-3">
                  {/* Replace Mode */}
                  <label className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    importMode === 'replace'
                      ? 'border-creed-danger bg-creed-danger/10'
                      : 'border-creed-lighter hover:border-creed-danger/50'
                  }`}>
                    <input
                      type="radio"
                      name="importMode"
                      value="replace"
                      checked={importMode === 'replace'}
                      onChange={(e) => setImportMode(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-display font-bold text-creed-text uppercase tracking-wide">
                          {t('csv.importModes.replace')}
                        </span>
                        <span className="px-2 py-0.5 bg-creed-danger/20 text-creed-danger text-xs rounded font-display uppercase">
                          {t('csv.destructive')}
                        </span>
                      </div>
                      <p className="text-sm text-creed-muted">{t('csv.importModes.replaceDesc')}</p>
                      {existingMembers.length > 0 && (
                        <p className="text-xs text-creed-danger mt-1">
                          ⚠️ {t('csv.willDelete').replace('{count}', existingMembers.length)}
                        </p>
                      )}
                    </div>
                  </label>

                  {/* Merge Mode */}
                  <label className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    importMode === 'merge'
                      ? 'border-creed-accent bg-creed-accent/10'
                      : 'border-creed-lighter hover:border-creed-accent/50'
                  }`}>
                    <input
                      type="radio"
                      name="importMode"
                      value="merge"
                      checked={importMode === 'merge'}
                      onChange={(e) => setImportMode(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-display font-bold text-creed-text uppercase tracking-wide">
                          {t('csv.importModes.merge')}
                        </span>
                        <span className="px-2 py-0.5 bg-creed-accent/20 text-creed-accent text-xs rounded font-display uppercase">
                          {t('csv.recommended')}
                        </span>
                      </div>
                      <p className="text-sm text-creed-muted">{t('csv.importModes.mergeDesc')}</p>
                      {conflicts && (
                        <p className="text-xs text-creed-accent mt-1">
                          ℹ️ {t('csv.willUpdate').replace('{count}', conflicts.updateCount)} | {t('csv.willAdd').replace('{count}', conflicts.newCount)}
                        </p>
                      )}
                    </div>
                  </label>

                  {/* Add Only Mode */}
                  <label className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    importMode === 'add-only'
                      ? 'border-creed-success bg-creed-success/10'
                      : 'border-creed-lighter hover:border-creed-success/50'
                  }`}>
                    <input
                      type="radio"
                      name="importMode"
                      value="add-only"
                      checked={importMode === 'add-only'}
                      onChange={(e) => setImportMode(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-display font-bold text-creed-text uppercase tracking-wide">
                          {t('csv.importModes.addOnly')}
                        </span>
                        <span className="px-2 py-0.5 bg-creed-success/20 text-creed-success text-xs rounded font-display uppercase">
                          {t('csv.safe')}
                        </span>
                      </div>
                      <p className="text-sm text-creed-muted">{t('csv.importModes.addOnlyDesc')}</p>
                      {conflicts && (
                        <p className="text-xs text-creed-success mt-1">
                          ℹ️ {t('csv.willAdd').replace('{count}', conflicts.newCount)} | {t('csv.willSkip').replace('{count}', conflicts.updateCount)}
                        </p>
                      )}
                    </div>
                  </label>
                </div>
              </div>

              {/* Preview Table */}
              <div>
                <h3 className="text-sm font-display font-semibold text-creed-text uppercase tracking-wide mb-3">
                  {t('csv.previewTitle')} ({parsedData.length} {t('csv.members')})
                </h3>
                <div className="border border-creed-lighter rounded-lg overflow-hidden">
                  <div className="max-h-64 overflow-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-creed-base sticky top-0">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-display uppercase text-creed-muted">
                            {t('membersList.username')}
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-display uppercase text-creed-muted">
                            {t('membersList.carPower')}
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-display uppercase text-creed-muted">
                            {t('membersList.towerLevel')}
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-display uppercase text-creed-muted">
                            {t('csv.status')}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-creed-lighter">
                        {parsedData.slice(0, 10).map((member, idx) => {
                          const isConflict = conflicts?.conflicts.find(c =>
                            c.username.toLowerCase() === member.username.toLowerCase()
                          );
                          const isNew = !isConflict;

                          return (
                            <tr key={idx} className="hover:bg-creed-base/50">
                              <td className="px-3 py-2 text-creed-text font-display">
                                {member.username}
                              </td>
                              <td className="px-3 py-2 text-creed-text">{member.carPower}M</td>
                              <td className="px-3 py-2 text-creed-text">{member.towerLevel}</td>
                              <td className="px-3 py-2">
                                {isNew ? (
                                  <span className="text-xs text-creed-success">✓ {t('csv.new')}</span>
                                ) : (
                                  <span className="text-xs text-creed-warning">⚠ {t('csv.exists')}</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  {parsedData.length > 10 && (
                    <div className="bg-creed-base px-3 py-2 text-xs text-creed-muted text-center border-t border-creed-lighter">
                      ... and {parsedData.length - 10} more members
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="bg-creed-base border-t border-creed-lighter p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-creed-muted">
            <Info className="w-4 h-4" />
            <span>{t('csv.importNote')}</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleClose}
              disabled={importing}
              className="px-6 py-2 bg-creed-base border border-creed-lighter
                       text-creed-text rounded-lg font-display font-semibold uppercase tracking-wide
                       hover:bg-creed-lighter transition-all disabled:opacity-50"
            >
              {t('common.cancel')}
            </button>
            <button
              onClick={handleImport}
              disabled={!canImport}
              className="px-6 py-2 bg-gradient-to-r from-creed-primary to-creed-accent
                       text-white rounded-lg font-display font-semibold uppercase tracking-wide
                       hover:shadow-glow-primary disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all flex items-center gap-2"
            >
              {importing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t('csv.importing')}</span>
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  <span>{t('csv.import')}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
