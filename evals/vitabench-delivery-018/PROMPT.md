# VitaBench Task: Delivery #18

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

It's mealtime, and you want to order duck collarbone with your Cantonese colleague from a nearby restaurant so you won't have to wait too long. This colleague is picky about food, so you need to choose a clay pot rice for his lunch. For your own lunch, you plan to order your regular Bajibaji Dry Pot Braised Rice, and this time you want it with crispy pork and beef.

## Context

- Current time: `2025-10-30 11:24:32`
- Domain: `delivery`

## Requirements / Rubrics

- The duck collarbone order delivery address should be Building A, Yonghe Longzihu Plaza, Boxue Road Street, Jinshui District, Zhengzhou City, Henan Province
- The duck collarbone order delivery time should be around 2025-10-30 12:00:00
- When selecting duck collarbone products, choose stores near the company to ensure shorter delivery distance
- The clay pot rice order delivery address should be Building A, Yonghe Longzihu Plaza, No. 197 Ping'an Avenue, Jinshui District, Zhengzhou City, Henan Province
- The clay pot rice order delivery time should be around 2025-10-30 12:00:00
- When choosing clay pot rice for Guangdong colleagues, select Cantonese-style products to meet their discerning taste requirements
- The dry pot braised rice order delivery address should be Building A, Yonghe Longzihu Plaza, Boxue Road Street, Jinshui District, Zhengzhou City, Henan Province
- The dry pot braised rice order delivery time should be around 2025-10-30 12:00:00
- When choosing dry pot braised rice for personal lunch, select from the frequently visited Bajibaji Dry Pot Braised Rice (Longzihu Branch)
- The personal lunch dry pot braised rice must include both crispy pork and beef toppings

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
