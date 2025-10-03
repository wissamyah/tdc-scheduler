import en from './en.js';
import fr from './fr.js';
import de from './de.js';
import es from './es.js';
import pt from './pt.js';
import it from './it.js';

export const translations = {
  en,
  fr,
  de,
  es,
  pt,
  it
};

/**
 * Get nested translation value
 * @param {Object} obj - Translation object
 * @param {string} path - Dot-separated path (e.g., 'nav.title')
 * @param {string} defaultValue - Default value if not found
 */
export function getNestedValue(obj, path, defaultValue = '') {
  return path.split('.').reduce((acc, part) => acc?.[part], obj) ?? defaultValue;
}
