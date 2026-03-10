# VitaBench Task: Delivery #13

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

After work, I've been feeling a bit down since I was diagnosed with insulin resistance. I've decided to order two different types of bread from the bakery where I frequently order.

## Context

- Current time: `2025-09-05 19:34:29`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the bread order should be Xiangzhang Garden, 168 Xiangzhang Road, Yuhua District, Changsha, Hunan Province
- The bread order should select Molecular Fresh Bread (Forestry University Store) as the merchant
- Considering the health needs related to insulin resistance, the bread order should prioritize bread products with low GI (Glycemic Index)

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
