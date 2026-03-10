# VitaBench Task: Cross Domain #42

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Your girlfriend just messaged you, saying she wants to go to an amusement park tomorrow. You've had a pay cut these past few months, so you want to check which park among Happy Valley, Guose Tianxiang, or Sunac has the cheapest tickets, then buy two unlimited ride passes. Previously when you queued at amusement parks, you often felt hot and uncomfortable, so this time you want to buy two small fans that can be worn around your neck. Look for fans with a total price not exceeding 50 yuan; if there aren't any, just buy the cheapest one. You want to place the order now and have it delivered to the hospital before 12:30, so you can try it out first. Also, check if there are any good fish and frog hotpot restaurants near the amusement park, with high ratings but average cost per person not exceeding 70 yuan. A buffet would be better, but make sure it includes the soup base. Once you find a good restaurant, reserve a table for tomorrow at 7 PM, and you'll buy the vouchers when you get there.

## Context

- Current time: `2025-05-16 10:22:34`
- Domain: `cross_domain`

## Requirements / Rubrics

- The purchased tickets allow unlimited access to all attractions
- The purchased tickets are valid for two people
- The purchased tickets are the most economical option, search results should be the Unlimited Pass for Two at Chengdu Happy Valley
- The quantity of tickets in the Happy Valley order should be 1
- The purchased tickets are for May 17, 2025
- The purchased tickets are valid for the entire day
- Search results show that two fans exceeding a total price of 50 yuan are unavailable, so the delivery order should include one fan
- The product in the delivery order should be wearable around the neck
- The product in the delivery order should be the lowest-priced item in its category, search results should show the Mini USB Neck Fan from Tech Lifestyle Store
- The delivery address for the order should be Sichuan Provincial People's Hospital, 17 South Renmin Road Section 3, Wuhou District, Chengdu, Sichuan Province
- The delivery time should be before 12:30:00 on May 16, 2025
- The restaurant reservation should be for 19:00:00 on May 17, 2025
- The restaurant reservation should be for 2 people
- The reserved restaurant should offer fish and frog buffet sets
- The buffet set at the reserved restaurant should include soup base
- The buffet set at the reserved restaurant should not exceed 70 yuan per person
- The reserved restaurant should have a rating of 4.2 or higher

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
