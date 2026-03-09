# VitaBench Task: Instore #48

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

August 29th is the two-year anniversary of your relationship with your girlfriend. You want to find a listed Western restaurant with a romantic atmosphere suitable for proposing. You plan to buy a set menu for two that includes Tomahawk Steak and Red Wine. If there's nothing within 5km of your home, you'll consider taking your girlfriend to the Japanese restaurant you visited last time for dinner, then propose to her at home. If there is a suitable Western restaurant, you want to reserve a table for 5:30 PM. Tonight you need to go through the proposal steps and speech with your best friend, so you plan to find a quiet Tea House within 500m of your home. After buying the ring and booking the restaurant, you only have 100 yuan left to spend, so you want to buy a set menu for two with Tea Snacks under 100 yuan.

## Context

- Current time: `2025-08-26 22:30:00`
- Domain: `instore`

## Requirements / Rubrics

- User should prioritize Western restaurants within 5km (inclusive) of Room 1203, Building B, Wanda Plaza, 28 Taihu Middle Road, Xinbei District, Changzhou, Jiangsu Province. If none available, select a Japanese restaurant from user's history. As there are results, the restaurant ordered should be a Western restaurant
- The Western restaurant ordered should be a Listed Restaurant
- The Western restaurant's environment should be romantic and suitable for a proposal
- The Western restaurant order should include Tomahawk Steak and Red Wine
- The Western restaurant order should be a Set Menu for Two
- The reserved Western restaurant should be Romantic Starry Sky Western Restaurant
- The Western restaurant reservation time should be 2025-08-29 17:30:00
- The Western restaurant reservation should be for 2 people
- The tea house ordered should have a Quiet Environment
- The tea house should be within 500m (inclusive) of Room 1203, Building B, Wanda Plaza, 28 Taihu Middle Road, Xinbei District, Changzhou, Jiangsu Province
- The tea house order price should be within 100 yuan (inclusive)
- The tea house order should include Tea Snacks
- The tea house order should be a Set Menu for Two

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
