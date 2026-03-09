# VitaBench Task: Delivery #87

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your boyfriend will be home for dinner around 6 PM. You ordered takeout in advance, but after ordering, you realized you forgot to note that you don't eat cilantro, and you also need some minced garlic. You also want to order two cups of Lemon Wheat Green Juice with less ice and medium size. You'd like to order one more smoked chicken, but it shouldn't be cold.

## Context

- Current time: `2025-04-19 17:01:06`
- Domain: `delivery`

## Requirements / Rubrics

- Need to add a note to the Northeastern cuisine order with order_id H0721002O01: no Cilantro, add some garlic paste
- The delivery address for the Lemon Wheat drink order should be Guixin Community, 1 Guixin Street, Nangang District, Harbin, Heilongjiang Province
- The estimated delivery time for the Lemon Wheat drink order should be around 18:00 on April 19, 2025
- The drink order should select Lemon Wheat type beverages
- The Lemon Wheat drink order should choose less ice or much less ice
- The Lemon Wheat drink order should select medium cup or standard size, not Large Cup Size or extra large cup
- The delivery address for the smoked chicken order should be Guixin Community, 1 Guixin Street, Nangang District, Harbin, Heilongjiang Province
- The estimated delivery time for the smoked chicken order should be around 18:00 on April 19, 2025
- The smoked chicken order should select smoked chicken items
- The smoked chicken order should select items without Cilantro
- The smoked chicken order should select hot food or items that can be heated

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
