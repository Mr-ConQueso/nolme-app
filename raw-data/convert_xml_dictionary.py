import xml.etree.ElementTree as ET
import json
import html
import unicodedata

# Load XML file
tree = ET.parse('raw-data/eldamo-data.xml')
root = tree.getroot()

# Initialize list to store JSON objects
word_list = []

# Initialize ID counter
id_counter = 0

# Function to handle HTML parsing and Unicode decoding
def preprocess_description(description):
    # Parse HTML tags
    description = html.unescape(description)
    # Convert Unicode code points to characters
    description = unicodedata.normalize('NFKD', description).encode('ascii', 'ignore').decode('utf-8')
    return description

# Iterate over <word> elements
for word_elem in root.findall('.//word'):
    # Extract attributes and text from <word> element
    english_word = word_elem.get('gloss') or word_elem.get('ngloss')
    translated_word = word_elem.get('v')
    word_type = word_elem.get('speech')
    pronunciation_text = word_elem.get('v')

    # Extract description text from <notes>
    description_text = ''
    conceptual_development = ''
    notes_elem = word_elem.find('notes')
    if notes_elem is not None:
        notes_text = notes_elem.text.strip()

        # Preprocess description text
        description_text = preprocess_description(notes_text)

        # Extract conceptual development if present
        conceptual_start = notes_text.find('<b>Conceptual Development:</b>')
        if conceptual_start != -1:
            description_text = notes_text[:conceptual_start].strip()
            conceptual_development = notes_text[conceptual_start + len('<b>Conceptual Development:</b>'):].strip()
            
    # Create JSON object
    word_json = {
        "id": str(id_counter),
        "englishWord": english_word,
        "translatedWord": translated_word,
        "transliteratedWord": translated_word,
        "wordType": word_type,
        "pronunciationText": pronunciation_text,
        "descriptionText": description_text,
        "conceptualDevelopment": conceptual_development
    }

    # Append to list
    word_list.append(word_json)

    # Increment ID counter
    id_counter += 1

# Convert list to JSON string
json_data = json.dumps(word_list, indent=2)

# Write JSON to file
with open('results/output.json', 'w') as f:
    f.write(json_data)

print("Conversion successful. JSON file created: output.json")
