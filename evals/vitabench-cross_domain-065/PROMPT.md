# VitaBench Task: Cross Domain #65

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

This month, the film crew is shooting on location at Lushan. You don't have any scenes for the next two days, so you want to take the opportunity to visit Lushan Scenic Area. You don't want to stay with your colleagues from the crew, but prefer to stay alone in a deluxe hotel for one night in a king-size bed room, the higher the star rating the better, as long as it's within the scenic area. For dinner, you want to eat some Jiangxi specialty dishes within the scenic area, but not too spicy, preferably a set meal with roast chicken. However, if the scenic area is less than 20km from the city's Wanda Plaza, you'd prefer to go to an e-sports arena to play games for 3 hours, and order Jiangxi cuisine to be delivered to your hotel, with steamed buns as your staple food. You want to go to a smoke-free internet cafe, and you want to use a computer with RTX4070 or above. Since the scenic area closes at 18:00, you will order food to be delivered to your hotel in advance, around 5:30 PM for the Jiangxi cuisine.

## Context

- Current time: `2025-11-19 14:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- Need to find the highest-rated hotel among available options [Lushan Cloud Resort Hotel and Lushan Guling International Hotel are both Five-Star]
- The booked hotel should be located within the Lushan Scenic Area
- The room type in the hotel booking should be a king room
- The hotel booking date should be November 20, 2025
- Need to check the distance from Lushan Scenic Area to downtown Wanda Plaza, which is about 15km, so need to search for e-sports venues near Jiujiang downtown Wanda Plaza and create an order
- The internet cafe should have RTX4070 or higher graphics cards
- The internet cafe must be a non-smoking establishment
- The internet cafe package should be valid for 3 Hours
- The internet cafe package should be for a single person
- Since the distance from Lushan Scenic Area to downtown Wanda Plaza is about 15km, need to search for takeout options near the hotel and create an order
- The takeout restaurant should serve Jiangxi Cuisine
- The takeout food should avoid the user's dietary restrictions and should not be Extra Spicy
- The delivery address for the takeout order should be Lushan Cloud Resort Hotel, Guling Town, Lushan Scenic Area, Jiujiang, Jiangxi Province
- The estimated delivery time for the takeout order should be around 17:30:00 on 2025-11-20 [delivery time should be within the 17:15-17:45 time range]
- The order items should include Roast Chicken
- The main food item in the takeout order should be steamed buns

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
