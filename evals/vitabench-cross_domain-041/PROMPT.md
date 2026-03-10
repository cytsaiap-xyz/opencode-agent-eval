# VitaBench Task: Cross Domain #41

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You've decided to gather your courage today and confess your feelings to him. Tonight, you're planning to take him to a Western restaurant near your company that has Live Music, as the atmosphere there is perfect. He mentioned before that if you give him flowers, he would agree to be with you. You don't want to choose cliché roses; instead, you want to order a special bouquet of sunflowers, representing his sunny image in your eyes. Oh, and you need to reserve a table at the restaurant for 7:00 PM. Also, you'd prefer a lakeside restaurant, which would be more romantic. However, the set menu should not include wine, as he doesn't like drinking. As for the flowers, you'd like them delivered to the restaurant around 8:00 PM.

## Context

- Current time: `2025-04-03 12:35:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The ordered Western restaurant should be within 3km of Super Gorilla Gym, 4th Floor, Wanda Plaza, 365 East Shengli Road, Yuecheng District, Shaoxing, Zhejiang Province
- The ordered Western restaurant should have Live Music
- The ordered Western restaurant should be by the lake
- The ordered items at the Western restaurant should be a non-alcoholic Couple Set Menu
- The reserved restaurant is Lakeside Piano Melody Western Restaurant (S17550813810057650_I00005)
- The restaurant reservation time is April 3, 2025, at 7:00 PM
- The restaurant reservation is for 2 people
- The delivery order item is a Sunflower Bouquet
- The delivery address is Lakeside Piano Melody Western Restaurant, Next to Jinghu Park, 388 East Shengli Road, Yuecheng District, Shaoxing, Zhejiang Province
- The estimated delivery time is around 8:00 PM on April 3, 2025 [delivery should arrive between 7:45 PM and 8:15 PM]

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
