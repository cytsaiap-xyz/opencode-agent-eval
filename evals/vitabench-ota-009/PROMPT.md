# VitaBench Task: Ota #9

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

This weekend, you're planning to take your wife and child to Wuyuan to see the rapeseed flowers. You plan to leave on Saturday morning, aiming for a train that arrives around 11:00 AM. Since your child is still young, they don't require a separate ticket and can sit with you. For tickets: If business class seats are reasonably priced (within 500 yuan total for two adults), go ahead and book those so everyone can travel comfortably together. If the cost exceeds this budget, opt for second-class seats instead as they provide more space when each person has their own seat. Once train tickets are secured, arrange accommodation in advance. You prefer staying at trusted chain hotels even if it means being slightly farther from Jiangling Rapeseed Flower Field—as long as it's within 12 kilometers of the site. Your child will sleep in the same bed with you, just ensure it's not too cramped. Of course, purchase return tickets simultaneously based on similar seating preferences as the outbound trip. Aim for a train that gets you back to Nanchang by around 5:00 PM Sunday afternoon.

## Context

- Current time: `2022-03-04 09:15:00`
- Domain: `ota`

## Requirements / Rubrics

- The outbound train ticket should be from Nanchang to Wuyuan
- The departure date for the outbound train ticket should be 2022-03-05
- The arrival time for the outbound train should be around 11:00 AM
- Check the price of business class seats for the outbound train within the available options, the result shows 255 yuan per ticket, 510 yuan for two tickets, which exceeds 500 yuan, so the outbound train tickets should select 3 second class seats
- The hotel brand should be Atour or Ji Hotel or Vienna
- The distance between the booked hotel and Jiangling Rapeseed Flower Field, Jiangling Village, Wuyuan County, Shangrao City, Jiangxi Province should be less than or equal to 12 kilometers
- The room type in the hotel order should be a king room
- The check-in date for the hotel order should be 2022-03-05
- The return train ticket should be from Wuyuan to Nanchang
- The departure date for the return train ticket should be 2022-03-06
- The arrival time for the return train should be around 17:00
- Need to check the price of business class seats for the return train within the available options, the result shows 178 yuan per ticket, 356 yuan for two tickets, which is within 500 yuan, so the return train tickets should select two business class seats

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
