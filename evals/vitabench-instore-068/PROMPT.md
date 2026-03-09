# VitaBench Task: Instore #68

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Qingming Festival is coming soon. You, your mother, and sister want to experience making rice balls. You're looking for a bakery close to your home, preferably within three kilometers, and this shop must offer a single-person experience package that includes materials and making instructions. You need to purchase packages for all of you and make a reservation for 3 PM on Qingming Festival. After making the rice balls, you want to take your mother and sister directly out for dinner. You're looking for a Thai restaurant with a terrace, no more than 3km from the bakery, and want to make a reservation for 6 PM. If there's nothing suitable, then book a seafood chain restaurant for the same time, also within 3km from the bakery.

## Context

- Current time: `2023-04-01 15:32:00`
- Domain: `instore`

## Requirements / Rubrics

- The baking workshop order delivery address should be within 3km (inclusive) of Room 1201, Unit 1, Building A3, Xinghai Square, Shahekou District, Dalian
- The ordered item from the baking workshop should be a Single Person Experience package
- The ordered item from the baking workshop should include Materials Provided and Making Instructions
- The quantity of items ordered from the baking workshop should be 3
- The booked baking workshop should be Creative Baking Workshop
- Since the Qingming Festival 2023 falls on 2023-04-05, the baking workshop reservation time should be 2023-04-05 15:00:00
- The number of people for the baking workshop reservation should be 3
- There is a Thai restaurant with terrace within 3km (inclusive) of Creative Baking Workshop, No.18 Xinghai Park East Road, Shahekou District, Dalian, so the restaurant reservation should be for a Thai restaurant
- The reserved Thai restaurant should have a terrace
- The Thai restaurant reservation time should be 2023-04-05 18:00:00
- The number of people for the Thai restaurant reservation should be 3

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
