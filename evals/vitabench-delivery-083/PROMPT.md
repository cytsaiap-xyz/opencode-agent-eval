# VitaBench Task: Delivery #83

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You have to teach two consecutive classes until 3:30 PM, and you want to order a fresh juice in advance to quench your thirst after class. You need one with abundant ingredients, but not too much ice. Today is also your daughter's birthday, so order a birthday cake from Baxi Ice Cream Birthday Cake that little girls would like, but make sure it's not made with vegetable cream. At 5 PM, you will leave school with the cake to pick up your daughter from the daycare center.

## Context

- Current time: `2025-06-21 09:53:21`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the fresh juice order should be Nanchang No. 2 Middle School (Supu Road Campus), No. 3 Supu Road, Dunzitang Street, Donghu District, Nanchang City, Jiangxi Province
- The estimated delivery time for the fresh juice order should be around 15:30 on June 21, 2025
- The fresh juice order should select the Less Ice option
- The fresh juice order should choose a product with a variety of fruit ingredients
- The delivery address for the birthday cake order should be Nanchang No. 2 Middle School (Supu Road Campus), No. 3 Supu Road, Dunzitang Street, Donghu District, Nanchang City, Jiangxi Province
- The estimated delivery time for the birthday cake order should be before 17:00 on June 21, 2025
- The birthday cake order should choose a merchant from the Baxi brand
- The birthday cake order product should be made with Fresh Cream
- The birthday cake order should select a design style suitable for little girls' aesthetic preferences

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
