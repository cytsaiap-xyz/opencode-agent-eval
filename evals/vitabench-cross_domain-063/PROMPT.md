# VitaBench Task: Cross Domain #63

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your nephew is coming to your city for college tomorrow, and your sister-in-law will accompany him for registration. You plan to welcome them with a meal. For this welcome dinner, you want to arrange a restaurant with industrial style decor and purchase a set meal that includes snacks popular among young people like fried chicken or French fries. The day after tomorrow, you also want to take them to visit a museum if it's open, so you'd like to book tickets now. Your sister-in-law just turned 60 this year.

## Context

- Current time: `2025-09-03 16:31:33`
- Domain: `cross_domain`

## Requirements / Rubrics

- The restaurant in the dining order must have an industrial style decor
- The restaurant order must include fried chicken or french fries and other snacks
- The restaurant meal set should be for 3 people
- Checked if Nantong Museum is open on September 5th (the day after tomorrow), and the result showed it is open, so tickets for Nantong Museum for the day after tomorrow (September 5th) were booked
- The museum order includes adult tickets
- The museum order includes senior tickets
- The museum order includes 2 adult tickets
- The museum order includes 1 senior ticket

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
