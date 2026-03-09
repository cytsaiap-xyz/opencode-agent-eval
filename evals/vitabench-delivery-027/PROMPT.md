# VitaBench Task: Delivery #27

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You want to order a noodle dish delivered to your office for lunch, but you have seafood allergies and don't want to eat offal. You also plan to buy some chewy bread from a store you've purchased from before to take to the office. You need to leave at 1:00 PM to meet a client, so the food needs to arrive at least half an hour before that. You're tired of the items you've had before, so you want to try a new option and order three of them. You also plan to order two portions of Four Fruits Soup for the evening, preferably the bestselling ones, and would like them to arrive right when you get back to the office at 7:00 PM. Please note that one portion should not include pearls.

## Context

- Current time: `2025-08-23 11:23:18`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the lunch noodle order should be Quanzhou Urban Construction Group Co., Ltd., Building 8, Shuimo Fanglin, 688 Anji South Road, Fengze District, Quanzhou, Fujian Province
- The estimated delivery time for the lunch noodle order should be before 12:30 on August 23, 2025
- The ordered lunch noodle items should not contain seafood ingredients
- The ordered lunch noodle items should not contain offal ingredients such as pork intestine, pig liver, etc.
- The delivery address for the bakery order should be Quanzhou Urban Construction Group Co., Ltd., Building 8, Shuimo Fanglin, 688 Anji South Road, Fengze District, Quanzhou, Fujian Province
- The estimated delivery time for the bakery order should be before 12:30 on August 23, 2025
- The merchant for the bakery order should be Jiyue Bakery
- The ordered bakery items should have a Chewy Texture, usually indicated in the product description or tags
- The bakery order should include 3 identical bread items
- The delivery address for the Four Fruits Soup order should be Quanzhou Urban Construction Group Co., Ltd., Building 8, Shuimo Fanglin, 688 Anji South Road, Fengze District, Quanzhou, Fujian Province
- The estimated delivery time for the Four Fruits Soup order should be before 19:00 on August 23, 2025
- The Four Fruits Soup order should include a note specifying one soup without pearls
- The Four Fruits Soup order should select the best-selling Four Fruits Soup from the store

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
