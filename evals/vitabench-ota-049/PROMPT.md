# VitaBench Task: Ota #49

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You are planning a trip to Hainan for an island vacation to experience the relaxed lifestyle of a tropical beach, departing on Qingming Festival day. Since Hainan routes are quite popular, you want to compare flights to Sanya and Haikou to see which is more economical, choosing the cheapest flight that arrives in the afternoon. You remember that your favorite childhood TV drama 'Love Awakening' was filmed at a hotel in Lingshui, Hainan called Clearwater Bay Resort, so you decide to book the cheapest room type available on Qingming Festival day as a way to check it off your list. Since you're visiting Hainan, you want to see famous attractions like Tianya Haijiao (The Ends of the Earth), Nanshan Temple, and Wuzhizhou Island. You want to know which one is closest to your hotel, and plan to buy an admission ticket for the day after Qingming Festival first, then figure out the rest when you arrive.

## Context

- Current time: `2025-03-31 19:03:01`
- Domain: `ota`

## Requirements / Rubrics

- Need to check the date of Qingming Festival in 2025, which is April 4, 2025, so the departure date for flight booking should be April 4, 2025
- The arrival time of the flight should be between 12:00-18:00
- Need to compare flight prices between Sanya and Haikou within the available options, and the price in the flight order should be the cheapest one (Haikou flight CZ6851 Economy Class at ¥980)
- The hotel to be booked should be Clearwater Bay Resort
- The check-in date for the hotel should be April 4, 2025
- The room price in the hotel order should be the cheapest among available options (Ocean View Deluxe King Room at ¥780)
- Need to calculate the distance between Clearwater Bay Resort, Clearwater Bay Avenue, Yingzhou Town, Lingshui Li Autonomous County, Hainan Province and Tianya Haijiao, Tianya Haijiao Scenic Area, Tianya District, Sanya, Hainan Province; Nanshan Temple, Nanshan Cultural Tourism Zone, Yazhou District, Sanya, Hainan Province; Wuzhizhou Island, Wuzhizhou Island Tourism Area, Haitang District, Sanya, Hainan Province, and compare which scenic spot is closest to Clearwater Bay Resort. The result is Wuzhizhou Island (33.73 kilometers away), so the scenic spot to be booked should be Wuzhizhou Island. (Tianya Haijiao is 72.62 kilometers away from Clearwater Bay Resort, Nanshan Temple is 88.98 kilometers away from Clearwater Bay Resort)
- The ticket date in the scenic spot order should be April 5, 2025
- The ticket in the scenic spot order should be Adult Ticket

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
