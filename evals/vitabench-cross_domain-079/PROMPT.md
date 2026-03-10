# VitaBench Task: Cross Domain #79

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You're about to graduate, and you and your college roommates are feeling quite nostalgic, so you've decided to head out together at 17:50 tonight to that BBQ restaurant near campus to eat and reminisce about your four years of college. You want to take photos during the gathering as keepsakes, so you're thinking of buying an instant camera to capture these precious moments, and you'll need photo paper too. If the total doesn't exceed 800 yuan, you can place the order now to be delivered to your dorm, as long as it arrives before you leave. If it can't make it in time, delivery to the BBQ restaurant is fine too. But if it costs more than 800 yuan, it's not really worth it, and you'll just use your phones to take pictures instead. Oh, and both the BBQ restaurant and KTV need to be booked now to avoid disappointment. The four of you also want to visit a large theme park together tomorrow, and for KTV, singing from 8:00 to 23:00 should be about right. Also, check the theme park ticket prices to compare whether student tickets or two-person packages are cheaper, and book the most economical option.

## Context

- Current time: `2024-06-16 17:10:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The reserved dining venue should be a BBQ restaurant
- The BBQ restaurant should be no more than 500m from Room 403, Building 8, Jiaxing College Student Apartments, 1288 Hexing South Road, Nanhu District, Jiaxing, Zhejiang Province
- The BBQ restaurant's opening time should be at or before 18:00
- Seats should be reserved at the BBQ restaurant for 18:00 on June 16, 2024
- The BBQ restaurant reservation should be for 4 people
- The KTV venue ordered should be no more than 500m from BBQ Paradise (Jiaxing College Branch)
- The KTV venue ordered should be a Chain Brand
- Seats should be reserved at the KTV venue for 20:00 on June 16, 2024
- The KTV reservation should be for 4 people
- The total price of the Instant Camera and Photo Paper should be checked, with the lowest result being 818 yuan, which exceeds 800 yuan, so the camera and paper delivery should not be ordered
- The attraction ordered should be a large theme park
- The ordered tickets should be valid for June 17, 2024
- The ticket prices for the attractions should be checked, comparing Student Ticket and Two-Person Package prices. The results are: Jiaxing Happy World Theme Park: Student Ticket 180 yuan, Two-Person Package 380 yuan (190 yuan per person); Fantasy Water World: Student Ticket 158 yuan, Two-Person Package 336 yuan (168 yuan per person); Jiaxing Fantasy Park: Student Ticket 120 yuan, Two-Person Package 280 yuan (140 yuan per person); Student Tickets for Jiaxing Fantasy Park should be ordered
- The number of tickets in the attraction order should be 4

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
