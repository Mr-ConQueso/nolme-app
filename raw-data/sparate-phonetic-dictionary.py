import json

# Load the original JSON file
with open('results/output.json', 'r') as file:
    data = json.load(file)

# Initialize lists to store filtered objects
phonetic_dictionary = []
word_dictionary = []

# Iterate through each object in the original data
for obj in data:
    # Check if 'englishWord' or 'descriptionText' is null
    if obj['englishWord'] is None or obj['descriptionText'] is None:
        phonetic_dictionary.append(obj)
    else:
        word_dictionary.append(obj)

# Write filtered data to separate files
with open('results/phonetic-dictionary.json', 'w') as file:
    json.dump(phonetic_dictionary, file, indent=2)

with open('results/word-dictionary.json', 'w') as file:
    json.dump(word_dictionary, file, indent=2)

print("Separate JSON files created: phonetic-dictionary.json, word-dictionary.json")
