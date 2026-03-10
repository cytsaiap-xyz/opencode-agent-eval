# VitaBench Task: Instore #86

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

It's summer vacation after your freshman year, and you want to treat your counselor to a meal to thank him for his care over the past year. You're looking for a quiet restaurant within 2km of the school, but your budget is limited, and the average cost per person cannot exceed 200 yuan. The restaurant should provide private rooms, as you want to discuss the subsequent learning process and plan with your counselor. You plan to first buy a coupon for a meal for two, asking for a light taste set meal, since your counselor doesn't eat spicy food. You and your counselor have arranged to leave at 5:00 PM tomorrow, and it will take about 20 minutes to walk there, so you need to make a reservation in advance. After dinner, you want to find a bakery nearby to buy some bread to eat on the high-speed train back home. You want to check if there are any new products on sale in the store. With a budget of only 40 yuan, you plan to buy a set that includes a new bread item and a beverage, as long as it's not durian flavored.

## Context

- Current time: `2024-07-06 13:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The distance between the restaurant and Shandong University, 27 Shanda South Road, Lixia District, Jinan should be within 2km (inclusive)
- The restaurant environment must be quiet
- The restaurant should provide private room
- The price of the set meal ordered at the restaurant should not exceed 400 yuan (inclusive)
- The meal set ordered at the restaurant should be a set for two people, not two individual sets
- The set meal ordered at the restaurant must be light taste
- The reserved restaurant should be Yaxuan Private Kitchen
- Departing at 5:00 PM tomorrow, it takes about 20 minutes to walk there, so the reservation time should be 2024-07-07 17:20:00
- The number of people for the restaurant reservation should be 2
- The distance between the bakery and Yaxuan Private Kitchen (Shandong University Branch), 56 Shanda South Road, Lixia District, Jinan should be within 300 meters (inclusive)
- The set ordered at the bakery should not exceed 40 yuan (inclusive)
- The set ordered at the bakery should include bread
- The set ordered at the bakery should include beverages
- The bread in the bakery set should be a new item
- The bakery set should not contain durian flavor

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
