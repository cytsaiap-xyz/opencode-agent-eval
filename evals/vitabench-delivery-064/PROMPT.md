# VitaBench Task: Delivery #64

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You have a community activity at 4 PM today. Before going out, you suddenly want to eat the stir-fried yogurt you ordered last week, but the flavor was a bit mild last time.

## Context

- Current time: `2026-04-11 14:27:04`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the stir-fried yogurt order should be Evergrande Oasis, No. 15 Alishan Street, Shijiazhuang Economic and Technological Development Zone, Gaocheng District, Shijiazhuang, Hebei Province
- The estimated delivery time for the stir-fried yogurt order should be within the time range of 14:27-16:00 on April 11, 2026
- The stir-fried yogurt order should select Xishi Candied Haws & Stir-fried Yogurt (Shijiazhuang Gaoxin InJoy Mall Branch) as the merchant
- The stir-fried yogurt order should select a product with strawberry flavor
- The stir-fried yogurt order should select a product with rich and mellow flavor, such as Rich Strawberry Stir-fried Yogurt

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
