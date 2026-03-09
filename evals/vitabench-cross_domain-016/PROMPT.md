# VitaBench Task: Cross Domain #16

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

I'm going to have an online streaming session with my bestie from Nanjing tonight to watch historical romance dramas. I want to order some exquisite desserts and would like to buy three items, but the total price cannot exceed 30 yuan. I'm allergic to alcohol. After watching this week's two new episodes, we also want to play a couple of games together, but my keyboard is broken and the new one hasn't arrived yet. I want to find an internet café near my neighborhood and order the cheapest package at the closest one. I only need two hours. Next Friday my bestie is coming to visit me, and I need to help her choose a high-speed train that she can catch after work. She gets off work at 6:00 PM and needs an hour to get to the station. I hope she can arrive as early as possible since I can't really stay up late. If suitable options are available, I'd like to purchase the ticket for her now.

## Context

- Current time: `2025-03-09 19:21:44`
- Domain: `cross_domain`

## Requirements / Rubrics

- The dessert order needs to include 3 different types of desserts
- The total price of the dessert order cannot exceed 30 yuan
- The desserts should be exquisite, which is generally reflected in the merchant/product descriptions or labels
- The desserts cannot contain alcohol
- The delivery address for the dessert order should be Room 1203, Building B, Mingfa City Plaza, Intersection of East Changjiang Road and Victory Road, Yaohai District, Hefei, Anhui Province
- Need to find the internet café closest to the user's community, which is Dream Internet Café (Mingfa Plaza Branch)
- Need to find the cheapest package option in the internet café, which is the Standard Computer Seat (2 Hours) at Dream Internet Café (Mingfa Plaza Branch), priced at 15 yuan
- The internet café order package duration should be 2 hours
- The internet café order should be a package for single person use
- Need to check the high-speed rail schedule from Nanjing to Hefei for next Friday (March 14, 2025)
- The departure time of the selected train should be at or after 19:00
- Priority should be given to the high-speed rail that arrives in Hefei earlier
- The date of the ticket order should be March 14, 2025

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
