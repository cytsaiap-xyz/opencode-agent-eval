# VitaBench Task: Instore #41

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

On Mid-Autumn Festival, you want to take your child to a workshop to make cookies. Since neither you nor your child has baking experience, the store must provide teaching services. The workshop should be within 3 kilometers from home, and you plan to purchase a Parent-Child package and make a reservation for 3 PM that day. The property management has notified that there will be a power outage at your home, but the exact time when power will be restored is uncertain, so you plan to take your child out for dinner that evening. Both of you like fish, and you want to first buy a Hairtail Fish Two-Person Set. The restaurant should be listed on Meituan's rankings, have high ratings, and offer light flavored dishes.

## Context

- Current time: `2025-09-29 14:25:00`
- Domain: `instore`

## Requirements / Rubrics

- The ordered item from the workshop should be a cookie-making package
- The ordered item from the workshop should be a Parent-Child package
- The ordered item from the workshop should include Baking Instruction service
- The workshop location should be within 3 kilometers (inclusive) of Jinshui Garden, 128 Zhenhua Road, Licang District, Qingdao
- The reserved workshop should be Sweetheart Bakery Workshop
- The number of people for the workshop reservation should be 2
- The workshop reservation time should be 2025-10-06 15:00:00
- The ordered item from the restaurant should be a Hairtail Fish set
- The restaurant order should be one Two-Person Set rather than two Single Person Meals
- The restaurant should be on the 2024 Must-Eat List
- The restaurant's rating should be 4.0 or above
- The dishes in the restaurant order should be Light

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
