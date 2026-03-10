# VitaBench Task: Delivery #8

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You originally ordered a Jianbing, but your daughter doesn't want one with egg and would prefer the sweet bean sauce flavor. If you placed the wrong order, please change it for her. Also, buy an extra Five-Spice Tea Egg just in case your daughter gets hungry later.

## Context

- Current time: `2025-04-18 05:46:21`
- Domain: `delivery`

## Requirements / Rubrics

- Cancel the order with order ID 1072104T01
- The reordered items should include a Jianbing for the daughter, without egg, with sweet bean sauce flavor
- The Jianbing for the user in the reordered items should be identical to the product in order ID 1072104T01 (with egg, tomato sauce flavor)
- The reordered breakfast should contain 3 items in total, including 2 Jianbings and 1 tea egg

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
