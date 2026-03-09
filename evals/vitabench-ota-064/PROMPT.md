# VitaBench Task: Ota #64

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You've been feeling stressed at work lately and plan to relax with friends on Saturday. For this, you need to check Saturday's weather: if sunny, you'll go to Yellow River Scenic Area; if rainy, you'll go to Henan Museum; if overcast, you'll go to Zhengzhou City God Temple. Then you can purchase the tickets. There will be 3 people on this trip, and after buying the tickets, you need to confirm if the order quantity is correct. Also, since you're going on a trip nearby this weekend, you won't be visiting the aquarium, so you want to cancel the tickets you bought two days ago. The small holiday is coming soon, and you previously planned to visit Kaifeng with your family. Now that you have some free time, you want to check train tickets to Kaifeng for that day. If the journey takes more than one hour, you'll buy First Class Seat tickets; otherwise, you'll buy Second Class Seat tickets. You need to purchase 5 tickets in total.

## Context

- Current time: `2025-03-20 21:11:39`
- Domain: `ota`

## Requirements / Rubrics

- Checked the weather for Saturday (2025-03-22), which is overcast, so the attraction ticket purchased is for Zhengzhou City God Temple
- The number of tickets purchased is 3
- The type of tickets purchased is Adult Ticket
- The date of the purchased tickets is March 22, 2025
- The order status for the Aquarium tickets purchased the day before yesterday is cancelled
- By checking the calendar, the upcoming holiday is April 4, 2025 (Tomb Sweeping Day), and the train ticket purchase date is April 4, 2025
- The train tickets purchased are from Zhengzhou to Kaifeng
- According to the inquiry, the total train journey takes 28 minutes, which is less than 1 hour, so the tickets purchased are Second Class Seat
- The number of train tickets purchased is 5

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
