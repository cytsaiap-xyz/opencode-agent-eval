# VitaBench Task: Delivery #7

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Your brother-in-law is coming to stay overnight, and you want to order stir-fried river snails and a pint of fresh draft beer as a late-night snack, hoping for a merchant with good quality. Also, you have mouth ulcers recently and cannot eat extremely spicy food. You also want to order a drink for your son from another restaurant, but need to be mindful that milk causes digestive discomfort for him. The drink should be delivered now so your child can have it before bedtime, but the late-night snack should be delivered at midnight.

## Context

- Current time: `2025-05-31 18:45:07`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for children's beverage orders should be Green Island Garden, No. 63 Hong Kong Middle Road, Shinan District, Qingdao, Shandong Province (180m walking distance from Exit A of Yan'erdao Road Metro Station)
- The delivery time for children's beverage orders should be before 2025-06-01 00:00:00
- The merchant rating for children's beverage orders should be greater than or equal to 4.0
- Children's beverages should not be milk or any product containing milk, to avoid stomach discomfort in children
- The delivery address for night snack orders should be Green Island Garden, No. 63 Hong Kong Middle Road, Shinan District, Qingdao, Shandong Province (180m walking distance from Exit A of Yan'erdao Road Metro Station)
- The delivery time for night snack orders should be scheduled after 2025-06-01 00:00:00
- The merchant rating for night snack orders should be greater than or equal to 4.0
- The merchant selected for night snack orders should support late-night delivery service
- Items like Stir-fried River Snails in the night snack order should be selected with mild spicy or non-spicy flavor, suitable for users with mouth ulcers

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
