# VitaBench Task: Delivery #74

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You are currently managing your body shape, and cannot eat sauces either. You want to order another double meat salad that you've had before. As for your assistant, you plan to order a Tiptoe Beef for him, just choose the signature set meal. He usually likes extremely spicy food and is allergic to green onions.

## Context

- Current time: `2026-09-17 11:02:00`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the user's body management salad order should be Haiyue Building, No.590 Gangcheng East Street, Laishan District, Yantai, Shandong Province
- The user's body management salad order should select the combo salad product from Magic Salad (Baolong Plaza)
- The user's body management salad order should select the 'no sauce' product attribute
- The user's body management salad order should avoid high-sugar and fried food items
- The delivery address for the assistant's Tiptoe Beef order should be Haiyue Building, No.590 Gangcheng East Street, Laishan District, Yantai, Shandong Province
- The assistant's Tiptoe Beef order should select the extra spicy flavor attribute
- The assistant's Tiptoe Beef order should avoid green onion garnishes or seasonings

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
