# VitaBench Task: Ota #100

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Xuchang People's Hospital has invited you to attend an industry seminar next Friday. After estimating the time, you think arriving in Xuchang before 10 AM would be sufficient, so you want to take the fastest train available. You plan to stay in Xuchang for two days over the weekend and expect to return on Sunday afternoon, hoping to arrive in Zhengzhou before 5 PM so you can still have dinner with your family in the evening. After booking the train tickets, you also want to book attraction tickets. You've heard that Chunqiu Tower is worth seeing, and Chancellor Cao's Mansion is also quite interesting. You're considering visiting both on Sunday. Saturday's itinerary is more flexible, mainly depending on the weather. If the weather is nice, you might consider Huanglonggu Scenic Area recommended by your colleague. If it's rainy, you can just stroll around the old town area and experience the local atmosphere, which would also be nice. Oh, if the return train ticket is for departure before 3 PM, you won't book tickets for Chancellor Cao's Mansion.

## Context

- Current time: `2025-11-13 23:14:25`
- Domain: `ota`

## Requirements / Rubrics

- The departure date of the outbound train is November 21, 2025
- The arrival time of the outbound train should be before 10:00 AM on November 21, 2025
- The outbound train ticket should be for the shortest journey time (G6632)
- The outbound train ticket should be for a train from Zhengzhou to Xuchang
- The departure date of the return train is November 23, 2025
- The arrival time of the return train should be before 5:00 PM on November 23, 2025
- The return train ticket should be for a train from Xuchang to Zhengzhou
- The usage date for the Chunqiu Tower ticket should be November 23, 2025
- The Chunqiu Tower ticket type should be adult ticket
- The weather in Xuchang on Saturday (November 22, 2025) is sunny, so tickets for Huanglonggu Scenic Area should be ordered
- The usage date for the Huanglonggu Scenic Area tickets should be November 22, 2025
- The departure time of the return train (D6789) is 14:20, which is before 15:00, so tickets for Chancellor Cao's Mansion should not be ordered

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
