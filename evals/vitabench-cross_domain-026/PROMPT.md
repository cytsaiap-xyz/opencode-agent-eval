# VitaBench Task: Cross Domain #26

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

I'm going to Weihai with my wife for the weekend, and we've already booked a hotel in the city center. She suddenly wants to try pottery making, so I'd like to see if there are any pottery workshops within 1km of the hotel offering packages for two, and I want to book the highest-rated one. For the pottery making, I want to wear aprons that don't get dirty easily, so I'd like to buy two waterproof work uniforms in advance, one M Size and one XL Size, and have them delivered to home so we can bring them along. I want to know how far it is from the hotel to the pottery workshop - if it's within a few hundred meters, we'll walk there and schedule for Saturday at 2:30 PM; otherwise, we'll schedule for 3:00 PM. We haven't bought our high-speed rail tickets back yet, so I want to check second class seats for Sunday night. I also want to check the weather forecast - if it's not raining, we'd like tickets that arrive after 8:30 PM so we can enjoy more time there. If it's raining, we'll buy tickets arriving around 6:00 PM to get back earlier.

## Context

- Current time: `2025-08-15 19:45:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The pottery workshop to be ordered should be within 1km of the hotel
- The ordered pottery workshop is the highest-rated one among the available options (shop_id is S17550802154625724_I00012)
- The package purchased at the pottery workshop is for two people
- The product in the delivery order should be M Size
- The quantity of M Size product in the delivery order is 1
- The product in the delivery order should be XL Size
- The quantity of XL Size product in the delivery order is 1
- Both products in the delivery order are from the same store
- The delivery address for the delivery order is Room 1201, Unit 2, Building 5, Olympic Garden Residential Area, No.1 Olympic Center West Road, Lixia District, Jinan
- The delivery time for the delivery order is 19:45:00-20:45:00 on 2025-08-15
- The calculated distance from the hotel to the pottery workshop is 0.075km
- The pottery workshop to be booked should be Taoran Handmade Pottery Workshop
- The distance from the hotel to the pottery workshop is 0.075km, the user prefers to walk there, and books a slot at the pottery workshop for 14:30:00 on August 16, 2025
- The number of people in the pottery workshop reservation is 2
- The weather in Weihai on August 17, 2025 is rainy, and the high-speed rail arrival time should be around 18:00 on August 17, 2025 [specifically, the high-speed rail arrival time should be between 17:45 and 18:15]
- The high-speed rail tickets purchased are from Weihai to Jinan
- The high-speed rail tickets purchased are for Second Class Seat
- The quantity of high-speed rail tickets purchased is 2

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
