# VitaBench Task: Ota #30

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Recently, you've become quite interested in the rock tea culture and Danxia landforms of Wuyi Mountain. You've heard that tea quality is good after the Qingming Festival and want to visit during the coming weekend. The journey isn't far, and two days should be enough for the round trip. Your husband is busy with work lately and probably won't be able to make time next weekend, so you plan to travel with just your nine-year-old daughter. Your daughter tends to be moody if she wakes up too early, and you don't want to rush, so leaving later is fine. However, your daughter has school on Monday, so you hope the return trip won't be too late. After booking round-trip tickets, you want to find a hotel with local tea culture characteristics, with a price similar to what you usually pay, and you need a twin room. When staying at hotels, you usually order takeout for drinking water, and it would be more convenient if a robot could deliver it to your room. Also, you're very interested in ecological tea gardens, and it would be wonderful if you could have hands-on experience in a tea-making workshop. If such an attraction exists, you'd like to buy tickets for Sunday for both you and your daughter; if not, that's okay too.

## Context

- Current time: `2025-04-06 10:35:43`
- Domain: `ota`

## Requirements / Rubrics

- The departure date should be April 12, 2025
- The departure train should not be scheduled too early in the day
- The departure train ticket should be from Nanchang to Wuyi Mountain
- The number of departure train tickets should be 2
- The return date should be April 13, 2025
- The return train should not be scheduled to arrive too late
- The return train should be from Wuyi Mountain to Nanchang
- The number of return train tickets should be 2
- The booked hotel should feature local tea culture
- The hotel price should be between 500-1000 yuan
- The hotel room type should be a twin room
- The hotel should provide Robot Food Delivery service
- The hotel reservation should include a room for April 12, 2025
- The attraction to be booked should be the Wuyi Mountain Ecological Tea Garden
- The attraction tickets should include tea-making experience
- The number of attraction tickets should be 2
- The date of use for the attraction tickets should be April 13, 2025

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
