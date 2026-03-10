# VitaBench Task: Ota #80

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

The client gave very positive feedback on this project, and the manager specifically arranged for you to take a break from next Monday to Wednesday. You're thinking of leaving this Saturday to spend four days in Xishuangbanna alone to experience Dai culture. You checked and found there are no direct flights to Xishuangbanna, so you plan to transfer in Kunming. You can book the round-trip tickets now. You hope to have plenty of time for the transfer, preferably more than an hour and a half between flights. For accommodation, you plan to stay at the same hotel for all three nights to avoid dragging your luggage around. The hotel should be similar to your usual standard but with Dai cultural elements. Additionally, you want to visit Wild Elephant Valley next Monday and would like to check the weather in advance. If it's not rainy, you'll buy a ticket that includes the sightseeing bus; otherwise, you'll play it by ear.

## Context

- Current time: `2027-06-11 16:39:48`
- Domain: `ota`

## Requirements / Rubrics

- The first leg of the outbound flight must be from Taizhou to Kunming
- The date of the first leg of the outbound flight must be next Saturday, June 19, 2027
- The second leg of the outbound flight must be from Kunming to Xishuangbanna
- The departure time of the second leg must be at least 90 minutes after the arrival time of the first leg
- The date of the second leg of the outbound flight must be June 19, 2027
- The first leg of the return flight must be from Xishuangbanna to Kunming
- The date of the first leg of the return flight must be the fourth day of the trip, June 22, 2027
- The second leg of the return flight must be from Kunming to Taizhou
- The departure time of the second leg of the return flight must be at least 90 minutes after the arrival time of the first leg
- The date of the second leg of the return flight must be June 22, 2027
- There should be only one hotel booking
- The hotel check-in dates must be June 19, 2027, June 20, 2027, and June 21, 2027
- The hotel must feature Dai ethnic style
- The hotel standard must match the user's usual accommodation preference (mainly four-star, comfort-type hotels)
- Weather information for June 21, 2027 (Monday after next week) must be checked and provided, with the result showing cloudy, 22-28 degrees Celsius, 70% humidity, and scenic spot tickets need to be purchased
- The attraction ticket must be for Wild Elephant Valley
- The ticket must include the sightseeing bus
- The date of the attraction ticket must be June 21, 2027

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
