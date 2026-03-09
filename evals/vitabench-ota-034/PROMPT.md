# VitaBench Task: Ota #34

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You've just been notified about receiving a layoff package, feeling a bit down, and want to climb Huangshan (Yellow Mountain) to clear your mind. You still have some work to hand over, so you can only leave this Saturday. You plan to arrive around 7 PM on Saturday and stay at the foot of the mountain for one night. Regarding accommodation, you feel you can't afford what you used to, so you need to control expenses reasonably, but you still hope to stay at one of those familiar hotel brands that you trust. After booking the transportation and hotel, you also plan to reserve the entrance tickets in advance. You prefer taking cable cars wherever possible to save energy. Huangshan has several different cable car routes, and you think any of them would be fine as long as it makes your journey easier. Based on your previous experience climbing Huangshan, you think you can return to the hotel to collect your stored luggage by around 4 PM, and then head home directly after finishing the hike. Oh, and please book the return ticket as well.

## Context

- Current time: `2023-06-20 11:19:08`
- Domain: `ota`

## Requirements / Rubrics

- The departure date should be June 24, 2023
- The departure train should arrive at around 7 PM on June 24, 2023
- The departure train ticket should be for a train from Hefei to Huangshan
- The return date should be June 25, 2023
- The return train departure time should be after 4 PM on June 25, 2023
- The return train should be from Huangshan to Hefei
- The hotel brand should be Atour/Ji Hotel/Vienna/Orange or any brand under Huazhu Group
- The hotel price should be less than 500 yuan
- The hotel should provide luggage storage service
- The hotel order should include a room for June 24, 2023
- The Huangshan Scenic Area ticket should be used on June 25, 2023
- The Huangshan Scenic Area ticket should be an adult ticket
- The Huangshan Yungu Cable Car ticket should be for upward direction
- The Huangshan Yungu Cable Car ticket should be used on June 25, 2023
- The Huangshan Yuping Cable Car ticket should be for downward direction
- The Huangshan Yuping Cable Car ticket should be used on June 25, 2023

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
