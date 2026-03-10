# VitaBench Task: Cross Domain #23

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Your parents are coming to visit you and staying overnight, and you've set aside 1,000 yuan to treat them well. You want to book a comfortable king room for one night, choosing the brand you stay at most frequently, and it must be within 3 kilometers of your home so you can easily take care of any needs. You also want to buy your mother a skincare product as she pays attention to her skin care and has been complaining about spots on her face recently. You plan to take them to eat Traditional Min Cuisine, and you need to pre-purchase a set with a variety of dishes and sufficient portions. The meal must include Ginger Duck, but today's expenses cannot exceed your budget. You'll be going out to pick them up soon, so the skincare product must be delivered within an hour. If that's not possible, it can be delivered to the restaurant.

## Context

- Current time: `2024-12-30 15:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The total budget for hotel, skincare products and restaurant orders cannot exceed 1000 yuan
- Need to check the user's most frequently stayed hotel brand in historical behavior, which is Home Inn, and the hotel brand ordered must be Home Inn
- The room type ordered must be a King Room
- The ordered hotel must be within 3 kilometers (inclusive) of Fengsheng Garden, No.328 Tian'an South Road, Fengze District, Quanzhou, Fujian Province
- The check-in date for the hotel order should be December 30, 2024
- The skincare products ordered must have Spot Removal effects
- The delivery address for the skincare products order should be Fengsheng Garden, No.328 Tian'an South Road, Fengze District, Quanzhou, Fujian Province
- The delivery time for the skincare products order should be before 16:30 on December 30, 2024
- The restaurant ordered should serve Traditional Min Cuisine
- The Minnan Cuisine order set meal should have a variety of dishes
- The Minnan Cuisine order set meal must include Ginger Duck
- The Minnan Cuisine order set meal should be enough for at least 3 people

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
