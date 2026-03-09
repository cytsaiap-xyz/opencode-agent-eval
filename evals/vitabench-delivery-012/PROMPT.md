# VitaBench Task: Delivery #12

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You plan to do a thorough house cleaning this morning, which will end around 11 AM. Your close female friend is coming to visit you at noon, and you're planning to order a 2 Jin lamb spine hot pot delivery to enjoy together. You also want to order some snow ice desserts to cool down the spiciness, one for each of you - you'd like the Mango Red Bean Snow Ice, while your friend prefers the Taro Paste Taro Ball Snow Ice.

## Context

- Current time: `2025-03-16 10:31:18`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the Snow Ice order should be Greenland Joy City, West Station Street, Honggutan District, Nanchang, Jiangxi Province
- The estimated delivery time for the Snow Ice order should be after 11:00:00 on March 16, 2025
- The Snow Ice order should include 2 Snow Ice items, specifically Mango Red Bean flavor and Taro Paste Taro Ball flavor, to satisfy the needs of the user and her friend, one for each
- The delivery address for the Lamb Spine Hot Pot order should be Greenland Joy City, West Station Street, Honggutan District, Nanchang, Jiangxi Province
- The estimated delivery time for the Lamb Spine Hot Pot order should be after 11:00:00 on March 16, 2025
- The Lamb Spine Hot Pot order should include Lamb Spine items weighing 2 Jin

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
