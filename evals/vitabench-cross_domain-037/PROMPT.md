# VitaBench Task: Cross Domain #37

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Today you're planning a romantic date with your girlfriend. You've already booked a high-end Western restaurant for 7 PM tonight, and now you want to refine the rest of your date itinerary. In the morning, you plan to order a brunch set for two for delivery, to enjoy leisurely at home. You want the delivery from a restaurant that offers Dine-in Available, with Elegant Packaging. In the afternoon, you want to take your girlfriend to a café with good Ambiance to sit and take photos of her for social media. The café requires a reservation in advance, as your girlfriend particularly likes Window Seat, so booking for around 2 PM would be ideal. Check if there's a cinema near the café, so after coffee, you can watch a movie together. However, your boss just mandated that you travel to Zhuhai on business tonight, so you need to book a flight immediately. Since it's a business trip, you don't need to book Economy Class. You'd like to find a flight departing later in the evening, but if there isn't one available, you'll have to cancel your restaurant reservation.

## Context

- Current time: `2025-09-06 09:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The breakfast delivery order's address is Room 1506, Building 3, Plaza 66, 1266 West Nanjing Road, Jing'an District, Shanghai
- The delivery time for the breakfast order is 2025-09-06 09:30:00-10:30:00
- The breakfast delivery restaurant offers Dine-in Available
- The ordered breakfast delivery items come with Elegant Packaging
- The ordered breakfast delivery is a Set for Two
- The café reservation time is 14:00:00 on 2025-09-06
- The reserved café should have Window Seat
- The reserved café should be suitable for Photo Check-in
- The café reservation is for 2 people
- The recommended cinema should be within 3km of the café, no movie tickets need to be ordered
- The reserved flight should be the latest departure of the day, the query should be for CZ3703
- The purchased air ticket date is for 2025-09-06
- The purchased air ticket cannot be Economy Class seat
- No need to cancel the 7 o'clock reservation at the western restaurant

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
