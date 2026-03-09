# VitaBench Task: Instore #96

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Tomorrow night, you need to host a dinner with clients to discuss cooperation. There will be six people in total, including you and your boss. You want to find an upscale restaurant suitable for business banquets that is Michelin-listed. You need to pre-order a six-person set meal, but the budget cannot exceed 2,500. After the dinner, you want to arrange an entertainment activity to further facilitate cooperation, so you plan to find an indoor golf club. Your leader has specifically emphasized that the entertainment budget is also tight, and can only be 10% higher than the dining budget, not exceeding this limit. You decide to purchase package vouchers sufficient for 6 people in advance, so tomorrow you can go directly to the venue and use these vouchers.

## Context

- Current time: `2025-01-13 14:35:00`
- Domain: `instore`

## Requirements / Rubrics

- The restaurant ordered must be suitable for business banquets
- The restaurant ordered must be an upscale restaurant
- The restaurant ordered must be Michelin-listed
- The items in the restaurant order must be a six-person set
- The price of items in the restaurant order cannot exceed 2500 yuan (including 2500 yuan)
- The golf club ordered must be indoor
- The budget for the golf club order should be 10% higher than the restaurant order budget (cannot exceed), as the restaurant order budget is 2500 yuan (including 2500 yuan), therefore the total price of items in the golf club order cannot exceed 2750 yuan (including 2750 yuan)
- The items in the golf club order must be suitable for 6 people

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
