# VitaBench Task: Cross Domain #38

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your good friend in Lianyungang is going abroad to study, and you want to visit her tomorrow to have a meal together, chat, and say a simple goodbye. Now you're looking for high-speed train tickets, preferring the route with the shortest travel time. You don't need premium seats, and would prefer to arrive in the morning. Your friend will treat you to a meal, so you want to take her to a photo booth studio to take some commemorative photos, specifically Korean Style Four-Grid Photo Booth Stickers. If the studio also offers Polaroid photos, you'd like to take one of those too; if not, you'll take two sets of four-grid photos. You're looking for the best value package and want to purchase it now. Your friend needs to go to the airport that day, and you originally planned to return to Suzhou the same day, but after thinking about it, you feel it would be too tiring to travel back and forth in one day, so you plan to stay in Lianyungang for an extra day. You're traveling alone and want to stay in the city center in a hotel that's Four-Star or above for safety and security. A standard room type will be fine.

## Context

- Current time: `2025-08-24 09:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The train ticket booked should be from Suzhou to Lianyungang
- The selected train should be the one with shortest travel time (select G2878, total duration 2 hours 38 minutes, shortest time)
- The departure date of the selected train should be August 25, 2025
- The arrival time of the selected train should be in the morning
- The train ticket purchased should be Second Class Seat
- The photo studio purchase should include Four-Grid Photo Booth Stickers
- The photo studio purchase should include Polaroid photo shooting
- The photo studio products should have Korean Style
- The photo studio products should be cost-effective, query shows that Korean Style Four-Grid + Polaroid Package offers the best value
- The hotel booked should be four-star or above
- The booked hotel should be in downtown Lianyungang
- The room type booked should be Standard King Room
- The hotel booking date should be August 25, 2025

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
