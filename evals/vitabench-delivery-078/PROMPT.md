# VitaBench Task: Delivery #78

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You'll probably finish work around 12:00 PM and plan to order some local specialty delivery to share with your clients. At 4:00 PM your younger cousin will come to see you, and you want to order some lemon drinks in advance to enjoy with her  together - something refreshing, cool but without ice. At 8:00 PM you need to go back to your studio to work overtime, and you're thinking of ordering a spicy soup noodle for dinner, but you're feeling a bit greasy and don't want to eat meat.

## Context

- Current time: `2025-10-16 10:52:13`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for lunch order should be Co-working Space, 5th Floor, Center 66, No. 139 Renmin Middle Road, Liangxi District, Wuxi City, Jiangsu Province
- The estimated delivery time for lunch order should be around 2025-10-16 12:00
- The lunch order should select Wu-Yue specialties, and the portion should be suitable for two people
- The delivery address for afternoon drink order should be Co-working Space, 5th Floor, Center 66, No. 139 Renmin Middle Road, Liangxi District, Wuxi City, Jiangsu Province
- The estimated delivery time for afternoon drink order should be around 2025-10-16 16:00
- The afternoon drink order should select lemon drinks that have refreshing effects
- The product specification for afternoon drink order should select no ice
- The total number of products for afternoon drink order should be 2 portions
- The delivery address for dinner order should be Co-working Space, 5th Floor, Center 66, No. 139 Renmin Middle Road, Liangxi District, Wuxi City, Jiangsu Province
- The estimated delivery time for dinner order should be around 2025-10-16 20:00
- The dinner order should select Spicy Beef Noodle Soup products without meat side dishes

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
