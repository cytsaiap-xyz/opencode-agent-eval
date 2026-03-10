# VitaBench Task: Instore #94

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

This Saturday, you plan to have a health-focused gathering with two friends who also love yoga. At noon, you're planning to go to a vegetarian buffet restaurant. The distance doesn't matter, but it must have an outdoor dining area. Once you find a suitable restaurant, buy a single-person voucher that doesn't exceed 200 yuan, and reserve a table for three at 12 noon. After enjoying the vegetarian meal, you all plan to practice yoga together, so you're looking for a yoga studio within 3 kilometers of the restaurant. You want to purchase a small group class for three so that there won't be any strangers making things awkward. If that package isn't available, you'll settle for a group class with no more than 5 people - having fewer strangers is acceptable too.

## Context

- Current time: `2025-11-06 19:45:00`
- Domain: `instore`

## Requirements / Rubrics

- The restaurant ordered should be a buffet restaurant
- The restaurant ordered should be a vegetarian restaurant
- The restaurant ordered should have outdoor dining areas
- The total price of the items ordered at the restaurant should be less than or equal to 200 yuan
- The restaurant order should be for a single-person voucher
- The quantity of items ordered from the restaurant should be 1
- The restaurant reservation should be at Qinghe Vegetarian Buffet Restaurant
- The restaurant reservation time should be 2025-11-08 12:00:00
- The number of people for the restaurant reservation should be 3
- The yoga center ordered should be within 3km (including 3km) from Qinghe Vegetarian Buffet Restaurant, 3rd Floor, Green Plaza, 156 Kaiyuan Avenue, Luolong District, Luoyang
- Check if the qualified yoga center offers Yoga Small Group Class (3 People), the result is yes, so the ordered item should be a package for a 3-person small group class

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
