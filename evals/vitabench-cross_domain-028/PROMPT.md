# VitaBench Task: Cross Domain #28

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your team has finally made it to the national finals. As the team manager, you need to arrange various logistics for the offline competition. The event is scheduled from February 11th to 15th at the Hangzhou Sports Center, with matches running from 3:30 PM to 6:30 PM daily. You need to find a suitable moxibustion center for the players to warm up before the competition, getting therapy on the morning of the 11th to ensure everyone is in optimal competitive condition. It must be Suspended Moxibustion, for at least 60 minutes but not exceeding 90 minutes. If appropriate, you should purchase a package for five people right away. Considering that training may continue until late each day, you also need to prepare some high-quality late-night food delivery that must be healthy and nutritious, preferably low-sodium light meals for individuals that won't affect reaction speed. Order for five people, and if available, you need to place the first day's order in advance.

## Context

- Current time: `2025-02-09 17:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The ordered moxibustion package duration must be between 60-90 minutes
- The moxibustion package should be exactly enough for 5 people, no more no less
- The moxibustion package must be a suspended moxibustion service
- The delivery restaurant must support night delivery
- The delivery restaurant should have a rating of 4.5 or above
- The ordered delivery food must be low-sodium light food
- The ordered delivery food must not affect reaction speed, and cannot contain alcohol or irritating ingredients
- The delivery order needs to include 5 individual meals
- The delivery address should be Hangzhou Atour Hotel (Sports Center Branch), 3800 Moganshan Road, Gongshu District, Hangzhou

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
