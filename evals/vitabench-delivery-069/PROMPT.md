# VitaBench Task: Delivery #69

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You'll be busy with the requirements report until around 5 PM, so you plan to order the Yanduxian and rice that you had a few days ago, delivered to your office for dinner. A portion that's enough for yourself will be fine. You'll be working overtime for two hours starting at 7 PM, so you also want to get some of Juewei Duck Neck's Signature Duck Neck as a snack during your overtime work. A medium portion will be sufficient.

## Context

- Current time: `2025-04-16 16:40:08`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for dinner order should be Guorui Building, 359 Jiangdong Middle Road, Jianye District, Nanjing, Jiangsu Province
- The estimated delivery time for dinner order should be around 2025-04-16 17:00:00
- The dinner order should select Xiao Chuniang Huaiyang Cuisine (Hexi Aomei Building Store)
- The dinner order should include Huaiyang Yanduxian and Rice
- The Huaiyang Yanduxian in the dinner order should be single portion size, quantity of 1
- The delivery address for overtime snack order should be Guorui Building, 359 Jiangdong Middle Road, Jianye District, Nanjing, Jiangsu Province
- The estimated delivery time for overtime snack order should be around 2025-04-16 19:00:00
- The overtime snack order should select Juewei Duck Neck
- The overtime snack order should include Signature Duck Neck
- The Signature Duck Neck in the overtime snack order should be medium size

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
