# VitaBench Task: Delivery #95

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Today you're working overtime at the company and want to order a not-so-spicy Meat Crab Pot to share with your colleague. You hope to choose a restaurant with high ratings. Additionally, you want to order a Red Bean Paste Egg Yolk Pastry Box to thank your colleague. Your girlfriend is having her period, and you plan to order a Double-Skin Milk Pudding for home delivery. Note that she's allergic to mangoes, and you'd like to add an extra Red Bean (Extra Topping).

## Context

- Current time: `2025-03-11 19:54:33`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the Red Bean Paste Egg Yolk Pastry order should be No. 26 Sihuan South Road, Henan'an Street, Huicheng District, Huizhou City, Guangdong Province, Wanxiang International Office Building
- The delivery address for the Meat Crab Pot order should be No. 26 Sihuan South Road, Henan'an Street, Huicheng District, Huizhou City, Guangdong Province, Wanxiang International Office Building
- When selecting Meat Crab Pot, the mild spicy flavor should be chosen, suitable for sharing with colleagues
- When selecting a Meat Crab Pot merchant, the rating should be greater than or equal to 4.5
- The delivery address for the Double-Skin Milk Pudding order should be No. 8 Sanxin South Road, Jiangbei, Huicheng District, Huizhou City, Guangdong Province, Jiangbei New Garden
- When selecting Double-Skin Milk Pudding, it should not contain mango ingredients to avoid allergic reactions
- Double-Skin Milk Pudding should be selected as a hot drink, suitable for consumption during menstruation
- The Double-Skin Milk Pudding order should include Red Bean (Extra Topping), with a total of 2 items

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
