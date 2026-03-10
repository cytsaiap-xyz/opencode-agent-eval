# VitaBench Task: Ota #48

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Next month, on the first Saturday of the first week, you'll attend a friend's baby's full-month celebration in Hangzhou. After attending the celebration, you'll need to return home the same day, so you're planning to arrive two days earlier to explore the area. You want to check the weather in Hangzhou during those days. If the weather is nice, you prefer to stay at a hotel close to West Lake, within about 500 meters, so you can see the sunrise by the lake on Thursday and Friday mornings. If it's rainy, you might consider a more economical option, even if it's further from West Lake - three to four kilometers would be fine. After booking the hotel, you want to roughly plan your itinerary. You've heard that Lingyin Temple is very popular, and you want to visit it on Thursday. It would be convenient if you could buy tickets and incense in advance, and having a professional guide would be ideal. Additionally, you'd like to see an art exhibition on Friday, with just a regular ticket.

## Context

- Current time: `2027-02-24 15:21:38`
- Domain: `ota`

## Requirements / Rubrics

- Need to check the weather in Hangzhou on March 4, 2027 and March 5, 2027, which shows cloudy and sunny respectively, neither is rainy, so the distance between the hotel in the hotel order and the West Lake Scenic Area at 1 Longjing Road, West Lake District, Hangzhou, Zhejiang Province should be less than or equal to 500 meters
- The hotel order should include rooms for two nights, specifically for 2027-03-04 and 2027-03-05
- The attraction in the attraction order with date 2027-03-04 should be Lingyin Temple
- The ticket in the attraction order with date 2027-03-04 should be Adult Ticket
- The ticket in the attraction order with date 2027-03-04 should include an Incense and Candle Set
- The ticket in the attraction order with date 2027-03-04 should include Guided Tour Service
- The attraction in the attraction order with date 2027-03-05 should be Zhejiang Art Museum
- The ticket in the attraction order with date 2027-03-05 should be Contemporary Art Exhibition Ticket

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
