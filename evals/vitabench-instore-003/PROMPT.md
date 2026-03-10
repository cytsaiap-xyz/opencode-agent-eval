# VitaBench Task: Instore #3

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You're feeling exhausted from work and want to experience traditional massage over the weekend. You're particularly interested in a package that includes foot bath and acupoint massage. You want to find a professional massage shop and purchase a package to relax. You remember the shop you visited two or three months ago was quite good, so you want to check if you can find that order first. If you can find it, you'll place the exact same order; if not, you'll look for a highly-rated shop within 3 kilometers of your home. After placing the order and making the payment, you plan to book for 5 PM on Saturday, but you're concerned about rain. If it rains on Saturday, you'll reschedule to 5 PM on Sunday. If it rains on Sunday too, you'll go tonight at 7 PM and stay home for the weekend. If you do go on the weekend, after the massage, you plan to find a hair salon within 1 kilometer to color your hair. You plan to order a highlighting package with unlimited bleaching, not considering packages that only include two or three bleaching sessions, because you want to dye your hair a light Hot Girl Color.

## Context

- Current time: `2025-04-11 16:56:11`
- Domain: `instore`

## Requirements / Rubrics

- The massage shop should provide Traditional Massage service
- There is no historical order for massage shops, the massage shop to be ordered should be within 3km of Room 1802, Unit 1, Building 3, Huaze Lidu Community, 319 Jinxing Middle Road, Yuelu District, Changsha, Hunan Province
- The massage shop rating should be 4.0 or above
- The ordered massage service should be a package that includes Foot Bath and Acupoint Massage
- The massage shop to be reserved should be Ancient Charm Health Preservation Club
- The weather in Changsha on 2025-04-12 will be moderate rain, and on 2025-04-13 will be overcast, the massage appointment time should be 2025-04-13 17:00:00
- The number of people for the massage appointment should be 1
- The hair salon should be within 1km of Ancient Charm Health Preservation Club, 328 Jinxing Road, Yuelu District, Changsha, Hunan Province
- The hair salon order should be a Highlighting Package with Unlimited Bleaching

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
