# VitaBench Task: Instore #74

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

My parents are coming to Shanghai for a rare visit, and I want to find a nice place to have a good meal with them. Your budget is within 200 yuan per person for the meal, so let's choose a Huaiyang cuisine restaurant. Since they're coming on National Day, I'm wondering if the restaurant has any special National Day discount packages. If they do, let's book one of those; if not, just order a set meal for 3-4 people, and make a reservation for 11:30 AM that day. After the meal, you want to buy your parents a couples massage package at the massage place you frequently visit, hoping to help them relieve the discomfort from their long journey.

## Context

- Current time: `2023-09-28 14:20:00`
- Domain: `instore`

## Requirements / Rubrics

- The restaurant ordered should be a Huaiyang cuisine restaurant
- Check if the restaurant offers special National Day discount set menus, the result is yes, so the ordered items should be National Day special discount set menus
- The total price of items in the restaurant order should be less than or equal to 600 yuan
- The reserved restaurant should be Song He Lou (Xujiahui Branch)
- The restaurant reservation time is 2023-10-01 11:30:00
- The number of people for the restaurant reservation is 3
- The massage shop ordered should be Royal Foot Massage (Yishan Road Branch)
- The ordered item at the massage shop should be a couples massage package

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
