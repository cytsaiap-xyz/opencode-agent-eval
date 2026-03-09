# VitaBench Task: Cross Domain #46

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You're on a business trip in Panjin for a few days and just found out that a good friend of yours happens to be in Panjin too. After having lunch with clients today, you have nothing planned for the rest of the day and want to meet up with this friend in the afternoon. You're looking for an outdoor store that offers camping, where you can order a Stove-Cooked Tea Package to chat with your friend and play some cards and frisbee. Since the store's frisbees might have been used by many people and you're a bit germaphobic, you want to check if frisbees and playing cards are available for product delivery - specifically ones that can be delivered to the outdoor store before 3:00 PM. Also, you need to purchase a High-Speed Rail ticket back to Dalian for the last train departing today.

## Context

- Current time: `2024-11-22 10:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The in-store merchant should be an outdoor store with camping activities
- The ordered outdoor store must have an area available for Frisbee activities
- The ordered item from the outdoor store should be a Two-Person Stove-Cooked Tea Package
- The takeout order must include Playing Cards
- The takeout order must include Frisbee
- The playing cards and frisbee in the takeout order must come from the same store
- The delivery address for the takeout order should be Hoshino Camping Base, 168 Wanghai Road, Xinglongtai District, Panjin, Liaoning Province
- The expected delivery time for the takeout order should be before 15:00 on November 22, 2024
- The departure time of the final ordered high-speed rail ticket from Panjin to Dalian should be 21:42
- The train number of the final ordered high-speed rail ticket should be G8021

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
