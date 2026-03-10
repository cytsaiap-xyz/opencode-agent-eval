# VitaBench Task: Delivery #79

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You originally ordered Sticky Rice Tibetan Tea from Jincheng Tea House, but after hearing from your colleague about a milk tea team building activity in the afternoon, you want to cancel your previous order. You're particularly craving something spicy and numbing for lunch today, so you're thinking of ordering wontons to satisfy your craving, preferably from a highly-rated restaurant.

## Context

- Current time: `2025-11-07 10:59:26`
- Domain: `delivery`

## Requirements / Rubrics

- Successfully canceled the Sticky Rice Tibetan Tea · Fresh Milk Tea order from Jincheng Tea House (Renhe New City Branch), the order status should be changed to cancelled
- The delivery address for the wonton order should be Global Center, Building 1, 1700 North Tianfu Avenue, Guixi Street, Wuhou District, Chengdu, Sichuan Province
- The estimated delivery time for the wonton order should be between 11:30 and 12:30 on 2025-11-07
- The restaurant rating for the wonton order should be 4.5 or above
- The flavor of the wonton product should be spicy

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
