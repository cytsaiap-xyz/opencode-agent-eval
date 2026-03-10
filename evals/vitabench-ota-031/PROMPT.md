# VitaBench Task: Ota #31

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You've been under a lot of pressure at work lately and want to go hiking on the weekend to relax. This time you want to go to Mount Hua to see the sunrise. You'll first check the weather for this weekend - if it's not rainy, you'll go this weekend; otherwise, you'll go next week. Your plan is to arrive at Mount Hua before 9 PM, so you can rest for a while and then start climbing in the early morning. You need to account for the time to get from the airport, so you need to choose a flight that arrives around 5 PM, and you want to buy tickets that are as inexpensive as possible. After arriving at Mount Hua, you need to find a hotel closest to the mountain entrance, preferably at the foot of the mountain. You've heard that the night climb takes 5-6 hours, so this way you can get to the hotel, organize your luggage, rest for a moment, and then set off for the climb. Since you won't be staying much in the hotel anyway, the cheapest room will do. You also need to buy admission tickets in advance and check if there are Cable Car tickets available. Ideally, you want to take the cable car when going down after watching the sunrise, which would make the journey much easier.

## Context

- Current time: `2025-05-23 21:22:46`
- Domain: `ota`

## Requirements / Rubrics

- Need to check the weather conditions at Mount Hua this weekend, the result shows May 24 at Mount Hua will be sunny 12-25°C, May 25 at Mount Hua will be cloudy 14-26°C; therefore the itinerary time should be this weekend
- The flight order's arrival time should be around 5 PM
- The flight order's date should be May 24, 2025
- Need to filter flights arriving around 5 PM and find the cheapest flight, which is S17557505511258118_P00094
- The hotel must be located at the closest position to Mount Hua's entrance
- The hotel order's date should be May 24, 2025
- Need to filter hotels at the foot of Mount Hua and find the cheapest room type, which is Budget Single Room at Mount Hua International Hotel, the hotel order's room type must be Budget Single Room
- Must provide Mount Hua cable car ticket information, the suitable cable car for descending after watching the sunrise is the West Peak Cable Car descent ticket
- There should be two admission ticket orders, one of which is for Mount Hua Scenic Area
- The admission ticket for Mount Hua Scenic Area should be for use on May 25, 2025
- There should be two admission ticket orders, one of which is for Mount Hua West Peak Cable Car
- The cable car ticket's use date should be May 25, 2025
- The cable car ticket order type must be Adult Descent Ticket

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
