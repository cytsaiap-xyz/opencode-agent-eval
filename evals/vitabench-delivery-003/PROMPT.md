# VitaBench Task: Delivery #3

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your daughter needs to go to her dance class at 6:30, so you're planning to order a bowl of River Snail Rice Noodle for each of you as dinner. You want yours to have rich broth and chewy noodles, with the noodles not clumping together in the soup when delivered, plus a fried egg so you won't be hungry later. Your daughter loves chicken feet, but she can't handle spicy food very well.

## Context

- Current time: `2025-06-03 17:02:31`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address should be Huchi Garden, No. 75 Huchi Road (180 meters walk from Baiyangwan Park Metro Station Exit 4), Gusu District, Suzhou City, Jiangsu Province
- The order delivery time should be before 18:00 on 2025-06-03, ensuring that the daughter can finish her meal before 6:30 pm to attend her dance class
- The River Snail Rice Noodle ordered for the user should have soup and noodles packaged separately to prevent the noodles from becoming soggy and losing their chewiness
- The River Snail Rice Noodle ordered for the user should include fried egg
- The River Snail Rice Noodle ordered for the daughter should be mild spicy or non-spicy and include chicken feet, meeting the daughter's preference who cannot handle spicy food well but loves chicken feet
- The dinner order of River Snail Rice Noodle should include a total of 2 portions, separately meeting the dining needs of the user and the daughter

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
