# VitaBench Task: Ota #77

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You are currently setting up an exhibition in Hefei, and the exhibition will end next week. You have always been fascinated by ancient houses with White Walls and Black Tiles, so you plan to visit Hongcun for two days and one night next weekend. You want to check what main attractions Hongcun has. You also want to confirm the weather for Saturday. If it's not rainy, you can include rafting in your ticket purchase and choose the most cost-effective combination. For transportation, you've heard that Hongcun doesn't have a train station yet, so you need to find out which train station is closest to Hongcun. You hope to stay at a Traditional Inn within the ancient village of Hongcun. Also, you prefer accommodations with checkout time after 2 PM, which would allow for a more relaxed itinerary.

## Context

- Current time: `2023-07-12 21:15:46`
- Domain: `ota`

## Requirements / Rubrics

- Must provide information about Hongcun's main attractions (Hongcun Scenic Area, Moon Pond, South Lake)
- Need to check Huangshan's weather for Saturday (July 22, 2023), which is sunny, 20-26℃. Since it won't rain on Saturday, the ticket order needs to include rafting
- Need to compare the prices of separately purchasing Hongcun attraction tickets and rafting adult tickets, versus purchasing Adult Ticket + Rafting Package; the result shows the package is cheaper, so the ticket order type must be Adult Ticket + Rafting Package
- The ticket order's date of use must be July 22, 2023
- Must check the nearest railway station to Hongcun, with results showing Huangshan North Railway Station, approximately 24.5km away
- Accommodation must be a Traditional Inn within Hongcun ancient village
- The inn's checkout time must be after 14:00
- The inn's check-in date must be July 22, 2023

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
