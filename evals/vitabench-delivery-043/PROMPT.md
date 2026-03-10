# VitaBench Task: Delivery #43

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You plan to take your wife and child to an event tomorrow that will last until about 6 PM, so you want to order three Northeastern Chinese dishes for delivery so that you can eat dinner immediately when you get home after the event. Considering your baby has a sensitive digestive system, you should choose dishes that are not too greasy or spicy, and order three bowls of rice as well. You also need to order a drink for your wife, which must be very hot.

## Context

- Current time: `2025-08-09 16:55:13`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for ordering Northeast cuisine for family dinner should be Resin Factory Residential Building, 500 meters walk from Exit B of Wangcun South Street Metro Station, Xiaodian District, Taiyuan City, Shanxi Province
- The estimated delivery time for the Northeast cuisine order should be around 18:00 on 2025-08-10
- Considering the baby's sensitive digestive system, the Northeast cuisine order should avoid greasy and spicy items
- The Northeast cuisine order should contain 6 items in total, including 3 dishes and 3 portions of rice
- The delivery address for ordering hot drinks for wife should be Resin Factory Residential Building, 500 meters walk from Exit B of Wangcun South Street Metro Station, Xiaodian District, Taiyuan City, Shanxi Province
- The estimated delivery time for the hot drinks order should be around 18:00 on 2025-08-10
- The temperature of the drink chosen for wife should be hot

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
