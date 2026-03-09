# VitaBench Task: Ota #59

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your partner is heading to Harbin for a business trip the day after tomorrow, and you've decided to take your child along to see the famous ice sculptures. However, you'll need to return home by Friday since you have other plans over the weekend. Your partner has already purchased their train ticket for the outbound journey, so now you just need to book tickets for Harbin Ice and Snow World on Thursday. Your partner will be busy with work and won't have time to accompany you to the attractions. For accommodation, look for a hotel within 500 meters of People's Square that offers indoor hot spring facilities. Since it will just be you and your child staying there (your partner's company has arranged separate lodging), book a king room. Once booked, check which metro station is closest to this hotel. For returning, check how long direct trains from Harbin back home take. If the travel time exceeds 12 hours (since young children struggle with sitting still on long journeys), opt instead for an afternoon flight around 2:00 PM—this timing should work well.

## Context

- Current time: `2025-12-08 15:41:27`
- Domain: `ota`

## Requirements / Rubrics

- The attraction ticket order should be for Harbin Ice and Snow World
- The attraction ticket date should be December 11, 2025
- The attraction ticket order should include 1 child ticket and 1 adult ticket
- The hotel must be located within 500m of Harbin People's Square
- The hotel must provide indoor hot spring facilities
- The hotel room type must be a king room
- The hotel check-in dates should be December 10 and December 11
- Must check the nearest metro station to the hotel, which is People's Square Metro Station
- Need to check direct train travel time from Harbin to Linyi, results show all exceed 12-hour limit, so flight tickets should be booked instead of train tickets
- The flight departure time should be around 2:00 PM
- The flight date should be Friday (December 12, 2025)
- Transportation should be arranged for the user and the child only, so flight ticket quantity should be 2

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
