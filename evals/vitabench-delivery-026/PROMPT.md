# VitaBench Task: Delivery #26

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

It's raining outside and a bit cold, and you're still working overtime at the office. You have a project meeting at 8 o'clock. You want to order a Flat White, but you didn't like the Dark Roast Flat White you had last time. You also want to order a Rice Bowl, preferably with Beef, but you don't eat offal.

## Context

- Current time: `2024-11-28 18:54:23`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the beef rice bowl order should be Henan Digital Certificate Authentication Center, Building 2, Future International, No. 26 Business Inner Ring Road, Jinshui District, Zhengzhou City, Henan Province
- The delivery time for the beef rice bowl order should be before 2024-11-28 20:00:00
- When selecting beef rice bowl products, items containing organ meats should be avoided
- The delivery address for the flat white coffee order should be Henan Digital Certificate Authentication Center, Building 2, Future International, No. 26 Business Inner Ring Road, Jinshui District, Zhengzhou City, Henan Province
- The delivery time for the flat white coffee order should be before 2024-11-28 20:00:00
- When selecting flat white coffee, dark roast types such as Dark Roast Flat White should be avoided
- When selecting flat white coffee, it should be served hot

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
