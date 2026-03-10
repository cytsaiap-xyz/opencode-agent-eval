# VitaBench Task: Instore #9

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You want to find a 24-hour table tennis hall to learn table tennis, preferably with trial classes. You'd like the session duration to be similar to your previous badminton package. You want to make a reservation for Saturday at 4 PM to go with your girlfriend. After making the reservation, you suddenly remember that your girlfriend might have to work overtime on Saturday and can't go, so you need to modify the number of people. After making the change, you'll purchase the package. By the way, you previously bought a dumpling set meal, but since your girlfriend can't come now, you decide to cancel it. You want to find a highly-rated dessert shop near your home to buy a cake voucher. You don't want a cheesecake - although you love it, this is a surprise for your girlfriend to reward her for working overtime. She prefers fruit flavors.

## Context

- Current time: `2024-07-12 16:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The table tennis hall to be booked should be open 24 hours
- The table tennis hall should offer a 2-Hour Trial Class
- The table tennis hall booking time should be 2024-07-13 16:00:00
- The number of people for the table tennis hall booking should be 1
- The table tennis hall to be booked should be Star Power Table Tennis Hall (Jianghan Branch)
- The table tennis hall booking should be for a Trial Class
- The duration of use for the table tennis hall booking should be 2 Hours
- The dumpling order status should be cancelled
- The dessert shop should be within 500m (inclusive) from Room 501, Unit 2, Building 4, Hankou Bank Staff Quarters, 241 Xinhua Road, Jianghan District, Wuhan, Hubei Province
- The dessert shop rating should be 3.8 or above
- The dessert shop order should be for a Cake
- The dessert shop order should be Fruit flavored
- The dessert shop order should not be Cheesecake flavored

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
