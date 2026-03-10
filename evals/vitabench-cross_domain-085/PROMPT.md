# VitaBench Task: Cross Domain #85

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You and your blind date are going to travel to Suzhou tomorrow. He has already booked the attractions and hotel. Now you want to see what other special experiences are available. Tomorrow evening, you want to experience being a Qinghan lady, so you're looking for a Hanfu shop within a few hundred meters of Xiyuan Temple, where you can purchase a couple package including styling and photography. You also want to find a place to listen to Suzhou Pingtan, but you two only have time from 4:00 PM to 7:30 PM the day after tomorrow. You're wondering if there's a restaurant offering Suzhou cuisine with free Pingtan performances where you can order a meal for two and preferably reserve a table for 4:00 PM. You've been on a diet for a long time for this trip, so you want to check when was the last time you had milk tea. If it's been over a month, you want to reward yourself by trying a local Suzhou milk tea brand.

## Context

- Current time: `2025-09-19 10:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The Hanfu store should be within 1km of Xiyuan Temple
- The ordered product from the Hanfu store should be a couple photography package including styling
- The ordered restaurant should mainly serve Suzhou Cuisine
- The ordered restaurant should offer free Pingtan performance
- The ordered restaurant should provide free Pingtan performance between 4:00 PM and 7:30 PM
- The restaurant order should be for one couple meal, not two individual meals
- The restaurant reservation is for Songhelou Restaurant
- The restaurant reservation time is September 21, 2025, at 16:00
- The restaurant reservation is for 2 people
- The last time milk tea was ordered was July 10, 2025
- The last milk tea order was more than one month before September 20, 2025

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
