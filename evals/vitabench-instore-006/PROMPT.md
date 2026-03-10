# VitaBench Task: Instore #6

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You've been under a lot of pressure at work lately and want to find a massage place to relax. Since you usually care about service quality, you hope to find a highly-rated place. You want to go tomorrow and hope the massage place is close to your office. You also want to check tomorrow's weather. If it rains, you plan to drive there and choose a place with parking; if not, you'll walk there. For packages, you prefer a full body massage package, ideally around 90 minutes, but you can accept a 60-minute one if that's not available. You ordered a package and made an appointment for tomorrow at 7 PM, but suddenly realized you might work overtime tomorrow, so you want to change it to 9 PM. Tonight you definitely need to work overtime and really don't want takeout food, so you want to find the closest pork knuckle rice place for dinner. You decide to buy a meal voucher first and go eat before returning to work overtime.

## Context

- Current time: `2025-09-24 20:31:24`
- Domain: `instore`

## Requirements / Rubrics

- Massage shop rating should be 4.0 or above
- The massage shop should be within 2500m of Maker Space, 18th Floor, Shangmao Century Plaza, 49 Zhongshan South Road, Qinhuai District, Nanjing
- On 2025-09-25, the weather in Nanjing will be cloudy turning to light rain, and the massage shop should have parking available
- The ordered service at the massage shop should be a full body massage package
- The massage duration should be around 60 minutes
- The reserved massage shop should be Yu Zu Tang (Shangmao Century Plaza Branch)
- The reservation time should be 2025-09-25 21:00:00
- The reservation should be for 1 person
- The restaurant order should be from Hong Kong Style Pork Knuckle Rice (Hanzhong Road Branch)
- The ordered dish should be Pork knuckle rice

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
