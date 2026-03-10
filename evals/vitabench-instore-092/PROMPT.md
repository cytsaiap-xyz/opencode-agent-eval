# VitaBench Task: Instore #92

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You've been eating a lot of Sichuan cuisine lately, and your colleague just mentioned how distinctive Yunnan cuisine is, so you decided to try something different. You want to find a restaurant that's been in business for over ten years with free parking. You're looking to purchase a single-person meal that includes Steam Pot Chicken and is available on weekends. If that's not available, a Two-Person Package would work too, with Take-Away Available. You also want to reserve a table for this Sunday at 4pm. Just after making the reservation, your friend who was supposed to meet you for KTV at 6pm that evening messages you saying her lunch plans were canceled, so she can join you earlier. So you invite her to join you for the meal and change the reservation time to twelve o'clock, keeping the same package, and planning to order additional dishes your friend likes. Although you plan to go to KTV afterwards, you haven't decided on a location yet, so you want to book that at the same time. You're looking for a KTV within 1km of the restaurant, with a package that includes 4 Hours of singing and a Fruit Platter. However, you and your friend don't want to spend more than 80 yuan each on KTV.

## Context

- Current time: `2024-07-19 12:35:00`
- Domain: `instore`

## Requirements / Rubrics

- The restaurant ordered should be a Yunnan cuisine restaurant
- The restaurant ordered should be an established restaurant with over ten years of history
- The restaurant ordered should have free parking available
- After checking, the restaurant offers a single-person meal that includes Steam Pot Chicken, so the ordered item should be a single-person meal with Steam Pot Chicken
- The restaurant's ordered items should be available on weekends
- The reserved restaurant should be Dian Xiang Ge Yunnan Cuisine
- The restaurant reservation time should be 2024-07-21 12:00:00
- The restaurant reservation should be for 2 people
- The ordered KTV should be within 1km (including 1km) of Dian Xiang Ge Yunnan Cuisine at 128 Zhongzhou Middle Road, Xigong District, Luoyang
- The KTV ordered item should include a Fruit Platter
- The usage duration of the KTV ordered item should be 4 Hours
- Since both the user and friend don't want to spend more than 80 yuan each for karaoke, the KTV ordered item should cost less than or equal to 160 yuan

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
