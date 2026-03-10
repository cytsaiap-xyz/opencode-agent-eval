# VitaBench Task: Cross Domain #80

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

This weekend, you plan to take your mother to Leshan for a two-day trip of sightseeing and eating, planning to depart at 10 AM on Saturday. You've already booked tickets to visit the Leshan Giant Buddha on Sunday. Your mother just called you, saying she almost forgot that she had previously scheduled appointments with a traditional Chinese medicine doctor for therapy every Sunday afternoon, so you need to return by Sunday noon. You need to change your Giant Buddha tickets to the day before. Time is tight, so you want to arrange meals in advance and purchase set meals now. You want to experience beef, fried skewers, and Bobo Chicken. You want to visit the fried skewer shop opened by Wang Hedi. As for beef and Bobo Chicken, you want to eat at traditional special restaurants that have been open for more than ten years, and you believe authentic Bobo Chicken restaurants only sell Bobo Chicken. Also, your mother cannot eat offal. Your mother also wants to cruise the Three Rivers, so you want to check if there are evening cruise tickets available - if so, buy the latest departure; if not, you'll decide on the spot.

## Context

- Current time: `2025-06-12 15:20:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The order status for the Leshan Giant Buddha ticket dated June 15, 2025 should be cancelled
- The final ordered Leshan Giant Buddha scenic spot ticket type should be Adult Ticket
- The quantity of tickets in the final ordered Leshan Giant Buddha scenic spot order should be 2
- The order date for the final Leshan Giant Buddha ticket order should be June 14, 2025
- The fried skewer restaurant ordered from should be Wang Hedi Fried Skewers (Leshan Flagship Store)
- The purchased fried skewer set meal should be a set for two people, not two individual meals
- The purchased fried skewer set meal should not contain offal
- The beef restaurant ordered from should have been in business for 10 years or more
- The purchased beef set meal should not contain offal
- The purchased beef set meal should be for two people
- The Bobo Chicken restaurant ordered from should have been in business for 10 years or more
- The purchased Bobo Chicken set meal should not contain offal
- The purchased Bobo Chicken set meal should not contain offal and should be for two people
- The Bobo Chicken restaurant ordered from should specialize in Bobo Chicken
- The ordered cruise tickets should be valid for evening use
- The use date for the cruise ticket order should be June 14, 2025
- The quantity of tickets in the cruise ticket order should be 2

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
