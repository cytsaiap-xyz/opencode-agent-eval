# VitaBench Task: Ota #71

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're planning to visit Lushan Mountain next Tuesday. To make efficient use of time, you intend to purchase a train ticket that arrives in Jiujiang around 9 AM, with a second class seat being sufficient. Upon arrival, you can head directly up the mountain to begin your tour. Before the trip, you also want to check the weather forecast for Lushan for those days, as the weather conditions will determine whether you can see the famous sea of clouds and waterfalls at Lushan. You've heard that the best time to view the sea of clouds at Lushan is after rain when the sky clears. If the weather happens to be suitable, you plan to stay overnight on the mountain to properly appreciate the spectacular sea of clouds, in which case you need to check the prices of hotels on the mountain and find one that's not too expensive, preferably not exceeding 600 yuan per night. If the weather is poor, you'll just find a random hotel to stay in Jiujiang. By the way, you prefer a king room. After booking the hotel, don't forget to purchase admission tickets for Lushan Scenic Area, just the standard ones will do.

## Context

- Current time: `2026-08-29 16:37:45`
- Domain: `ota`

## Requirements / Rubrics

- The destination of the train order should be Jiujiang
- The departure date of the train order should be 2026-09-01
- The arrival time of the train should be around 09:00
- The seat type in the train ticket order should be second class seat
- Need to check the weather in Lushan Mountain on 2026-09-01 and 2026-09-02, which is showers followed by sunny, suitable for viewing the sea of clouds, and the booked hotel should be located on Lushan Mountain
- The price of the booked hotel should be less than or equal to 600 yuan
- The room type of the booked hotel should be a king room
- The attraction to be ordered should be Lushan Scenic Area
- The ticket date in the attraction order should be 2026-09-02
- The ticket type in the attraction order should be adult ticket

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
