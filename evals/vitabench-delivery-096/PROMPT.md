# VitaBench Task: Delivery #96

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You want to order garlic vermicelli with meat slices for your wife, to be delivered around 9 PM when she comes home after working overtime. However, you need to be mindful that your wife recently has mouth ulcers. Also, please order a Strained Yogurt bowl that your daughter loves, which should be delivered before 7:30 PM as you don't want your daughter to stay up late.

## Context

- Current time: `2024-05-18 18:40:12`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the Garlic Vermicelli Meat Slice order for wife should be No.25, No.2 Shuangfengshan Road, Yunmanting Zone C, Nan'an District, Chongqing
- The estimated delivery time for the Garlic Vermicelli Meat Slice order for wife should be around 2024-05-18 21:00
- The Garlic Vermicelli Meat Slice order for wife should be non-spicy flavor, avoiding stimulating seasonings
- The delivery address for the Strained Yogurt Bowl order for daughter should be No.25, No.2 Shuangfengshan Road, Yunmanting Zone C, Nan'an District, Chongqing
- The estimated delivery time for the Strained Yogurt Bowl order for daughter should be before 2024-05-18 19:30

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
