# VitaBench Task: Delivery #75

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your weekly report summary starts at 18:30, and you need to stay at the company to work overtime. You want to cancel the Lemon Black Fish order that was to be delivered to your home, and order a Soft Tofu Soup with staple food to be delivered to your office.

## Context

- Current time: `2024-12-13 17:07:29`
- Domain: `delivery`

## Requirements / Rubrics

- Successfully canceled the user's Lemon Sour Soup Black Fish order from Xiaoyu Family Sauerkraut Fish, and the order status with order_id E0721004T01 has been updated to cancelled
- The delivery address for the newly placed Soft Tofu Soup order should be Zhejiang Hisun Pharmaceutical Co., Ltd., Binhai Industrial Zone, No. 56 Binhai Road, Jiaojiang District, Taizhou City, Zhejiang Province
- The estimated delivery time for the newly placed Soft Tofu Soup order should be around 18:00 on December 13, 2024, ensuring the user can finish eating by 18:30
- The newly placed Soft Tofu Soup order must include staple food items

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
