# VitaBench Task: Delivery #54

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You want to order pasta delivery for lunch today from a restaurant you've ordered from before, but not the same flavor as last time. Then you'd like to see which store sells hot brown sugar ginger tea, and order one with more ginger.

## Context

- Current time: `2025-08-16 11:39:12`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the pasta order should be East Area of Qinyuyuan, Nanchi Road, Yuecheng District, Shaoxing City, Zhejiang Province
- The estimated delivery time for the pasta order should be around 12:00 PM on 2025-08-16
- The pasta order should select products from Xiyin Steak Homemade Pasta · Baked Rice (Shaoxing Branch)
- The pasta order should not select pasta products with tomato meat sauce flavor
- The delivery address for the brown sugar ginger tea order should be East Area of Qinyuyuan, Nanchi Road, Yuecheng District, Shaoxing City, Zhejiang Province
- The estimated delivery time for the brown sugar ginger tea order should be around 12:00 PM on 2025-08-16
- The brown sugar ginger tea order should select hot drink products
- The brown sugar ginger tea order should select products with the 'more ginger' attribute

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
