# VitaBench Task: Cross Domain #58

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

My father is being discharged from the hospital today after surgery, and the doctor recommends going to Hainan for recovery and rehabilitation. You want to find a nutrition restaurant in Haikou with an average cost not exceeding 100 yuan per person, preferably with special post-illness care set meals. He also needs a knitted hat and hand warmer, which you need to order now for delivery within an hour. Since your father is too weak to fly and trains have better medical emergency facilities, you need to check train tickets to Haikou and see if soft sleeper berths are available. If there are no tickets for tomorrow, you'll change to the day after tomorrow. Order nutrition meals for two people - you can have the same food, but you don't eat seafood.

## Context

- Current time: `2025-01-25 16:10:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The restaurant ordered should be in Haikou
- The restaurant ordered should be a nutrition restaurant
- The restaurant's average cost per person should be less than or equal to 100 yuan
- The restaurant's food should be a post-illness care set meal
- The restaurant's food should not contain seafood
- The quantity of restaurant food items should be 2
- The delivery order should include a knitted hat
- The delivery order should include a hand warmer
- The knitted hat and hand warmer in the delivery order should come from the same store
- The delivery address should be Room 502, Unit 2, Building 3, Kangda Community, No. 74 Xuefu Road, Nangang District, Harbin
- The estimated delivery time should be January 25, 2025, 16:10-17:10
- A train ticket should be ordered
- The train ticket should be for a train from Harbin to Haikou
- The seat type of the train ticket should be soft sleeper (train berth)
- The departure time of the train should be January 27, 2025

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
