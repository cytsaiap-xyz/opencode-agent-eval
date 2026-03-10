# VitaBench Task: Ota #98

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You and your colleagues have just finished handling a tricky case in Jiang County, and since you're already there, you want to visit the Jiangbei Grand Canyon before leaving. You plan to tour the canyon early tomorrow morning. There are three colleagues besides yourself, and you need to purchase tickets for everyone. You're still considering whether to return to Taiyuan tomorrow evening. Jiang County is located in Yuncheng, Shanxi, and you need to depart from Yuncheng Railway Station. You want to find out the distance from Jiangbei Grand Canyon to Yuncheng Railway Station. If the distance is more than 100 kilometers, you'll return the day after tomorrow at noon. If the distance is within 100 kilometers, you can consider taking the last train back tomorrow evening. After checking the distance, you need to purchase return train tickets for everyone - Second Class Seat will be fine. Additionally, if you're returning the day after tomorrow, you want to check if there's a park near Yuncheng Railway Station. If there is, you can take a stroll there before the train departs.

## Context

- Current time: `2023-01-16 09:32:16`
- Domain: `ota`

## Requirements / Rubrics

- The attraction ordered is Jiangbei Grand Canyon
- The number of tickets ordered is 4
- The ticket type should be Adult Ticket
- The date of use for the tickets should be January 17, 2023
- The distance from Jiangbei Grand Canyon to Yuncheng Railway Station is about 72km, which is not more than 100 kilometers, so train tickets for January 17, 2023 should be ordered
- The train number ordered should be D2568
- The train ordered should be from Yuncheng to Taiyuan
- The train seat type ordered should be Second Class Seat
- The number of train tickets ordered should be 4
- The return date is January 17, 2023, not January 18, 2023, so there is no need to check if there is a park near Yuncheng Railway Station

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
