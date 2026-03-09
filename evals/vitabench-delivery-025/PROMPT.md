# VitaBench Task: Delivery #25

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Tonight, you want to order some late-night snacks with your wife, but since she only wants a taste, you're planning to order some non-spicy braised goose meat and a low-oil vegetable hearts dish, and you require that it must be from a top-ranked restaurant. The weather is muggy, so you also want to order two cups of Suzhou-style Mung Bean Soup - one regular and one that only contains lily bulb as an ingredient.

## Context

- Current time: `2024-08-23 22:04:19`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for night snack orders should be Nanyang New Village near No.94 Tongyang Road, Liangxi District, Wuxi, Jiangsu Province
- The estimated delivery time for night snack orders should be before 22:55 on August 23, 2024
- The night snack order for braised goose meat and vegetable hearts should be from popular ranked merchants, such as Chaolin Fresh Midnight Restaurant or other stores with popular ranking labels
- When selecting braised goose meat, the Non-Spicy flavor should be chosen, and when selecting vegetable hearts, the Low Oil cooking method should be chosen
- The delivery address for Suzhou-style Mung Bean Soup orders should be Nanyang New Village near No.94 Tongyang Road, Liangxi District, Wuxi, Jiangsu Province
- The estimated delivery time for Suzhou-style Mung Bean Soup orders should be before 22:55 on August 23, 2024
- The Suzhou-style Mung Bean Soup order should include 1 regular mung bean soup item with No Additional Ingredients
- The Suzhou-style Mung Bean Soup order should include 1 mung bean soup item with only Lily Bulb as an additional ingredient

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
