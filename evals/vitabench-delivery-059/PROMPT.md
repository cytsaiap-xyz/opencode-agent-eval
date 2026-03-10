# VitaBench Task: Delivery #59

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Today it's just you and your child at home. You plan to order Garlic and Vermicelli Shrimp for lunch, along with whatever else works as accompaniments. Set meals are quite convenient too, but keep the total under 80 yuan. Don't have lunch delivered too early or too late - sometime between 11:00 and 12:00 would be fine.

## Context

- Current time: `2025-03-08 10:19:41`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the Garlic and Vermicelli Shrimp lunch order should be East Building, Hubin, No. 33 Renmin West Road, Lucheng District, Wenzhou City, Zhejiang Province
- The estimated delivery time for the Garlic and Vermicelli Shrimp lunch order should be between 11:00 and 12:00 on March 8, 2025
- The Garlic and Vermicelli Shrimp lunch order should not include spicy or greasy items
- The Garlic and Vermicelli Shrimp lunch order should include Garlic and Vermicelli Shrimp related items
- The Garlic and Vermicelli Shrimp lunch order should be portioned for either a meal for two or two single-person meals
- The total price of the Garlic and Vermicelli Shrimp lunch order should be kept within 80 yuan

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
