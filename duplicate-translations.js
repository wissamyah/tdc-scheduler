/**
 * Helper script to duplicate English translations to other languages
 * Run with: node duplicate-translations.js
 *
 * This will copy the English translations for the new auth keys to all other languages
 * (fr, de, es, pt, it) so the app works immediately. You can translate them properly later.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'src', 'i18n', 'translations.js');

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// Keys that need to be added to all languages
const newSections = [
  'userAuth',
  'admin',
  'roles',
  'status',
  'setup',
  'errors'
];

// Also need to update existing sections
const updates = {
  common: ['goBack'],
  nav: ['adminDashboard', 'adminDashboardShort'],
  memberCard: ['editUsername', 'updatingUsername', 'usernameUpdated', 'failedToUpdateUsername', 'invalidUsername', 'usernameTooLong']
};

console.log('🔄 Duplicating English translations to other languages...\n');

// Extract English sections
const enMatch = content.match(/en:\s*\{([\s\S]*?)\n\s\s\},\n\n\s\sfr:/);
if (!enMatch) {
  console.error('❌ Could not find English translations section');
  process.exit(1);
}

const enContent = enMatch[1];

// Extract each new section from English
const sections = {};
newSections.forEach(sectionName => {
  const regex = new RegExp(`\\s*//\\s*${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}.*?\\n\\s*${sectionName}:\\s*\\{([\\s\\S]*?)\\n\\s\\s\\},`, 'i');
  const match = enContent.match(regex);
  if (match) {
    sections[sectionName] = match[0];
    console.log(`✅ Extracted ${sectionName} section`);
  } else {
    console.log(`⚠️  Could not extract ${sectionName} section`);
  }
});

// Function to add sections to a language
function addSectionsToLanguage(langCode, langName) {
  console.log(`\n📝 Processing ${langName} (${langCode})...`);

  // Find the language section
  const langRegex = new RegExp(`(\\s*${langCode}:\\s*\\{[\\s\\S]*?)(\\n\\s\\s\\},\\n\\n\\s\\s(?:[a-z]{2}:|\\};))`, 'g');

  content = content.replace(langRegex, (match, langContent, closing) => {
    let updated = langContent;

    // Check if sections already exist
    Object.entries(sections).forEach(([sectionName, sectionCode]) => {
      const checkRegex = new RegExp(`\\s*${sectionName}:\\s*\\{`, 'i');
      if (!checkRegex.test(updated)) {
        // Add the section before the closing
        const insertPos = updated.lastIndexOf('\n');
        updated = updated.slice(0, insertPos) + '\n' + sectionCode + updated.slice(insertPos);
        console.log(`  ✅ Added ${sectionName}`);
      } else {
        console.log(`  ⏭️  ${sectionName} already exists, skipping`);
      }
    });

    return updated + closing;
  });
}

// Apply to all languages
addSectionsToLanguage('fr', 'French');
addSectionsToLanguage('de', 'German');
addSectionsToLanguage('es', 'Spanish');
addSectionsToLanguage('pt', 'Portuguese');
addSectionsToLanguage('it', 'Italian');

// Write the updated file
fs.writeFileSync(filePath, content, 'utf8');

console.log('\n\n✨ Translations duplicated successfully!');
console.log('📝 Note: These are English translations duplicated to other languages.');
console.log('   You can replace them with proper translations later.\n');
console.log('🚀 You can now run: npm run dev\n');
