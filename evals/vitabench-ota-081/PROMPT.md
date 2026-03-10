# VitaBench Task: Ota #81

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're planning to climb Mount Tai to watch the sunrise, so you need to prepare in advance. First, check the scenic area's opening hours to find out if nighttime entry is allowed, as this will help you decide whether to do a night climbing or go during the day. You want to check the weather for the remaining days of July and pick one with cooler average temperatures and no rain for your climb. Once you've chosen a date, purchase a ticket package that include cable car for convenience. You plan to book a hotel within 500 meters of the mountain base so you can rest quickly after climbing. The hotel must have a jacuzzi, and a king room is enough. Your flight ticket is already sorted, but your nephew wants to tag along after hearing about your plan, check train schedules from Shenzhen to Tai'an, and calculate how long the longest train would take to discourage him from coming.

## Context

- Current time: `2026-07-27 18:57:11`
- Domain: `ota`

## Requirements / Rubrics

- Need to check the opening hours of Mount Tai Scenic Area, the result shows that it supports night climbing (open 24 hours a day)
- Need to check the weather in Mount Tai from July 27 to July 31, the result is as follows: July 27, Tai'an cloudy, 26-36°C; July 28, Tai'an cloudy, 28-33°C; July 29, Tai'an sunny, 22-31°C; July 30, Tai'an cloudy, 24-33°C; July 31, Tai'an light rain, 21-28°C
- Need to filter non-rainy dates for Mount Tai, calculate the average temperature for each day, and select the date with the lowest average temperature, the result is July 29, thus the scenic spot ticket date should be July 29, 2026
- Scenic spot tickets must include cable car packages
- The ticket order must be for Mount Tai Scenic Area
- The hotel must be located within 500m of No. 126 Hongmen Road, Taishan District, Tai'an City, Shandong Province (at the foot of Mount Tai)
- The unit price of items in the hotel order should be between 500-1000 yuan
- The hotel must have a jacuzzi
- The hotel order must be for a king room
- The check-in date for the hotel order must be July 29, 2026
- Must filter trains from Shenzhen to Tai'an, check the train with the longest travel time, the result is K1234, with a duration of 18 hours and 15 minutes

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
