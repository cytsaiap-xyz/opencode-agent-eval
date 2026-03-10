# VitaBench Task: Delivery #59

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Today it's just you and your child at home. You plan to order Garlic and Vermicelli Shrimp for lunch, along with whatever else works as accompaniments. Set meals are quite convenient too, but keep the total under 80 yuan. Don't have lunch delivered too early or too late - sometime between 11:00 and 12:00 would be fine.

## Context

- Current time: `2025-03-08 10:19:41`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the Garlic and Vermicelli Shrimp lunch order should be East Building, Hubin, No. 33 Renmin West Road, Lucheng District, Wenzhou City, Zhejiang Province
- The estimated delivery time for the Garlic and Vermicelli Shrimp lunch order should be between 11:00 and 12:00 on March 8, 2025
- The Garlic and Vermicelli Shrimp lunch order should not include spicy or greasy items
- The Garlic and Vermicelli Shrimp lunch order should include Garlic and Vermicelli Shrimp related items
- The Garlic and Vermicelli Shrimp lunch order should be portioned for either a meal for two or two single-person meals
- The total price of the Garlic and Vermicelli Shrimp lunch order should be kept within 80 yuan

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
