# VitaBench Task: Cross Domain #17

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your mother is coming from your hometown in Jiujiang to visit your new home today. She says she wants to cook you a sumptuous dinner tonight. Since your kitchen has never been used, you need to quickly order delivery for some condiments. Soy sauce, salt, vinegar, and MSG are all necessary, but you don't need dark soy sauce, and your mother will definitely bring her homemade doubanjiang and oil pressed from your hometown. You also want to check if there's a tea house with a refined environment within 1km of your home, so your mother won't be bored alone at home tomorrow when you go to work. Get her an afternoon tea set now. Having your mother here makes you feel uncomfortable, so you want to check the high-speed rail tickets for her return journey. Buy her a First Class Seat for tomorrow evening. The arrival time shouldn't be later than 10 PM for safety reasons.

## Context

- Current time: `2025-05-15 15:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- No oil products should be included in the seasoning order
- No doubanjiang should be included in the seasoning order
- No dark soy sauce should be included in the seasoning order
- The delivery time for the seasoning order is 2025-05-15 15:30:00-2025-05-15 16:30:00
- The delivery address for the seasoning order is Room 1201, Unit 1, Building 3, Greenland Zifeng Residence, 125 Bayi Avenue, Donghu District, Nanchang, Jiangxi Province
- The seasoning order must include salt
- The seasoning order must include soy sauce
- The seasoning order must include MSG (Monosodium Glutamate)
- The seasoning order must include vinegar
- The tea house to order from must be within 1km of home
- The tea house to order from must have a refined environment
- The set menu in the tea house order must be available in the afternoon
- The train to book should depart on the evening of May 16, 2025
- The train to book should not arrive later than 10 PM
- The train ticket to purchase should be First Class Seat
- The train_number of the booked train must start with G
- The booked train must run from Nanchang to Jiujiang

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
