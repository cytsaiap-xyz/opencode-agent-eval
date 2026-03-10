# VitaBench Task: Instore #73

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

This afternoon, you want to take your wife and child to go indoor rock climbing. Both you and your wife have tried it before, but it's the first time for your child, so you must find a rock climbing gym with comprehensive safety facilities, and buy a children's beginner instruction package for him, preferably with 1-on-1 instruction. For you two, if there's a two-person package available, you'll buy one; if not, you'll have to get two single person experience packages without instruction included. After purchasing, you'll make a reservation for 2 PM. Your wife then mentions that her best friend's family of three will join you for dinner, so you plan to find a Chaoshan beef hot pot restaurant with fresh ingredients in the shopping area closest to the rock climbing gym. Since the children won't eat much, you think a 6-8 person meal with premium beef tenderloin would be appropriate. Worried about waiting in line at the 6 PM dinner rush, you want to make a reservation now.

## Context

- Current time: `2025-07-19 10:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The rock climbing gym should be an indoor rock climbing gym
- The rock climbing gym should provide complete safety facilities
- The rock climbing gym order should include a children's beginner instruction package
- The quantity of children's beginner instruction package ordered should be 1
- The children's beginner instruction package should include 1-on-1 instruction service
- Should check if there are two-person packages without instruction in the rock climbing gym, the result is no, so the rock climbing gym order should include a single person experience package
- The quantity of single person experience package ordered should be 2
- The children's beginner instruction package and single person experience package should be from the same vendor
- The reserved rock climbing gym should be Extreme Rock Climbing Gym
- The reservation time for the rock climbing gym should be 2025-07-19 14:00
- The number of people for the rock climbing gym reservation should be 3
- The Chaoshan beef hot pot restaurant should be within the commercial district
- The commercial district where the Chaoshan beef hot pot restaurant is located should be the closest one to Extreme Rock Climbing Gym, 3rd Floor, Building A, Wanda Plaza, 26 Taihu Middle Road, Xinbei District, Changzhou, Jiangsu Province
- The ingredients provided by the Chaoshan beef hot pot restaurant should be fresh
- The ordered item from the Chaoshan beef hot pot restaurant should be a 6-person meal, not multiple single-person packages
- The ordered item from the Chaoshan beef hot pot restaurant should include premium beef tenderloin
- The portion of the ordered item from the Chaoshan beef hot pot restaurant should be suitable for 4 adults and 2 children
- The reserved Chaoshan beef hot pot restaurant should be Chao Niu Fresh Chaoshan Beef Hot Pot
- The reservation time for the Chaoshan beef hot pot restaurant should be 2025-07-19 18:00
- The number of people for the Chaoshan beef hot pot restaurant reservation should be 6

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
