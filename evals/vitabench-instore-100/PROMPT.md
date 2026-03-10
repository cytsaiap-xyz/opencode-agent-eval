# VitaBench Task: Instore #100

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Today is Chinese Valentine's Day (Qixi Festival), and your girlfriend can get off work at 5 PM. She said she wants to eat Western food. So you need to quickly check out Western restaurants near your home. The environment should be romantic, with a meal for two, preferably with Champagne included in the package. Make a reservation for 6 PM. After dinner, you plan to find a cat café within 2km of the restaurant. Your girlfriend loves cats, but you have rhinitis, so you're planning to buy her a Cat Cuddling Package for One, letting her enjoy the cats to her heart's content. The package should not include drinks, as you'll both probably be too full to drink more. You plan to use this time to walk around the area and buy your girlfriend a gift.

## Context

- Current time: `2025-08-29 16:23:00`
- Domain: `instore`

## Requirements / Rubrics

- The Western restaurant ordered should have a romantic atmosphere
- The distance from the Western restaurant to Room 1204, Building 3, Canal No.1 Apartment, 128 Xihui Road, Liangxi District, Wuxi should be within 3km (inclusive)
- The Western restaurant order should be a meal for two people, not multiple single-person meals
- The Western restaurant order should include champagne
- The Western restaurant order should be available at 18:00
- The reserved Western restaurant should be Azure Coast Western Restaurant
- The Western restaurant reservation time should be 2025-08-29 18:00:00
- The number of people for the Western restaurant reservation should be 2
- The distance from the cat cafe to Azure Coast Western Restaurant should be within 2km (inclusive)
- The package ordered at the cat cafe should be a single-person meal
- The package ordered at the cat cafe should not include drinks

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
