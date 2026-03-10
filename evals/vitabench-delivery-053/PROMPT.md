# VitaBench Task: Delivery #53

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You have been busy writing a new proposal lately, and today you worked overtime until late at night. Right now, you urgently need a clay pot porridge to fill your stomach. Previously, you consumed seafood as a late-night snack, which worsened your joint discomfort symptoms, so when ordering  you pay extra attention to absolutely avoiding high-purine foods. You hope it can be delivered within half an hour. Suddenly you remembered that you forgot to select the sugar level for the Mango Pomelo Sago you just ordered, so you're placing a new order selecting no extra sugar.

## Context

- Current time: `2025-05-08 21:54:57`
- Domain: `delivery`

## Requirements / Rubrics

- Cancel the Mango Pomelo Sago order from Shuxia (Yufeng Li Branch), and change the status of order_id B0714001T02 to cancelled
- Place a new order for Mango Pomelo Sago at Shuxia (Yufeng Li Branch), select no extra sugar
- The delivery address for the clay pot porridge order should be Chengdu Exchange Building, South of Jinyun West Lane 1, Wuhou District, Chengdu, Sichuan Province
- The expected delivery time for the clay pot porridge order should be before 2025-05-08 22:30:00
- When selecting clay pot porridge items, avoid products containing high-purine ingredients (such as organ meats, seafood, etc.)

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
