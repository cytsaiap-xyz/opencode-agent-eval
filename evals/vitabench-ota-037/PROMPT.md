# VitaBench Task: Ota #37

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Next Friday, you and your wife plan to visit Linfen, Shanxi for a three-day, two-night trip to explore the Warring States culture and experience Warring States robes. You want to find accommodation near Linfen High-speed Railway Station, so book at the brand you frequent the most - a room with one bed for both of you is sufficient. Your wife is particularly interested in the Xunzi Cultural Park, and you plan to visit there on Saturday afternoon, so you need to purchase a suitable ticket package for two. You also want to learn about other Xunzi-related attractions in Linfen that can be explored in two to three hours on Sunday morning - no need to buy tickets yet. For your return journey, you want to fly from Datong, so book two Business Class tickets for a flight departing around 8-9 PM on Sunday.

## Context

- Current time: `2025-06-14 18:56:22`
- Domain: `ota`

## Requirements / Rubrics

- Hotel reservation must be for 2 nights, on 2025-06-20 and 2025-06-21
- Hotel must be located near Linfen High-speed Railway Station
- Accommodation must be Atour brand
- Accommodation must be a King Room
- Attraction ticket must be for Xunzi Cultural Park
- Xunzi Cultural Park visit must be scheduled for 2025-06-21
- Must select Double Ticket Package for Xunzi Cultural Park
- Must provide information about Xunzi-related attractions in Linfen suitable for 2-3 hour visits, with result being Xunzi Memorial Museum
- Return flight must arrive around 8-9 PM
- Return flight order must be for 2 tickets
- Return flight must be Business Class

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
