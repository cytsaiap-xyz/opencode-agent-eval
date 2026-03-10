# VitaBench Task: Cross Domain #19

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're working in the office when you suddenly discover your Bluetooth earphones are broken, but you have a very important online meeting in an hour that requires Bluetooth earphones. You don't have time to go to a store to pick one out, so you want to quickly get one through Flash Delivery. You're very picky about earphones and think ones over 2,000 yuan should be of better quality. In the evening, you need to negotiate with an important client and want to find a highly-rated Business SPA club, then make a reservation for a Private Room at 7 o'clock. Also, you need to go on a business trip to Zhengzhou tomorrow and want to check if there are any flights departing from Yiwu International Airport before 10 AM. If the distance from your home to Yiwu International Airport is less than 50km, you'll go there yourself; otherwise, you'll need to take a High-speed Rail from Jinhua to Yiwu. If you need to take the High-speed Rail, then postpone the flight to noon. You need to purchase the tickets now.

## Context

- Current time: `2025-03-03 14:00:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The Bluetooth earphones ordered should be priced above 2,000 yuan
- The expected delivery time for the Bluetooth earphones is March 3, 2025, 14:00-15:00
- The delivery address for the Bluetooth earphones is 15th Floor, Building B, Jinhua Commercial Center, 399 Bayi South Street, Wucheng District, Jinhua, Zhejiang Province
- The rating of the reserved Business SPA club should be 4.0 or above
- The Business SPA club reservation is for 2 people
- The Business SPA club reservation time is March 3, 2025, 19:00
- The agent needs to check the distance between Jindu Garden, 1229 Danxi Road, Wucheng District, Jinhua, Zhejiang Province and Yiwu International Airport, 201 Minhang Road, Yiwu, Zhejiang Province. The query result shows that the distance between the two locations does not exceed 50km
- Order flight information for flights departing from Yiwu to Zhengzhou before 10:00 on March 4, 2025

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
