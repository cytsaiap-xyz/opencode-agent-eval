# VitaBench Task: Delivery #30

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

My class ends at 7 PM today, and I'll be starving by then. You need to order steamed beef steak in advance and have it delivered before class ends. You care about the quality of delivery food, so make sure to order from a high-rated restaurant that also offers dine-in service. A full pound of steak would be too much, half a pound is enough.

## Context

- Current time: `2025-12-21 17:44:50`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the steamed beef steak order should be Building A, Baolian Plaza, 1103 Li Yu Road, Wucheng District, Jinhua City, Zhejiang Province
- The delivery time for the steamed beef steak order should be on or before 2025-12-21 19:00, ensuring that the user can eat promptly after class
- When selecting a steamed beef steak restaurant, the rating should be 4.3 or above to ensure high-quality products
- When selecting a steamed beef steak restaurant, it should be a Dine-in Restaurant with a physical store, which can generally be checked in the merchant's tags
- When selecting a steamed beef steak product, the portion should be 250g to meet the user's appetite requirements

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
