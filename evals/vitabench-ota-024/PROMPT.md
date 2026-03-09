# VitaBench Task: Ota #24

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your company has arranged for you to travel to Fenyang to negotiate cooperation with local distributors. You plan to fly to Taiyuan on the 17th, then take an early train to Fenyang on the 18th. You need to choose a flight that arrives in the afternoon - arriving too early means you can't check in to the hotel yet, while arriving too late means you won't get enough rest. For the train, you want to book the earliest departure and get an upper berth ticket so you can rest a bit more during the journey. You can book both tickets now. On the evening of the 17th, you plan to stay at a hotel within 2km of the railway station for convenient travel on the 18th. The hotel needs to provide wake-up call service as you're worried about not waking up early enough. Since you're a light sleeper, good soundproofing is essential, and the hotel price should be under 200 yuan. After arriving in Fenyang, the distributor will arrange accommodation for you, so you don't need to worry about that. You also want to find out if Fenyang has the type of scenic spots you frequently visit - rafting would be ideal. Once you select a spot, you can purchase tickets for the Dragon Boat Festival holiday, when you'll take a break from work and get some proper rest.

## Context

- Current time: `2023-06-03 17:17:55`
- Domain: `ota`

## Requirements / Rubrics

- The flight in the airplane order is from Hefei to Taiyuan
- The booked air ticket should be for June 17, 2023
- The flight in the airplane order should arrive in the afternoon
- The train in the train ticket order is from Taiyuan to Fenyang
- The booked train ticket date should be June 18, 2023
- The train departure time in the train ticket order should be the earliest one of the day
- The train ticket booked in the train ticket order should be an upper berth
- The booked hotel should be within 2km of Taiyuan Railway Station, Jianshe South Road, Yingze District, Taiyuan, Shanxi Province
- The booked hotel should have good soundproofing
- The booked hotel should provide wake-up call service
- The hotel reservation date is June 17, 2023
- The room type in the hotel order should not exceed 200 yuan
- The scenic spot in the attraction order should match the user's most frequently visited type (query results show natural scenic spots)
- The scenic spot in the attraction order should offer rafting
- The ticket purchased in the attraction order should be an adult ticket
- The ticket purchased in the attraction order should include rafting
- The ticket date should be on the Dragon Boat Festival holiday, which is June 22, 2023 according to the query, so the purchased ticket date is June 22, 2023

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
