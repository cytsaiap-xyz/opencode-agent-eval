# VitaBench Task: Delivery #89

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You want to cancel the Lamb Offal Soup order and replace it with Small Shrimp Wontons from Jixiang Wonton, accompanied by chili and vinegar packets, and have it delivered to your home before 11 AM.

## Context

- Current time: `2025-03-19 10:01:28`
- Domain: `delivery`

## Requirements / Rubrics

- Successfully canceled the Lamb Offal Soup order from Zunyi Lamb Rice Noodles (Zhongcun Branch), the order status with order_id H0721004O01 should be updated to cancelled
- The delivery address for the new Small Shrimp Wontons order should be Jiangbin Residential Area, 359 Binhong Road (400 meters from Exit A of Bayi South Street Metro Station), Wucheng District, Jinhua City, Zhejiang Province
- The estimated delivery time for the new Small Shrimp Wontons order should be before 11:00 AM on 2025-03-19
- The new Small Shrimp Wontons order should include chili packet and vinegar packet

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
