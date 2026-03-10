# VitaBench Task: Delivery #45

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You want to order some refreshing drinks and desserts to reward your daughter. So you'd like to order two different types of pure tea from Chucha Huayue where you've had drinks before, both with standard ice. You also want to pair them with an ice cream cake, and hope everything can arrive within two hours.

## Context

- Current time: `2025-09-13 14:00:17`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the ice cream cake order should be Cui Lake Paradise Phase 2, 120 meters west of the intersection of Huasheng Road and Jiabo Road, Yuzhong District, Chongqing
- The estimated delivery time for the ice cream cake order should be before 16:00 on September 13, 2025
- The ice cream cake should match the scene of mother and daughter having afternoon tea
- The delivery address for the pure tea beverage order should be Cui Lake Paradise Phase 2, 120 meters west of the intersection of Huasheng Road and Jiabo Road, Yuzhong District, Chongqing
- The estimated delivery time for the pure tea beverage order should be before 16:00 on September 13, 2025
- The pure tea beverage order should select products from the Chucha Huayue store
- The two tea beverages in the pure tea beverage order should be of different styles, and both should be standard ice

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
