# VitaBench Task: Delivery #37

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You need to leave for work at the building at 8 PM, and now you need to order a Chicken claypot for delivery, complete with main course, rice and dipping sauce. Since it's late at night, you don't want anything too greasy. You only need half an hour to eat, and another half hour to digest.

## Context

- Current time: `2025-04-11 17:45:00`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the chicken claypot order should be Jinzhai Residential Area near Machine Tool Factory No.3, Jinwa Road, east of Dashuying Interchange, Guandu District, Kunming City, Yunnan Province
- The delivery time for the chicken claypot order should be before 2025-04-11 19:00:00 to ensure the user has enough time for dining and digestion
- The ordered claypot dish must contain chicken as the main ingredient
- The ordered claypot dish must include rice or other staple food to ensure a complete nutritional balance
- The ordered claypot dish should have a light, non-greasy flavor to meet the user's dietary restriction of avoiding greasy food
- The ordered claypot dish must come with dipping sauce to satisfy the user's requirement for condiments

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
