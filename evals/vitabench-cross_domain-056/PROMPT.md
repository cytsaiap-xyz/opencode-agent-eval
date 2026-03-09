# VitaBench Task: Cross Domain #56

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You're planning to reunite with your college classmate tonight and want to find a highly-rated KTV that's close to your office, booking a spot for two people at 6 PM. Your friend is flying in from Guangzhou and will take a taxi directly from the airport to the KTV, but due to rush hour traffic, she'll likely arrive later than you. She forgot to bring her charging head for her iPhone 13, so you plan to buy her an original fast charger at the store. You'd like to purchase a charging head package voucher that can be redeemed directly at the store. She's staying until the day after tomorrow, and her return flight tickets are very affordable, so she's inviting you to visit Guangzhou for a few days. You need to check ticket prices, and if there are no holidays in the coming days, you can go for an off-peak trip. You want to leave after finishing lunch at noon the day after tomorrow but don't want to land too late to miss the 5 PM dinner time. To avoid ticket price fluctuations, you want to book your flight now. You need to allow two hours from home to the airport for check-in and baggage drop, so make sure to select the correct flight time.

## Context

- Current time: `2025-09-12 17:05:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The booked KTV should have a rating of 4.0 or above
- The booked KTV should be within 3km of Room 1506, Tower A, Wuhan Tiandi, 688 Jiefang Avenue, Jianghan District, Wuhan
- The KTV reservation should be for 2 people
- The KTV reservation time should be 18:00:00 on 2025-09-12
- The ordered product should be compatible with iPhone 13
- The ordered product should be a charging head
- The ordered product should be an Original Factory Product
- The ordered product should support Fast Charging
- By checking the calendar, there are no holidays coming up, so purchase flight tickets for September 14, 2025
- The user plans to finish lunch at 12:00 and leave afterward, plus a two-hour buffer, so the flight departure time should be at or after 14:00:00
- The user doesn't want to land too late and miss dinner at 17:00, so the flight arrival time should be at or before 17:00:00
- The purchased flight ticket should be for a flight from Wuhan to Guangzhou

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
