# VitaBench Task: Cross Domain #93

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You accidentally made your girlfriend angry, and now you want to order a high-end cake delivered to your home to appease her. The more expensive the better, but don't exceed 500 yuan - something in the 400 range would be good. The cake must be Sugar-Free, and try to have it delivered before 4 PM. But that alone isn't enough - your girlfriend especially wants to take a Yalu River Cruise in Dandong. You plan to take her on a weekend getaway to Dandong. You want to book cruise tickets for the two of you, and you're checking the weather from the 19th to the 25th to book for the day with the highest temperature. For the night before the cruise, you want to book a hotel near the dock, within about 3 kilometers, with a River View Room. The price should not be less than 1000 yuan.

## Context

- Current time: `2026-07-15 14:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The cake price should be between 400-500 yuan
- The cake must be Sugar-Free type
- The cake delivery address should be Room 1103, Building B2, 700 Yishan Road, Xuhui District, Shanghai
- The estimated cake delivery time should be before 2026-07-15 16:00
- The scenic spot order should be for Yalu River Cruise tickets
- Check the weather in Dandong from July 19, 2026 to July 25, 2026, and choose the day with the highest temperature to order cruise tickets, therefore should order tickets for July 25, 2026 (temperature 25-34℃)
- The number of cruise tickets ordered should be 2
- The hotel ordered should be within 3 kilometers (inclusive) from the Yalu River Tourist Dock, Zhenxing District, Dandong, Liaoning Province
- The hotel room type ordered should be River View Room
- The hotel room price should be greater than or equal to 1000 yuan
- Based on the cruise ticket date (July 25, 2026), confirm the hotel check-in date, which should be July 24, 2026

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
