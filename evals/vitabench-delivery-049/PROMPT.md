# VitaBench Task: Delivery #49

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Today at 12 o'clock, you need to leave home for an audition. You want to bring Camellia Americano from SIP for the agent sister, one cup for each of you. Note that you both have been controlling sugar intake recently. At 3 PM after the audition when you return home, you hope to have the fish slices from the healthy food restaurant you often order from before, along with a staple food.

## Context

- Current time: `2025-10-30 10:51:01`
- Domain: `delivery`

## Requirements / Rubrics

- The afternoon delivery order after the audition should choose Steamed Tender Cuttlefish Slices and Whole Grain Corn Wowotou from Qingshuji store
- The total number of items in the afternoon delivery order after the audition should be 2
- The delivery address for the afternoon delivery order after the audition should be No.8, No.7 Tianxian Bridge North Road, Jinhai International Garden, Jinjiang District, Chengdu, Sichuan Province
- The estimated delivery time for the afternoon delivery order after the audition should be around 2025-10-30 15:00:00
- The sweetness option for Camellia Americano in the coffee order before the audition should be the no sugar option
- The total number of items in the coffee order before the audition should be 2 cups
- The delivery address for the coffee order before the audition should be No.8, No.7 Tianxian Bridge North Road, Jinhai International Garden, Jinjiang District, Chengdu, Sichuan Province
- The estimated delivery time for the coffee order before the audition should be before 2025-10-30 12:00:00

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
