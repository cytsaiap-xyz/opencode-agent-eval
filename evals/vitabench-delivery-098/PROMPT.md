# VitaBench Task: Delivery #98

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Since you are rushing to a communication meeting with a client this morning, you didn't have time for breakfast. So you hope to eat a delicious bowl of ramen after your meeting ends at 12 o'clock, but you don't eat anything with shrimp. Besides that, you also want to pair it with a cup of milk tea to relieve stomach discomfort.

## Context

- Current time: `2024-03-31 08:34:46`
- Domain: `delivery`

## Requirements / Rubrics

- The rating of the ramen restaurant should be 4.3 or above
- The ramen product ordered should not contain shrimp ingredients
- The delivery address for the ramen order should be Tianyuan Business Building, 3 Yuejin Road, Chang'an District, Shijiazhuang, Hebei Province
- The estimated delivery time for the ramen order should be around 2024-03-31 12:00:00
- The temperature attribute for the milk tea product should be set as hot
- The delivery address for the milk tea order should be Tianyuan Business Building, 3 Yuejin Road, Chang'an District, Shijiazhuang, Hebei Province
- The estimated delivery time for the milk tea order should be around 2024-03-31 12:00:00

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
