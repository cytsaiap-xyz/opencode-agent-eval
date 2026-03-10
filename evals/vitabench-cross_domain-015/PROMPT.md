# VitaBench Task: Cross Domain #15

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Your bestie is getting married on the August 8th, but she won't accept money gifts from you. You plan to use 3000 yuan to organize an unforgettable bachelorette party for her. You want to hold the party in a 24-hour KTV with private rooms. You want to choose a package that includes champagne and reserve entry at 8:00 PM. You also want to arrange a dessert table, big enough for 10 people, with at least 4 types of desserts. Although it's desserts, avoid anything high in sugar and have it delivered to the KTV around 8:00 PM-9:00 PM. The 3000 yuan won't be fully used up this way. Another mutual friend of yours is currently in Guangzhou, but she recently lost her job and can't come to the wedding due to financial reasons. This is also a pity for your bestie, so you want to check flight and invite her over too. There are no special requirements, just not a red-eye flight. It would be best if she could arrive a few days earlier, the earlier the better, so she could help prepare for the wedding.

## Context

- Current time: `2025-07-30 14:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The KTV ordered must have private rooms that can accommodate 10 people
- The KTV ordered must be open 24 hours
- The KTV package ordered must include champagne
- The KTV package ordered must be applicable for entry at 8:00 PM
- The dessert ordered must be suitable for 10 people
- The dessert package ordered must include at least 4 types of desserts
- The dessert ordered should match the user's dietary preference: avoiding high sugar
- The delivery address for the dessert order should be Golden Age KTV, 89 Jiefang Road, Quanshan District, Xuzhou
- The delivery time for the dessert order should be between 8-9 PM on August 7, 2025
- The total price for KTV and dessert orders should be less than 3000 yuan
- Must check flight prices from Guangzhou to Xuzhou
- The departure time of the flight ordered should be between July 30 and August 8, 2025
- The flight ordered cannot be a red-eye flight
- The flight ticket price cannot exceed 564 yuan
- The flight number in the flight order should be MU5321
- The date of the flight order should be August 3, 2025
- The KTV reserved is Golden Age KTV
- The KTV reservation time is 8:00 PM on August 7, 2025

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
