# VitaBench Task: Delivery #20

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You just placed a food delivery order, but suddenly your old digestive problem flared up again, so you want to cancel the previous order. Now you want to order a winter melon soup with meat instead, but you need to leave at 1:30 PM for your shift, so the delivery needs to arrive quickly.

## Context

- Current time: `2025-11-22 12:09:26`
- Domain: `delivery`

## Requirements / Rubrics

- Successfully canceled the Old Shanghai Pork Rib with Rice Cake store order that the user no longer needs due to indigestion, the order status with order_id 30711008O01 has been changed to cancelled
- The delivery address for the newly ordered winter melon meat soup should be Greentown Begonia Garden, No. 1766 Bayi South Street, Wucheng District, Jinhua City, Zhejiang Province
- The delivery time for the newly ordered winter melon meat soup should be before 13:00 on November 22, 2025, to meet the user's afternoon shift needs
- The newly ordered product for the user with indigestion should contain both winter melon and meat, suitable for stomach care needs

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
