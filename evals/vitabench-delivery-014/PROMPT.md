# VitaBench Task: Delivery #14

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Today you just got home after picking up medication from the hospital, and your blind date said they're coming over to see you tonight. They'll arrive around 7 PM, so you decide to order cold noodles and Stir-fried Purslane with Eggs. You also want to eat naan, but it's too plain by itself, so you'd like one that's stir-fried with vegetables. You also want to cancel the Clear Broth Beef Noodles that you ordered earlier.

## Context

- Current time: `2025-08-20 17:29:18`
- Domain: `delivery`

## Requirements / Rubrics

- Successfully cancelled the Clear Broth Beef Noodles order from Ma Changhe Northwest Beef Noodles (Desiqin Branch), the status of order with order_id 30711002O01 should be cancelled
- The delivery address for the Xinjiang cuisine order should be Xiangzhang Garden, 168 Xiangzhang Road, Yuhua District, Changsha, Hunan Province
- The estimated delivery time for the Xinjiang cuisine order should be around 19:00 on 2025-08-20
- The Xinjiang cuisine order should include Stir-fried Cabbage with Naan, quantity of 1
- The total number of items in the Xinjiang cuisine order should be 3

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
