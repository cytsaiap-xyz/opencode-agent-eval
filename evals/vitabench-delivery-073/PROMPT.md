# VitaBench Task: Delivery #73

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

The weekly meeting will run from 11:00 to 12:30, so you plan to have lunch early. You've chosen Golden Soup Five-Grain Fish Noodles, requesting the soup and noodles to be separated to prevent them from getting soggy and affecting the taste. You also want Crystal Shrimp Dumplings and a pineapple bun, though you find butter a bit gross. You'd also like fresh milk tea from Percent Tea, specifically the one with Pistachio Cheese and Water Chestnut Balls, with normal sweetness reduced by half. Oh, and since you're ordering quite a few items, try to get as many items as possible from the same store.

## Context

- Current time: `2026-05-11 09:12:19`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the Golden Soup Five-Grain Fish Noodles order should be A1 Tower, Tengfei Innovation Park, 160 meters southeast of the intersection of Xinping Street and Ruoshui Road, Huqiu District, Suzhou, Jiangsu Province
- The delivery time for the Golden Soup Five-Grain Fish Noodles order should be before 2026-05-11 11:00:00
- The fish noodles item in the Golden Soup Five-Grain Fish Noodles order should select the option with soup and noodles separated
- The delivery address for the snack order should be A1 Tower, Tengfei Innovation Park, 160 meters southeast of the intersection of Xinping Street and Ruoshui Road, Huqiu District, Suzhou, Jiangsu Province
- The delivery time for the snack order should be before 2026-05-11 11:00:00
- The pineapple bun item in the snack order should select the version without butter
- The snack order should have a total of 2 items, both from De Fa Cai Chaozhou Porridge Tea Restaurant (Suzhou Hengyi Plaza Branch)
- The delivery address for the Percent Tea fresh milk tea order should be A1 Tower, Tengfei Innovation Park, 160 meters southeast of the intersection of Xinping Street and Ruoshui Road, Huqiu District, Suzhou, Jiangsu Province
- The delivery time for the Percent Tea fresh milk tea order should be before 2026-05-11 11:00:00
- The milk tea item with Pistachio Cheese and Water Chestnut Balls in the Percent Tea fresh milk tea order should select half sugar sweetness

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
