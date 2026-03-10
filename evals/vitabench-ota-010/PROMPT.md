# VitaBench Task: Ota #10

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

A friend has introduced you to an important client, and you've scheduled a meeting in Hangzhou next Thursday. You planned to arrive a day early and have already booked your flight. But you suddenly realize that coastal areas are prone to typhoons in summer, and if there's heavy rain causing flight delays, standing up your client would be terrible. After careful consideration, you think taking a high-speed train would be more reliable. You need to cancel your previously booked flight and book train tickets instead. Come to think of it, it's been a while since you've been to a train station, so you need to check how far it is from your home to estimate your departure time. You plan to take the earliest train on that day. You've been spending a lot lately, so you decide to prioritize cost over seat comfort. If the cheapest tickets for the earliest train are sold out, departing about two hours later would also be acceptable.

## Context

- Current time: `2025-07-25 19:56:53`
- Domain: `ota`

## Requirements / Rubrics

- Flight booking status should be cancelled
- Train departure date should be July 30, 2025
- Train ticket should be for a route from Tianjin to Hangzhou
- On July 30, 2025, the cheapest seat type (Second Class Seat) on the earliest train G1677 from Tianjin to Hangzhou is sold out, so the booked train should be G1635, which departs 2-3 hours later
- Train seat type should be Second Class Seat
- The distance from Ningsheng Li, Intersection of Weijin South Road and Cangqiong Road, Nankai District, Tianjin to Tianjin Railway Station is about 6 kilometers

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
