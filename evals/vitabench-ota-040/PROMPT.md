# VitaBench Task: Ota #40

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

It's too hot, and you're taking a week off next week, planning to take your wife and seven-year-old child to Chengde Mountain Resort to escape the heat. You plan to leave this Saturday and return next Sunday. Regarding transportation, you only need to book the round-trip tickets now. If there are no direct flights, you can fly to Beijing and then make your way to Chengde. The flights shouldn't depart too early or arrive too late; afternoon or evening arrival would be more suitable. Chengde Mountain Resort is a famous royal garden from the Qing Dynasty, so you'd like to experience a hotel with a similar style. Of course, if there aren't any, you can also consider the chain hotel brands you usually stay at. If family rooms are available, you prefer those; otherwise, a king room will do. You don't want to bring too much luggage, but since summer makes you sweat a lot and you need to change clothes frequently, the hotel must have laundry service. It also needs to be Family-friendly.

## Context

- Current time: `2026-06-30 21:13:56`
- Domain: `ota`

## Requirements / Rubrics

- The outbound flight should be from Fuzhou to Beijing
- The outbound flight departure date should be July 4, 2026 (this Saturday)
- The outbound flight ticket quantity should be 3
- The outbound flight should be an afternoon or evening flight
- The return flight should be from Beijing to Fuzhou
- The return flight departure date should be July 12, 2026 (next Sunday)
- The return flight ticket quantity should be 3
- The return flight should be an afternoon or evening flight
- The hotel should be in the style of Qing Dynasty royal garden
- The hotel needs to provide laundry service
- The hotel must be Family-friendly
- The hotel room type should be family room or king room
- The hotel booking should be for 8 nights, on July 4, 2026, July 5, 2026, July 6, 2026, July 7, 2026, July 8, 2026, July 9, 2026, July 10, 2026, and July 11, 2026
- If both king room and family room are available on the same date, family room should be prioritized, so the room type for July 11, 2026 should be family room

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
