# VitaBench Task: Delivery #86

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Today, a friend is coming from out of town to visit you at home, arriving around 5 o'clock. You want to order two chicken cutlet rice meals from Yoshinoya to eat when they arrive, but not the curry flavor, and not too large in portion size. Additionally, you want to order authentic Qingdao Chuozi Meat from a well-reviewed restaurant for your friend to try. You want the Hand-held Treasure, and your friend doesn't like fatty meat. You both want something spicy but neither of you can handle very spicy food.

## Context

- Current time: `2025-05-01 15:40:39`
- Domain: `delivery`

## Requirements / Rubrics

- The ordered Yoshinoya chicken cutlet rice product should be Teriyaki Chicken Cutlet Rice
- The ordered chicken cutlet rice product specification should be small size or small bowl
- The delivery address for the Yoshinoya chicken cutlet rice order should be No. 23 Donghai West Road, Tiansheng Garden·Haiyun Urban Complex, Shinan District, Qingdao, Shandong Province
- The estimated delivery time for the Yoshinoya chicken cutlet rice order should be around 2025-05-01 17:00:00
- The rating of the ordered Chuozi Meat restaurant should be 4.1 or above
- The Chuozi Meat order should include Hand-held Treasure product
- The Chuozi Meat order should choose cuts that do not contain fat
- All products in the Chuozi Meat order should be mild spicy
- The total number of products in the Chuozi Meat order should be 2
- The delivery address for the Chuozi Meat order should be No. 23 Donghai West Road, Tiansheng Garden·Haiyun Urban Complex, Shinan District, Qingdao, Shandong Province
- The estimated delivery time for the Chuozi Meat order should be around 2025-05-01 17:00:00

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
