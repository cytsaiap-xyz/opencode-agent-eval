# VitaBench Task: Ota #62

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

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

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
