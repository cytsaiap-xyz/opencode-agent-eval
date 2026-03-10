# VitaBench Task: Cross Domain #77

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You plan to have a fulfilling parent-child day with your child on Saturday. In the morning, you're planning to visit the science museum, which you've heard has many interactive exhibits that combine education with fun, and you want to buy tickets in advance. For lunch, you're looking for a family-friendly restaurant with children's play facilities so you won't need to go elsewhere in the afternoon. At the restaurant, you're particularly interested in their children's set meal, while for yourself, you'd like to try a variety of foods - a buffet would be ideal, but you don't eat seafood. Your child has recently become fascinated with building blocks, and you want to buy a new LEGO toy as a reward for consistently attending extracurricular classes during summer vacation. Your child particularly likes toy cars and previously had an Off-Road Racing Car. The building blocks could be delivered to your home around 5-6 pm, which would be perfect timing to surprise your child when you get home. Oh, and you've decided to make a 12:00 Dining Reservation Service at the family restaurant to avoid weekend queues, though you don't need to purchase the meal vouchers just yet.

## Context

- Current time: `2024-07-11 09:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The attraction ordered should be a science museum
- The attraction ordered should have interactive devices
- The ticket date for the ticket order should be July 13, 2024
- The ticket order should include one Adult Ticket
- The ticket order should include one Child Ticket
- The reserved restaurant should be a Family-Friendly Restaurant
- The reserved restaurant should have Children's Entertainment facilities
- The reserved restaurant should offer Children's Set Meal
- The reserved restaurant should provide buffet with No Seafood
- The restaurant reservation time should be 12:00 on July 13, 2024
- The restaurant reservation should be for 2 people
- The delivery order item should be LEGO toy
- The delivery order item should be Toy Car
- The delivery order item should not be Off-Road Racing Car
- The delivery address should be Hailiang Ocean Joy Plaza, 140 meters southeast of the intersection of Changjiang Road and Diezihudadao, Honggutan District, Nanchang, Jiangxi Province
- The expected delivery time should be before 18:00 on July 13, 2024

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
