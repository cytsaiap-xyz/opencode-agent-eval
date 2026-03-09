# VitaBench Task: Delivery #42

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

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

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
