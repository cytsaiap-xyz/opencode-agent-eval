# VitaBench Task: Delivery #22

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You and several colleagues plan to order some Cantonese food to eat together at the office. Your colleagues have already selected White Cut Chicken, Beef Brisket Stew, and congee, but you want to add two more dishes that are Low Salt and Less Oil. The delivery must arrive before 6 PM.

## Context

- Current time: `2025-06-14 16:36:41`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the Cantonese group meal order should be Junchuang International Business Garden, 50 North Zhonghua Street, Xinhua District, Shijiazhuang City, Hebei Province
- The estimated delivery time for the Cantonese group meal order should be before 18:00 on June 14, 2025
- The Cantonese group meal order should include five different dishes, with different dishes in the set meal counted separately
- The Cantonese group meal order must include White Cut Chicken, Beef Brisket Stew, and congee
- Dishes in the Cantonese group meal order other than White Cut Chicken, Beef Brisket Stew, and congee should be Low Salt and Less Oil types, meeting healthy eating requirements

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
