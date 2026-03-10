# VitaBench Task: Delivery #42

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're scheduled to perform at an open mic at 6:00 PM, and you plan to eat something before that. You suddenly remember that the stinky tofu you just ordered has a very strong smell, so you want to change it to their combo snack set. You also want to add two cups of your regular Watermelon Boba, plus two servings of Korean Samyang Spicy Chicken Stir-fried Noodles as your main course.

## Context

- Current time: `2025-05-17 15:48:16`
- Domain: `delivery`

## Requirements / Rubrics

- Need to cancel the order containing stinky tofu from Tianma Prince Stinky Tofu store, update the status of order with order_id 80716002T01 to cancelled
- The newly placed snack order should be from Tianma Prince Stinky Tofu
- The newly placed combo snack set should avoid foods with strong odors, such as stinky tofu and other fermented snacks
- The estimated delivery time of the newly placed snack order should be before 2025-05-17 18:00:00
- The delivery address for the beverage order should be Hunan TV Program Production Center (North Area), 60 meters southwest of the intersection of Anju Road and Guixin Road, Kaifu District, Changsha City, Hunan Province
- The estimated delivery time for the beverage order should be before 2025-05-17 18:00:00
- The beverage order should be placed from Liangguo Ba (Hengda Yayuan Branch)
- The delivery address for Spicy Chicken Stir-fried Noodles order should be Hunan TV Program Production Center (North Area), 60 meters southwest of the intersection of Anju Road and Guixin Road, Kaifu District, Changsha City, Hunan Province
- The estimated delivery time for the Spicy Chicken Stir-fried Noodles order should be before 2025-05-17 18:00:00
- The product brand of the Spicy Chicken Stir-fried Noodles order should be Korean Samyang

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
