# VitaBench Task: Delivery #21

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You are staying home with your child today and want to order a children's set meal from Ajisen for your kid, to be delivered as soon as possible. You prefer having both vegetables and meat in your meals, so you're planning to order a Sauce Bone Rice for yourself. Your child just reminded you about being environmentally friendly, so you've decided to note 'no disposable cutlery' for all takeout orders. If possible, please also update the note for the drink you just ordered.

## Context

- Current time: `2025-10-18 11:58:29`
- Domain: `delivery`

## Requirements / Rubrics

- Need to modify the note for order with order_id 30711009O01 to: No disposable tableware
- The delivery address for the Sauce Bone Rice order should be Nanhu Garden, 15 Dongzhai Road, Wucheng District, Jinhua, Zhejiang Province
- The delivery time for the Sauce Bone Rice order should be before 2025-10-18 12:43:29
- The Sauce Bone Rice set meal should include vegetables
- The Sauce Bone Rice order should note no disposable tableware
- The delivery address for the Children's Set Meal order should be Nanhu Garden, 15 Dongzhai Road, Wucheng District, Jinhua, Zhejiang Province
- The delivery time for the Children's Set Meal order should be before 2025-10-18 12:43:29
- The Children's Set Meal should be selected from Ajisen Ramen
- The Children's Set Meal order should note no disposable tableware

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
