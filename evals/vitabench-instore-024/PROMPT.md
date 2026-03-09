# VitaBench Task: Instore #24

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your bestie got Korean semi-permanent eyebrow microblading done with great results, so you want to try it too. You hope to find a permanent makeup salon with skilled technicians and higher ratings. You're concerned that places charging too little might have poor technique, so you plan to choose the most expensive payment option and book a specific time. You originally wanted to go at 3 PM on Saturday, but your husband seems to be returning from his business trip that day, so you need to pick him up from the airport that afternoon. He'll exit the airport at 5 PM, and with an hour's drive you can go to that Italian restaurant you visited last time for dinner. You want to check if they have any Qixi Festival Set Menu available to purchase and make a reservation in advance. If there's no Qixi menu, you'll just book a table. With this schedule, you'll have to reschedule your eyebrow appointment to the same time the next day.

## Context

- Current time: `2025-08-06 14:32:00`
- Domain: `instore`

## Requirements / Rubrics

- The permanent makeup shop I order from must have technicians with excellent skills
- The permanent makeup shop must have a rating greater than or equal to 4.2
- The package from the permanent makeup shop must be semi-permanent eyebrow microblading
- Need to search for the most expensive semi-permanent eyebrow microblading package, which is Korean Semi-Permanent Eyebrow Microblading (Chief Technician Jin Zhishou) from Celebrity Permanent Makeup & SPA Center for 3280 yuan, therefore the order must be for Korean Semi-Permanent Eyebrow Microblading (Chief Technician Jin Zhishou) from Celebrity Permanent Makeup & SPA Center
- Must check user behavior history to find previously visited Italian restaurants, which shows La Vita Italian Traditional Cuisine; the in-store dining establishment must be La Vita Italian Traditional Cuisine
- Need to check if La Vita Italian Traditional Cuisine offers a Qixi Festival Set Menu, results show they do; the in-store dining order must be for the Qixi Festival Set Menu
- The restaurant reservation order needs to book for 6:00 PM on Saturday, August 9, 2025
- The restaurant reservation must be for 2 people
- The reservation should be made at La Vita Italian Traditional Cuisine
- The eyebrow microblading appointment time must be at 3:00 PM on Sunday, August 10, 2025
- The permanent makeup shop for the appointment should be Celebrity Permanent Makeup & SPA Center

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
