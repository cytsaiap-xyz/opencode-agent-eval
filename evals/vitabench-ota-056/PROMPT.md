# VitaBench Task: Ota #56

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

It's the winter vacation now, and your child is bored at home, complaining that classmates are all traveling. You and your husband have discussed and decided to take both sets of parents to Nanjing before the Chinese New Year. To accommodate the elderly, you feel the itinerary shouldn't be too rushed, so you plan to stay in Nanjing for five days and four nights. You've already requested leave from your company and hope that all five days of the trip will be weekdays, which means fewer people and potentially more affordable flight and hotel costs. You now want to book the outbound flight tickets, economy class is fine. For the return journey, you'll check later if there are any discounted flights from nearby cities. You don't want to take red-eye flights. You also want to book hotels as soon as possible and are looking for recommendations. Your budget is similar to before, but you want to try hotel brands you haven't stayed at before. You still prefer chain hotels as they feel more reliable, and you need to book three twin rooms for each night. Your friend mentioned that the scenery around Qinhuai River is especially beautiful at night, so you'd like to stay nearby if possible, preferably within a few hundred meters' walking distance.

## Context

- Current time: `2025-01-16 09:12:26`
- Domain: `ota`

## Requirements / Rubrics

- January 29, 2025 is Spring Festival. The user wants all five days of the trip to be workdays, so the trip should be from January 20, 2025 to January 24, 2025, with the departure flight on January 20, 2025
- The departure flight cannot be a red-eye flight
- The departure flight seat type should be Economy class
- The number of departure flight tickets should be 7
- The departure flight should be from Chengdu to Nanjing
- The hotel should be within 1km range of Qinhuai River (excluding exactly 1km)
- The hotel budget should be 300-500 yuan per night
- The hotel should not be any of these brands: Home Inn/Hanting/7 Days/Ji Hotel/Jinjiang Inn
- The hotel should be a chain brand
- The hotel booking should include 3 twin rooms per night
- The hotel booking should include twin rooms for 4 nights, specifically for January 20, 2025, January 21, 2025, January 22, 2025, and January 23, 2025

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
