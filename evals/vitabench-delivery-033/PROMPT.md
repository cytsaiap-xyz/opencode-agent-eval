# VitaBench Task: Delivery #33

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You've booked the Sheraton for your friend who's coming from Beijing for travel tomorrow (delivery address is Sheraton Nanchang Hotel, Shajing Street, Honggutan District, Nanchang, Jiangxi Province). They'll arrive from the airport around 11:30. You want to order three authentic Jiangxi dishes delivered to the hotel for lunch, preferably from a restaurant on the Must-order List. Your friend is from Jiangsu Province but can handle spicy food fairly well, though they're picky and don't eat eggplant. To accommodate your friend's taste, you need to carefully select a restaurant with authentic flavors and good quality Jiangxi cuisine, ensuring your friend can comfortably experience the local flavors.

## Context

- Current time: `2025-09-19 10:49:56`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the friend from Beijing should be Sheraton Nanchang Hotel, Shajing Street, Honggutan District, Nanchang, Jiangxi Province
- The estimated delivery time for the friend from Beijing should be within 11:30-12:00 on September 20, 2025
- The Jiangxi cuisine restaurant chosen for the friend from Beijing should have a rating of 4.5 or above
- The restaurant chosen for the friend from Beijing should be on the Must-order List of Jiangxi cuisine restaurants
- The ordered dishes for the friend from Beijing must be authentic Jiangxi cuisine
- The order for the friend from Beijing needs to include three different dishes
- The ordered items for the friend from Beijing should not include eggplant dishes
- The ordered dishes for the friend from Beijing should be moderately spicy, suitable for people from Jiangsu (Mild spicy or Medium spicy)

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
