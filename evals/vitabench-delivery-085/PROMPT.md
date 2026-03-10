# VitaBench Task: Delivery #85

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're looking for a reliable restaurant to order Stir-fried Pork Strips. You usually spend half an hour eating, but today you want to take a one-hour lunch break until 3 PM so you can focus on your writing work in the afternoon with good energy.

## Context

- Current time: `2025-04-26 12:02:43`
- Domain: `delivery`

## Requirements / Rubrics

- The store rating for the ordered Stir-fried Pork Strips should be 4.2 or above
- The delivery address for the Stir-fried Pork Strips order should be Central Street Cultural and Creative Design Center, F2 Floor, No.66 Central Street, Daoli District, Harbin City, Heilongjiang Province
- The expected delivery time for the Stir-fried Pork Strips order should be between 12:02 and 13:30 on April 26, 2025, ensuring the user has enough time for lunch and afternoon rest

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
