# VitaBench Task: Ota #22

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're going on a business trip to Hefei next Wednesday and want to book your round-trip tickets now. You need to check the weather that day - if there's thundershowers or anything that might affect flights, taking the train would be more reliable. By the way, you prefer travel time to be within 5 hours 07 minutes. Once you've decided on the transportation method, you want to book the tickets as soon as possible. You plan to explore Hefei on Saturday and return on Sunday afternoon. For your return journey, you'd like to arrive in Xiamen around 5pm, and you're flexible about the transportation method as long as the timing works. Also, you've heard that the Hui-style architecture at Sanhe Ancient Town is quite distinctive, so you're considering visiting there on Saturday and need to purchase tickets in advance.

## Context

- Current time: `2026-08-23 11:21:53`
- Domain: `ota`

## Requirements / Rubrics

- Outbound travel date is August 26, 2026, when Hefei weather will be thundershowers, so train transportation should be chosen, requiring train ticket purchase
- Outbound train journey should not exceed 5 hours
- Outbound train ticket should be from Xiamen to Hefei
- Return date should be August 30, 2026
- Train tickets departing from Hefei and arriving in Xiamen around 17:00 on August 30, 2026 are sold out, so air tickets should be purchased for the return journey
- Return flight arrival time should be around 17:00 on August 30, 2026
- Return flight should be from Hefei to Xiamen
- Attraction order should be for Sanhe Ancient Town tickets
- Attraction tickets should be used on August 29, 2026

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
