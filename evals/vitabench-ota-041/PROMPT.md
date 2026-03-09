# VitaBench Task: Ota #41

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

I've heard that Zhouzhuang Ancient Town has beautiful scenery, so you and your three roommates have arranged to experience the water town atmosphere this weekend. You plan to first take an EMU (Electric Multiple Unit) train or high-speed rail to Suzhou South Railway Station, then take a taxi from there. Your roommates have already transferred money to you to arrange tickets, accommodation, and entrance tickets. For travel arrangements, you want to take the earliest train on Saturday and return around 5 PM on Sunday, with Second class seats for both journeys. For accommodation, you prefer to stay at chain hotel brands you usually stay at, ideally located within 500 meters of Suzhou South Railway Station for convenient travel. If you can find a hotel that opened last year, that would be ideal as the facilities would be newer and the environment more reassuring. You plan to have two people per room; if the price difference between twin rooms and king rooms is within 50 yuan, twin rooms would be more comfortable; if the price difference is larger, king rooms are acceptable too. For ancient town tickets, buy them for Saturday; you've heard there are package tickets that include cultural creative ice cream, which sounds quite special and worth considering.

## Context

- Current time: `2029-04-26 11:23:54`
- Domain: `ota`

## Requirements / Rubrics

- The departure location for the outbound ticket is Nantong, and the destination is Suzhou South Railway Station
- The outbound ticket should be EMU (Electric Multiple Unit) train or High-speed rail
- The departure date for the outbound ticket should be 2029-04-28
- The quantity in the outbound ticket order should be 4
- The seat type in the outbound ticket order should be Second class seat
- The outbound ticket should be the earliest available train, which is D5432 (departing at 06:28)
- The departure location for the return ticket is Suzhou South Railway Station, and the destination is Nantong
- The return ticket should be EMU (Electric Multiple Unit) train or High-speed rail
- The departure date for the return ticket should be 2029-04-29
- The departure time for the return ticket should be around 17:00
- The quantity in the return ticket order should be 4
- The seat type in the return ticket order should be Second class seat
- The brand of the hotel should be Hanting or Home Inn or 7 Days Inn
- The distance between the hotel and Suzhou South Railway Station, Wuzhong District, Suzhou, Jiangsu Province should be less than or equal to 500 meters
- The hotel should be newly opened in 2028
- The check-in date for the hotel should be 2029-04-28
- The quantity in the hotel order should be 2
- Need to check and calculate the price difference between twin rooms and king rooms within the available options, which is 70 yuan, greater than 50 yuan, so the room type in the hotel order should be Economy king room
- The attraction to be booked should be Zhouzhuang Ancient Town
- The tickets for the attraction should include the cultural creative ice cream package
- The date in the attraction order should be 2029-04-28
- The quantity in the attraction order should be 4

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
