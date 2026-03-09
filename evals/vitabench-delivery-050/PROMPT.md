# VitaBench Task: Delivery #50

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your bestie suddenly invites you over for a feast, so you no longer need the light meal you ordered. Now you want to reorder a Carrot Slimming Bottle juice delivery to your home, cold but not iced, so you can bring it to your bestie's home at 7:00 PM to enjoy together.

## Context

- Current time: `2025-11-01 17:01:27`
- Domain: `delivery`

## Requirements / Rubrics

- Successfully canceled the order for 🏅Deluxe Individual Customized Set Meal from Sixi Cloud Kitchen Chinese Healthy Cuisine store, specifically the order with order_id 90721002T02 should have been updated to cancelled status
- The delivery address for the Carrot Slimming Bottle juice order should be Jiayleyuan, No.158 Yongle Road, Liangxi District, Wuxi City, Jiangsu Province
- The estimated delivery time for the Carrot Slimming Bottle juice order should be before 7:00 PM on November 1, 2025
- The total number of items in the Carrot Slimming Bottle juice order should be 2
- The product specification in the Carrot Slimming Bottle juice order should be 'No ice'

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
