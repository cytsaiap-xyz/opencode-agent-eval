# VitaBench Task: Instore #47

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You want to find a language training institution to learn English speaking, but you're not very familiar with it, so you want to try a trial class at an institution first. The course must be taught by a foreign teacher and include situational dialogue practice. After deciding on an institution, you want to buy a single-person trial voucher. By the way, your daughter is also off on Saturday, and instead of just staying at home, she might as well go to English class with you. You should also buy a kindergarten trial voucher of the same type for your daughter, and take her with you. The total price of both your trial vouchers should not exceed 200 yuan. You want to schedule both your and your daughter's trial classes for 10 AM on Saturday. To motivate your child, you plan to take her for pizza after class. You want to see if there's a Pizza Hut within 1 kilometer of the institution. If there is, you'll buy her favorite durian pizza, just a Children's Happy Meal, as you're on a diet and won't eat. If not, you'll find a highly-rated pizza restaurant within 1 kilometer and buy a Hawaiian Pizza.

## Context

- Current time: `2025-05-16 08:30:00`
- Domain: `instore`

## Requirements / Rubrics

- Training institution orders should include foreign teacher instruction
- Training institution course orders should include situational dialogue practice
- Training institution orders should include adult single-person trial voucher
- Training institution orders should include kindergarten single-person trial voucher
- Training institution course orders should be for English speaking courses
- The total price of training institution course orders should be within 200 yuan (including 200 yuan)
- Adult trial voucher and kindergarten trial voucher should be from the same training institution
- The reserved training institution should be Global Foreign Language Institute (Wanda Plaza Campus)
- The number of people for the training institution reservation is 2
- The reservation time for the training institution is 2025-05-17 10:00:00
- Need to check if there is a Pizza Hut within 1km (inclusive) of Global English Institute, 5th Floor, Building A, Wanda Plaza, No. 265 Zhongshan East Road, Chang'an District, Shijiazhuang, the result is yes; restaurant order merchant should be Pizza Hut
- The product ordered from Pizza Hut is Durian Pizza
- The product ordered from Pizza Hut is Children's Set Meal

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
