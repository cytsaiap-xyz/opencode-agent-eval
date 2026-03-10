# VitaBench Task: Ota #32

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Recently during the winter vacation, my child went to visit the grandparents. You and your husband are planning to visit Fujian Tulou to experience Hakka culture and relax your mind. While talking about it, you both decide to depart tomorrow and stay there for two nights. You need to check and confirm the train tickets first, prioritizing Second Class Seat, or if not available, then First Class Seat. After determining the transportation method, you can start looking for hotels. You plan to stay near the Tianluokeng Tulou Cluster Scenic Area for both nights, within 3km of the scenic area, so you can also take walks around the vicinity. For the hotel, you prefer something with unique characteristics and it must have a Non-smoking Floor. The hotel room should cost around 600 yuan per night. You remember that there might be a Dragon Head Festival during your trip, so you need to check the calendar to confirm. On that day, you plan to visit Yunshui Yao Ancient Town Scenic Area, where you might encounter local folk activities, so you need to purchase the entrance tickets now.

## Context

- Current time: `2025-02-27 11:50:39`
- Domain: `ota`

## Requirements / Rubrics

- The train ticket in the order is from Shenzhen to Nanjing (Fujian)
- The departure time of the train in the ticket order is February 28, 2025
- The train ticket purchased in the order is Second Class Seat
- The quantity of tickets in the train order is 2
- The booked hotel is within 3km of the Tianluokeng Tulou Cluster Scenic Area
- The hotel booking dates should be February 28, 2025 and March 1, 2025
- The booked hotel should have Hakka Features
- The booked hotel should have Non-smoking Floor
- The price of the hotel room should be around 600 yuan per night
- Check the calendar to confirm the specific date of the Longtou Festival (February 2nd of lunar calendar 2025 is March 1st), the booking time for the scenic area tickets is March 1, 2025
- The purchased tickets are for the Yunshui Yao Ancient Town Scenic Area
- The purchased tickets are Adult Ticket
- The quantity of tickets purchased is 2

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
