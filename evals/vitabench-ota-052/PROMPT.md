# VitaBench Task: Ota #52

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You need to go to Shaoyang for a training course the week after next and stay there for a week. The training location is near the Shaoyang Intermediate People's Court, so choose a hotel nearby. The budget should be in line with your usual accommodation standards, and book a room from next Monday to next Saturday. The hotel should include laundry and ironing services and provide breakfast. Once you find a suitable option, make the reservation. Since one day in the middle of the week is New Year's Day, check the weather for that day: if the weather is good, buy tickets to Baishuidong Scenic Area; if the weather is not suitable for outdoor activities, look up some indoor attractions in Shaoyang.

## Context

- Current time: `2024-12-19 11:37:40`
- Domain: `ota`

## Requirements / Rubrics

- The hotel should be within 5km (inclusive) of the Shaoyang Intermediate People's Court
- The hotel price should be between 500-1000 yuan per night
- The booked hotel must provide Ironing Service
- The booked hotel must provide Laundry Service
- The booked hotel must provide breakfast
- The hotel reservation dates should be December 30, 2024, December 31, 2024, January 01, 2025, January 02, 2025, January 03, 2025, January 04, 2025,
- Due to the New Year's Day (January 01, 2025) weather (light rain) being unsuitable for outdoor activities, tickets to Baishuidong Scenic Area should not be purchased, but tickets for indoor attractions should be purchased instead
- The purchased tickets should be for January 01, 2025

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
