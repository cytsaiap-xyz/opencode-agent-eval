# VitaBench Task: Ota #69

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

I heard that peach blossoms are in full bloom in Nyingchi recently. You and your child's godmother immediately agreed to plan a five-day trip to Tibet starting on the 25th of this month, bringing both families along to appreciate the local scenery and explore the surrounding areas. There are 7 people in total from both families, all departing from Shenzhen. You need to purchase round-trip flight tickets for everyone on the same flight and in the same class, not earlier than 10 AM because you can't get up earlier. You have a friend in Nyingchi who will lend you a car for self-driving tours. Considering the convenience of self-driving and that your child is sensitive to sleep and might not rest well if changing locations frequently, you've decided to stay all four nights at the same hotel in downtown Nyingchi. You need to book three rooms: two family suites and one twin room. You plan to decide on specific attractions based on the weather. If it doesn't rain on the second day after check-in, you'll purchase tickets to Gala Peach Blossom Village for four adults and three children in advance. If the weather forecast predicts rain, you'll decide on everything else later.

## Context

- Current time: `2025-03-17 17:18:25`
- Domain: `ota`

## Requirements / Rubrics

- The outbound flight order must be from Shenzhen to Nyingchi
- The outbound flight order departure time must be March 25, 2025
- The outbound flight order cabin class should be economy class
- The outbound flight order ticket quantity must be 7
- The outbound flight order must depart after 10:00 AM
- The return flight order must be from Nyingchi to Shenzhen
- The return flight order departure time must be March 29, 2025
- The return flight order cabin class should be economy class
- The return flight order ticket quantity must be 7
- The return flight order must depart after 10:00 AM
- The hotel booked must be located in Nyingchi city area
- There should be only one hotel order
- The hotel order check-in dates must be March 25, 2025, March 26, 2025, March 27, 2025, and March 28, 2025
- The hotel order must book 2 family rooms per night
- The hotel order must book 1 twin room per night
- Weather for March 26 in Nyingchi should be checked, with results showing light rain; no scenic spot tickets need to be booked

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
