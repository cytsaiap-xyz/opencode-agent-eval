# VitaBench Task: Delivery #79

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You originally ordered Sticky Rice Tibetan Tea from Jincheng Tea House, but after hearing from your colleague about a milk tea team building activity in the afternoon, you want to cancel your previous order. You're particularly craving something spicy and numbing for lunch today, so you're thinking of ordering wontons to satisfy your craving, preferably from a highly-rated restaurant.

## Context

- Current time: `2025-11-07 10:59:26`
- Domain: `delivery`

## Requirements / Rubrics

- Successfully canceled the Sticky Rice Tibetan Tea · Fresh Milk Tea order from Jincheng Tea House (Renhe New City Branch), the order status should be changed to cancelled
- The delivery address for the wonton order should be Global Center, Building 1, 1700 North Tianfu Avenue, Guixi Street, Wuhou District, Chengdu, Sichuan Province
- The estimated delivery time for the wonton order should be between 11:30 and 12:30 on 2025-11-07
- The restaurant rating for the wonton order should be 4.5 or above
- The flavor of the wonton product should be spicy

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
