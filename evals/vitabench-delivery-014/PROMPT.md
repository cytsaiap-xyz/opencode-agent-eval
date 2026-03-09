# VitaBench Task: Delivery #14

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Today you just got home after picking up medication from the hospital, and your blind date said they're coming over to see you tonight. They'll arrive around 7 PM, so you decide to order cold noodles and Stir-fried Purslane with Eggs. You also want to eat naan, but it's too plain by itself, so you'd like one that's stir-fried with vegetables. You also want to cancel the Clear Broth Beef Noodles that you ordered earlier.

## Context

- Current time: `2025-08-20 17:29:18`
- Domain: `delivery`

## Requirements / Rubrics

- Successfully cancelled the Clear Broth Beef Noodles order from Ma Changhe Northwest Beef Noodles (Desiqin Branch), the status of order with order_id 30711002O01 should be cancelled
- The delivery address for the Xinjiang cuisine order should be Xiangzhang Garden, 168 Xiangzhang Road, Yuhua District, Changsha, Hunan Province
- The estimated delivery time for the Xinjiang cuisine order should be around 19:00 on 2025-08-20
- The Xinjiang cuisine order should include Stir-fried Cabbage with Naan, quantity of 1
- The total number of items in the Xinjiang cuisine order should be 3

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
