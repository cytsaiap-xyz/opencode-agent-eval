# VitaBench Task: Ota #43

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Next month, the 10th is your 10th wedding anniversary with your wife. Daocheng Yading was where your relationship began, and you want to take this opportunity to revisit those beautiful memories. You plan to travel for five days and four nights, and prefer to fly, though you don't want a red-eye flight. You need to buy round-trip tickets now, any class is fine as long as seats are available. You hope to arrive two days before your anniversary so you can make special arrangements for the actual day. For accommodation, you're looking for a hotel with Tibetan Characteristics to experience the local Kamba Culture atmosphere, and a king room would be sufficient. You also want to arrange tickets for Daocheng Yading Scenic Area in advance, for the second day of your trip. Since it's a plateau environment, a package that includes an oxygen cylinder would be more suitable. Additionally, you want to check the weather forecast for those days, and if there's a chance of rain, a package that includes rain gear would be even more thoughtful.

## Context

- Current time: `2025-07-21 16:23:06`
- Domain: `ota`

## Requirements / Rubrics

- The anniversary is on August 10, 2025, and the user wishes to arrive two days before the anniversary, so the departure flight should be on August 8, 2025
- The departure flight should not be a Red-eye Flight
- The number of departure flight tickets should be 2
- The departure flight should be from Dalian to Daocheng
- The return flight date should be August 12, 2025 
- The return flight should not be a Red-eye Flight
- The number of return flight tickets should be 2
- The return flight should be from Daocheng to Dalian
- The hotel booked should have Tibetan Characteristics
- The hotel room type ordered should be a king room
- The hotel booking should include 4 nights, specifically for August 8, 2025, August 9, 2025, August 10, 2025, and August 11, 2025
- The scenic area ordered should be Daocheng Yading Scenic Area
- The tickets should include Oxygen Cylinder
- The weather in Daocheng on 2025-08-09 will be light rain, so the tickets should include rain gear
- The number of scenic area tickets ordered should be 2
- The date of use for the scenic area tickets should be August 9, 2025

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
