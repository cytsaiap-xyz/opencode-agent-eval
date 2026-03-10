# VitaBench Task: Delivery #31

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're working overtime until 6 o'clock today, and it will take another half hour to drive home. Since you don't have time to cook dinner, you decide to order a sushi platter from the nearest non-delivery-only sushi restaurant to share with your child, but nothing that's uncooked/unprocessed. You also want to order freshly squeezed juice, specifically requesting that the adult's drink can be iced, but not the child's.

## Context

- Current time: `2024-07-15 17:52:39`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address of the sushi order should be Yingge Yuan Residential Area, 198 Jiqingmen Street, Jianye District, Nanjing, Jiangsu Province
- The delivery time of the sushi order should be around 2024-07-15 18:30:00
- The sushi order should be from a Dine-in Restaurant rather than a delivery-only restaurant
- The sushi order should be from the restaurant closest to the user
- The product in the sushi order should be a cooked sushi platter
- The delivery address of the juice order should be Yingge Yuan Residential Area, 198 Jiqingmen Street, Jianye District, Nanjing, Jiangsu Province
- The delivery time of the juice order should be around 2024-07-15 18:30:00
- The juice order should include one room temperature item
- The juice order should include one chilled item
- The quantity of items in the juice order should be 2 portions

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
