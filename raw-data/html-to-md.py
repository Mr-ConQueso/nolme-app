import json
import re


def convert_html_to_markdown(html_text):
    # Define patterns for each HTML tag to be replaced
    patterns = {
        r'<i>(.*?)</i>': r'_\1_',  # Italics
        r'<b>(.*?)</b>': r'**\1**',  # Bold
        r'<a\s+v="([^"]+)"\s*/>': r'\1',  # Remove link
        r'<p>(.*?)</p>': r'\1\n'  # Paragraph with newline
    }

    # Iterate over patterns and replace HTML tags with Markdown equivalents
    for pattern, replacement in patterns.items():
        html_text = re.sub(pattern, replacement, html_text)

    # Replace any remaining HTML tags with empty strings
    html_text = re.sub(r'<[^>]*>', '', html_text)

    return html_text

def parse_and_write_json_file(json_file_path):
    with open(json_file_path, 'r') as file:
        data = json.load(file)

    # If data is a list, iterate over each object in the list
    if isinstance(data, list):
        for obj in data:
            for key, value in obj.items():
                # If the value is a string, convert HTML tags to Markdown
                if isinstance(value, str):
                    obj[key] = convert_html_to_markdown(value)

    # Write the updated data back to the same file
    with open(json_file_path, 'w') as file:
        json.dump(data, file, indent=4)


# Example usage:
json_file_path = 'results/output.json'  # Replace 'example.json' with your JSON file path
parse_and_write_json_file(json_file_path)
print("HTML tags converted to Markdown and changes written to the same file.")
