# VitaBench Task: Delivery #41

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Today you're having a date with your boyfriend at home. You plan to order braised goose and goose liver for lunch from a restaurant with good ratings. You don't mind whether it's a set menu or individual items, whichever is more economical. Considering your boyfriend has a big appetite, you need to order more than a standard portion for two people, but not too much to avoid waste. Both of you prefer braised goose over goose liver, which gets too rich if you eat too much. You also want to order an extra hot bowl of Peach Gum and Lotus Seed Stewed Milk for yourself. Everything needs to be delivered before 12:30.

## Context

- Current time: `2025-01-01 11:30:11`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the braised goose and goose liver order should be Linhua Road Community, No. 39 Linhua Road, Qixinggang Street, Yuzhong District, Chongqing (Next to Exit 4B of Qixinggang Metro Station)
- The braised goose and goose liver order should include one set menu and one individual item
- The delivery time for the braised goose and goose liver order should be between 2025-01-01 11:30:00 and 2025-01-01 12:30:00
- The total portion of items in the braised goose and goose liver order must be larger than a normal meal for two people, but not excessive (e.g., a meal for four would be excessive)
- The selected merchant for the braised goose and goose liver order should have a rating higher than 4.0
- The delivery address for the Peach Gum and Lotus Seed Stewed Milk order should be Linhua Road Community, No. 39 Linhua Road, Qixinggang Street, Yuzhong District, Chongqing (Next to Exit 4B of Qixinggang Metro Station)
- The delivery time for the Peach Gum and Lotus Seed Stewed Milk order should be between 2025-01-01 11:30:00 and 2025-01-01 12:30:00
- The items in the Peach Gum and Lotus Seed Stewed Milk order should have the hot drink attribute selected

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
