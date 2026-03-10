# VitaBench Task: Delivery #24

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You need to take your mother out in the afternoon, and no one is preparing dinner, so you want to order three home-style dishes and two portions of rice to be delivered to your home. You hope the restaurant has good ratings and the dishes include a mix of meat and vegetable options, so you can have hot food when you return home at 8 PM. Additionally, you'd like to order handmade lotus root pastry as a gift for someone tomorrow, preferably with elegant packaging.

## Context

- Current time: `2025-05-27 12:32:57`
- Domain: `delivery`

## Requirements / Rubrics

- Home-style cuisine orders should have a balance of meat and vegetable dishes
- Restaurants for home-style cuisine orders should have ratings of 4.0 or above
- Home-style cuisine orders should be delivered before 8:00 PM on May 27, 2025, but not too early to avoid the food getting cold
- Home-style cuisine orders should be delivered to Wusi Huating, 8-1 Yongsheng Lane, Shahekou District, Dalian, Liaoning Province (280m walk from Exit A of Xinggong Street Metro Station)
- The Lotus Root Pastry order should contain handmade products
- The Lotus Root Pastry order should be in gift box packaging
- The Lotus Root Pastry order should be delivered to Wusi Huating, 8-1 Yongsheng Lane, Shahekou District, Dalian, Liaoning Province (280m walk from Exit A of Xinggong Street Metro Station)

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
