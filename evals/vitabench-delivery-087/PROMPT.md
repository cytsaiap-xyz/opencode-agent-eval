# VitaBench Task: Delivery #87

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your boyfriend will be home for dinner around 6 PM. You ordered takeout in advance, but after ordering, you realized you forgot to note that you don't eat cilantro, and you also need some minced garlic. You also want to order two cups of Lemon Wheat Green Juice with less ice and medium size. You'd like to order one more smoked chicken, but it shouldn't be cold.

## Context

- Current time: `2025-04-19 17:01:06`
- Domain: `delivery`

## Requirements / Rubrics

- Need to add a note to the Northeastern cuisine order with order_id H0721002O01: no Cilantro, add some garlic paste
- The delivery address for the Lemon Wheat drink order should be Guixin Community, 1 Guixin Street, Nangang District, Harbin, Heilongjiang Province
- The estimated delivery time for the Lemon Wheat drink order should be around 18:00 on April 19, 2025
- The drink order should select Lemon Wheat type beverages
- The Lemon Wheat drink order should choose less ice or much less ice
- The Lemon Wheat drink order should select medium cup or standard size, not Large Cup Size or extra large cup
- The delivery address for the smoked chicken order should be Guixin Community, 1 Guixin Street, Nangang District, Harbin, Heilongjiang Province
- The estimated delivery time for the smoked chicken order should be around 18:00 on April 19, 2025
- The smoked chicken order should select smoked chicken items
- The smoked chicken order should select items without Cilantro
- The smoked chicken order should select hot food or items that can be heated

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
