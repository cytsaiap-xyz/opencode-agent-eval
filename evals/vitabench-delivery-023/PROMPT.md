# VitaBench Task: Delivery #23

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

It's rare to have a day off today, so you visit your friend who is working at Jinzheng Haiyue International. Since you haven't gotten together for a while, you decide to indulge a little by ordering some Sichuan food delivery. The Sichuan restaurant you ordered from last time when you visited was pretty good, so you decide to order from there again. This time, you want to try the Boiling Fish, along with some stir-fried vegetables with garlic flavor. Your friend's lunch break is from 1 to 2 PM, and you hope to receive the delivery before your friend's lunch break starts.

## Context

- Current time: `2024-09-12 11:43:47`
- Domain: `delivery`

## Requirements / Rubrics

- The Sichuan cuisine delivery order must be from Xiao Sichuan (Shifan Street Branch), which is a Sichuan restaurant where the user has ordered before
- The delivery address for the Sichuan cuisine delivery order should be Jinzheng Haiyue International
- The estimated delivery time for the Sichuan cuisine delivery order should be before 13:00 on September 12, 2024, so that it can be enjoyed at the beginning of friend's lunch break
- The stir-fried vegetables in the Sichuan cuisine delivery order should be garlic-flavored, as indicated in the product name or label description

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
