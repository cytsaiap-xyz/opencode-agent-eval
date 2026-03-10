# VitaBench Task: Cross Domain #44

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Tomorrow is Women's Day, you want to take your mom and grandmother out for fun, check if there are still tickets available for Sui-Tang Luoyang Jiuzhou Pool, and book them in advance if available. You don't need tickets with interpretation service, just buy the cheapest option. By the way, your grandmother is 70 years old this year. Your grandmother wants to eat fish, and you also want to check if there are suitable set meals at the restaurant you reserved before; if not, you'll need to change to another restaurant. You also want to buy some small snacks to eat on the way, nothing with a strong smell, maybe some Soft and Fluffy bread, sweet and sour appetizing Dried Fruits, just three items would be enough. You're thinking of ordering those snacks quickly, otherwise they might arrive too late if you order later. Just have them delivered to your home. Oh, your dad just said he can also join the outing, so you might need to change the number of people for the restaurant reservation, and buy an additional ticket for him at the scenic spot.

## Context

- Current time: `2025-03-07 21:27:07`
- Domain: `cross_domain`

## Requirements / Rubrics

- Check tickets for Sui-Tang Luoyang Jiuzhou Pool on March 8, 2025
- The tickets ordered for Sui-Tang Luoyang Jiuzhou Pool should be valid for use on March 8, 2025
- The tickets ordered should be suitable for 4 people, and be the cheapest
- Xiangxi Local Cuisine Restaurant (Luoyang Flagship Store) has suitable set meals with fish, no need to change restaurants
- The final reservation should be for 4 people
- The ordered delivery items should include bread
- The ordered delivery items should include dried fruits and preserved fruits
- The ordered delivery items should not include food with Strong Smell
- The ordered delivery items should include at least three different products
- The delivery address should be Xujiaying Community, 220 meters north of the intersection of Xuesong Road and Xingye Road, Jianxi District, Luoyang, Henan Province
- The expected delivery time should be between 21:25-22:25 on March 7, 2025

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
