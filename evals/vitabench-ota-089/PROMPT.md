# VitaBench Task: Ota #89

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You are planning a long-distance trip to Meizhou on Wednesday morning and returning Friday afternoon. You want to first check what types of attractions in Meizhou interest you the most, then buy tickets for Thursday's visit. Also, you need to confirm whether Wednesday and Thursday are holidays: if not, you'll stay within 5km of the attraction for two nights, keeping costs under 300, and the hotel must have free parking; if they are holidays, you'll find an inexpensive hotel near the Planning and Design Building and drive to the attractions; since you're traveling alone, a king room would be fine.

## Context

- Current time: `2024-11-05 22:20:37`
- Domain: `ota`

## Requirements / Rubrics

- The attraction ordered should be of the type that interests the user most (which according to user profile is traditional village type)
- The attraction ticket purchased should be for November 7, 2024
- The attraction ticket purchased should be an Adult Ticket
- According to the calendar, Wednesday (November 6, 2024) and Thursday (November 7, 2024) are not holidays, so the hotel booked should be within 5km of the attraction
- The hotel should be booked for November 6, 2024 and November 7, 2024
- The room type booked in the hotel order should be a king room
- The total price spent on the hotel order should not exceed 300 yuan
- The hotel booked should have Free Parking

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
