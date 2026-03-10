# VitaBench Task: Delivery #94

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

The commercial shoot starts at 2 PM, so you want to order a vegetable salad bowl with cherry tomatoes delivered to the theater for lunch. You also want to order a sweet and sour Yellow River carp for the photographer, with extra cilantro. You'd also like to order a tiramisu cake to express gratitude to your frequent acting partner, noting that it should be the classic flavor as they don't like other flavors.

## Context

- Current time: `2024-05-18 11:56:18`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the Yellow River carp order for the photographer should be Shandong Drama Theater, 115 Liberation Road, Lixia District, Jinan, Shandong Province
- The expected delivery time for the Yellow River carp order for the photographer should be before 2024-05-18 14:00:00
- The carp dish chosen for the photographer should have a sweet and sour flavor, such as sweet and sour carp or other sweet and sour preparations
- The carp dish ordered for the photographer should include a special note requesting extra cilantro
- The delivery address for the tiramisu cake order for the partner should be Shandong Drama Theater, 115 Liberation Road, Lixia District, Jinan, Shandong Province
- The expected delivery time for the tiramisu cake order for the partner should be before 2024-05-18 14:00:00
- The tiramisu cake chosen for the partner should be the classic chocolate flavor, avoiding other innovative flavors
- The delivery address for the vegetable salad order for the user themselves should be Shandong Drama Theater, 115 Liberation Road, Lixia District, Jinan, Shandong Province
- The expected delivery time for the vegetable salad order for the user themselves should be before 2024-05-18 14:00:00
- The vegetable salad chosen by the user should be vegetarian, without meat or other animal proteins
- The vegetable salad chosen by the user should include Cherry Tomato as a main side ingredient

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
