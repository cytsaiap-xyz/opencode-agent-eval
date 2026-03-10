# VitaBench Task: Instore #76

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Tomorrow is the day of your college roommates' gathering, and as the event organizer, you'll plan the day's itinerary. You purchased a 4-Person Set Menu at a Cantonese restaurant near the High-Speed Railway Station yesterday and reserved it for 12 noon. However, two roommates expressed that they want BBQ, so you plan to cancel yesterday's reservation and refund the voucher. After discussing with your roommates, you've decided to find a Northeastern BBQ restaurant with an average cost not exceeding 150 yuan per person, meeting at the same time. You won't purchase vouchers in advance - everyone can order what they like when you get there. After the meal, you all want to play Mahjong, so you plan to find a Self-Service Mahjong club near the BBQ restaurant and purchase a 4-hour package that includes Tea. In the evening, you'll bring your roommates home for dinner specially prepared by your mom, so you won't arrange any additional activities.

## Context

- Current time: `2023-07-07 09:15:00`
- Domain: `instore`

## Requirements / Rubrics

- The order status of the Cantonese restaurant set menu should be cancelled
- The reservation status of the Cantonese restaurant should be cancelled
- The reserved BBQ restaurant should be Northeastern BBQ
- The average consumption at the BBQ restaurant should be less than or equal to 150 yuan
- The reservation time for the BBQ restaurant is 2023-07-08 12:00:00
- The number of people for the BBQ restaurant reservation is 4
- The distance from the Self-Service Mahjong Club to Charcoal Legend Northeastern BBQ, 200m East of Gongbei Port Plaza, Xiangzhou District, Zhuhai should be within 2km (inclusive)
- The set package ordered at the Self-Service Mahjong Club should include mahjong playing and tea service
- The usage duration of the ordered set package at the Self-Service Mahjong Club should be 4 Hours

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
