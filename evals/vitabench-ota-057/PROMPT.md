# VitaBench Task: Ota #57

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You've always wanted to visit the satellite launch center, and now that you finally have some time, you plan to set off 5 days from now. You can now check the prices for express train sleeper and high-speed train Second Class Seat. If the cheapest sleeper is more expensive than the high-speed train Second Class Seat, or if the difference doesn't exceed 100 yuan, you'll buy the high-speed train Second Class Seat. For this trip, you plan to stay for 3 nights, with the first night booked near the Jiuquan Satellite Launch Center. However, on the Communist Party Founding Day, you need to visit relatives, so you don't need to book a hotel for that night. The remaining night should be booked near Jiuquan Park, preferably both within 3 kilometers. Also, the hotels should include Laundry Service and Free Luggage Storage, and the room should be a King Room.

## Context

- Current time: `2025-06-24 11:15:32`
- Domain: `ota`

## Requirements / Rubrics

- The departure location of the outbound ticket should be Xi'an
- The destination of the outbound ticket should be Jiuquan
- The departure date of the outbound ticket should be June 29, 2025
- Need to check the lowest price for Express Train sleeper within the optional range, which is 392 yuan; need to check the price information for High-speed Train Second Class Seat within the optional range, which is 402 yuan; subtract these two prices, the result is 10 yuan, meaning the price difference between the two seat types does not exceed 100 yuan, so the seat type in the ticket order should be Second Class Seat
- The hotel in the hotel order for June 29, 2025 should be within 3 kilometers of Jiuquan Satellite Launch Center, Dongfeng Aerospace City, Suzhou District, Jiuquan City, Gansu Province
- The hotel in the hotel order for June 29, 2025 should offer Laundry Service
- The hotel in the hotel order for June 29, 2025 should offer Free Luggage Storage service
- The room type in the hotel order for June 29, 2025 should be a King Room
- The hotel in the hotel order for June 30, 2025 should be within 3 kilometers of Jiuquan Park, 1 Park Road, Suzhou District, Jiuquan City, Gansu Province
- The hotel in the hotel order for June 30, 2025 should offer Laundry Service
- The hotel in the hotel order for June 30, 2025 should offer Free Luggage Storage service
- The room type in the hotel order for June 30, 2025 should be a King Room

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
