# VitaBench Task: Instore #91

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

I'm planning to have dinner with friends tomorrow night and I want to find a highly-rated Southeast Asian restaurant. One of my friends loves Tom Yum Soup, so I need to order a five-person set that includes this dish, but the price can't exceed 450 yuan. After finding a suitable restaurant, I made a reservation for 7 PM. After dinner, we plan to continue the evening at a bar. We want to find a music bar within 1km of the Garden Night Market, so we can walk around to digest our food before drinking, preferably a place known for its specialty cocktails. We estimate we'll finish dinner at 8:30 PM, spend about an hour and a half walking around, and then head to the bar. I'm worried about having to wait in line, so I need to make a reservation in advance.

## Context

- Current time: `2025-12-15 21:37:05`
- Domain: `instore`

## Requirements / Rubrics

- The price of items in the restaurant order should be within 450 yuan (inclusive)
- The restaurant ordered from should be a Southeast Asian restaurant
- The ordered restaurant must have a rating of 4.3 or above
- The set menu in the restaurant order must include Tom Yum Soup
- The order from the Southeast Asian restaurant should be a five-person meal, not multiple single-person sets
- The reserved restaurant should be Thai Garden Restaurant
- The restaurant reservation time should be 19:00:00 on 2025-12-16
- The number of people for the restaurant reservation should be 5
- The distance from the reserved bar to the Garden Night Market should be within 1km (inclusive)
- The reserved bar should be a Music Bar
- The reserved bar should specialize in Specialty Cocktail
- Dinner ends at 8:30, followed by an hour and a half of street strolling, so the bar reservation time should be 22:00:00 on 2025-12-16
- The number of people for the bar reservation should be 5

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
