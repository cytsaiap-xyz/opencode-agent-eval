# VitaBench Task: Delivery #68

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Your regular meeting will end at 11:45 today, and you have mechanical maintenance starting at 13:15. You want to order a Bean Curd Skin with Stir-fried Meat Rice Bowl from Ba Bowl for your lunch to be delivered to your company. You also need to order lunch for your two children at home. Your daughter likes Beef but dislikes cilantro, so you plan to order a Couple's Lung Slices set meal from Ziyan Hundred-flavor Chicken for her. For your growing son who has a big appetite, you want to order a Longjiang Pork Knuckle Rice.

## Context

- Current time: `2024-03-20 11:07:23`
- Domain: `delivery`

## Requirements / Rubrics

- The user's own lunch order delivery address should be the work address at No. 398 Feicui Road, Shushan District, Hefei, Anhui Province, National Hefei Economic and Technological Development Zone
- The user's Bean Curd Skin with Stir-fried Meat Rice Bowl order should be scheduled for delivery around 12:00 on March 20, 2024, ensuring it can be finished before the mechanical maintenance work starts at 13:15
- The daughter's lunch order delivery address should be the home address at Baowen Garden, Changhuai Street, Yaohai District, Hefei, Anhui Province
- The daughter's Couple's Lung Slices set meal order should be scheduled for delivery around 12:00 on March 20, 2024
- The daughter's Couple's Lung Slices set meal order should specify a preference for no cilantro
- The daughter's lunch order should include Beef ingredients, in accordance with her dietary preferences
- The son's lunch order delivery address should be the home address at Baowen Garden, Changhuai Street, Yaohai District, Hefei, Anhui Province
- The son's Longjiang Pork Knuckle Rice order should be scheduled for delivery around 12:00 on March 20, 2024
- The son's Longjiang Pork Knuckle Rice order should specify the large portion size to meet his increased appetite during his growth period

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
