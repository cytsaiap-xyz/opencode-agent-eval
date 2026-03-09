# VitaBench Task: Delivery #63

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You just found out that you don't need to work overtime and can go home at 7 PM, so you plan to cancel the takeout you ordered earlier and eat at home instead. You want to order a non-spicy chicken soup rice for your child, without green onions. Both you and your wife can handle spicy food well, so you plan to order spicy chicken, with one portion of noodles as the staple food.

## Context

- Current time: `2024-09-30 17:42:23`
- Domain: `delivery`

## Requirements / Rubrics

- Successfully canceled the user's roast duck set meal order from Dalao Roast Duck (Qingyang Road Branch), the order status of order_id D0721001T01 has been updated to cancelled
- The item in the chicken soup rice order for the child should be non-spicy flavor
- The item in the chicken soup rice order for the child should include the option of no green onions
- The chicken soup rice order for the child should be delivered around 19:00 on September 30, 2024
- The delivery address for the chicken soup rice order for the child should be Phase One of Keyuan New Village, Wuhu Road Street, Baohe District, Hefei City, Anhui Province
- The item in the spicy chicken order should be a portion for two people
- The item in the spicy chicken order should select the extra spicy flavor option
- The spicy chicken order should include noodle-type staple food items
- The spicy chicken order should be delivered around 19:00 on September 30, 2024
- The delivery address for the spicy chicken order should be Phase One of Keyuan New Village, Wuhu Road Street, Baohe District, Hefei City, Anhui Province

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
