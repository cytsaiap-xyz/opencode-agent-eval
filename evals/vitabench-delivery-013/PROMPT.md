# VitaBench Task: Delivery #13

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

After work, I've been feeling a bit down since I was diagnosed with insulin resistance. I've decided to order two different types of bread from the bakery where I frequently order.

## Context

- Current time: `2025-09-05 19:34:29`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the bread order should be Xiangzhang Garden, 168 Xiangzhang Road, Yuhua District, Changsha, Hunan Province
- The bread order should select Molecular Fresh Bread (Forestry University Store) as the merchant
- Considering the health needs related to insulin resistance, the bread order should prioritize bread products with low GI (Glycemic Index)

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
