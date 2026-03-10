# VitaBench Task: Instore #12

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Tomorrow is a sports day for you and three of your workout buddies. You're planning to play badminton at an outdoor sports venue, and you've decided on a sports center you've been to before because the facilities were pretty good. If the maximum temperature doesn't exceed 30 degrees, you'll purchase a court package for tomorrow from 2-6 PM. If it's above 30 degrees, you and one of your workout buddies don't want to be outdoors, so you'll find a new indoor venue with good air conditioning, keeping the same reservation time. The other two workout buddies can't be in air conditioning, so they'll still go to the outdoor venue, and you won't need to cancel the first reservation. Since sports consume a lot of energy, after working out, you plan to find a highly-rated whole roasted lamb restaurant for dinner. This restaurant should preferably be within 2 kilometers of your sports venue. You all have big appetites, so you'll need to order a set meal for 5-6 people. And by the way, none of you drink alcohol.

## Context

- Current time: `2024-07-03 19:45:00`
- Domain: `instore`

## Requirements / Rubrics

- Should check if the highest temperature on July 4, 2024 exceeds 30 degrees. The result is no, so the sports venue order should be from a previously visited gymnasium
- Need to check user's historical behavior to find previously visited gymnasiums. The result is Lexing Sports Center, so the sports venue order should be from Lexing Sports Center
- The product ordered at the sports venue should be a Badminton Court usage voucher
- The usage duration for the sports venue product should be 4 Hours
- The quantity of sports venue product ordered should be 1
- The reserved sports venue should be Lexing Sports Center
- The sports venue reservation time should be 2024-07-04 14:00:00
- The number of people for the sports venue reservation should be 4
- The rating of the whole roasted lamb restaurant should be 4.2 or above
- The whole roasted lamb restaurant's distance from Lexing Sports Center, 77 Sports Road, Yingze District, Taiyuan should not exceed 2km (including 2km)
- The product ordered from the whole roasted lamb restaurant should be a set for 5-6 people
- The quantity of product ordered from the whole roasted lamb restaurant should be 1
- The set ordered from the whole roasted lamb restaurant should be non-alcoholic

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
