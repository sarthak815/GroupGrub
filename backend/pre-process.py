import pandas as pd
import json

# Read CSV file
csv_data = pd.read_csv('merged_final.csv')

# Replace "Not Available" with "$$" in the price column
csv_data['Price'] = csv_data['Price'].replace('Not Available', '$$')

# Convert numerical columns to appropriate types
csv_data['Rating'] = pd.to_numeric(csv_data['Rating'], errors='coerce')

# Drop duplicate rows based on the 'Name' column
csv_data.drop_duplicates(subset=['Name'], inplace=True)

# Write JSONL data to a file
with open('converted_data.jsonl', 'w') as f:
    # Iterate over each row in the DataFrame
    for index, row in csv_data.iterrows():
        # Construct the id for the document
        document_id = f"id:mynamespace:restaurant::{row['Name']}"

        # Construct the fields dictionary
        fields = {
            'name': row['Name'],
            'rating': float(row['Rating']),
            'address': row['Address'],
            'categories': row['Categories'],
            'location':  {"lat": float(row['Latitude']), "lng": float(row['Longitude'])},
            'price': row['Price'],
            'reviews': row['Reviews']
        }

        # Construct the document
        document = {
            'put': document_id,
            'fields': fields
        }

        # Convert the document to a JSON string
        json_row = json.dumps(document)

        # Write the JSON string to the file followed by a newline
        f.write(json_row)
        f.write('\n')
