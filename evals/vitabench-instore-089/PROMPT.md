# VitaBench Task: Instore #89

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You want to find some time this weekend to meet up with your best friend. First, you're looking for a restaurant with Chinese courtyard style decor. You want to order a health cultivation themed package for two people, and the dishes must include celery with lily bulbs. If that dish isn't available, astragalus beef would be acceptable, but you don't want both dishes included together. After the meal, you'd like to find a meditation center near the Xinghai Square commercial area. You need to book a one-to-two course package, with you and your friend splitting the cost. You hope that each person's share won't exceed 200 yuan.

## Context

- Current time: `2024-09-20 19:15:00`
- Domain: `instore`

## Requirements / Rubrics

- The restaurant ordered should have Chinese Courtyard Style decoration
- The products ordered from the restaurant should be a package for two people
- The products ordered from the restaurant should have a health cultivation theme
- Based on inquiries, packages containing Celery with Lily Bulbs are sold out at eligible restaurants, so the package ordered should include Astragalus Beef
- The restaurant package ordered cannot contain both Celery with Lily Bulbs and Astragalus Beef
- The meditation center should be within 2.5 kilometers (inclusive) from Xinghai Square Commercial Area, Shahekou District, Dalian
- The product ordered from the meditation center should be a one-to-two course package
- The total price of products from the meditation center should be less than or equal to 400 yuan

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
