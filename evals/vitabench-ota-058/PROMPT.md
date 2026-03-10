# VitaBench Task: Ota #58

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're planning to take your father on a 3-day, 2-night trip to visit the Yungang Grottoes Scenic Spot during the New Year holiday. You plan to depart by train on the afternoon before New Year's Day. However, you'll first check the weather forecast for both locations that day: If it's raining, dragging suitcases around will be inconvenient, so you'll postpone departure by one day instead. Since you're traveling with an elderly parent, book first-class train seats for added comfort. Ensure that your arrival time isn't too late in order to avoid tiring out your father. For accommodation, choose a hotel within 3 kilometers of the scenic area and ensure it offers luggage storage services. This way, on your last morning after checking out, you can leave your bags at the hotel while exploring more of the local area. Also, you've heard there are battery cars in the scenic area, so you plan to buy tickets that include the battery car service to help your father tour comfortably and leisurely. You'll purchase the scenic area tickets for the second day of your arrival.

## Context

- Current time: `2024-12-21 21:32:49`
- Domain: `ota`

## Requirements / Rubrics

- Need to check the weather in Xi'an and Datong on December 31, 2024. The result is Xi'an: cloudy, 0 to 10 degrees Celsius; Datong: cloudy, -6 to 4 degrees Celsius, so the departure time of the train ticket is December 31
- The train ticket must be first-class seat
- The train arrival time cannot exceed 9:00 PM on December 31, 2024
- The quantity of tickets in the train ticket order should be 2
- The hotel must be located within 3 kilometers of the Yungang Grottoes scenic spot
- The hotel must provide luggage storage service
- The hotel booking duration must be 2 nights (check-in on December 31 and January 1)
- The hotel order must be for consecutive stays, i.e., the same hotel and same room type
- The scenic spot tickets date must be January 1, 2025 (the second day after arrival)
- The scenic spot tickets must include battery car service
- The scenic spot tickets must be adult tickets
- The ticket order should be for Yungang Grottoes scenic spot
- The number of tickets in the order should be 2

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
