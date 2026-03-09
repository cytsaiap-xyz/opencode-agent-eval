# VitaBench Task: Instore #10

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You want to treat a few friends to dinner, so you've asked about their preferences and opinions. You've decided to buy a four-person package at a local cuisine restaurant, and the package must include the restaurant's signature dishes. You want to reserve a table for tomorrow at noon to avoid not having seats when you arrive. After the meal, you plan to buy a two-hour court package at the badminton hall you frequently visit to exercise with your old friends. However, this depends on tomorrow's weather. If it's too hot, you don't want to exercise and plan to do something else instead. So if tomorrow's highest temperature exceeds 30 degrees, you'll look for a massage place near the restaurant that offers moxibustion service with a rating of no less than 4.5, and buy a four-person package. If they don't have a four-person package, you'll buy individual moxibustion wellness packages for everyone to relax together.

## Context

- Current time: `2024-03-16 20:15:00`
- Domain: `instore`

## Requirements / Rubrics

- The merchant in the package order is a local cuisine restaurant (Minnan cuisine)
- The purchased package must include the restaurant's signature dishes
- The purchased package is a four-person meal, not four individual packages
- The reserved restaurant is Gulang Minwei
- The number of people for the restaurant reservation is 4
- The restaurant reservation time is 12:00:00 on 2024-03-17
- Check tomorrow's (2024-03-18) weather forecast, with the highest temperature being 28 degrees, not exceeding 30 degrees, therefore purchasing a badminton package
- The merchant in the badminton package order should be the one the user frequently visits (Software Park Badminton Hall)
- The purchased badminton package should be for two hours
- The purchased badminton package should be a court package

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
