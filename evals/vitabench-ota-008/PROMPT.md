# VitaBench Task: Ota #8

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Next month, you need to go to Linyi for a fruit tree planting technology exchange meeting. The first two days are scheduled for learning sessions. You plan to book a hotel for the nights of the 5th through the 11th at the same hotel, and then return on the morning of the 12th. Staying a few extra days will allow you to exchange experiences with other colleagues. Choose the hotel category you most frequently search for. Since you plan to drive there, the hotel needs to have a Parking lot, and because of your extended stay, the hotel must also provide Laundry service. As Women's Day happens to fall during that period, you plan to visit a friend in Yuncheng whom you haven't seen for a long time on Women's Day, and you want to check the weather conditions for that day. If the weather is nice, you'll go to the Rainbow Salt Lake Scenic Area with her; if the weather is poor, visiting the Li Family Courtyard would also be a good choice. She definitely won't let you pay for the meal when you meet, so you plan to buy the tickets now to avoid competing to pay the bill later.

## Context

- Current time: `2025-02-19 11:17:35`
- Domain: `ota`

## Requirements / Rubrics

- The hotel booked is in Linyi area
- The hotel booking dates are March 5, 2025, March 6, 2025, March 7, 2025, March 8, 2025, March 9, 2025, March 10, 2025, March 11, 2025
- The booked hotel must include laundry service
- The booked hotel must include parking lot
- The booked hotel should be in the category that the user most frequently searches for (by checking user profile, it's Budget hotel)
- Check the weather in Yuncheng on Women's Day (March 8, 2025), (sunny, temperature 3-14 degrees Celsius, humidity 58%) the weather condition is good, so the tickets purchased are for Rainbow Salt Lake Scenic Area
- The purchase date for the tickets is March 8, 2025
- The quantity of tickets purchased is 2
- The ticket order only includes Adult ticket

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
