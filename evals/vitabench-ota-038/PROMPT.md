# VitaBench Task: Ota #38

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're visiting clients in Shanxi recently and need to return to your company for a report by the 8th at the latest. During this time, you want to take some time to visit Huangcheng Xiangfu in Jincheng to see the Ming and Qing architecture. You plan to first check the ticket prices for Huangcheng Xiangfu that include a show. Meanwhile, check the weather for the next few days and buy tickets for a sunny day. Oh, and your mother video called this morning to say she and your father need to go to Wuzhou on the day of Liqiu (Beginning of Autumn) for some business, and asked you to book them a hotel for 2 nights. The hotel you booked for them last month was quite good, so book the same one again, but remember to change the room type to a twin room.

## Context

- Current time: `2025-08-02 11:17:45`
- Domain: `ota`

## Requirements / Rubrics

- Query the price of Huangcheng Xiangfu tickets with show included
- Check the weather in Jincheng from August 2, 2025 to August 7, 2025, and find which day is sunny (result: August 5, 2025), so the attraction ticket date is set for August 5, 2025
- The attraction ticket purchased includes a show
- Check that the Beginning of Autumn date is August 7, 2025, so hotel reservations are made for August 7 and August 8, 2025
- By reviewing last month's hotel orders in Wuzhou, determine that the hotel to be booked is Atour Hotel Wuzhou
- The hotel room type booked is a twin room

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
