# VitaBench Task: Instore #83

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Qixi Festival is coming soon, and you're planning to spend a budget of 1500 yuan to give your girlfriend a romantic date experience. To avoid waiting in line on the day of the festival, you want to book a French restaurant in advance. You hope this restaurant offers a romantic dinner for two, and the package should not only include candlelight and champagne, but also appetizers, main courses and desserts, but without high-fat organ meats. After purchasing the voucher, you quickly made a reservation for 6 PM on Qixi Festival. Yesterday you also bought a Qixi Festival Special Couple Yoga Package, but your girlfriend said she doesn't want to exercise that day, so you decided to cancel that class. In the evening, you plan to enjoy a hot spring experience with your girlfriend for some private time together. You need to buy a Couple Package, and the hot spring place shouldn't be too far, within 10 kilometers from the restaurant would be acceptable. Be careful with your spending, you can only go over budget by 200 yuan today.

## Context

- Current time: `2024-08-08 16:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The restaurant ordered should be a French restaurant
- The restaurant order should be a set meal for two, not two individual set meals
- The restaurant set meal should include candlelight, champagne, appetizer, main course and dessert
- The restaurant set meal should not include high-fat offal
- The restaurant set meal price should be 1500 yuan or less
- The restaurant should accept reservations
- The reserved western restaurant should be Paris Impression French Restaurant
- The restaurant reservation time should be 2024-08-10 18:00:00
- The restaurant reservation should be for 2 people
- The yoga course order status should be cancelled
- The hot spring should be within 10km (including 10km) of Paris Impression French Restaurant, 5th Floor, Triumph Plaza, No. 128 Huayuan Road, Jinshui District, Zhengzhou, Henan Province
- The hot spring order should be a Couple Package
- With a total budget of 1500 yuan, the western restaurant order totals 688 yuan, and can exceed the budget by at most 200 yuan, therefore the hot spring order total should not exceed 1012 yuan (including 1012 yuan)

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
