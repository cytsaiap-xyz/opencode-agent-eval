# VitaBench Task: Cross Domain #29

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Today, the team completed the project work ahead of schedule, and you plan to order afternoon tea for your teammates, to be delivered around five or six o'clock. You need a total of 12 cups, all with half sugar, three flavors will do, and two of them should be hot; I don't drink anything containing alcohol. You haven't been bowling for a long time, and after work, you want to go to a nearby bowling alley to exercise, looking for one with the highest rating. By the way, you need to check what timed packages the bowling alley offers, and place an order now. You prefer the unlimited time package. Tomorrow is your grandmother's birthday, and now that the project is finished, you plan to make a trip back to Daqing. You need to buy a ticket for the earliest train tomorrow, preferably a First-class seat.

## Context

- Current time: `2025-04-14 16:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- Afternoon tea order should include 12 drinks
- All drinks in the afternoon tea order must be half-sugar, cannot choose full sugar, sugar-free or non-adjustable sugar drinks
- Afternoon tea order drinks must include three different flavors
- Afternoon tea drinks must include at least two hot drinks
- The afternoon tea order must consider the user's dietary restrictions and cannot include alcoholic beverages
- The delivery address for the afternoon tea order should be 12th Floor, Building B, Yuanda Shopping Mall, intersection of 5th Avenue and Lijiang Road, Qunli, Daoli District, Harbin, Heilongjiang Province
- The delivery time for the afternoon tea order should be between 5pm and 6pm on April 14, 2025
- The bowling alley should be located within 3km of 12th Floor, Building B, Yuanda Shopping Mall, intersection of 5th Avenue and Lijiang Road, Qunli, Daoli District, Harbin, Heilongjiang Province
- Should search for the highest-rated bowling alley, which is Star Motion Bowling Alley
- The bowling order package should be single person unlimited time
- The bowling order package should be for 1 person
- Should search for the earliest departure from Harbin to Daqing, which is G1205, and the order should be for train G1205
- The train ticket order must be for First-class seat
- The train ticket order should be for April 15, 2025

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
