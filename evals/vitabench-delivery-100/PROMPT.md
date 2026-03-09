# VitaBench Task: Delivery #100

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You have to work overtime again today. You're feeling tired and irritated, with little appetite. You're planning to order a dessert to cool yourself down. However, considering you have a meeting with colleagues to go over requirements at seven o'clock, you can't eat anything with a strong flavor.

## Context

- Current time: `2024-05-09 17:49:59`
- Domain: `delivery`

## Requirements / Rubrics

- The ordered dessert should be ice-based or cold beverage type, suitable for cooling down on a 29-degree sunny day
- The ordered dessert should not contain durian or other ingredients with strong distinctive odors that might affect the 19:00 meeting
- The dessert delivery address should be the work location at TaiKoo Hui, 383 Tianhe Road, Tianhe District, Guangzhou, Guangdong Province
- The expected delivery time for the dessert order should be before the meeting starts at 2024-05-09 19:00:00

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
