# VitaBench Task: Cross Domain #24

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Mother's Day is coming soon, and your mother has mentioned that receiving carnations every year lacks thoughtfulness. You want to give her something special this year. You plan to order a nourishing beauty Bird's Nest Cup for her breakfast, to be delivered around 9 AM, with a budget of about 150 yuan. Also, look for some leisure activities near home that would be suitable to do with your mother, such as flower arrangement or visiting a tea house. She has never experienced these before, so you hope to find a place with instructors teaching these skills. You also want a quiet place suitable for mother-daughter conversations with a warm atmosphere. Choose the closest location to your home and make a reservation now for the visit time, while also purchasing the in-store package. You're thinking of going around 3 PM. You also want to check if it will rain that evening - if not, you'd like to buy two boat tour tickets to let her experience the small bridges, flowing water, and unique garden scenery. If it's raining, forget about it.

## Context

- Current time: `2025-05-09 08:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The takeout item ordered for mom is Bird's Nest Cup
- The price of the takeout item ordered for mom should be less than 150 yuan
- The expected delivery time of the takeout item ordered for mom is around 09:00 on May 11, 2025 【which means the expected delivery time is within the 08:45-09:15 range】
- The delivery address for mom's takeout order is Water Lane Apartment, 89 Pingjiang Road, Gusu District, Suzhou, Jiangsu Province
- The flower arrangement appointment time is 15:00 on May 11, 2025
- The number of people for the flower arrangement appointment is 2
- The ordered flower arrangement studio should be Four Seasons Floral Fragrance Studio (S17550802145565647_I00011)
- The flower arrangement package should include teaching service
- The weather on May 11, 2025 is light rain
- Should not purchase cruise tickets

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
