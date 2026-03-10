# VitaBench Task: Instore #67

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You want to spend a cozy Saturday evening with your partner, so you decide to find a private cinema. You want to choose a place with a romantic atmosphere and private rooms. You plan to go at 6:00 PM and finish by 9:00 PM, so you need to find a couple's package with suitable timing. Preferably, the package should include snacks and drinks, but the snacks shouldn't be too sweet, and the drinks shouldn't contain caffeine as that would affect your sleep. Then you want to find a flower shop within 1km of the cinema that sells blue roses, and pre-order a bouquet package to pick up at 5:30 PM the next day to surprise your boyfriend. After the movie, you also want to have dinner, so you're looking for a Korean restaurant within 2km of the cinema with a night view to order a meal for two. Your boyfriend loves beef, and the price should not exceed 160 yuan.

## Context

- Current time: `2025-04-04 17:45:00`
- Domain: `instore`

## Requirements / Rubrics

- Private cinemas should have a romantic environment
- Private cinemas should have private rooms
- Orders at private cinemas should be couple packages
- Orders at private cinemas should be for the 18:00-21:00 time slot
- Package orders at private cinemas should include snacks
- Package orders at private cinemas should include drinks
- Package orders at private cinemas should not contain caffeine
- Products included in private cinema orders should be low in sugar
- The flower shop should be no more than 1km (inclusive) from Starlight Private Cinema, Section B2, Xinghai Square, Shahekou District, Dalian
- Orders at the flower shop should be blue roses
- Orders at the flower shop should be bouquet packages
- The flower shop should be open on Saturdays
- The reserved flower shop should be Blue Rose Flower Shop
- The flower shop reservation time should be 17:30:00 on 2025-04-05
- The flower shop reservation should be for 1 person
- The restaurant should be a Korean cuisine restaurant
- The restaurant should be no more than 2km (inclusive) from Starlight Private Cinema, Section B2, Xinghai Square, Shahekou District, Dalian
- The restaurant should offer a night view
- Orders at the restaurant should be packages for two
- The ordered restaurant package should include beef
- The restaurant order price should not exceed 160 yuan (inclusive)

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
