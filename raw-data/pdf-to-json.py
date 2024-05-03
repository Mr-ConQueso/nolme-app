import pdfplumber
import json
from tqdm import tqdm


# Function to extract tables from a PDF page and write them to a JSON file
def extract_tables_to_json(pdf_path, json_path):
    with pdfplumber.open(pdf_path) as pdf:
        # Get the total number of pages
        num_pages = len(pdf.pages)
        # Initialize tqdm progress bar
        progress_bar = tqdm(total=num_pages, desc='Extracting Tables')

        # Open the JSON file for writing
        with open(json_path, 'w') as json_file:
            json_file.write("[")

            # Loop through each page
            for page_num, page in enumerate(pdf.pages, start=1):
                # Extract tables from the page
                tables = page.extract_tables()

                # Loop through each table on the page
                for table_num, table in enumerate(tables, start=1):
                    # Convert table to list of dictionaries
                    table_data = [dict(zip(table[0], row)) for row in table[1:]]
                    # Write table data to the JSON file
                    json.dump(table_data, json_file)
                    # Add a comma between tables, except for the last one
                    if not (page_num == num_pages and table_num == len(tables)):
                        json_file.write(",")

                # Update the progress bar
                progress_bar.update(1)

            # Close the JSON file
            json_file.write("]")

        # Close the progress bar
        progress_bar.close()


# Extract tables from the PDF and write them to a JSON file
extract_tables_to_json('raw-data/The Dwarrow Scholar - DICTIONARY - English~Neo-Khuzdul.pdf', 'khuzdul.json')
