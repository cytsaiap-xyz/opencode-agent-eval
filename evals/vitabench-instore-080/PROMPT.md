# VitaBench Task: Instore #80

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You've been ordering takeout a lot lately and want to dine in today, so you've decided to find a Northeastern cuisine restaurant within 2 kilometers of your home to visit now. The restaurant should preferably have parking available, as your boyfriend will be driving to meet you. You'll get a meal set for two, and the set must include your favorites: Di San Xian (sautéed potato, eggplant and green pepper) and Guo Bao Rou (sweet and sour pork). To avoid waiting in line, you want to reserve a table for 7 o'clock. After dinner, you plan to go to a private cinema with your boyfriend. The private cinema should be within 3km of the restaurant and be well-rated. You want to purchase a 3-hour package that includes both movie viewing and Nintendo Switch games, so if you get tired of watching movies, you can play games for a while.

## Context

- Current time: `2023-11-24 18:43:34`
- Domain: `instore`

## Requirements / Rubrics

- The restaurant for ordering should be within 2 kilometers (inclusive) from Room 1203, Building A, Jianye Kaixuan Plaza, No. 59 Huayuan Road, Jinshui District, Zhengzhou
- The restaurant should be a Northeastern cuisine restaurant
- The restaurant should have parking available
- The restaurant order should be a set meal for two people, not two individual set meals
- The restaurant order must include Di San Xian (sautéed potato, eggplant and green pepper) and Guo Bao Rou (sweet and sour pork)
- The reserved restaurant should be Northeast Master Chef
- The restaurant reservation time should be 2023-11-24 19:00:00
- The restaurant reservation should be for 2 people,
- The private cinema should be within 3 kilometers (inclusive) from Northeast Master Chef (Huayuan Road Branch), No. 38 Huayuan Road, Jinshui District, Zhengzhou
- The private cinema must be a ranked merchant
- The private cinema order must include movie viewing service and be equipped with Nintendo Switch games
- The private cinema order should be for a duration of 3 hours

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
