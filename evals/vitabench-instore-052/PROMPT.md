# VitaBench Task: Instore #52

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Today, three colleagues from your company are coming to celebrate your housewarming. You want to find a tea house near your home where everyone can drink tea in the afternoon. You need to first order a private room package at a tea house. Your colleagues want to play mahjong at the tea house. After purchasing the private room package, you've made a reservation for 2:00 PM, and you plan to stay until 6:00 PM before going for hot pot. You've decided to find a hot pot restaurant also near your home. You hope that today's total expenses won't exceed 1200 yuan. You're concerned that a 4-person meal might not be enough, so you want to purchase a package that's sufficient for 5 people. The package must include beverages. Since you can't drink alcohol, your colleagues have indicated that they'll just have non-alcoholic drinks.

## Context

- Current time: `2023-03-18 09:15:00`
- Domain: `instore`

## Requirements / Rubrics

- The tea house ordered must be within 3000 meters (inclusive) of Times Mansion, No. 188 Zhiquan Street, East Street, Jinjiang District, Chengdu
- The tea house order must include a four-person package
- The tea house order must include access to a Private Room
- The tea house order must include tea beverages
- The tea house order must include Mahjong service
- Since the user mentioned arriving at 2:00 PM on March 18, 2023 and planning to stay until 6:00 PM on March 18, 2023, the tea house package must support at least 4 Hours of entertainment
- The reserved tea house should be Jinxuan Tea House
- The tea house reservation should be for 4 people
- The tea house reservation time should be 14:00:00 on March 18, 2023
- The hot pot restaurant must be within 3000 meters (inclusive) of Times Mansion, No. 188 Zhiquan Street, East Street, Jinjiang District, Chengdu
- The hot pot package must be suitable for at least 5 people
- The hot pot package must include Beverages
- The hot pot package must not include alcoholic drinks
- The total budget for both the tea house and hot pot restaurant is 1200 yuan. After subtracting the tea house package price, 812 yuan remains. Therefore, the hot pot package price should be less than or equal to 812 yuan

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
