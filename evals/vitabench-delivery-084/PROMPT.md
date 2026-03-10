# VitaBench Task: Delivery #84

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

To celebrate your boyfriend's year-end bonus, you want to order authentic Shaanxi cuisine delivery to your home, with two meat dishes and one vegetable dish, and both of you will eat staple food. However, considering you've just had hemorrhoid surgery, you need to be careful not to choose heavy-flavored dishes when selecting food. Have it delivered before 7 PM. Last time, the takeout was poorly packaged and leaked oil, which you really disliked.

## Context

- Current time: `2024-12-28 17:38:04`
- Domain: `delivery`

## Requirements / Rubrics

- The restaurant ordered from must be an authentic Shaanxi cuisine restaurant, such as Running! Shaanxi Cuisine or other restaurants specializing in Shaanxi local dishes
- The celebration order must include a balance of two meat dishes and one vegetable dish
- The celebration order must include staple food items sufficient for two people's dining needs
- The ordered dishes must avoid extremely spicy flavors
- The restaurant should provide quality takeout packaging to avoid issues such as oil leakage
- The delivery address for the celebration order should be Ziwei City Garden near Bank of Communications (Xi'an Electronic City Branch), Yanta District, Xi'an, Shaanxi Province
- The estimated delivery time for the celebration order should be completed before 19:00 on December 28, 2024

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
