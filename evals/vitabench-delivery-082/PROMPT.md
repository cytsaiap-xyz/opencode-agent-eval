# VitaBench Task: Delivery #82

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You and your roommate have agreed to work on assignments together in your dorm from 3 PM to 5 PM today. The assignments are quite challenging, and you need your roommate's help, so you want to treat them to lunch as a thank you gesture. You plan to order a pork trotter meal set for yourself and a Fresh Shrimp and Crab Roe Wonton from the nearest place for your roommate. Both of you enjoy spicy food; you prefer dishes with more red chili oil, while your roommate prefers those with a stronger pepper flavor. Since your roommate is lactose intolerant, you'll also order a lime drink with winter melon flavor, without ice. The delivery should arrive when you're working on the assignments.

## Context

- Current time: `2025-04-18 11:36:32`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the user's pork trotter set meal order should be Building 6, Student Apartment, Jiaojiang Campus of Taizhou University, Jiaojiang District, Taizhou City, Zhejiang Province
- The delivery time for the user's pork trotter set meal order should be around 2025-04-18 12:00:00
- The user's pork trotter set meal order should select products with stronger spicy red oil flavor
- The delivery address for the roommate's Fresh Shrimp and Crab Roe Wonton order should be Building 6, Student Apartment, Jiaojiang Campus of Taizhou University, Jiaojiang District, Taizhou City, Zhejiang Province
- The delivery time for the roommate's Fresh Shrimp and Crab Roe Wonton order should be around 2025-04-18 12:00:00
- The roommate's Fresh Shrimp and Crab Roe Wonton order should select the merchant closest to the user's location, which is Yuan Ji Cloud Dumplings (Zhabridge Store)
- The roommate's Fresh Shrimp and Crab Roe Wonton order should select a flavor with prominent numbing spiciness
- The delivery address for the beverage order should be Building 6, Student Apartment, Jiaojiang Campus of Taizhou University, Jiaojiang District, Taizhou City, Zhejiang Province
- The delivery time for the beverage order should be around 2025-04-18 15:00:00
- The beverage order should select drinks without dairy products
- The specification for the beverage order should be no ice

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
