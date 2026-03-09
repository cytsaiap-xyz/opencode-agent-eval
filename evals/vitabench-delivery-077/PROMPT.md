# VitaBench Task: Delivery #77

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You plan to order some Steamed Mutton Dumplings in advance to eat after the seminar ends at 12 o'clock. You prefer a Non-chain Store that's relatively close. You heard from colleagues that Yellow Tea can help with fatigue and keep you alert, so you'd like to try some at lunch, without adding extra sugar. Your uncle is also attending the seminar; he's from Nanjing and is more familiar with Nanjing flavors. You plan to order separately for him - a portion of meat soup dumplings and a soup, but your uncle is allergic to seafood.

## Context

- Current time: `2025-09-10 09:44:35`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the Steamed Mutton Dumplings order should be Main Hospital of the First Affiliated Hospital of Xi'an Jiaotong University, No.277 Yanta West Road, Yanta District, Xi'an, Shaanxi Province
- The estimated delivery time for the Steamed Mutton Dumplings order should be after 12:00 on September 10, 2025
- The Steamed Mutton Dumplings order must come from a Non-chain Store
- The delivery address for the uncle's meat soup dumplings and soup order should be Main Hospital of the First Affiliated Hospital of Xi'an Jiaotong University, No.277 Yanta West Road, Yanta District, Xi'an, Shaanxi Province
- The estimated delivery time for the uncle's meat soup dumplings and soup order should be around 12:00 on September 10, 2025
- The items in the uncle's meat soup dumplings and soup order should not be in set menu form
- The items in the uncle's meat soup dumplings and soup order should come from stores with branches in both Nanjing and Xi'an
- The items in the uncle's meat soup dumplings and soup order must not contain seafood ingredients
- The delivery address for the Yellow Tea order should be Main Hospital of the First Affiliated Hospital of Xi'an Jiaotong University, No.277 Yanta West Road, Yanta District, Xi'an, Shaanxi Province
- The estimated delivery time for the Yellow Tea order should be around 12:00 on September 10, 2025
- The Yellow Tea order item specification should be sugar-free (no additional sugar)

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
