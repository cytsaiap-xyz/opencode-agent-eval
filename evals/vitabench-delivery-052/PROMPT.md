# VitaBench Task: Delivery #52

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You're planning to cancel the fried skewer wrap order you just impulsively placed because you have a pretty bad cold and cough. However, you're thinking you could still order a tea drink that helps with Cough Relief Lung Nourishing to alleviate your symptoms, preferably a low-sugar option.

## Context

- Current time: `2025-11-08 22:31:38`
- Domain: `delivery`

## Requirements / Rubrics

- Successfully canceled the 4 Meat 5 Veggie Fried Skewer Wrap order from Han Style Fried Skewers store, the order status with order_id A0714002O01 has been updated to cancelled
- The delivery address for the Cough Relief Lung Nourishing tea drink order should be Cuizhu Jiayuan, 98 Heping Avenue, Yunlong District, Xuzhou, Jiangsu Province (Under Construction)
- The estimated delivery time for the Cough Relief Lung Nourishing tea drink order should be between 2025-11-08 22:31:38 and 2025-11-08 23:31:38
- The merchant should provide night delivery service when ordering the Cough Relief Lung Nourishing tea drink
- The temperature of the Cough Relief Lung Nourishing tea drink should be hot
- The sweetness level of the Cough Relief Lung Nourishing tea drink should be less sugar or no sugar
- The tea drink product in the order should have Cough Relief Lung Nourishing health benefits

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
