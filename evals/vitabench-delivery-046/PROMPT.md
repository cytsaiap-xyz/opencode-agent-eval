# VitaBench Task: Delivery #46

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You have passed the professional title evaluation and plan to treat your colleagues in the department at noon. You want to order 10 cups of longan drinks, all with 30% sweetness. Also, you'd like to include four economical sushi set meals for multiple people, but this shouldn't interfere with the commendation ceremony at 2 PM in the afternoon.

## Context

- Current time: `2025-09-26 11:51:36`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the multi-person sushi set meal order should be Internal Medicine Building, Nanning First People's Hospital, No. 89 Qixing Road, Qingxiu District, Nanning, Guangxi Zhuang Autonomous Region
- The estimated delivery time for the multi-person sushi set meal order should be before 2:00 PM on September 26, 2025
- The order items should be sushi products of the multi-person set meal type
- The ordered products must have Economical/Affordable price characteristics
- The delivery address for the longan drink order should be Internal Medicine Building, Nanning First People's Hospital, No. 89 Qixing Road, Qingxiu District, Nanning, Guangxi Zhuang Autonomous Region
- The estimated delivery time for the longan drink order should be before 2:00 PM on September 26, 2025
- The order items should be drinks containing longan ingredients
- All products in the longan drink order should have a sweetness attribute of three parts sugar

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
