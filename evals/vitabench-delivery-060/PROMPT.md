# VitaBench Task: Delivery #60

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Your parents are coming from their hometown in Zigong to visit you today. You plan to order takeout for dinner so that it arrives at your home around the same time you do. You get off work at 7 PM and it takes you another hour to get home. Considering your parents' taste preferences, your mother's seafood allergy, and the number of people, you decide to order three Sichuan dishes with generous portions, aiming for about 50 yuan per person. Rice has already been steamed at home, so you don't need to order any. Additionally, you want to buy two drinks from CHABAIDAO, the same type you had the day before yesterday, and both should not be too cold.

## Context

- Current time: `2026-08-09 18:08:53`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the CHABAIDAO drink order should be Xinyi Garden, Jinshan Road, Mudu Town, Wuzhong District, Suzhou, Jiangsu Province
- The estimated delivery time for the CHABAIDAO drink order should be around 20:00 on 2026-08-09
- The CHABAIDAO drink order should select CHABAIDAO (Suzhou Fenghua Plaza Branch) as the merchant
- The CHABAIDAO drink ordered should be Pomelo Sago
- The temperature attribute for the CHABAIDAO drink order should be set to less ice
- The delivery address for the Sichuan cuisine dinner order should be Xinyi Garden, Jinshan Road, Mudu Town, Wuzhong District, Suzhou, Jiangsu Province
- The estimated delivery time for the Sichuan cuisine dinner order should be around 20:00 on 2026-08-09
- The Sichuan cuisine dinner order should not include seafood items and rice
- The portion size of the Sichuan cuisine dinner order should be suitable for three adults
- The total price of the Sichuan cuisine dinner order should be around 150 yuan
- The Sichuan cuisine dinner order should include 3 Sichuan dishes

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
