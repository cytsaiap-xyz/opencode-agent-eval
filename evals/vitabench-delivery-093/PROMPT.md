# VitaBench Task: Delivery #93

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You need to take your boss to the airport at 8 o'clock today, and plan to have breakfast at home beforehand. You've been eating pan-fried buns every day recently and are getting a bit tired of them, so you want to try pork soup dumplings instead.

## Context

- Current time: `2025-09-21 06:20:24`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the breakfast soup dumpling order should be Yintai Garden, 1168 Ganjiang West Road (440m walk from Tongjing North Road Metro Station Exit 5), Gusu District, Suzhou, Jiangsu Province
- The expected delivery time for the breakfast soup dumpling order should be around 7:00 on September 21, 2025, ensuring that the user can eat in time before taking the boss to the airport

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
