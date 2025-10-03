#!/usr/bin/env python3
"""
Helper script to add missing translation keys to all languages
Adds the new auth-related sections from English to all other languages
"""

import re

# Read the file
with open('src/i18n/translations.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the English userAuth section (and other new sections)
sections_to_copy = {
    'userAuth': r'(    // User Authentication\n    userAuth: \{[\s\S]*?\n    \},)\n',
    'admin': r'(    // Admin Dashboard\n    admin: \{[\s\S]*?\n    \},)\n',
    'roles': r'(    // Roles\n    roles: \{[\s\S]*?\n    \},)\n',
    'status': r'(    // Status\n    status: \{[\s\S]*?\n    \},)\n',
    'setup': r'(    // First-Time Setup\n    setup: \{[\s\S]*?\n    \},)\n',
    'errors': r'(    // Errors\n    errors: \{[\s\S]*?\n    \},)\n',
}

extracted_sections = {}
for section_name, pattern in sections_to_copy.items():
    match = re.search(pattern, content)
    if match:
        extracted_sections[section_name] = match.group(1)
        print(f"✅ Extracted {section_name} section")
    else:
        print(f"❌ Could not extract {section_name} section")

# Also need to add goBack to common and adminDashboard to nav
# Extract these individual keys
goback_match = re.search(r"(      goBack: 'Go Back',)", content)
if goback_match:
    goback_key = goback_match.group(1)
    print("✅ Extracted goBack key")

admin_nav_match = re.search(r"(      adminDashboard: 'ADMIN PANEL',\n      adminDashboardShort: 'ADMIN',)", content)
if admin_nav_match:
    admin_nav_keys = admin_nav_match.group(1)
    print("✅ Extracted admin nav keys")

# Find where to insert for each language
languages = ['fr', 'de', 'es', 'pt', 'it']

def add_sections_to_language(lang_code):
    print(f"\n📝 Processing {lang_code}...")
    global content

    # Find the language section
    lang_pattern = f"  {lang_code}: {{([\s\S]*?)\n  }},\n\n  (?:[a-z]{{2}}: {{|}};\n)"
    match = re.search(lang_pattern, content)

    if not match:
        print(f"  ❌ Could not find {lang_code} section")
        return

    lang_content = match.group(0)

    # Add goBack to common if not present
    if 'goBack:' not in lang_content and goback_key:
        lang_content = lang_content.replace(
            "      no: 'Non',\n    },",
            f"      no: 'Non',\n{goback_key}\n    },"
        ).replace(
            "      no: 'Nein',\n    },",
            f"      no: 'Nein',\n{goback_key}\n    },"
        ).replace(
            "      no: 'Não',\n    },",
            f"      no: 'Não',\n{goback_key}\n    },"
        )
        print(f"  ✅ Added goBack to common")

    # Add admin nav keys if not present
    if 'adminDashboard:' not in lang_content and admin_nav_keys:
        lang_content = lang_content.replace(
            "      optimalScheduleShort: 'OPTIMAL',\n    },",
            f"      optimalScheduleShort: 'OPTIMAL',\n{admin_nav_keys}\n    },"
        )
        print(f"  ✅ Added admin nav keys")

    # Add all new sections before the closing
    for section_name, section_code in extracted_sections.items():
        if f'{section_name}:' not in lang_content:
            # Insert before the closing of the language section
            lang_content = re.sub(
                r'(\n)(  },\n\n  (?:[a-z]{2}: {|};))',
                f'\n{section_code}\n\\2',
                lang_content
            )
            print(f"  ✅ Added {section_name}")

    # Replace in main content
    content = content.replace(match.group(0), lang_content)

# Process all languages
for lang in languages:
    add_sections_to_language(lang)

# Write the updated file
with open('src/i18n/translations.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("\n\n✨ Translations added successfully!")
print("📝 Note: These are English translations duplicated to other languages.")
print("   You can replace them with proper translations later.\n")
print("🚀 You can now run: npm run dev\n")
