import json


def beautify_json(input_file, output_file):
    with open(input_file, 'r') as f:
        data = json.load(f)

    # Write the beautified JSON to the output file
    with open(output_file, 'w') as f:
        json.dump(data, f, indent=4)


# Beautify the JSON file
beautify_json('output.json', 'beautified_output.json')
