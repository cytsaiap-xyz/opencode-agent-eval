# VitaBench Task: Ota #62

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

On the 13th, you need to accompany your father, who uses a wheelchair, to Beijing 301 Hospital for a follow-up examination. When searching for train tickets to Beijing, you need to carefully select trains with Accessible Carriages and Wheelchair-accessible Seats to ensure your father's journey is both comfortable and safe. Once you find a suitable train, you should book and pay immediately, as there are limited seats available in Accessible Carriages, so advance planning is essential. Choose a hotel near the Hospital for convenient access to medical appointments, and make sure it has an Elevator for wheelchair accessibility. Plan to book the hotel for two nights initially, as you're not sure what additional examinations might be required once you arrive. Also, check the weather forecast for those days, and if conditions are favorable for going out, research some accessible attractions suitable for wheelchair users, allowing your father to experience the cultural atmosphere of the capital during breaks from treatment.

## Context

- Current time: `2023-09-09 08:32:14`
- Domain: `ota`

## Requirements / Rubrics

- The ordered train should include accessible carriage
- The ordered train should have wheelchair-accessible seat
- The number of train tickets ordered should be 2
- The train in the order should be from Dalian to Beijing
- The departure time of the train tickets in the order should be September 13, 2023
- The hotel should be within 3km (inclusive) of the Chinese PLA General Hospital at 28 Fuxing Road, Haidian District, Beijing
- The ordered hotel should have an Elevator
- The hotel booking dates should be 2023-09-13 and 2023-09-14
- The room booked in the hotel order should be a twin room
- Check the weather in Beijing on 2023-09-14 (showers), the attraction ordered should be indoor
- The booking date for the attraction should be September 14, 2023
- The ordered attraction should be wheelchair accessible
- The number of attraction tickets ordered should be 2

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
