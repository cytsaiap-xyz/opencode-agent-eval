# VitaBench Task: Ota #97

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You'll be attending a learning exchange conference in Changsha next Friday. You plan to arrive a day early, explore the city on Saturday, and return on Sunday. You previously booked a hotel near the airport, but now think it's not suitable and want to cancel it and book a new one. As a city with rich historical and cultural heritage, Changsha has many cultural attractions worth visiting. You want to visit Orange Isle on Saturday. However, since you'll be in meetings all day Friday and might be tired, you hope to have a relaxing experience on Saturday. Based on past experience, having someone explain the stories behind historical and cultural sites would make the visit more enriching and meaningful. On Sunday, your schedule is tight, so you'll just visit Yuelu Academy briefly. After purchasing tickets, you need to consider accommodation. You've heard that Wuyi Square offers convenient access to various locations, so you'd like to stay nearby. Your budget for the hotel remains the same, but considering you'll be sitting for long periods during the conference, you'd prefer a hotel where you can stretch and exercise in the evening. Next week will be busy with work, so you hope to book the hotel now to avoid forgetting later.

## Context

- Current time: `2024-11-09 21:32:13`
- Domain: `ota`

## Requirements / Rubrics

- The order status of Jinjiang Inn Changsha Huanghua Airport Branch is cancelled
- The usage date of Orange Isle tickets is November 16, 2024
- The Orange Isle tickets should include sightseeing bus
- The Orange Isle tickets should include professional commentary service
- The usage date of Yuelu Academy tickets is November 17, 2024
- The Yuelu Academy tickets should include professional guided tour
- The hotel to be booked should be near Wuyi Square
- The hotel price range should be 300-500 yuan per night
- The hotel should provide a Fitness center
- The hotel order should include rooms for 3 nights, specifically November 14, 2024, November 15, 2024, and November 16, 2024

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
