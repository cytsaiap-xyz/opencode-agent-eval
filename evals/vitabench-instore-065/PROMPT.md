# VitaBench Task: Instore #65

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

The Double Ninth Festival seems to be approaching. You plan to find a restaurant with a comfortable environment and meticulous service to take your parents for a relaxing massage. Preferably one that offers special packages for elderly people, but you don't want full body massage as you're concerned they might feel uncomfortable. After selecting the package, you'll place an order. You need to first confirm the exact date of the Double Ninth Festival. If it falls on a weekday, you'll book for 8 PM that evening; if it's on a weekend, you'll book for 2 PM that afternoon. Since you're going anyway, you might as well buy a package for yourself and get an essential oil SPA. If it's on a weekend, you plan to have lunch near the massage place first, as your parents have been talking about wanting to eat Hangzhou cuisine for a long time. You hope to find an authentic Hangzhou restaurant with fresh ingredients, around 100 yuan per person, and a clean and hygienic environment. If they offer set menus, you'll just buy a Three-Person Meal; if not, you'll make a reservation for noon that day to avoid waiting in line.

## Context

- Current time: `2024-10-08 16:45:00`
- Domain: `instore`

## Requirements / Rubrics

- The massage shop ordered should have a comfortable environment
- The service of the massage shop ordered should be meticulous
- The massage shop order should include elderly massage packages
- The quantity of elderly massage packages in the massage shop order should be 2
- The elderly massage packages in the massage shop order should not be packages that include full body massage
- The massage shop order should include essential oil SPA packages
- The quantity of essential oil SPA packages in the massage shop order should be 1
- The elderly massage packages and essential oil SPA packages should be from the same store
- The reserved massage shop should be Kangleyuan Wellness Center
- Should check the specific date of the Double Ninth Festival in 2024, which is Friday, October 11, 2024, so the massage shop reservation time is 2024-10-11 20:00
- The number of people for the massage shop reservation should be 3
- Should check the specific date of the Double Ninth Festival in 2024, which is Friday, October 11, 2024, not a weekend, so should not order from a Hangzhou cuisine restaurant

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
