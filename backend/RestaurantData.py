import pandas as pd
import requests

# Define the endpoint and API key
api_key = 'iTOj3QnZzDi0celb_LBB6y5d6icPGXI5LNnDHS7JGpHvo8fi7lirN8J6R3aSYsxYlxMbWjKcqtV6HQYppl07scDlIWb9Dxyp-m0665rD9PI-VR1NwKoW5f2nOtjNZXYx'
url = 'https://api.yelp.com/v3/businesses/search'

# Set parameters for the API request
headers = {
    'Authorization': 'Bearer {}'.format(api_key),
}

params = {
    'term': 'restaurants',
    'location': 'The Castro San Francisco',
    'limit': 50  # Limiting to 50 results
}

# Make the API request
response = requests.get(url, headers=headers, params=params)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()

    # Extract relevant information
    businesses = data['businesses']

    # Create lists to store data
    names = []
    ratings = []
    addresses = []
    categories_list = []
    reviews_list = []
    latitudes = []  # List to store latitude data
    longitudes = []  # List to store longitude data
    prices = []  # List to store average price data

    # Iterate over each business
    for business in businesses:
        # Extract business details
        names.append(business['name'])
        ratings.append(business['rating'])
        addresses.append(", ".join(business['location']['display_address']))
        categories_list.append(", ".join([category['title'] for category in business['categories']]))
        prices.append(business.get('price', 'Not Available'))  # Retrieve average price, or mark as 'Not Available'

        # Extract latitude and longitude
        latitude = business['coordinates']['latitude']
        longitude = business['coordinates']['longitude']
        latitudes.append(latitude)
        longitudes.append(longitude)

        # Get reviews for the business
        reviews_url = f"https://api.yelp.com/v3/businesses/{business['id']}/reviews"
        reviews_response = requests.get(reviews_url, headers=headers)
        reviews_data = reviews_response.json()
        reviews = [review['text'] for review in reviews_data['reviews'][:3]]  # Get only 3 reviews
        reviews_list.append("\n".join(reviews))

    # Create a DataFrame
    df = pd.DataFrame({
        'Name': names,
        'Rating': ratings,
        'Address': addresses,
        'Categories': categories_list,
        'Latitude': latitudes,  # Add latitude column
        'Longitude': longitudes,  # Add longitude column
        'Price': prices,  # Add average price column
        'Reviews': reviews_list
    })

    # Write the DataFrame to a CSV file
    df.to_csv('san_francisco_restaurants_castro.csv', index=False, encoding='utf-8')

    print("Data has been written to san_francisco_restaurants2.csv file.")
else:
    print("Error:", response.status_code)
