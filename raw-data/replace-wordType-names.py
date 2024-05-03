import json


# Function to replace wordType values in JSON objects
def replace_word_types(json_data):
    replacements = {
        "conj": "conjugation",
        "n": "noun",
        "suf": "suffix",
        "adj": "adjective",
        "pref": "prefix",
        "interj": "interjection",
        "pron": "pronoun",
        "adv": "adverb",
        "prep": "preposition",
        "vb": "verb"
    }
    for obj in json_data:
        if "wordType" in obj and obj["wordType"] in replacements:
            obj["wordType"] = replacements[obj["wordType"]]


# Read JSON file
file_path = "results/word-dictionary.json"  # Update with your JSON file path
with open(file_path, "r", encoding="utf-8") as json_file:
    data = json.load(json_file)

# Replace word types
replace_word_types(data)

# Write modified JSON back to file
output_file_path = "results/word-dictionary.json"  # Update with your output file path
with open(output_file_path, "w", encoding="utf-8") as output_file:
    json.dump(data, output_file, ensure_ascii=False, indent=4)

print("Replacement complete. Modified JSON written to", output_file_path)
