# VitaBench Task: Delivery #62

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Tonight you plan to celebrate your three-year anniversary with your boyfriend. You want to order a cake to be delivered home before 6 PM, but don't want to spend too much. For dinner, you're planning to order a set meal from Gui Xiao Chu Guangxi Cuisine to enjoy leisurely at home with your partner. Since you haven't had much appetite lately, you hope the dishes will be flavorful enough to stimulate your appetite, and the portion doesn't need to be too large. For lunch, you'll just have something simple at the office - a Beef and Egg Rice Noodle Roll will do, with a note requesting less sauce.

## Context

- Current time: `2025-05-20 10:40:13`
- Domain: `delivery`

## Requirements / Rubrics

- The anniversary cake order should select products with high cost-effectiveness
- The delivery time for the anniversary cake order should be before 18:00:00 on May 20, 2025
- The delivery address for the anniversary cake order should be Oasis Garden, No. 133 Minzu Avenue, Qingxiu District, Nanning, Guangxi Zhuang Autonomous Region
- The products in the dinner set meal order should have appetizing effects
- The products in the dinner set meal order should be small portions
- The delivery time for the dinner set meal order should be before 18:00:00 on May 20, 2025
- The delivery address for the dinner set meal order should be Oasis Garden, No. 133 Minzu Avenue, Qingxiu District, Nanning, Guangxi Zhuang Autonomous Region
- The lunch rice noodle roll order should note 'less sauce'
- The lunch rice noodle roll should be of beef and egg flavor
- The delivery time for the lunch rice noodle roll order should be within 11:00:00-12:00:00 on May 20, 2025
- The delivery address for the lunch rice noodle roll order should be Mingmen Tianjing, No. 157 Minzu Avenue, Qingxiu District, Nanning, Guangxi Zhuang Autonomous Region

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
