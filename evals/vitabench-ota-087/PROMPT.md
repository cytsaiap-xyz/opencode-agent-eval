# VitaBench Task: Ota #87

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You have a special interest in geological wonders, and although Shaoguan's Danxia Mountain is so close, you haven't experienced it yet. Your boyfriend said he has weekends off recently, so you two are planning to visit Danxia Mountain in Shaoguan on the 14th and 15th to see the Danxia landform. According to travel guides, one day might not be enough to explore Danxia Mountain completely, so you want to check if there are two-day tickets available; if yes, you'll buy two two-day tickets; if not, you'll buy two tickets for the 14th first, and then decide whether to continue visiting on the second day after finishing on the 14th. After purchasing, you need to confirm if the number of tickets is correct. You went to Shaoguan on business last month and thought the arrival time of that train was very convenient, so you want to check your previous train ticket order and buy tickets for the same train on the 14th. You also plan to check the distance from the railway station to Danxia Mountain to better plan your trip.

## Context

- Current time: `2025-06-07 11:13:25`
- Domain: `ota`

## Requirements / Rubrics

- Need to check if Danxia Mountain Scenic Area has two-day tickets available, the result shows no tickets available for 2025-06-14, so adult tickets should be purchased instead
- The ticket date for the admission ticket order should be June 14, 2025
- The quantity for the admission ticket order should be 2
- The scenic spot in the admission ticket order must be Danxia Mountain Scenic Area
- Need to check last month's train ticket order record to Shaoguan, the result shows: Order ID S17557516207048450_O00001, store_id S17557516207048450_T00010, Train D7541, departing at 08:45 and arriving at 10:23, Second Class Seat for 85 yuan
- The train number in the train ticket order must be Train D7541
- The seat type in the train ticket order must be Second Class Seat
- The date in the train ticket order must be June 14, 2025
- The quantity for the train ticket order should be 2
- Must check the distance from the railway station (Shaoguan Railway Station, Zhanqian Road, Zhenjiang District, Shaoguan City, Guangdong Province) to Danxia Mountain (Danxia Mountain Scenic Area, Renhua County, Shaoguan City, Guangdong Province), the result is approximately 20 kilometers

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
