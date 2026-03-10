# VitaBench Task: Delivery #8

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You originally ordered a Jianbing, but your daughter doesn't want one with egg and would prefer the sweet bean sauce flavor. If you placed the wrong order, please change it for her. Also, buy an extra Five-Spice Tea Egg just in case your daughter gets hungry later.

## Context

- Current time: `2025-04-18 05:46:21`
- Domain: `delivery`

## Requirements / Rubrics

- Cancel the order with order ID 1072104T01
- The reordered items should include a Jianbing for the daughter, without egg, with sweet bean sauce flavor
- The Jianbing for the user in the reordered items should be identical to the product in order ID 1072104T01 (with egg, tomato sauce flavor)
- The reordered breakfast should contain 3 items in total, including 2 Jianbings and 1 tea egg

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
