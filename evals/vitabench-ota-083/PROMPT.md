# VitaBench Task: Ota #83

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You are planning a short trip with your husband and child soon and want to see what attractions in Zigong are similar to the types of places you most frequently visit. After identifying recommended attractions, you start browsing ticket information, planning to purchase tickets for the Saturday following the Dragon Boat Festival, with a child ticket for your child. Since you plan to rest well and return the next day, you also want to check hotels within 3km of the attraction and book one with theme rooms. You have two requirements for the hotel: since it's a short trip, the room shouldn't be too expensive - anything over 300 yuan isn't worth it; and you prefer late checkout so you don't have to get up early to pack. Once you find a hotel that meets these conditions, you book it in advance and confirm the reservation to avoid any issues.

## Context

- Current time: `2025-05-24 09:42:55`
- Domain: `ota`

## Requirements / Rubrics

- The ordered attraction should be the type that the user visits most frequently (by querying user profile, it should be theme parks)
- By checking the calendar, the Dragon Boat Festival is on May 31, 2025, and the attraction tickets should be booked for the Saturday after the festival (i.e., June 7, 2025)
- The purchased tickets should be family package (2 adults + 1 child)
- The booked hotel should be within 3km of Zigong Fantawild Dinosaur Kingdom
- The hotel order should be for a theme room
- The hotel reservation date should be June 7, 2025
- The hotel order cost should not exceed 300 yuan
- The booked hotel should offer late checkout
- Verify that the hotel reservation is confirmed successfully

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
