# VitaBench Task: Delivery #80

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You have selected a mildly spicy roast chicken hotpot delivery and are about to pay when your colleague suddenly says she would like to order the same lunch delivery as yours. You plan to have lunch together in the company cafeteria at noon. You decide to modify your order before making the payment.

## Context

- Current time: `2025-11-19 11:02:05`
- Domain: `delivery`

## Requirements / Rubrics

- Order the product from order G0721005O01 again

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
