# VitaBench Task: Ota #93

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You need to go to Haikou for further studies from the 16th to the 20th, so you need to plan your transportation first. You want to buy a direct flight to Haikou, or if not available, find a transit flight, but the transit waiting time shouldn't be too long. However, those days coincide with the Mid-Autumn Festival holiday, so flight tickets are likely to be expensive. You plan to buy a flight within three days before your studies begin, any day is fine as long as it's economical. After finding a suitable ticket, place the order first. The location for this training is near Mingmen Plaza, so you plan to find a hotel in that area, with prices similar to your usual spending standards. The hotel must have laundry service, otherwise you won't be able to deal with a week's worth of dirty clothes. You're not sure which day you'll return yet, so book the accommodation from your arrival day until the evening of the 20th.

## Context

- Current time: `2024-09-11 13:15:21`
- Domain: `ota`

## Requirements / Rubrics

- Need to check whether there are direct flights from Weifang to Haikou, and the result is yes, so the departure city and arrival city for the flight order should be from Weifang to Haikou
- Need to filter all flights on 2024-09-13, 2024-09-14, and 2024-09-15, and find the cheapest flight, which is SC4651 on 2024-09-15, economy class
- The flight order should be for flight SC4651
- The flight order date should be 2024-09-15
- The flight order should be for economy class
- The hotel must be near Haikou Mingmen Plaza
- The hotel order price per night must be within the 300-500 yuan price range
- The hotel must provide laundry service
- The hotel order's accommodation period must be from the arrival date until the evening of the 20th, specifically 2024-09-15, 2024-09-16, 2024-09-17, 2024-09-18, 2024-09-19, 2024-09-20

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
