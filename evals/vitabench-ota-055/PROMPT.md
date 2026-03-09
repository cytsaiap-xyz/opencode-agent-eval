# VitaBench Task: Ota #55

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your child has an extracurricular assignment about Confucian culture this week, so you're thinking of taking her to the Confucius Temple in Qufu for some firsthand experience this weekend. For train tickets, you want to book the fastest train departing around 7 AM on Saturday, which fits your schedule perfectly, with the total ticket cost not exceeding 400 yuan. You decide to stay overnight in Qufu on Saturday, booking a twin room at your most frequently used hotel brand, as your daughter prefers to sleep in her own bed to feel comfortable. You've heard that Nishan Sacred Land is particularly nice, but if the weather is bad, there won't be much to see there. So, you plan to check Sunday's weather forecast first before deciding whether to purchase tickets for that attraction, while buying tickets to the Confucius Temple for Saturday. Your child is 13 years old, so you want to check if there are any discounted tickets available for her.

## Context

- Current time: `2026-06-10 10:13:36`
- Domain: `ota`

## Requirements / Rubrics

- The train ticket booking date is June 13, 2026
- The booked train ticket is for a train departing around 7 AM
- The booked train ticket corresponds to the train with the shortest travel time
- The number of train tickets booked is 2
- The total price of the booked train tickets does not exceed 400
- The booked train tickets are from Linyi to Qufu
- The hotel booking should be with the brand that the user most frequently stays at (which is Home Inn according to the user profile)
- The hotel booking date is June 13, 2026
- The room type in the hotel booking is a twin room
- The Confucius Temple tickets are purchased for June 13, 2026
- Only adult tickets are available when checking Confucius Temple ticket information, so all tickets in the Confucius Temple order are adult tickets
- The number of tickets in the Confucius Temple order is 2
- Check the weather in Qufu on June 14, 2026 (which is sunny), purchase tickets for Nishan Sacred Land for June 14, 2026
- Check that the age range for child tickets at Nishan Sacred Land is 6-15 years old, the child is 13 years old, so purchase a child ticket for them
- The Nishan Sacred Land order includes adult tickets

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
