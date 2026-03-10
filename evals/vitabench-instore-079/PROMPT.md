# VitaBench Task: Instore #79

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You've recently become interested in close-up magic and decided to find a well-reviewed studio near your home for systematic learning. You want to purchase a package suitable for zero foundation beginners that includes some magic props. After placing your order, you schedule an appointment for 9 AM tomorrow. Suddenly, you remember that you haven't used the foot therapy package you bought last week, so you plan to go directly to that massage shop after learning magic. However, your shoulders have been very uncomfortable due to recent overtime work, so you decide to cancel the previous foot therapy package now and purchase a shoulder and neck massage package instead. You believe you'll definitely finish the magic lesson and reach the massage shop three hours later, so you schedule the massage for that time.

## Context

- Current time: `2024-10-11 15:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The magic learning studio should be within 3000m (inclusive) of Room 1803, Unit 1, Building 2, Lushang Olympic City, 14677 Jingshi Road, Lixia District, Jinan
- The magic learning studio should be a top rated merchant
- The ordered item at the magic learning studio should be a zero foundation beginner learning package
- The ordered item at the magic learning studio should include magic props
- The reserved magic learning studio should be Jinan Magic Association Training Center
- The reservation time for the magic learning studio should be 2024-10-12 09:00
- The number of people for the magic learning studio reservation should be 1
- The status of the foot therapy package order should be cancelled
- The foot therapy package was ordered from Xiushentang premium massage, so the massage shop order should be from Xiushentang premium massage
- The ordered item at the massage shop should be a shoulder and neck massage package
- The reserved massage shop should be Xiushentang premium massage
- The reservation time for the massage shop should be 2024-10-12 12:00
- The number of people for the massage shop reservation should be 1

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
