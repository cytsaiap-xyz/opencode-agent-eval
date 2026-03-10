# VitaBench Task: Instore #77

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You and your boyfriend want to find a Xinjiang restaurant suitable for photo check-in for dinner. If the suitable restaurant is more than 1 kilometer away from home, you want to make a reservation for 5 PM in advance to avoid waiting in line at the restaurant. If the distance is within 1 kilometer, it doesn't matter and you can just walk there. You hope to buy a meal for two that includes alcoholic beverages, and the set meal should include Spicy Lamb Hoof and Hand-Grabbed Rice. After dinner, you want to find a Claw Machine place within 2 kilometers of the restaurant. You want to enjoy the claw machine experience thoroughly but are concerned about the value for money of the packages. If the 200 Game Coins Package is only 10 yuan more expensive than the 100 Game Coins Package, you'll buy the former; otherwise, you'll choose the cheaper one.

## Context

- Current time: `2024-05-25 16:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The Xinjiang restaurant order should be suitable for photo check-in
- The Xinjiang restaurant order should be a two-person set that includes alcoholic beverages, Spicy Lamb Hoof, and Hand-Grabbed Rice
- The distance from the claw machine store to Tianshan Style Xinjiang Cuisine, 1st Floor, Building A, Triumph Plaza, No. 198 Zhongzhou Middle Road, Xigong District, Luoyang should be within 2km (including 2km)
- In the claw machine store, the 200 Game Coins Package costs only 10 yuan more than the 100 Game Coins Package, so the 200 Game Coins Package should be purchased
- The distance from the Xinjiang restaurant to Room 1503, Building B, Triumph Plaza, No. 229 Zhongzhou Middle Road, Xigong District, Luoyang is within 1km (including 1km), so no reservation is needed

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
