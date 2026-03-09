# VitaBench Task: Cross Domain #13

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Next Saturday is your 15th wedding anniversary, and you and your husband want to celebrate. You don't want to cook the day before the anniversary and need to find a high-end Chinese restaurant that offers premium takeout, around 200 yuan per person. You want to order two dishes and two portions of staple food now, to be delivered around 6 PM. You don't eat heavy oil spicy food. You also want to book a view suite at the Shanghai Bund, and after dinner, you'll check into the hotel where you can see the Huangpu River night view from your room, reliving the romantic memories from years ago. On Saturday, you want to go to a Western restaurant with a romantic atmosphere for the official celebration, and see if the restaurant has special set menus designed for couples, which must include romantic elements such as champagne and fresh flowers. If suitable, book a table now for noon. In the afternoon, you also want to purchase a pottery experience package for two with a rating above 4.8, no more than 3 kilometers from home, but if it rains that day, forget it and just go home early.

## Context

- Current time: `2025-06-22 13:14:22`
- Domain: `cross_domain`

## Requirements / Rubrics

- The food delivery restaurant should be a high-end Chinese restaurant
- The average cost per person at the food delivery restaurant should be around 200 Yuan
- The food delivery order should avoid heavy oil spicy dishes
- The food delivery order should include two dishes and two staple foods
- The delivery address should be Room 1204, Building B2, No. 700 Yishan Road, Xuhui District, Shanghai
- The expected delivery time should be around 18:00 on June 27, 2025 [i.e., the expected delivery time should be between 17:45 and 18:15]
- The hotel to be booked should be on the Shanghai Bund
- The hotel room type should be a Huangpu River View Suite
- The hotel check-in date should be June 27, 2025
- The western restaurant to be reserved should have a romantic atmosphere
- The western restaurant should provide a couple set menu that includes champagne and fresh flowers
- The western restaurant reservation time should be 12:00 on June 28, 2025
- The number of people for the western restaurant reservation should be 2
- June 28, 2025 will be rainy
- Should not book a pottery experience class

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
