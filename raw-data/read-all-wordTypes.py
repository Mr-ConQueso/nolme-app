import json


# Function to extract unique wordType values from JSON objects
def extract_unique_word_types(json_data):
    word_types = set()
    for obj in json_data:
        if "wordType" in obj:
            types = obj["wordType"].split()  # Split by space
            word_types.update(types)  # Add all parts to the set
    return word_types


# Read JSON file
file_path = "results/word-dictionary.json"  # Update with your JSON file path
with open(file_path, "r", encoding="utf-8") as json_file:
    data = json.load(json_file)

# Extract unique word types
unique_word_types = extract_unique_word_types(data)

# Print the unique word types on separate lines
for word_type in unique_word_types:
    print(word_type)
