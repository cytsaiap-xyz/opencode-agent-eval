# VitaBench Task: Delivery #36

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You have evening self-study at 8 p.m. and plan to order three of the sauce meat buns you had the day before yesterday to fill your stomach before the evening study session. Just then, a classmate comes to you saying they're also hungry, so you decide to add two more buns.

## Context

- Current time: `2025-04-01 18:22:34`
- Domain: `delivery`

## Requirements / Rubrics

- Order of sauce meat buns to satisfy hunger before evening study session, delivery address should be Longtan Campus of Shanxi Engineering Vocational College, 131 Xinjian Road, Sanqiao Street, Xinghualing District, Taiyuan, Shanxi Province
- Order of sauce meat buns to satisfy hunger before evening study session, estimated delivery time should be before 2025-04-01 20:00:00
- When ordering sauce meat buns to satisfy hunger before evening study session, the selected store should be Pang Er Jiu Traditional Buns (Jingang'yan Road Branch)
- Order of sauce meat buns to satisfy hunger before evening study session, the total quantity of items should be 5

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
