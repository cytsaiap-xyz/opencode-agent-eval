# VitaBench Task: Instore #23

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You want to get your nails done and hope to find a nail salon with suitable prices based on your previous consumption habits. The salon must have high ratings and practice One-customer-one-disinfection. You've been getting Solid Color Nail Art before but are a bit tired of it. This time, you want to learn about the salon's nail art packages with designs. You want to get a French Constructed Nail Art. After purchasing a voucher, you want to make an appointment for tomorrow at 11 AM. You'll be going on a business trip tomorrow afternoon, so after getting your nails done, you want to find a place to eat that's not too far away, within 1km of the nail salon, so you can head directly to catch your high-speed train afterward. You'd like to have hot pot to warm yourself up, specifically Old Beijing Copper Pot Hot Pot. You want to order a Single Person Meal, but you don't eat spicy food (Non-spicy).

## Context

- Current time: `2025-05-06 09:56:41`
- Domain: `instore`

## Requirements / Rubrics

- The price of ordered items at the nail salon should be within the range of 150-280 yuan (inclusive)
- The rating of the ordered nail salon must be 4.2 or above
- The ordered nail salon must provide One-customer-one-disinfection service
- The ordered nail salon item cannot be a Solid Color Nail Art Package
- The ordered nail salon item should be a nail art package with design
- The ordered nail salon item should be a French Manicure Package
- The ordered nail salon item should include Constructed Nail Art service
- The reserved nail salon should be Elegant Fingertip Nail Salon
- The number of people for the nail salon reservation is 1
- The reservation time for the nail salon is 2025-05-07 11:00:00
- The hot pot restaurant should be Old Beijing Copper Pot Hot Pot
- The hot pot restaurant must be within 1km (inclusive) of Elegant Fingertip Nail Salon, No.170 Xuefu Road, Nangang District, Harbin
- The ordered item at the hot pot restaurant should be a Single Person Meal
- The ordered hot pot package should be Non-spicy

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
