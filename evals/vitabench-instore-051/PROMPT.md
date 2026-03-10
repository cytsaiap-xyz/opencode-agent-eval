# VitaBench Task: Instore #51

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You made your girlfriend angry by playing games yesterday. You want to find a place to learn a guitar piece to cheer her up when you go home. You've only had a little basic experience before, so you plan to buy a one-on-one private improvement course for a single session to focus on learning. You prefer a shop with high ratings as it should be more professional. You also need instrument rental service - you plan to buy a weekly rental package, or if that's not available, a monthly rental package, or as a last resort, a session card would be barely acceptable. You don't want to spend too much money here, so both packages combined should not exceed 600 yuan. You'd like to schedule the learning time for 1 PM today. After learning guitar, you plan to buy a fruit tart for your girlfriend - the package you bought the day before yesterday tasted quite good.

## Context

- Current time: `2024-02-19 11:55:00`
- Domain: `instore`

## Requirements / Rubrics

- The rating of the art training center for placing an order should be 4.0 or above
- The product ordered from the art training center should be one-on-one private lessons
- The product ordered from the art training center should be an advanced course
- The product ordered from the art training center should be a single session
- Should check whether the art training center has guitar weekly rental packages available, and the result is yes, so the product ordered should be a guitar weekly rental package.
- The total price of the product ordered from the art training center should not exceed 600 yuan (including 600 yuan)
- The art training center to be booked should be Musical String Arts Training Center
- The booking time for the art training center should be 2024-02-19 13:00:00
- The number of people for the art training center reservation should be 1
- Need to check order history to find previously visited dessert shops, the result is Bread Talk (Wuyue Plaza Store), so the merchant to order from should be Bread Talk (Wuyue Plaza Store)
- Need to check order history to find products in previous packages, the result is Whole wheat toast + Classic fruit tart, this time buying just a fruit tart, so the product ordered from the bakery should be Classic fruit tart

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
