# VitaBench Task: Cross Domain #57

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Tomorrow is your last day, and you want to go to Tianci Ecological Garden in Chongqing to relax in the hot springs. You're concerned about catching a chill after soaking in the hot springs, so you want to buy a warm pink bathrobe to have on hand. However, you still need to go to the office tomorrow to handle some work handovers, so you'd prefer to have it delivered directly to your office in the morning, and then you'll go straight to the high-speed rail station from there. You also want to check the weather forecast for Chongqing tomorrow - if it's around 10 degrees, you'll just enjoy the hot springs, but if it's below freezing, you want to see if the Hot Spring Resort offers any other wellness packages. You want to purchase the package now. You also want to find a hotel near the resort to stay for one night, with requirements of 4.5 stars or above, no more than 500m from the resort, and a king room will be fine.

## Context

- Current time: `2025-01-18 19:22:13`
- Domain: `cross_domain`

## Requirements / Rubrics

- Items in the delivery order should be pink
- Items in the delivery order should be thermal
- The delivery time of the order should be between 09:30:00-10:30:00 on January 19, 2025
- The delivery address should be North Building, Sichuan Investment Tower, 112 Tiantai Road, Wuhou District, Chengdu, Sichuan Province
- According to the query, the temperature in Chongqing on January 19, 2025 will be 2°C-8°C, so the package purchased at the scenic spot is for hot spring only
- The date for the scenic spot reservation is January 19, 2025
- The merchant in the scenic spot order should be Tianci Hot Spring Resort
- The distance between the booked hotel and Tianci Hot Spring Resort Hotel inside Tianci Hot Spring Resort, Beibei District, Chongqing should be less than or equal to 500m
- The rating of the booked hotel should be greater than or equal to 4.5
- The room type in the hotel order should be a king room
- The date of the hotel reservation should be January 19, 2025

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
