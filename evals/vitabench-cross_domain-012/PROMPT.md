# VitaBench Task: Cross Domain #12

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your niece is going to take an art school examination, and her dream school is Nanjing Arts Institute. The exam will be held in Nanjing, and you want to accompany her. The exam date is January 10th, and you want to have a farewell meal one day before. After lunch, you can depart in the evening. You want to arrange a Creative Western Cuisine restaurant with an Artistic Atmosphere, and the rating must be higher than 4.8. You need to purchase a set menu for six people, without alcohol and high-purine foods. You want to make a reservation for 12:00 noon, expecting to spend at least two to three hours dining. You also want to check the High-Speed Rail tickets to Nanjing. If the First Class Seat price doesn't exceed 300 yuan, you'll book two First Class Seats. If it exceeds that amount, you'll buy Second Class Seats instead. However, you don't want to arrive too late, so she can get a good rest tonight.

## Context

- Current time: `2024-01-09 10:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The restaurant ordered must have artistic atmosphere
- The restaurant ordered must be a western restaurant
- The restaurant ordered must have a rating of 4.8 or above
- The set menu ordered should be suitable for six people dining
- The set menu ordered cannot contain alcohol
- The set menu ordered cannot contain high purine foods such as seafood soup
- The train tickets ordered should be First Class Seat
- The train ticket price should be less than 300 yuan
- The arrival time of the ordered train should be before 10 PM on January 9
- The departure time of the ordered train should be after 3 PM on January 9
- The restaurant reservation time should be 12:00 on January 9
- The restaurant reservation should be for 6 people
- The restaurant reserved should be Art Space Western Restaurant

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
