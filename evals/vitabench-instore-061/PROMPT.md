# VitaBench Task: Instore #61

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You have no classes this afternoon and plan to relax with your 3 roommates at a trendy play hall. You want to find a place with VR games and a billiards hall. You don't plan to play for too long, so you just want to buy 4 vouchers for 4 hours of unlimited play, booking for 2 PM. After playing, you all want to find a chain hamburger restaurant within 1km to eat. You plan to order a meal for four that includes hamburgers and durian pizza, with an average cost not exceeding 50 per person. After eating, you want to find a livehouse within 3km of the pizza place to relax and listen to music. You're looking for a livehouse ranked in the top 10 popularity list in Wenzhou, and want to buy a beverage package for 4 people. However, you only plan to spend 500 today, and your roommates have the same budget, so the package price can only come from the remaining budget without exceeding it. After deciding on the package, you place the order and book for 7:30 PM.

## Context

- Current time: `2023-05-12 13:45:00`
- Domain: `instore`

## Requirements / Rubrics

- The trend play hall order should include VR games
- The trend play hall order should include a billiards hall
- The product ordered at the trend play hall should be a 4-hour unlimited play package
- The quantity of products ordered at the trend play hall should be 4
- The reservation time for the trend play hall should be May 12, 2023, at 14:00:00
- The number of people for the trend play hall reservation should be 4
- The merchant for the trend play hall reservation should be Interstellar Trend Play Space
- The hamburger restaurant ordered from should be a chain store
- The hamburger restaurant should be within 1km (inclusive) from Interstellar Trend Play Space, 588 Chezhan Avenue, Lucheng District, Wenzhou
- The order from the hamburger restaurant should be a meal for four people, not four individual meals
- The package ordered from the hamburger restaurant should include hamburgers and durian pizza
- The price of products ordered from the hamburger restaurant should be 200 yuan or less
- The Livehouse ordered from should be within 3km (inclusive) from Pizza Hut, 4th Floor, Wenzhou Impression City, 1599 Wanyuan Road, Chashan Street, Ouhai District, Wenzhou
- The Livehouse ordered from should be ranked in the top ten on Wenzhou's popularity list
- The product ordered from the Livehouse should be a beverage package
- The product ordered from the Livehouse should be sufficient for 4 people
- With each person spending 500 yuan, totaling 2000 yuan. According to the orders above, the trend play hall package costs 672 yuan, the hamburger restaurant meal for four costs 178 yuan, therefore the Livehouse beverage package should not exceed 1150 yuan (inclusive)
- The reservation time for the Livehouse should be May 12, 2023, at 19:30:00
- The number of people for the Livehouse reservation should be 4
- The merchant for the Livehouse reservation should be Wenzhou Sound LiveHouse

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
