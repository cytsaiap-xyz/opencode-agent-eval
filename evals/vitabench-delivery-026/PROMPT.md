# VitaBench Task: Delivery #26

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

It's raining outside and a bit cold, and you're still working overtime at the office. You have a project meeting at 8 o'clock. You want to order a Flat White, but you didn't like the Dark Roast Flat White you had last time. You also want to order a Rice Bowl, preferably with Beef, but you don't eat offal.

## Context

- Current time: `2024-11-28 18:54:23`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the beef rice bowl order should be Henan Digital Certificate Authentication Center, Building 2, Future International, No. 26 Business Inner Ring Road, Jinshui District, Zhengzhou City, Henan Province
- The delivery time for the beef rice bowl order should be before 2024-11-28 20:00:00
- When selecting beef rice bowl products, items containing organ meats should be avoided
- The delivery address for the flat white coffee order should be Henan Digital Certificate Authentication Center, Building 2, Future International, No. 26 Business Inner Ring Road, Jinshui District, Zhengzhou City, Henan Province
- The delivery time for the flat white coffee order should be before 2024-11-28 20:00:00
- When selecting flat white coffee, dark roast types such as Dark Roast Flat White should be avoided
- When selecting flat white coffee, it should be served hot

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
