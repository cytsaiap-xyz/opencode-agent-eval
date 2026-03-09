# VitaBench Task: Instore #84

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your birthday is on the 24th of this month, and you want to treat 5 close girlfriends to a meal. You think that French restaurant you frequently visited before was quite good, and you want to check if they have any birthday special packages, preferably for six people. If they have one, you'll purchase it directly. If not, a four-person special package would also work. If neither is available, you plan to choose another highly-rated BBQ buffet restaurant within 5km of your home and buy six single-person buffet vouchers. Regardless of which option you choose, you want to book a table for 12 noon. You and your girlfriends all enjoy playing billiards, so you plan to find a billiards hall with a rating of no less than 4.5 within one kilometer of the restaurant and buy a 4-hour package to go play after the meal.

## Context

- Current time: `2024-06-18 22:33:41`
- Domain: `instore`

## Requirements / Rubrics

- Query user's historical behavior, the French restaurant that the user frequently visits is Chuli Fusion French Restaurant (Wangjing Jinhui Branch), which offers birthday special packages for six people, therefore the restaurant order should be placed at Chuli Fusion French Restaurant (Wangjing Jinhui Branch)
- The ordered item at Chuli Fusion French Restaurant (Wangjing Jinhui Branch) should be a birthday special package
- The ordered item at Chuli Fusion French Restaurant (Wangjing Jinhui Branch) should be suitable for 6 people
- The reserved restaurant should be Chuli Fusion French Restaurant (Wangjing Jinhui Branch)
- Restaurant reservation time should be 2024-06-24 12:00:00
- Restaurant reservation should be for 6 people
- The ordered billiards club should be within 1km (inclusive) of Chuli Fusion French Restaurant, B1 Floor, Jinhui Building, Wangjing, Chaoyang District, Beijing
- The rating of the ordered billiards club should be greater than or equal to 4.5
- The ordered package at the billiards club should be a 4-Hour package

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
