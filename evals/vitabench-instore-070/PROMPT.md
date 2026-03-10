# VitaBench Task: Instore #70

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

On the weekend, you want to take your child to a family baking workshop to make a cake. Since your child is young and quite restless, you want to find a place within 5 kilometers from home. Your child loves Doraemon, so you'd prefer to find a shop where you can make a Doraemon cake. You want to buy a family package voucher for 2 adults and 1 child, and book for Saturday morning at 10 AM. If there's nothing within 5 kilometers, then you'll skip cake-making this week and instead find a photography studio nearby. You'll take your husband and child to take a family portrait. You plan to buy a package that includes three outfit changes and costs no more than 400 yuan, as anything higher would be too expensive for you. The appointment time remains the same. After the activity, you plan to find a restaurant within 1 kilometer of either the baking workshop or the photography studio for lunch. You want to buy a family meal package voucher that doesn't exceed 200 yuan.

## Context

- Current time: `2024-12-12 19:45:00`
- Domain: `instore`

## Requirements / Rubrics

- The bakery workshop should be within 5 kilometers or less from Room 501, Unit 2, Building 3, Jinshui Garden, No. 128 Zhenhua Road, Lichang District, Qingdao
- The ordered item from the bakery workshop should be a Doraemon themed baking package
- The bakery workshop ordered item should be suitable for 2 Adults 1 Child
- The bakery workshop reservation should be for Doraemon Dream Bakery Workshop
- The bakery workshop reservation time should be 2024-12-14 10:00:00
- The bakery reservation should be for 3 people
- The ordered restaurant should be within 1 kilometer or less from Doraemon Dream Bakery Workshop, 2nd Floor, Golden Age Plaza, No. 230 Zhenhua Road, Lichang District, Qingdao
- The restaurant ordered items should be Parent-Child Package
- The restaurant ordered items should be suitable for 2 Adults 1 Child
- The restaurant ordered items should be within 200 yuan or less
- Since there is a bakery workshop within 5 kilometers (inclusive) of Room 501, Unit 2, Building 3, Jinshui Garden, No. 128 Zhenhua Road, Lichang District, Qingdao, there should not be any photo studio orders

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
