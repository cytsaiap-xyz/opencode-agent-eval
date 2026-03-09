# VitaBench Task: Instore #28

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You've been wanting to learn tea ceremony lately. The tea house you visited last time was a good experience, and you'd like to see if they offer any tea ceremony training packages. If they do, you'll purchase the package and make a reservation for Saturday from 9 to 11 AM. If they don't, you'll look for another tea house with a similar decoration style, preferably one with partitioned private rooms, and purchase an experience package there for the same time slot at the regular price. You plan to have lunch outside before going home to rest. After tea tasting, your palate will be mild, so you'd like to find an authentic Sichuan restaurant with strong flavors and order a single-person set meal that must include Kung Pao Chicken as a classic dish. You're not planning to drive, so the restaurant should be as close as possible to the tea house.

## Context

- Current time: `2024-09-10 19:15:00`
- Domain: `instore`

## Requirements / Rubrics

- Should check if the previously visited tea house (Mingyue Tea House) has tea ceremony training packages, with the result being none; therefore, the ordered merchant should not be the previously visited tea house
- The ordered tea house should have a decoration style similar to the previously visited tea house
- The ordered tea house package should be in a partitioned private room
- The ordered tea house package duration should be 2 hours
- Need to check the user's usual spending range, which is between 60 and 120 yuan; the ordered tea house package price should be between 60 and 120 yuan (inclusive)
- The ordered tea house package should include tea ceremony training
- The reserved tea house should be Tianxiang Tea House
- The tea house reservation time should be 2024-09-14 09:00
- The tea house reservation should be for 1 person
- The ordered Sichuan restaurant package should be a strong flavor package
- The ordered Sichuan restaurant package should include Kung Pao Chicken
- The ordered Sichuan restaurant package should be a single meal
- Need to search for qualifying Sichuan restaurants and select the one closest to Tianxiang Tea House, with the result being Shuxiangyuan Sichuan Restaurant; the Sichuan restaurant order should be placed at Shuxiangyuan Sichuan Restaurant

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
