# VitaBench Task: Delivery #72

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You are an office worker who still has to work overtime during the Dragon Boat Festival holiday, feeling a bit downcast. You want to order some rice dumplings with a bowl of spicy soup to comfort yourself. You don't like sweet rice dumplings, nor do you like rice dumplings from Barbie. You are lactose intolerant and need an energizing Extra-Strong Americano from Luckin Coffee.

## Context

- Current time: `2025-05-31 10:23:25`
- Domain: `delivery`

## Requirements / Rubrics

- Rice dumplings in the order should not be sweet flavored, but should be savory options such as Egg Yolk and Meat Rice Dumpling, Fresh Meat Rice Dumpling, etc.
- Rice dumpling orders should not be from Barbie Steamed Buns & Dumplings stores, but from other vendors offering rice dumplings
- The delivery address for rice dumpling orders should be Wuxi (National) Software Park, 18 Zhenze Road (111 Linghu Avenue), Xinwu District, Wuxi City, Jiangsu Province
- Coffee in the order should not contain dairy products, and should have the 'no milk' attribute
- The delivery address for coffee orders should be Wuxi (National) Software Park, 18 Zhenze Road (111 Linghu Avenue), Xinwu District, Wuxi City, Jiangsu Province

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
