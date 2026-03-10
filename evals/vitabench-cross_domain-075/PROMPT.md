# VitaBench Task: Cross Domain #75

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You've just been promoted to department manager and want to celebrate. There are fifteen people in your department including yourself, and you plan to order some snacks this afternoon. You're looking for combination platters, plus 15 additional low-sugar cupcakes, to be delivered at 2:30 PM. However, you have five favorite subordinates whom you want to treat separately to an escape room experience tomorrow. You're looking for a highly-rated escape room place, preferably one that has been featured on recommendation lists. You want to check if there are suitable packages available, preferably horror-themed to create the right atmosphere, and if so, you'll place an order. The day after tomorrow, if it doesn't rain, you want to take your parents to see a water show, something with a light show. You're checking if there are any senior discounts available. Otherwise, you'll change plans to visit Tianlong Mountain Scenic Area. If suitable tickets are available, you want to book them now.

## Context

- Current time: `2025-04-18 11:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The afternoon tea order must include cupcakes
- The afternoon tea order must include 15 cupcakes
- The afternoon tea order must include a tea snack platter
- The tea snack platter in the afternoon tea order should serve 15 people
- The expected delivery time for the afternoon tea order should be at 14:30 on 2025-04-18
- The delivery address for the afternoon tea order should be 12th Floor, Shanxi International Financial Center, 368 Qinxian North Street, Xiaodian District, Taiyuan, Shaanxi Province
- The items in the afternoon tea order should be low sugar
- The cupcakes and tea snack platter in the afternoon tea order should be from the same store
- The escape room to be booked should have a rating of 4.0 or above
- The escape room to be booked should be a Featured Store
- The escape room package should have a Horror Theme
- The escape room package should accommodate 5 people
- When checking the weather in Taiyuan for 2025-04-20, the result shows overcast, no rain, so search for attractions with water shows
- The attraction to be booked should have a light show
- The attraction should offer Senior Tickets with discounted prices compared to Adult Tickets
- The attraction should offer Adult Tickets
- The quantity of Senior Tickets in the attraction order should be 2
- The quantity of Adult Tickets in the attraction order should be 1
- The date for the attraction tickets should be April 20, 2025

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
