# VitaBench Task: Instore #60

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your son mentioned he's hit a plateau in his basketball recently, so you're thinking of taking him to a better basketball training center to improve his skills. You hope the center offers programs for youth under 12 years old, preferably with retired basketball coaches. You plan to purchase a trial class first to let your child experience the coach's teaching style, with a budget under 200 yuan. After confirming everything, you'll schedule it for Saturday at 2:30 PM. You have an unused hot pot Two-person Meal voucher that you bought yesterday, originally planning to use it with your son after the trial class. However, your parents-in-law said they haven't seen their grandson for a long time and will visit tomorrow. You're thinking of having them accompany your child to the trial class and then have dinner together, so you'll need to return the hot pot voucher. Considering your in-laws' sensitive stomachs, you plan to order a set meal at a Jiangsu and Zhejiang Cuisine restaurant within 1km of the training center that offers Free Parking. Your son loves fish, so you're looking for something under 200 yuan. Your husband is on a business trip and won't be joining you for dinner.

## Context

- Current time: `2024-06-14 10:15:00`
- Domain: `instore`

## Requirements / Rubrics

- The basketball training center order is for courses targeting youth under 12 years old (including 12 years old)
- The basketball training center order is coached by Retired Basketball Coach
- The basketball training center order is for Trial Class
- The basketball training center order price should be below 200 yuan (including 200 yuan)
- The reserved basketball training center should be Xinghua Basketball Training Camp
- The reservation time for the basketball training center is 2024-06-15 14:30:00
- The number of people for the basketball training center reservation is 1
- The hot pot restaurant order status should be cancelled
- The ordered restaurant is within 1km (including 1km) from Xinghua Basketball Training Camp, B1 Floor, Xixi Intime City, 551 Wener West Road, West Lake District, Hangzhou
- The ordered restaurant provides Free Parking
- The ordered restaurant specializes in Jiangsu and Zhejiang Cuisine
- The restaurant order is for a Four-person Meal, not four individual set meals
- The restaurant order must include Fish dishes
- The restaurant order price should be within 200 yuan (including 200 yuan)

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
