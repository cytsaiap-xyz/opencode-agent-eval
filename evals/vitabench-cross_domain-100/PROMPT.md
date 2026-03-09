# VitaBench Task: Cross Domain #100

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Next month, the Tour of Qinghai Lake International Road Cycling Race will be held on the 3rd and 4th, which is one of the highest-level cycling races in Asia. Your club is sending you to participate and has purchased tickets for you to arrive 2 days in advance to help you adjust to the environment. Since the race takes place in a plateau region, you need to book a hotel with Oxygen Supply Equipment. Accommodations during the race period are very tight, and you're not particular about room types, but you don't want to change hotels or rooms during your stay. You plan to leave the hotel on the 5th and need to book the hotel now. To ensure you have abundant energy for long-distance cycling on the plateau, you hope to have Plateau Athlete-specific Meal; if possible, you'd like to place an order now to be delivered to the hotel around 6 PM on the day of your arrival. If the temperature there is below 5 degrees, you'll also need to buy some appropriate Outdoor Supplies for warmth to take with you. You want to see if there are any physical training facilities locally, as long as they're within 2 kilometers of the hotel, and you want to order a package to adjust your condition 1 day in advance.

## Context

- Current time: `2025-04-29 15:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- Hotel check-in date is May 1, 2025
- Hotel check-out date is May 5, 2025
- Hotel should provide Oxygen Supply Equipment
- Hotel booking should be for the same room type from May 1, 2025 to May 5, 2025
- Food delivery order should be Plateau Athlete-specific Meal
- Food delivery address should be Qinghai Lake Youjia Hotel at 1km of Qinghai Lake Circuit Track, Shaliu River Town, Gangcha County, Haibei Tibetan Autonomous Prefecture, Qinghai Province
- Expected delivery time for food order should be 18:00 on May 1, 2025
- In-store merchant should be a physical training venue
- Distance from in-store merchant to hotel should be within 2km
- In-store order items should be related to physical training packages
- Temperature at Qinghai Lake from May 1 to May 5, 2025 is above 5 degrees Celsius, no need to order outdoor thermal supplies

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
