# VitaBench Task: Delivery #2

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your child wants to eat crayfish, and you're thinking of ordering delivery. Your wife says she won't have any. You want to keep the budget around 50 yuan, but you also don't want to get an upset stomach. Your child can't eat spicy food, and you hope the restaurant can use fewer seasonings.

## Context

- Current time: `2024-05-12 16:19:36`
- Domain: `delivery`

## Requirements / Rubrics

- Delivery address should be North Area of Fengning Residential Complex, No. 10 Fengning Road, Wuhua District, Kunming, Yunnan Province
- Total price of crayfish order should be around 50 yuan
- Crayfish for children should be Non-spicy flavor, such as garlic or other mild flavors
- To prevent stomach issues for children, restaurants with Fresh Ingredients should be selected
- The portion of crayfish ordered should be enough For Two People

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
