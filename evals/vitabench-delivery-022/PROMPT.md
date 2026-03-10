# VitaBench Task: Delivery #22

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You and several colleagues plan to order some Cantonese food to eat together at the office. Your colleagues have already selected White Cut Chicken, Beef Brisket Stew, and congee, but you want to add two more dishes that are Low Salt and Less Oil. The delivery must arrive before 6 PM.

## Context

- Current time: `2025-06-14 16:36:41`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the Cantonese group meal order should be Junchuang International Business Garden, 50 North Zhonghua Street, Xinhua District, Shijiazhuang City, Hebei Province
- The estimated delivery time for the Cantonese group meal order should be before 18:00 on June 14, 2025
- The Cantonese group meal order should include five different dishes, with different dishes in the set meal counted separately
- The Cantonese group meal order must include White Cut Chicken, Beef Brisket Stew, and congee
- Dishes in the Cantonese group meal order other than White Cut Chicken, Beef Brisket Stew, and congee should be Low Salt and Less Oil types, meeting healthy eating requirements

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
