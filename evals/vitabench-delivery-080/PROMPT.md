# VitaBench Task: Delivery #80

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You have selected a mildly spicy roast chicken hotpot delivery and are about to pay when your colleague suddenly says she would like to order the same lunch delivery as yours. You plan to have lunch together in the company cafeteria at noon. You decide to modify your order before making the payment.

## Context

- Current time: `2025-11-19 11:02:05`
- Domain: `delivery`

## Requirements / Rubrics

- Order the product from order G0721005O01 again

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
