# VitaBench Task: Instore #66

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You've been having nightmares and waking up in the middle of the night lately, probably due to too much stress, so you're planning to take a meditation class. You want to find a healing center that has been in business for 3 years or more, preferably a well-known chain brand, and purchase a single session package with a new customer benefit price, then book an appointment for 6 PM tonight. You hope the class will last one and a half hours, and you're thinking about finding a car wash within 1km of the healing center to buy a voucher for interior and exterior cleaning, preferably including seat care, so that your car would be ready right when your healing session ends. If you can't find one, that's fine too.

## Context

- Current time: `2025-12-25 16:35:00`
- Domain: `instore`

## Requirements / Rubrics

- The healing center should have been in business for 3 years or more
- The healing center should be a well-known chain brand
- The ordered item at the healing center should be a meditation course
- The ordered item at the healing center should be a single session package
- The ordered item at the healing center should be at new customer benefit price
- The duration of the ordered item at the healing center should be 1.5 hours
- The booked healing center should be Mindful Space Meditation Center (Science Park Branch)
- The booking time for the healing center is 2025-12-25 18:00
- The number of people for the healing center booking is 1
- Should check whether there is a car wash service within 1000m (inclusive) of 3/F, Tower B, High-Tech Plaza, 22 Keyuan Road, Science Park South Area, Nanshan District, Shenzhen (Mindful Space Meditation Center) that offers 1.5h service including interior and exterior cleaning and seat care. The result is yes, therefore should place an order at the car wash service. The distance from the car wash service to 3/F, Tower B, High-Tech Plaza, 22 Keyuan Road, Science Park South Area, Nanshan District, Shenzhen (Mindful Space Meditation Center) should be within 1000m (inclusive)
- The ordered item at the car wash service should be a car wash voucher
- The duration of the ordered item at the car wash service should be 1.5h
- The ordered item at the car wash service should include interior and exterior cleaning and seat care

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
