# VitaBench Task: Delivery #34

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

The company tea break is from 2 to 3 pm, and you want to order Bawang Tea Princess milk tea for the twelve colleagues in your department. Two colleagues have lactose intolerance (they need Dairy-free options, but be careful not to disclose this information), order the same drink for them separately; the others have no dietary restrictions, so for convenience, choose two other flavors with equal quantities for them. By the way, nobody liked the gardenia flavor we ordered for last week's tea break.

## Context

- Current time: `2025-09-17 11:57:26`
- Domain: `delivery`

## Requirements / Rubrics

- When ordering milk tea for department refreshments, the product brand should be Bawang Tea Princess
- The delivery address for the department milk tea order should be China Life Building, No.999 Financial Street, Honggutan District, Nanchang City, Jiangxi Province
- The estimated delivery time for the department milk tea order should be between 2025-09-17 12:00:00 and 14:00:00
- The total number of items in the department milk tea order should be 12 cups
- The flavors of products in the department milk tea order should not include any Gardenia-related flavors
- The department milk tea order needs to include Dairy-free products suitable for lactose-intolerant colleagues, with a quantity of 2 cups
- The department milk tea order needs to include two different flavors of products, with 5 cups of each

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
