# VitaBench Task: Cross Domain #67

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Today is your birthday and you plan to treat yourself well. At noon, you want to order a birthday cake for delivery. You're quite picky and hope to find a cake shop with high ratings. You definitely want dairy cream since it's just for yourself, and the price should be similar to regular desserts. In the evening, your parents are coming to celebrate with you. You want to buy birthday hats and ribbons from the same cake shop to create a festive atmosphere at home tonight. You also need to find a restaurant with an elegant environment to have dinner with your parents in the evening. It should be a Chinese restaurant without high salt or deep-fried dishes, preferably with a birthday package that you can order now. Since your parents are coming from out of town, you need to book a hotel room for them within 1km of the restaurant. They need separate beds now, and your budget for the hotel is no more than 400.

## Context

- Current time: `2025-05-20 10:31:11`
- Domain: `cross_domain`

## Requirements / Rubrics

- Food delivery merchants need to have ratings of 4.4 or above
- The ordered cake must be made with Dairy Cream
- The price of the ordered cake should be between 20-80 yuan
- The delivery order needs to include a cake
- The delivery order needs to include birthday hats and ribbons
- The cake, birthday hats, and ribbons in the order should be from the same store
- The delivery address for the food delivery order is Room 304, Building 9, Baolong Residential Area Lane 2, Nanlian Community, Longgang Street (350 meters walk from Exit B of Longcheng Square Metro Station), Longgang District, Shenzhen, Guangdong Province
- The ordered Chinese restaurant should have an Elegant Environment
- A Birthday Package should be ordered at the Chinese restaurant
- The restaurant order package should be suitable for three people
- The ordered set menu dishes must comply with the user's dietary restrictions: Low Salt
- The ordered set menu dishes should avoid Deep-fried foods
- The ordered hotel should be within 1km or less from the restaurant
- The ordered hotel room cannot be a King Room
- The total price of the hotel order should not exceed 400 yuan
- The booking date for the hotel order should be 2025-05-20

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
