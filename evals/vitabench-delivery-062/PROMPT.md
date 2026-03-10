# VitaBench Task: Delivery #62

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

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

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
