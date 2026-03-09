# VitaBench Task: Delivery #71

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You are planning to enjoy quality Haidilao Hot Pot at home with your husband and young daughter tonight. You are ready to accommodate your child's preferences. You also plan to order two buckets of the fruit tea you ordered yesterday, as your daughter likes the sweet and sour flavor, without adding extra ice.

## Context

- Current time: `2024-09-14 17:08:00`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the fruit tea order should be Zhinong Li, Opposite to the North of Huaxin Garden, Xingfu South Road, Zhifu District, Yantai, Shandong Province
- The estimated delivery time for the fruit tea order should be around 2024-09-14 18:00:00
- The fruit tea order should select Auntie Shanghai Select Tea (Xingfu Middle Road Branch) as the store
- The fruit tea order should select Extra Large Bucket of Fruit Tea as the product
- The temperature attribute for the fruit tea order should be selected as No Ice
- The delivery address for the hot pot order should be Zhinong Li, Opposite to the North of Huaxin Garden, Xingfu South Road, Zhifu District, Yantai, Shandong Province
- The estimated delivery time for the hot pot order should be around 2024-09-14 18:00
- The hot pot order should select a product with tomato flavor to cater to children's preferences
- The hot pot order should select a set meal suitable for 2-3 people

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
