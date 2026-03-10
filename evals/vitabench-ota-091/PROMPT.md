# VitaBench Task: Ota #91

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You've recently experienced unemployment and need to relax, so you're planning a four-day, three-night trip to Guilin city and Weizhou Island with your wife and six-year-old child. Since most of your itinerary involves outdoor activities, weather conditions are crucial. You plan to depart after the 17th and need to check the weather forecast to carefully select four consecutive rain-free days to firmly set your travel dates. For your itinerary, you plan to take your child to explore Guilin city for the first two days - visiting the Longji Rice Terraces on day one and taking the Xingping Ancient Town Li River cruise on day two, so you want to purchase tickets for these two attractions first. On the third day, you'll go to Weizhou Island, and since you've heard that the Weizhou Island Dishui Danping Scenic Area beach is excellent, you've also purchased that ticket. As for other attractions, you'll decide later. You need to book hotels in advance, staying at your usual brand in Guilin. On the day you go to Weizhou Island, you plan to stay directly on the island. Your hotel budget remains the same as before, and you can accept either twin rooms or family suites.

## Context

- Current time: `2026-10-12 16:37:22`
- Domain: `ota`

## Requirements / Rubrics

- It won't rain in Guilin on October 18 and 19, 2026, and it won't rain in Beihai on October 20 and 21, 2026, which meets the travel plan requirement of four days without rain, so the date for using Longji Rice Terraces tickets is October 18, 2026
- Longji Rice Terraces tickets should include 2 adult tickets
- Longji Rice Terraces tickets should include 1 child ticket (7 years and below)
- Xingping Ancient Town Li River cruise tickets are for use on October 19, 2026
- Xingping Ancient Town Li River cruise tickets should include 2 adult tickets
- Xingping Ancient Town Li River cruise tickets should include 1 child ticket (7 years and below)
- Weizhou Island Dishui Danping Scenic Area tickets are for use on October 20, 2026
- The number of Weizhou Island Dishui Danping Scenic Area tickets should be 3
- The hotel brand for staying in Guilin should be Home Inn
- The hotel order in Guilin should include rooms for 2 nights, on October 18 and 19, 2026 respectively
- The budget for the hotel in Guilin is 300-500 yuan per night
- The room type for the hotel in Guilin should be a twin room
- The hotel on Weizhou Island should be booked for October 20, 2026
- The budget for the hotel on Weizhou Island is 300-500 yuan per night
- The room type for the hotel on Weizhou Island should be a family suite

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
