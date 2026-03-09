# VitaBench Task: Delivery #88

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

There are four people working overtime with you in the film crew, and everyone wants to eat Lemon Boneless Chicken Feet as a late-night snack. The script reading starts at 8 o'clock, so you hope the food can be delivered to your workplace before then.

## Context

- Current time: `2025-03-05 19:00:00`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the Lemon Boneless Chicken Feet night snack order should be Weifang Xinchen Tiandi, No.1588 Wenhua Road, Kuiwen District, Weifang City, Shandong Province
- The delivery time for the Lemon Boneless Chicken Feet night snack order should be between 2025-03-05 19:00:00 and 2025-03-05 20:00:00
- When selecting Lemon Boneless Chicken Feet night snack products, the quantity should be sufficient for five people
- When selecting night snack chicken feet products, boneless chicken feet should be chosen
- When selecting night snack products, lemon flavored chicken feet should be chosen

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
