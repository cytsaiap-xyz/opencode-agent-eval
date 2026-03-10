# VitaBench Task: Instore #49

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You notice that someone shared photos of a pottery experience in your social media feed, which looks interesting, and you decide to try it. You need to find a pottery workshop, preferably close to your home, with no budget constraints, and then choose a package that includes basic operation tools and production materials. Tomorrow is the Dragon Boat Festival, so you need to check if this package is available tomorrow. If available, book it for 10 AM tomorrow. If not, then buy a single carpool ticket at that murder mystery game store you visited before, one without horror elements, and book it for the same time tomorrow morning. As for the pottery package, book it for 9 AM the day after tomorrow.

## Context

- Current time: `2024-06-09 15:23:00`
- Domain: `instore`

## Requirements / Rubrics

- The pottery workshop order should be a pottery experience package
- The pottery workshop package should include basic operation tools
- The pottery workshop package should include production materials
- The pottery workshop ordered should be Niba Craftsman Pottery Workshop
- The pottery workshop booked should be Niba Craftsman Pottery Workshop
- The number of people for the pottery workshop booking is 1
- Should check if the ordered pottery workshop item can be used on June 10, 2024 (Dragon Boat Festival), the result is no, so the pottery workshop appointment time is June 11, 2024, 09:00
- Should check if the ordered pottery workshop item can be used on June 10, 2024 (Dragon Boat Festival), the result is no, so need to check the user's behavior history, the last murder mystery game store the user played at was Immersive Murder Mystery Game (Taikoo Li Branch), so the murder mystery game store order should be Immersive Murder Mystery Game (Taikoo Li Branch)
- The murder mystery game store order should be a Single Carpool Ticket
- The murder mystery game store order should not contain horror elements
- The murder mystery game store order should be usable on June 10, 2024 (Dragon Boat Festival)
- The murder mystery game store booked should be Immersive Murder Mystery Game (Taikoo Li Branch)
- The murder mystery game store appointment time is June 10, 2024, 10:00
- The number of people for the murder mystery game store booking is 1

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
