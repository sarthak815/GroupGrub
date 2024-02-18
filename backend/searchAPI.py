from flask import Flask, request, jsonify
import csv

app = Flask(__name__)

# Load the dataset from the CSV file
def load_dataset(csv_file):
    data = []
    with open(csv_file, 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            data.append(row)
    return data

dataset = load_dataset('merged_data.csv')

# Define the API endpoint
@app.route('/search', methods=['GET'])
def search():
    latitude = float(request.args.get('latitude'))
    longitude = float(request.args.get('longitude'))
    categories = request.args.get('categories').split(',')

    results = []

    for item in dataset:
        item_lat = float(item['Latitude'])
        item_lon = float(item['Longitude'])

        # Calculate distance (you might want to use a more sophisticated method for real-world application)
        distance = ((latitude - item_lat) ** 2 + (longitude - item_lon) ** 2) ** 0.5

        # Check if any keyword in categories matches with item's categories
        item_categories = item['Categories'].split(',')
        if any(keyword.strip().lower() in map(str.lower, item_categories) for keyword in categories):
            results.append({
                'Name': item['Name'],
                'Rating': item['Rating'],
                'Address': item['Address'],
                'Categories': item['Categories'],
                'Latitude': item['Latitude'],
                'Longitude': item['Longitude'],
                'Price': item['Price'],
                'Reviews': item['Reviews'],
                'Distance': distance
            })

    # Sort results by distance
    results.sort(key=lambda x: x['Distance'])

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
