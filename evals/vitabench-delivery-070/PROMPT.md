# VitaBench Task: Delivery #70

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

A patient has an acupuncture appointment around 12:45 today. You want to order a delicious chicken soup for yourself before that, specifically one with pure coconut base, along with a bowl of rice and some Steamed Broccoli 🥦 Healthy Low-fat + Soy Sauce.

## Context

- Current time: `2025-06-12 10:11:54`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the doctor's meal during work hours should be No.1-1 Nanyuan New Village, Qianjin Road, Haizhu District, Guangzhou, Guangdong Province (Near Wanfeng Garden), Haizhu District Traditional Chinese Medicine Hospital
- The delivery time for the doctor's meal during work hours should be around 2025-06-12 12:00:00, ensuring meal completion before acupuncture treatment
- The restaurant rating for the doctor's meal order during work hours should be greater than or equal to 4.3
- The chicken soup in the order should be pure coconut-based, containing no other main ingredients besides coconut and chicken
- The total number of items in the doctor's meal order during work hours should be 3, including chicken soup, rice, and steamed broccoli

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
