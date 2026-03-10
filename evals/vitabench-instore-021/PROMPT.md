# VitaBench Task: Instore #21

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Yesterday you bought a single person shared escape room ticket, and today when chatting with your friend, she said she also wanted to try it and would like to go with you tomorrow afternoon. Since she is a beginner, you plan to choose a theme with lower difficulty at that store, buy a two-person package instead, and book it for 2 PM tomorrow, canceling the previous one. After the escape room experience, you two also plan to have a meal nearby at a restaurant specializing in Minnan cuisine with two-person booths and a non-smoking policy. You have prepared 500 yuan, and after deducting the cost of the two-person escape room package, the remaining money will be your budget for this meal. You want to see if there are any suitable couple packages that you can purchase in advance.

## Context

- Current time: `2024-12-20 15:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The status of the Single Person Shared Escape Room Experience Ticket order should be cancelled
- The ordered product at the escape room should be of low difficulty
- The ordered product at the escape room should be a Couple Package
- The escape room should be Puzzle Solver Escape Room
- The booked escape room should be Puzzle Solver Escape Room
- The booking time for the escape room should be 2024-12-21 14:00:00
- The number of people for the escape room booking should be 2
- The budget is 500 yuan, the escape room costs 198 yuan, so the price of the ordered Minnan cuisine should be less than or equal to 302 yuan
- The Minnan restaurant should be within 500m (inclusive) of Puzzle Solver Escape Room Center, 1299 Lijing Road, Honggutan New District, Nanchang, Jiangxi Province
- The Minnan restaurant should be a Non-Smoking Restaurant
- The Minnan restaurant should have Two-Person Booth seating
- The ordered meal at the Minnan restaurant should be a couple package, not two single person packages

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
