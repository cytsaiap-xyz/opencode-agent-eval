# VitaBench Task: Cross Domain #21

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your father will turn sixty in three days. He said today that he doesn't want a big celebration, but you still need to do something for him. He has a watch that isn't very accurate anymore, so you want to buy him a smart watch now with heart rate and blood pressure monitoring functions. It shouldn't be white, and you want to have it delivered directly to your home. On his birthday, you want to take him to a Shaanxi cuisine restaurant that serves Free-range Chicken. His teeth aren't very good anymore, so you want to find a Four-person Meal where the staple food isn't flatbread. You want to place the order now and reserve it for lunch at his birthday. Your father loves history and culture, so you want to see if there are any special exhibitions at Xi'an Museum recently. If there are, you'll buy a Special Exhibition Ticket; if not, you'll accompany him to visit the Shaanxi History Museum again.

## Context

- Current time: `2025-05-13 15:37:22`
- Domain: `cross_domain`

## Requirements / Rubrics

- The smart watch in the order cannot be white
- The delivery address for the smart watch order is Room 602, Unit 1, Building 3, Greenland Colorful City, Intersection of Zhangba North Road and Technology 6th Road, Yanta District, Xi'an
- The smart watch in the order must have heart rate monitoring function
- The smart watch in the order must have blood pressure monitoring function
- The restaurant ordered from should be a Shaanxi cuisine restaurant
- The ordered Shaanxi cuisine set meal is for 4 people
- The staple food in the Shaanxi cuisine set meal is not flatbread
- The Shaanxi cuisine set meal should include free-range chicken
- The reserved Shaanxi cuisine restaurant should be Lao Mi Jia Shaanxi Cuisine
- The reservation at the Shaanxi cuisine restaurant is for 12:00 PM on May 16, 2025
- The reservation at the Shaanxi cuisine restaurant is for 4 people
- Since there is no special exhibition at Xi'an Museum, the selected attraction should be Shaanxi History Museum
- The purchased museum tickets are for May 16, 2025
- The number of museum tickets purchased is 2

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
