# VitaBench Task: Delivery #32

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You have a Pilates advanced class at 7 PM tonight. It takes nearly an hour to get there from your office. You want to order a light dinner with a feeling of fullness before going to class. You still want to order from that restaurant you liked before, but you don't want to order what you've had before. Also, the price shouldn't exceed your usual budget range.

## Context

- Current time: `2025-07-15 16:40:48`
- Domain: `delivery`

## Requirements / Rubrics

- The ordered light dinner item cannot include Kyoto Grain Grilled Meat Rice Bowl
- The ordered light dinner item should come from Super Deer Team · Light Weight-loss Meal (Jiaojiang Branch)
- The ordered light dinner item should provide a Feeling of Fullness and be suitable for consumption before exercise
- The ordered light dinner item should cost less than 30 yuan
- The delivery address for the light dinner order should be Zhejiang Nanyang Huacheng Technology Co., Ltd., No. 388 Development Avenue, Economic Development Zone, Baiyun Street, Jiaojiang District, Taizhou City, Zhejiang Province
- The estimated delivery time for the light dinner order should be before 18:00 on July 15, 2025

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
