# VitaBench Task: Instore #75

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

I'm not in a good mood today and want to eat something spicy to vent my frustration. You've heard that Jiangxi cuisine is very spicy, so you want to give it a try. You're planning to purchase a weekday individual package from a restaurant within 3km of the law firm. You hope the package includes a main course, side dishes, and beverages. After ordering, you'd like to reserve a table for noon to avoid waiting in line. In the evening, you don't plan to have dinner but want to get a massage to relax. You've allocated 100 yuan for your personal expenses today and hope to purchase a suitable package that includes shoulder and neck massage.

## Context

- Current time: `2025-03-25 10:46:21`
- Domain: `instore`

## Requirements / Rubrics

- The restaurant ordered should be a Jiangxi cuisine restaurant
- The distance from the ordered restaurant to Room 503, Lawyers Building of Shanxi Provincial Justice Department, No.9 Fuxi Street, Xinghualing District, Taiyuan City should be within 3km (including 3km)
- The ordered items from the restaurant should be available on weekdays
- The ordered items from the restaurant should be an individual package
- The ordered items from the restaurant should include Main course, Side dish and Beverage
- The reserved restaurant should be Gan Xiang Lou
- The restaurant reservation time should be 2025-03-25 12:00:00
- The number of people for the restaurant reservation should be 1
- The ordered item from the massage shop should be a Shoulder and neck massage package
- According to the query, the price of the restaurant ordered item is 52 yuan, so the price of the massage shop ordered item should be less than or equal to 48 yuan

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
