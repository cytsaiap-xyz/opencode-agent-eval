# VitaBench Task: Ota #92

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You and your partner have been busy in Anshan recently, and today you've finished all your tasks and want to find a four-star hot spring hotel to relax. You hope the hotel has a sauna area and you need a king room with hot spring bath. After checking out from the hot spring hotel tomorrow, you want to visit Benxi Grand Canyon. Now you're looking at transportation tickets and want to book the shortest journey that arrives before noon - either First Class Seat or Business Class Seat would be fine. You've heard that Benxi Grand Canyon has many exciting activities, so you want to check tomorrow's weather first. If the weather is sunny, you'll buy tickets with more attractions; if it's windy, you'll buy tickets with fewer attractions; if it rains, regular admission tickets will do.

## Context

- Current time: `2024-03-17 11:56:49`
- Domain: `ota`

## Requirements / Rubrics

- The hotel booked should be a four-star hotel
- The hotel booked should be a hot spring hotel
- The hotel booked should have a First Floor Sauna Room
- The room type in the hotel order should include hot spring service
- The room type in the hotel order should be a king room
- The date in the hotel order should be 2024-03-17
- The departure date of the train ticket should be 2024-03-18
- The arrival time of the train ticket should be before 12:00 (including 12:00)
- The seat type of the train ticket should be First Class Seat or Business Class Seat
- The train journey should be the shortest among the available options, which is D7625 (10:20-11:35, duration 75 minutes)
- The quantity of the train ticket order should be 2
- The attraction booked should be Benxi Grand Canyon
- Need to check the weather in Benxi on 2024-03-18, which is sunny, so the attraction tickets should be for the package with more activities (Benxi Grand Canyon All-Inclusive Package)
- The quantity in the attraction order should be 2
- The date in the attraction order should be 2024-03-18

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
