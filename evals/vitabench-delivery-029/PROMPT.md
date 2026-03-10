# VitaBench Task: Delivery #29

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You want to order a combo meal with pork sandwich and rice skin noodles for lunch. The current time is 11:30, and you request delivery before 12:00 because you need to make a delivery after lunch. You just ordered handmade spicy strips and need to add a note: extra spicy, thank you.

## Context

- Current time: `2026-06-24 11:22:28`
- Domain: `delivery`

## Requirements / Rubrics

- Add note to the handmade spicy strips order with order_id 40711008O01: Extra spicy, thanks
- The ordered pork sandwich and rice skin noodles must be in meal set form, not as individual items
- The expected delivery time for the pork sandwich and rice skin noodles order should be before 12:00:00 on June 24, 2026
- The delivery address for the pork sandwich and rice skin noodles order should be ZTO Express Xigong Branch 3, No. 3 Jiankang East Road, Xigong District, Luoyang, Henan Province

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
