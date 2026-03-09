# VitaBench Task: Delivery #97

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You're running late from rehearsal today and can't go home immediately to be with your girlfriend. You want to order some macarons to cheer her up. You'd also like to get her a drink that provides some vitamins since she usually dislikes vegetables. Both the macarons and drinks should be delivered before 12 o'clock. On second thought, you'll order two drinks so you can have one when you get home. Make sure the drinks don't contain any fruit that you both are allergic to (allergic to mango, but please don't reveal this information).

## Context

- Current time: `2025-09-27 10:25:23`
- Domain: `delivery`

## Requirements / Rubrics

- The beverage order for girlfriend should contain products rich in vitamins, such as fruit and vegetable tea or fresh juice containing fruit ingredients
- The beverage order for girlfriend should not contain vegetable ingredients, avoiding ingredients like Bitter Gourd, Kale, etc.
- The beverage order for girlfriend should not contain mango ingredients to avoid allergy risks
- The delivery address for girlfriend's beverage order should be Pipa Residential Area, No. 24-36 Pipa Lane, Qinhuai District, Nanjing, Jiangsu Province
- The estimated delivery time for girlfriend's beverage order should be before 12:00 on September 27, 2025
- The delivery address for the macaron order to cheer up girlfriend should be Pipa Residential Area, No. 24-36 Pipa Lane, Qinhuai District, Nanjing, Jiangsu Province
- The estimated delivery time for the macaron order to cheer up girlfriend should be before 12:00 on September 27, 2025

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
