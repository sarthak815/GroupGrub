from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Define the URL for the Vespa API endpoint
VESPA_URL = 'https://b072f172.cb76d810.z.vespa-app.cloud/search/'

# Define the path to the key and certificate files
KEY_PATH = 'C:\\Users\\Sarthak\\.vespa\\groupgrub.myapp.default\\data-plane-private-key.pem'
CERT_PATH = 'C:\\Users\\Sarthak\\.vespa\\groupgrub.myapp.default\\data-plane-public-cert.pem'


@app.route('/search', methods=['POST'])
def search():
    data = request.json

    # Extract data from the request
    categories = data.get('categories')
    price = data.get('price')
    latitude = data.get('latitude')
    longitude = data.get('longitude')

    # Define the query parameters for Vespa
    params = {
        'timeout': '10s',
        'yql': f"select * from restaurant where categories contains '{categories}' and price contains '{price}' and geoLocation(location, {latitude}, {longitude}, '20 km')",
        'ranking': 'my-rank-restaurant'
    }

    try:
        # Send the HTTP request to Vespa
        response = requests.get(VESPA_URL, params=params, cert=(CERT_PATH, KEY_PATH))

        # Check if the request was successful
        if response.status_code == 200:
            # Extract required fields from Vespa response
            vespa_response = response.json()
            restaurants = vespa_response['root']['children']
            simplified_response = []
            for restaurant in restaurants:
                simplified_restaurant = {
                    'Name': restaurant['fields']['name'],
                    'Address': restaurant['fields']['address'],
                    'Rating': restaurant['fields'].get('rating', 'Not Available')
                    # Use 'Not Available' if rating is not present
                }
                simplified_response.append(simplified_restaurant)

            # Return simplified response to the React Native app
            return jsonify(simplified_response)
        else:
            return jsonify({'error': f"Error: {response.status_code}"})
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True)  # You may want to set debug=False in production
