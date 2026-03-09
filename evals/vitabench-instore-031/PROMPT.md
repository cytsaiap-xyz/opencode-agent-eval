# VitaBench Task: Instore #31

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You have recently developed a strong interest in archery and plan to find a professional archery hall for a good experience. When selecting a venue, your first consideration is safety - you believe the venue must be equipped with comprehensive safety protection facilities, and staff must have professional safety guidance qualifications. You want to purchase an archery experience package for two with free instruction, preferably including protective gear and basic archery tutorial. If protective gear is not included in the package, you will need to buy a two-hour protective gear rental package. After archery, you plan to take your wife for a Japanese meal for two, but not to the restaurant you visited last time. You want to try other popular Japanese restaurants with an average cost not exceeding 300 yuan per person. A slightly longer distance is acceptable, as long as it's within about 4-5 kilometers from the archery hall.

## Context

- Current time: `2025-04-04 17:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The ordered package is an archery experience package
- The ordered archery package is for two people
- The ordered archery hall must be equipped with complete safety protection facilities
- The staff at the ordered archery hall must have professional safety guidance qualifications
- The ordered archery package must include free instruction
- Should check if the double experience package at the ordered archery hall includes protective gear, the result is yes; the ordered package for two must include protective gear
- The ordered Japanese cuisine package is for two people
- The ordered restaurant cannot be 'Sushi Ichiban' from the user's order history
- The ordered restaurant must be an internet celebrity store
- The average consumption per person for the ordered package must not exceed 300 yuan (300 yuan included)
- The ordered restaurant must be within 4-5 kilometers from Gold Medal Archery Club, 3rd Floor, Building B, Yuefeng Plaza, 89 Culture Road, Jinshui District, Zhengzhou

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
