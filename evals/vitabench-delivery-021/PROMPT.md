# VitaBench Task: Delivery #21

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You are staying home with your child today and want to order a children's set meal from Ajisen for your kid, to be delivered as soon as possible. You prefer having both vegetables and meat in your meals, so you're planning to order a Sauce Bone Rice for yourself. Your child just reminded you about being environmentally friendly, so you've decided to note 'no disposable cutlery' for all takeout orders. If possible, please also update the note for the drink you just ordered.

## Context

- Current time: `2025-10-18 11:58:29`
- Domain: `delivery`

## Requirements / Rubrics

- Need to modify the note for order with order_id 30711009O01 to: No disposable tableware
- The delivery address for the Sauce Bone Rice order should be Nanhu Garden, 15 Dongzhai Road, Wucheng District, Jinhua, Zhejiang Province
- The delivery time for the Sauce Bone Rice order should be before 2025-10-18 12:43:29
- The Sauce Bone Rice set meal should include vegetables
- The Sauce Bone Rice order should note no disposable tableware
- The delivery address for the Children's Set Meal order should be Nanhu Garden, 15 Dongzhai Road, Wucheng District, Jinhua, Zhejiang Province
- The delivery time for the Children's Set Meal order should be before 2025-10-18 12:43:29
- The Children's Set Meal should be selected from Ajisen Ramen
- The Children's Set Meal order should note no disposable tableware

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
