# VitaBench Task: Delivery #99

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You are very busy today and can't take a lunch break. You need to have lunch before the meeting starts at 1:30 PM so you can continue handling your work. You plan to order a mild-flavored bibimbap along with a hot sweet drink to boost your energy. You believe that 'you get what you pay for,' so you hope the bibimbap costs more than 25 yuan. Additionally, you want to add some crispy snacks that you can share with others during the meeting.

## Context

- Current time: `2024-09-20 11:55:00`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the bibimbap order should be Building D, Jianye Headquarters Harbor, Intersection of Dongfeng East Road and Ruyi West Road, Ruyi Lake Street, Jinshui District, Zhengzhou City, Henan Province
- The estimated delivery time for the bibimbap order should be around September 20, 2024, 12:00:00-13:00:00, so that the meal can be finished before the meeting
- The bibimbap item selected should be tuna bibimbap type
- The bibimbap item selected should be non-spicy flavor
- The bibimbap item price should be above 25 yuan
- The delivery address for the sweet drink order should be Building D, Jianye Headquarters Harbor, Intersection of Dongfeng East Road and Ruyi West Road, Ruyi Lake Street, Jinshui District, Zhengzhou City, Henan Province
- The estimated delivery time for the sweet drink order should be before 13:30 on September 20, 2024
- The selected drink should be a hot drink type
- The selected drink should have energizing effects, such as containing caffeine
- The delivery address for the snack order should be Building D, Jianye Headquarters Harbor, Intersection of Dongfeng East Road and Ruyi West Road, Ruyi Lake Street, Jinshui District, Zhengzhou City, Henan Province
- The estimated delivery time for the snack order should be before 13:30 on September 20, 2024
- The selected snack should be crispy type
- The selected snack should be large size or in a shareable format

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
