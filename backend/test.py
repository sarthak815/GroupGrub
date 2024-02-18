import requests

# Define the URL of your Flask API endpoint
url = 'http://ec2-18-144-29-168.us-west-1.compute.amazonaws.com/search'  # Update the URL if your Flask app is running on a different address

# Sample input data
data = {
    'categories': 'Italian',
    'keywords': 'great pizza',
    'latitude': 37.7749,
    'longitude': -122.4194,
    'price': '$$'  # Assuming you'll use this later
}

# Make a POST request to the Flask API
response = requests.post(url, json=data)

# Print the response from the Flask API
print(response.json())
