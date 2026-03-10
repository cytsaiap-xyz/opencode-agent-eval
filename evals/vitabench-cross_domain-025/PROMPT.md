# VitaBench Task: Cross Domain #25

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

This week, you're attending a wedding in Mianyang with your wife and child, and your relatives have arranged accommodations for you at the JI Hotel near Wangfujing. The wedding is scheduled for the day after tomorrow, so you plan to take your wife and child sightseeing locally for the next two days. Now you want to check the weather for today and tomorrow - whichever day is hotter, you'll go rafting, and on the other day, you'll visit a VR game center. For rafting, you prefer a shorter route and want to see if there are child tickets available, basically looking for the most economical option. Your child has been begging to go to the VR center, so you just need to purchase a two-hour package for him. However, it would be better to find a game center near a shopping mall so that you and your wife can browse around. Oh, you forgot to bring towels and don't want to use the hotel's, so you plan to check on product delivery service, which is cheaper. Your wife and child want to use facial cleansing wipes, so you'll buy a pack of those as well. Since you're going out today, you'll schedule the delivery for around 9 or 10 PM at the hotel.

## Context

- Current time: `2025-07-09 09:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- Must check and compare Mianyang's weather on July 9 and 10, 2025: July 9 is sunny with temperatures of 26-35°C; July 10 is cloudy with temperatures of 27-38°C, July 10 is hotter
- Must arrange activities reasonably according to weather conditions: the date for rafting tickets should be July 10, 2025
- Rafting activity should be suitable for children
- Must choose the most economical option available for rafting, the ticket order package should be Family Ticket (2 Adults 1 Child)
- The VR game center ordered should be near a shopping mall
- The package ordered should be a two-hour children's package at the VR game center
- Must choose the most economical option for the VR game center, the in-store order package should be Children's VR Adventure World (2 hours) 108 yuan
- The delivery address for face washing towels and towels must be JI Hotel, Next to Wangfujing Department Store, 68 East Linyuan Road, Fucheng District, Mianyang, Sichuan Province/JI Hotel next to Wangfujing
- The delivery time for face washing towels and towels should be between 21:00-22:00 on July 9, 2025
- The food delivery order should include 1 face washing towel and 1 towel
- The face washing towel and towel should come from the same store

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
