import requests

# Define the URL for the Vespa API endpoint
url = 'https://b072f172.cb76d810.z.vespa-app.cloud/search/'

# Define the query parameters
params = {
    'timeout': '10s',
    'yql': "select * from restaurant where categories contains 'pizza' and price contains '$$' and geoLocation(location, 37.6, -122.41, '20 km')",
    'ranking': 'my-rank-restaurant'
}

# Define the path to the key and certificate files
key_path = 'C:\\Users\\Sarthak\\.vespa\\groupgrub.myapp.default\\data-plane-private-key.pem'
cert_path = 'C:\\Users\\Sarthak\\.vespa\\groupgrub.myapp.default\\data-plane-public-cert.pem'

# Send the HTTP request
response = requests.get(url, params=params, cert=(cert_path, key_path))

# Check if the request was successful
if response.status_code == 200:
    # Print the response content
    print(response.text)
else:
    print(f"Error: {response.status_code}")
