# VitaBench Task: Instore #54

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your friend told you that perfume making is really fun, so you want to try it too. You're looking for a DIY perfume shop with a high rating, preferably in the top five of the best-reviewed places. Since you haven't tried this before, you want to purchase a beginner package with teacher guidance, but nothing too expensive – just the cheapest package the store offers, preferably under 200 yuan, and then place your order. You suddenly remember that you scheduled a bubble cleansing appointment for tomorrow at 3 PM last week, so you decide to cancel that appointment and book the perfume making session at the same time instead. You calculate that after the perfume making, it will be time to pick up your daughter from kindergarten, so you can take her to dinner afterward. Your daughter loves pizza with Italian meat, while you want to have black pepper steak. You plan to eat at the same restaurant by purchasing a set meal that includes both of these dishes in portions suitable for the two of you. You just need to redeem the voucher when you get to the restaurant, and you don't want to spend more than 200 yuan on this meal.

## Context

- Current time: `2024-10-23 19:30:00`
- Domain: `instore`

## Requirements / Rubrics

- DIY perfume shop's rating should be 4.0 or above
- DIY perfume shop should be in the top five of the highest rated stores
- The ordered product at the DIY perfume shop should be suitable for beginners
- The ordered product at the DIY perfume shop should include teacher guidance
- The price of the ordered product at the DIY perfume shop should not exceed 200 yuan (including 200 yuan)
- The ordered product at the DIY perfume shop should be the beginner perfume making starter package
- The appointment time for the DIY perfume shop should be October 24, 2024, at 15:00:00
- The number of people for the DIY perfume shop appointment should be 1 person
- The DIY perfume shop appointment should be at Fragrance Encounter DIY Perfume Studio
- The reservation order for Suran Anti-aging Center (Arc de Triomphe Store) (S17567836452455124_I00004) should have a status of cancelled
- The restaurant order should include both Italian meat pizza and black pepper steak
- The restaurant order should be a set for two, not two individual sets
- The price of the ordered restaurant meal should not exceed 200 yuan (including 200 yuan)

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
