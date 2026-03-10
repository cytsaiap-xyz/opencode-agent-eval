# VitaBench Task: Delivery #92

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

I'm having two childhood friends over tonight, they'll arrive at 7 PM, and you need to order grilled fish for all of you in advance. One wants garlic flavor and the other wants sauce flavor, but ordering two separate fish would be too much. Also, you want to order your usual Grape Jasmine Tea for them to try, each cup should be Large Size with less sugar. For the main course, order three identical portions of stir-fried rice noodles from that Home-style Restaurant we ate at before, but they don't eat Stir-fried Rice Noodles with Chinese Turnip.

## Context

- Current time: `2025-09-26 17:53:29`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the grilled fish order should be Room 1204, Building 3, Haiyun Garden (Haiyuan Street), No. 24 Haiyuan Street, Shahekou District, Dalian, Liaoning Province (430m walk from Exit B of Second Hospital Metro Station)
- The estimated delivery time for the grilled fish order should be around 19:00 on September 26, 2025
- The dinner order should choose grilled fish items
- The grilled fish order should include a dual-flavor grilled fish with garlic and sauce flavors
- The grilled fish order should select a size for 3 or more people
- The delivery address for the beverage order should be Room 1204, Building 3, Haiyun Garden (Haiyuan Street), No. 24 Haiyuan Street, Shahekou District, Dalian, Liaoning Province (430m walk from Exit B of Second Hospital Metro Station)
- The estimated delivery time for the beverage order should be between 18:00 and 19:00 on September 26, 2025
- The beverage order should choose grape jasmine drinks
- The beverage order specification should be large size with less sugar
- The beverage order quantity should be 3 cups
- The delivery address for the stir-fried rice noodles order should be Room 1204, Building 3, Haiyun Garden (Haiyuan Street), No. 24 Haiyuan Street, Shahekou District, Dalian, Liaoning Province (430m walk from Exit B of Second Hospital Metro Station)
- The estimated delivery time for the stir-fried rice noodles order should be between 18:00 and 19:00 on September 26, 2025
- The stir-fried rice noodles order should select Home-style Restaurant (Stir-fry·Rice Bowls·Dumplings)
- The stir-fried rice noodles order should choose stir-fried rice noodles that do not contain Chinese turnip

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
