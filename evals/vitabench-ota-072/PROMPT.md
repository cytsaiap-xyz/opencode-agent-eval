# VitaBench Task: Ota #72

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

On your last business trip to Fuzhou, the city left a good impression on you, and you've been thinking about visiting again. Your parents are coming to see you soon, and you plan to take them there next weekend, which also creates an opportunity for them to spend more time with your boyfriend. You plan to depart on Saturday morning. You remember that the train schedule from your last business trip was quite suitable, so you want to choose the same one this time. Although the journey isn't too long, your parents are both over sixty, so you hope to make them as comfortable as possible by booking Business-class seats for them. For you and your boyfriend, the same seats as your last trip will be fine. You plan to visit just one attraction per day, not wanting to rush, and book all tickets in advance to ensure your parents will be satisfied. You know your parents enjoy watching and reading about history, and since your family has always lived inland, your parents rarely have the chance to see the ocean, making this Fuzhou trip a good opportunity. You think visiting the seaside on the first day would be appropriate. You don't need to buy return train tickets yet; you'll decide when to return based on when you finish sightseeing.

## Context

- Current time: `2025-03-16 09:12:26`
- Domain: `ota`

## Requirements / Rubrics

- Train number should be D3115
- Train departure date should be March 22, 2025
- Train tickets should include 2 Second-class seats
- Train tickets should include 2 Business-class seats
- Day 1 attraction should be Pingtan Beach
- Day 1 attraction ticket usage date should be March 22, 2025
- Day 1 attraction ticket quantity should be 4
- Day 2 attraction should be Three Lanes and Seven Alleys
- Day 2 attraction ticket usage date should be March 23, 2025
- Day 2 attraction tickets should include 2 Adult tickets
- Day 2 attraction tickets should include 2 Senior tickets

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
