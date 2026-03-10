# VitaBench Task: Instore #5

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You and your wife plan to go to a sports venue tomorrow to play ball. You want to check nearby badminton, tennis, and table tennis venues to see which one is closest to your home, and that's the one you'll choose. For the package, you hope it includes venue and free equipment usage, with the price similar to your usual spending. After purchasing the package, you need to reserve a slot from 2 PM to 4 PM. After playing tomorrow, you want to eat hot pot. You still have an unused hot pot voucher for a restaurant you quite like, but you're really craving duck tongues lately. You want to check if that package includes duck tongues, and if not, you'll return it and buy a new one that includes duck tongues.

## Context

- Current time: `2025-05-02 17:23:41`
- Domain: `instore`

## Requirements / Rubrics

- Must search for information about three types of sports venues: badminton halls, tennis courts, and table tennis halls, and select the one closest to the user's home
- The package in the sports venue order should be usable for two people
- The package in the sports venue order should include venue usage
- The package in the sports venue order should include free equipment usage
- The price of the package in the sports venue order should be consistent with the user's usual spending level (within the range of 60-100 yuan)
- The package in the sports venue order should be for two hours
- The reserved sports venue should be the one closest to the user's home
- The reserved sports venue should be Yaohai District Sports Center Badminton Hall
- The number of people for the sports venue reservation should be 2
- The time for the sports venue reservation should be 14:00:00 on 2025-05-03
- Check the hot pot set purchase in the historical orders to see if it includes duck tongues; the search shows it does not, and the status of this order is cancelled
- The merchant for the newly purchased hot pot set should be Bashu General Hot Pot (Yaohai Branch)
- The newly purchased hot pot set should include duck tongues
- The newly purchased hot pot set should be a set for two people, not two single-person sets

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
