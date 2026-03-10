# VitaBench Task: Cross Domain #88

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You and your wife are planning to visit Chengdu for a little over a week. You want to check when your previously booked flight takes off the day after tomorrow. You're considering what to have for your first meal upon arrival and what kind of package deal would be best to purchase. You've heard that there's a place called 'Impression' in Chengdu where you can enjoy good food and also get a relaxing massage. Ideally, you'd prefer it to be near the airport, but somewhere further would be acceptable too. Your manager just informed you that you need to work an extra day after tomorrow, so it seems you'll have to cancel your original flight tickets and rebook a red-eye flight for Saturday instead. You suddenly remembered that Mid-Autumn Festival is approaching, so you need to make a reservation at a restaurant for 7:00 PM that day to have dinner with both sets of parents for a family reunion. Your parents live near Park Mansion, and either Hui cuisine or Cantonese cuisine would be suitable.

## Context

- Current time: `2024-09-05 15:24:43`
- Domain: `cross_domain`

## Requirements / Rubrics

- The massage shop should be within 5.5km of Chengdu Shuangliu International Airport, Shuangliu District, Chengdu, Sichuan Province
- The order at the massage shop should include food items
- The order at the massage shop should include massage service
- The order at the massage shop should be suitable for 2 people
- Cancel the flight ticket order (flight number CA1832) on September 7, 2024 from historical orders
- The date for flight ticket booking should be September 7, 2024
- The booked flight should be a Red-Eye Flight (flight MU2354)
- The number of flight tickets to book should be 2
- The reserved restaurant should be within 5.5km of CR Land Park Mansion, 228 Huaining Road, Shushan District, Hefei, Anhui Province
- The reserved restaurant should serve Hui Cuisine or Cantonese cuisine
- The restaurant reservation time should be 19:00 on September 17, 2024
- The restaurant reservation should be for 6 people

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
