# VitaBench Task: Cross Domain #90

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're preparing for the medical licensing exam, and considering you don't want to waste time cooking during your study period, you want to find a physical restaurant that provides healthy nutritional meals and order delivery for a month. Today you want to try one meal first, with delivery to your home around 11 AM. You want the nutritional meal to be low in carbs as you're afraid of feeling drowsy, and you want something with high satiety. To encourage yourself to pass the exam, you want to book a high-end hotel with a Jacuzzi for 30 days later, so you can relax right after the exam is over. You prefer the hotel to be far from home, preferably more than thirty kilometers away, to enjoy that tranquil feeling alone. However, since it's far away, ordering delivery won't be convenient, so you also want to check if there are highly-rated BBQ restaurants where you can have dinner before going to the hotel. After your exam, it will be evening and you'll definitely be hungry, wanting to eat everything and indulge a bit, with a set menu that doesn't exceed 400 yuan.

## Context

- Current time: `2026-05-14 09:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The food delivery should be healthy nutrition meals
- The food delivery order for nutrition meals should be from restaurants with physical stores
- The nutrition meal ordered should be Low Carb
- The nutrition meal ordered should have High Satiety
- The delivery address for the nutrition meal should be Unit 2201, Building 8, Sunshine 100 Community, 235 Xiaoxiang Middle Road, Yuelu District, Changsha, Hunan Province
- The estimated delivery time for the nutrition meal should be around 2026-05-14 11:00 [meaning the delivery time should be between 10:45 and 11:15]
- The hotel ordered should be more than 30 kilometers away from Unit 2201, Building 8, Sunshine 100 Community, 235 Xiaoxiang Middle Road, Yuelu District, Changsha, Hunan Province
- The room ordered should be equipped with Jacuzzi
- The hotel check-in date should be 2026-06-13
- The in-store restaurant should be a BBQ restaurant
- The in-store restaurant's rating should be greater than or equal to 4.2
- The price of the ordered items at the in-store restaurant should be less than or equal to 400 yuan
- The dishes ordered at the in-store restaurant should be diverse
- The items ordered at the in-store restaurant should be Available at Night

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
