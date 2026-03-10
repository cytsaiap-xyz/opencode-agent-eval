# VitaBench Task: Ota #19

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

This weekend you are accompanying your girlfriend to Hebi to visit her parents. Now you're looking for train tickets departing around 10 AM on Saturday, both Second Class Seat tickets. This is your first time visiting Hebi, and your girlfriend recommends a famous local immersive Chinese cultural experience park. You want to find out what it's called and secretly purchase tickets for the two of you and her parents to show your sincerity. However, you are quite budget-conscious and want to book the most economical option, especially since her parents qualify for Senior Tickets. On Sunday, you also want to invite them to hike Yunmeng Mountain Scenic Area and purchase those tickets in advance. But your girlfriend says if it rains, her parents won't go hiking as it wouldn't be safe, though you and your girlfriend feel that hiking with bamboo sticks and straw shoes is lighter than riding a horse, and more interesting.

## Context

- Current time: `2023-06-22 15:54:02`
- Domain: `ota`

## Requirements / Rubrics

- The departure date of the ordered train ticket should be June 24, 2023
- The departure time of the ordered train ticket should be around 10:00
- The ordered train ticket must be Second Class Seat
- The quantity in the train ticket order should be 2
- Must search for the name and information of the famous Chinese-style immersive experience park in Hebi, which is Hebi Guling Mountain Scenic Area, a Chinese-style immersive experience park with Han and Tang dynasty culture as its theme
- The ticket date in the order for the Chinese-style immersive experience park should be June 24, 2023
- For the Chinese-style immersive experience park, must choose the most economical/cheapest ticket type, and the order should include 2 Adult Ticket (58*2) and 2 Senior Ticket (35*2)
- The scenic spot in the order with ticket date of June 25, 2023 should be Yunmeng Mountain
- Must check the weather in Hebi on 2023-06-25, which is moderate rain. Girlfriend's parents will not participate in the hiking activity, so the quantity of tickets in the Yunmeng Mountain order should be 2
- The ticket date in the Yunmeng Mountain order should be June 25, 2023

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
