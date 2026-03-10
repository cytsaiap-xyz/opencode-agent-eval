# VitaBench Task: Instore #16

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're planning to play a horror-themed murder mystery game on Friday and want to check if there are any nearby venues that offer carpooling service. You want to buy a package that includes both the script and a tea set, but it can't be a script you've played before. These games usually take a long time, and you're worried you might get hungry halfway through. You want to check the weather for that day - if the highest temperature exceeds 30 degrees, you plan to buy a refreshing cold noodle set within 500m of your home and take it as takeaway when you leave on Friday. Otherwise, you'll buy some bread to bring along - the whole wheat toast you bought before was good, and with coupons it's quite economical, so you can buy one first. Oh, and for the cold noodles, you don't want ones With Apple Strips, as they don't feel authentic.

## Context

- Current time: `2025-09-10 14:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The ordered murder mystery game set must include carpooling service
- The ordered murder mystery game set must include a script
- The ordered murder mystery game set must include script and tea
- The ordered murder mystery game must be horror themed
- The query shows that Friday (2025-09-12) has a high temperature of 32 degrees, exceeding 30 degrees, so the order should be placed at a cold noodle restaurant
- The ordered cold noodle restaurant is within 500m of home
- The ordered cold noodles must not contain apple strips
- The ordered cold noodles must be available for takeaway

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
