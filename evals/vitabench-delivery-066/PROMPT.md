# VitaBench Task: Delivery #66

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

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

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
