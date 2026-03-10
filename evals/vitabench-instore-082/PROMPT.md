# VitaBench Task: Instore #82

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Mom has retired, and the family wants to celebrate. The three of you have decided to enjoy hot springs on February 11th. Budget is not an issue, but the venue must have a perfect rating. Places that are more than 20km from home and don't have parking lots are not being considered. You plan to purchase a family hot spring package and make a reservation for 9am. After the hot spring, you plan to go to a game hall by yourself to record some TikTok content, but you don't want to drive too far - within 10km of the hot spring is acceptable. If the game hall offers a newcomer experience package, you'll buy that directly. If not, you'll look for a murder mystery game within 5km, as murder mystery vlogs are also trending now. If you choose a murder mystery game, you want to select a mystery detective type.

## Context

- Current time: `2024-02-05 20:15:00`
- Domain: `instore`

## Requirements / Rubrics

- The distance from the hot spring establishment to No. 18, Section 2, Hongxing Road, Jinjiang District, Chengdu, Sichuan Province (450 meters walk from Exit A of City Second Hospital Metro Station) should be within 20km (including 20km)
- The hot spring establishment rating should be 5.0
- The hot spring establishment should have a Parking lot
- The ordered item price at the hot spring establishment can exceed 1000 yuan
- The ordered item at the hot spring establishment should be a Family hot spring package
- The reserved hot spring establishment should be Jinjiang Hot Spring Club
- The reservation time for the hot spring establishment is 2024-02-11 09:00:00
- The number of people for the hot spring reservation is 3
- There is a Game hall within 10km (including 10km) of Jinjiang Hot Spring Club, Chenglong Road, Jinjiang District, Chengdu, therefore the establishment to order from should be the Game hall
- The ordered item from the Game hall should be a Newcomer experience package

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
