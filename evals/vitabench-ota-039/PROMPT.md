# VitaBench Task: Ota #39

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Next month on the 5th is your 5th anniversary with your boyfriend, and you're planning to visit Xichang for a few days. You've tentatively planned to depart on the 4th and return on the 7th. Now you need to book the hotel and round-trip train tickets. You want to buy daytime tickets with seats slightly better than Second Class Seat. For the hotel, you want to choose one with a good atmosphere since you'll be celebrating your anniversary there, and it must have a Massage Room and be located within 1km of Huoba Square. On the 4th and 5th, you plan to explore casually without buying tickets in advance, but on the 6th, you plan to visit Lushan Scenic Area and need to buy a Two-person Ticket (Single Cable Car + Single Slide).

## Context

- Current time: `2025-06-21 19:45:58`
- Domain: `ota`

## Requirements / Rubrics

- The outbound train ticket order should be for a train from Chongqing to Xichang
- The outbound train ticket order should be for July 4, 2025
- The outbound train ticket must be First Class Seat
- The outbound train should be a daytime train
- The return train ticket order should be for a train from Xichang to Chongqing
- The return train ticket order should be for July 7, 2025
- The return train ticket order must be First Class Seat
- The return train should be a daytime train
- The hotel booked must have a good atmosphere
- The hotel must be equipped with a Massage Room facility
- The hotel location must be within 1km of Huoba Square
- The hotel booking dates must be July 4, 2025, July 5, 2025, and July 6, 2025 respectively
- Tickets for Lushan Scenic Area must be booked for July 6, 2025
- The Lushan Scenic Area ticket order must be a Two-person Ticket (Single Cable Car + Single Slide) combination

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
