# VitaBench Task: Ota #18

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You watched a vlogger's trip to the desert and became interested in desert surfing and camel riding. You want to deeply experience the desert atmosphere. After some consideration, you've chosen Xiangshawan in Inner Mongolia. You want to go on this desert adventure with your husband. You plan to take annual leave and depart on the first Wednesday of next month. Also, you want to check the weather - if there's rain or a sandstorm in Xiangshawan, you'll go to Shapotou in Ningxia instead. You want to book two basic admission tickets without additional activities for the second day. You need to arrange flights as well, hoping to arrive in the morning. For the evening, you want to stay in a room with a Desert View, and the hotel must be at least 4-star rated. You want to purchase all these items now.

## Context

- Current time: `2027-03-25 12:26:13`
- Domain: `ota`

## Requirements / Rubrics

- Need to provide Inner Mongolia Xiangshawan weather forecast information, with results showing sandstorm in Ordos on April 8, 2027, temperature 8-15 degrees, therefore the destination of the trip should be Ningxia Shapotou
- The attraction for the admission ticket order must be Ningxia Shapotou
- The type of admission ticket order must be basic admission ticket without other activities
- The date of the admission ticket order must be April 8, 2027 (the second day after the first Wednesday of next month)
- The quantity of admission tickets must be 2
- The arrival city for the flight order should be Yinchuan
- The departure date of the flight order must be April 7, 2027 (the first Wednesday of next month)
- The quantity of flight tickets must be 2
- The arrival time of the flight should be in the morning
- The check-in date for the hotel order must be April 7, 2027
- The room in the hotel order needs to have a desert view
- The hotel should be rated 4-star or above
- The hotel address should be located near Ningxia Shapotou rather than Inner Mongolia Xiangshawan

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
