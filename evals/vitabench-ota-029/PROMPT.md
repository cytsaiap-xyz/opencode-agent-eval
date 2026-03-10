# VitaBench Task: Ota #29

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You are going to visit a client company in Gujiao next week. You plan to depart on Tuesday and return on Friday. You want to stay at the chain hotel you usually stay at, and you only need a king room. The company's budget is 500 yuan per night. If king rooms aren't available, you're willing to pay a bit extra yourself, but not more than 100 yuan per night. Your boss said you can take a day off on the Laba Festival day and skip the visit. You've heard that the Yanmenguan Scenic Area is not far from there, so you plan to check if there are tickets that include a guide service. If available, you'll book them and go to Yanmenguan Scenic Area on the Laba Festival day; if not, visiting the local museum would also be a good choice.

## Context

- Current time: `2025-01-02 15:20:49`
- Domain: `ota`

## Requirements / Rubrics

- The hotel brand should be Hanting, Ji Hotel, or Vienna Hotel
- The hotel room type must be king rooms
- The hotel order should include three nights, specifically 2025-01-07, 2025-01-08, and 2025-01-09
- The price for each hotel room per night should be less than or equal to 600 yuan
- Need to check the date of Laba Festival in 2025, which is January 7, 2025 (the eighth day of the twelfth lunar month of 2024), and the attraction ticket date should be January 7, 2025
- Need to check if Yanmenguan Scenic Area offers tickets with guide services on January 7, 2025; the result is no, so the attraction should be Gujiao Museum
- The attraction ticket type should be adult ticket

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
