# VitaBench Task: Cross Domain #54

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You just finished your defense and decided to reward yourself with a celebratory takeout. You want Japanese cuisine, but it must include rice, cannot be raw food, a single portion is fine, and should be delivered to your home within an hour. Tomorrow at noon, you want to have lunch with your advisor to report on your defense situation, and need to find a Chinese restaurant close to the school, preferably with a private room. By the way, you don't eat heavy oil spicy food. You've always wanted to visit Hong Kong, and only realized today after finishing your busy schedule that your permit will expire in seven days. You want to check the prices of flights to Hong Kong in the coming days, and select a flight that departs no later than 3 PM for a three-day, two-night trip. You want to book the outbound flight first, choosing the cheapest option. It takes one hour to get from school to the airport, and you need to allow an additional hour for security check and baggage drop-off. You need to make a restaurant reservation now. Since you estimate your meal will take at most one hour, making a reservation for 11:30 AM would be appropriate.

## Context

- Current time: `2025-05-31 17:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- Food delivery order items should be Japanese cuisine
- Food delivery order items must include rice
- Food delivery order items cannot be raw food
- Food delivery order items should be a single portion
- Estimated delivery time for the food delivery order is May 31, 2025, 17:15-18:15
- Delivery address for the food delivery order is Harbin Institute of Technology Student Dormitory Building 3, 74 Xuefu Road, Nangang District, Harbin
- The reserved restaurant should be within 2km of the Main Teaching Building of Harbin Institute of Technology, 92 Xuefu Road, Nangang District, Harbin
- The reserved restaurant should be a Chinese Cuisine restaurant
- The reserved restaurant should have Private Room or Booth Seating
- The reserved restaurant should include dishes that are not Heavy Oil Spicy
- The restaurant reservation time should be June 1, 2025, 11:30
- The restaurant reservation should be for 2 Persons
- The outbound flight date should be between June 1, 2025, 14:30 and June 4, 2025
- The cheapest flight ticket should be selected

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
