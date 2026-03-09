# VitaBench Task: Instore #71

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You really enjoy playing real-life CS, but the venue you went to last time was too small. This time you're going with your friends, and you want to find a large real-life CS base, not more than 5 kilometers from your home. There are 8 of you, so you want to purchase a team combat package that includes equipment rental and venue usage. After finding a suitable base and package, you can place an order and book a slot for today at 10 AM. After the game, you'll definitely be hungry, so you also want to check if there are any Hui-friendly restaurants within 1 kilometer of the base with a rating above 4.0. If there is one, you want to book a table for 1 PM to have a meal with your friends. If not, you won't dine together and everyone will go home separately, while you'll go eat your usual chicken leg rice.

## Context

- Current time: `2024-09-28 08:45:00`
- Domain: `instore`

## Requirements / Rubrics

- The base for real-life CS orders should be a large-scale base
- The base for real-life CS orders must be within 5 kilometers (including 5 kilometers) of the Military Sports Academy Community, 80m Southwest of Taichang Street and Taisheng Road Intersection, Tianhe District, Guangzhou
- The product in real-life CS orders should be a Team Combat Package
- The product in real-life CS orders should be an 8-Person package
- The product in real-life CS orders should be available on weekends
- The product in real-life CS orders must include equipment usage
- The product in real-life CS orders must include venue usage
- The CS base to be reserved should be Extreme Battlefield Real-life CS Base
- The number of people for the CS base reservation should be 8
- The reservation time for the CS base should be 2024-09-28 at 10:00:00
- Query whether there are Halal restaurants within 1 kilometer (including 1 kilometer) of Extreme Battlefield Real-life CS Base, 233 Tianhe North Road, Tianhe District, Guangzhou, and if so, make a reservation. The query result is positive, so the reservation is made for a restaurant within 1 kilometer (including 1 kilometer) of Extreme Battlefield Real-life CS Base
- The reserved restaurant should be a Halal Restaurant
- The rating of the reserved restaurant should be 4.0 or above
- The restaurant reservation time should be 2024-09-28 13:00:00
- The number of people for the restaurant reservation should be 8

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
