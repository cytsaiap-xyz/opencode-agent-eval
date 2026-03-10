# VitaBench Task: Instore #27

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You plan to take your child swimming tomorrow. If it doesn't rain, you will buy tickets for an outdoor swimming pool; if it rains, you will buy tickets for an indoor swimming pool. The chosen swimming pool must have parent-child packages that allow at least 2 hours of swimming time, and the swimming pool must have a Parking Lot. At noon, you plan to have lunch near the swimming pool before returning home. Your child wants to eat at Yonghe King, and the restaurant should be no more than 1 kilometer away so you can walk there directly and then return to the Parking Lot to get your car. Once you've decided on the restaurant, you plan to purchase two different Single Person Meals in advance, so tomorrow you can just go and redeem the vouchers.

## Context

- Current time: `2025-07-19 16:12:22`
- Domain: `instore`

## Requirements / Rubrics

- Due to tomorrow's (July 20, 2025) light rain weather, the swimming pool ordered must be an indoor swimming pool
- The swimming pool ordered must have a parking lot
- The swimming pool order must be for a parent-child package
- The swimming pool order must include at least 2 hours of swimming time
- The restaurant ordered should be Yonghe King
- The restaurant should be within 1 kilometer (inclusive) of Anhui Province Sports Center Indoor Swimming Pool, 188 Qianshan Road, Shushan District, Hefei City, Anhui Province
- The restaurant order must include two different single-person meals
- The restaurant order must be valid for use on July 20, 2025 (Sunday)

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
