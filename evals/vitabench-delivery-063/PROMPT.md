# VitaBench Task: Delivery #63

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You just found out that you don't need to work overtime and can go home at 7 PM, so you plan to cancel the takeout you ordered earlier and eat at home instead. You want to order a non-spicy chicken soup rice for your child, without green onions. Both you and your wife can handle spicy food well, so you plan to order spicy chicken, with one portion of noodles as the staple food.

## Context

- Current time: `2024-09-30 17:42:23`
- Domain: `delivery`

## Requirements / Rubrics

- Successfully canceled the user's roast duck set meal order from Dalao Roast Duck (Qingyang Road Branch), the order status of order_id D0721001T01 has been updated to cancelled
- The item in the chicken soup rice order for the child should be non-spicy flavor
- The item in the chicken soup rice order for the child should include the option of no green onions
- The chicken soup rice order for the child should be delivered around 19:00 on September 30, 2024
- The delivery address for the chicken soup rice order for the child should be Phase One of Keyuan New Village, Wuhu Road Street, Baohe District, Hefei City, Anhui Province
- The item in the spicy chicken order should be a portion for two people
- The item in the spicy chicken order should select the extra spicy flavor option
- The spicy chicken order should include noodle-type staple food items
- The spicy chicken order should be delivered around 19:00 on September 30, 2024
- The delivery address for the spicy chicken order should be Phase One of Keyuan New Village, Wuhu Road Street, Baohe District, Hefei City, Anhui Province

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
