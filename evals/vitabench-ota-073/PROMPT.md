# VitaBench Task: Ota #73

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You are planning to take your family of three to Ho Chi Minh City next week to experience the rich Southeast Asian culture. When planning your itinerary, first determine your round-trip dates, compare different date combinations to find the cheapest option, ensuring you stay in the destination for four days. After selecting the appropriate flights, you can proceed with payment. For accommodation, you don't plan to stay at the same hotel throughout the trip. For the first night, find a five-star hotel with spa services. For the following two nights, choose a place that offers an authentic local experience. Since your child is young enough to share a bed with you and your spouse, book a Twin Room at each hotel, with a budget of no more than 1000 yuan per night. Your husband has an important meeting on the day before New Year's Day, so he will stay at the hotel that day while you take your child to visit the Independence Palace. On New Year's Day, you plan to visit the Ho Chi Minh Fine Arts Museum, so you want to book the tickets in advance now.

## Context

- Current time: `2024-12-23 08:38:17`
- Domain: `ota`

## Requirements / Rubrics

- Compare different dates for round-trip flights between Shanghai and Ho Chi Minh City and choose the cheapest option, while ensuring a 4-day stay in Ho Chi Minh City. Calculations show that the departure flight date should be 2024-12-30
- The departure flight should be Economy Class
- The number of departure flight tickets to purchase is 3
- The departure flight is from Shanghai to Ho Chi Minh City
- Compare different dates for round-trip flights between Shanghai and Ho Chi Minh City and choose the cheapest option, while ensuring a 4-day stay in Ho Chi Minh City. Calculations show that the return flight date should be 2025-01-02
- The return flight should be Economy Class
- The number of return flight tickets to purchase is 3
- The return flight is from Ho Chi Minh City to Shanghai
- The hotel for the first night should be five-star
- The hotel for the first night should include spa services
- The hotel booking for the first night should be for December 30, 2024
- The room type for the first night hotel booking should be a Twin Room
- The nightly rate for the first night hotel room should not exceed 1000 yuan
- The hotel for the next two nights should have Local Features
- The hotel bookings for the next two nights should be for December 31, 2024 and January 01, 2025
- The room type for the next two nights hotel booking should be a Twin Room
- The nightly rate for the next two nights hotel room should not exceed 1000 yuan
- The Independence Palace attraction booking date should be December 31, 2024
- The Independence Palace attraction booking should include Adult Ticket
- The number of Adult Tickets for the Independence Palace attraction should be 1
- The Independence Palace attraction booking should include Child Ticket
- The number of Child Tickets for the Independence Palace attraction should be 1
- The Ho Chi Minh Fine Arts Museum booking date should be January 01, 2025
- The tickets purchased for the Ho Chi Minh Fine Arts Museum should be Family Package (2 Adults + 1 Child)

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
