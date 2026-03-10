# VitaBench Task: Delivery #61

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

During lunch, my colleagues and I were discussing floral-flavored milk tea, and everyone was curious about how it tastes. Today at 2:30 PM, you're organizing a sharing session, and you want to order one cup for each person to try. Preferably order from the nearest Guming store, and it just needs to arrive before the session starts. Also, consider that all six of you have been on a diet recently and haven't been consuming much sugar, though you've heard that these drinks don't taste good without adding extra sugar.

## Context

- Current time: `2024-06-27 13:24:24`
- Domain: `delivery`

## Requirements / Rubrics

- The order must be placed at Guming (Software Park Phase III Store), which is located at Building 07, Zone F, Software Park Phase III, Jimei District, Xiamen City, Fujian Province, and is the closest Guming branch to the user's work address
- The quantity of ordered items should be 6 servings to meet the needs of a 6-person sharing meeting
- The ordered product should have floral fragrance characteristics, such as jasmine aroma
- The sweetness level of the ordered product should be selected as 'three parts sweet', suitable for the low-sugar needs of people who are losing weight
- The estimated delivery time should be before 14:30 on June 27, 2024, to ensure arrival before the sharing meeting begins

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
