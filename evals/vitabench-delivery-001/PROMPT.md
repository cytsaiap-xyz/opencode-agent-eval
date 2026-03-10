# VitaBench Task: Delivery #1

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

It's pouring rain outside, and your stomach isn't feeling well today. You decide to order some mild rice noodles to your department. Absolutely avoid fried foods and those high in purine. You have surgery at 1:30 PM and need a one-hour nap to ensure you're energized. Eating will only take 30 minutes. You're tired of your usual flavor choices, so you want to try something different this time. Make sure it's not from a delivery-only small operation.

## Context

- Current time: `2025-06-21 11:20:00`
- Domain: `delivery`

## Requirements / Rubrics

- The rice noodle restaurant must support Dine-in available
- The rice noodle product must not be gold soup flavor, as the user is tired of it
- The rice noodle product must not contain fried side dishes or high-purine ingredients (such as offal, seafood soup, etc.)
- The delivery address for the rice noodle order should be Yunnan University Affiliated Hospital, 160 meters southeast of the intersection of Xinmin Lane and Pingzheng Street, Wuhua District, Kunming, Yunnan Province
- The delivery time for the rice noodle order should be around 2025-06-21 12:00:00 to ensure completion of the meal before the afternoon break

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
