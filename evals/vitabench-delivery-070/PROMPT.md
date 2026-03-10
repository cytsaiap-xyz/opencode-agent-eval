# VitaBench Task: Delivery #70

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

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

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
