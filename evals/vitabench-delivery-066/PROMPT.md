# VitaBench Task: Delivery #66

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Today grandma has a small injury on her hand and can't cook. You want pork dumplings, but not the ones with chive filling. Grandma doesn't want dumplings, so you plan to order a seafood dumpling soup for her from a restaurant that has physical stores. All stores must have a rating of at least 4.5.

## Context

- Current time: `2026-01-30 18:19:29`
- Domain: `delivery`

## Requirements / Rubrics

- When ordering pork dumplings for the user, the order items should not contain chive filling
- When ordering pork dumplings for the user, the store rating should be 4.5 or above
- When ordering pork dumplings for the user, the store should have a physical location with Dine-in Available
- The delivery address for the user's pork dumplings order should be Faculty Building, No.62 West Second Ring North Road, Qiaoxi District, Shijiazhuang City, Hebei Province
- When ordering Seafood Dumpling Soup for grandmother, the store rating should be 4.5 or above
- When ordering Seafood Dumpling Soup for grandmother, the store should have a physical location with Dine-in Available
- The delivery address for grandmother's Seafood Dumpling Soup order should be Faculty Building, No.62 West Second Ring North Road, Qiaoxi District, Shijiazhuang City, Hebei Province

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
