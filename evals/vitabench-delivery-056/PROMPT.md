# VitaBench Task: Delivery #56

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

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

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
