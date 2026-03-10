# VitaBench Task: Delivery #56

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You have a quarterly work report from 3 to 4 PM today, and you're too nervous to eat right now, so you need to cancel the pancake you just ordered. You plan to order a Char Siu and Roast Duck Combo Rice after the report is over and then continue working overtime, but not from the same restaurant you ordered from before.

## Context

- Current time: `2025-09-22 13:37:36`
- Domain: `delivery`

## Requirements / Rubrics

- Successfully canceled user's "Deluxe" Egg Pancake order from Jianbing Story (Tofu Pudding · Soy Milk · Porridge · Huayang Branch), order status should be changed to cancelled
- The delivery address for the Roast Duck and Char Siu Combo Rice order should be Building B, Tencent Chengdu Building, Yunhua Road, Wuhou District, Chengdu, Sichuan Province
- The estimated delivery time for the Roast Duck and Char Siu Combo Rice order should be after 2025-09-22 16:00
- The Roast Duck and Char Siu Combo Rice order should not select Macau Chen Guangji Roast Restaurant (Yuanda Branch) as the merchant

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
