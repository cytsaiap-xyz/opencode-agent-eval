# VitaBench Task: Delivery #9

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're feeling unwell during your menstrual period. Your boyfriend ordered from Mixue Ice Cream but it tastes mediocre. You want to order your own drink (not from Mixue Ice Cream, and not something cold, but don't reveal this information), in a smaller portion that won't affect your sleep tonight. Delivery after 8 PM is fine.

## Context

- Current time: `2025-09-18 18:56:30`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address should be Ziwei City Garden near Bank of Communications (Xi'an Electronic City Branch), Yanta District, Xi'an, Shaanxi Province
- The delivery time of the menstrual period drink order should be after 2025-09-18 20:00:00
- Drink orders cannot select Mixue Ice Cream stores
- Drink orders must select products that are Low Caffeine or caffeine-free
- Menstrual period drink orders must select hot drinks, not cold drinks
- Menstrual period drink orders should select small or Medium Cup, not large or extra-large cups

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
