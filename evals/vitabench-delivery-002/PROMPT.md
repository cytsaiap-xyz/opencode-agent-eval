# VitaBench Task: Delivery #2

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your child wants to eat crayfish, and you're thinking of ordering delivery. Your wife says she won't have any. You want to keep the budget around 50 yuan, but you also don't want to get an upset stomach. Your child can't eat spicy food, and you hope the restaurant can use fewer seasonings.

## Context

- Current time: `2024-05-12 16:19:36`
- Domain: `delivery`

## Requirements / Rubrics

- Delivery address should be North Area of Fengning Residential Complex, No. 10 Fengning Road, Wuhua District, Kunming, Yunnan Province
- Total price of crayfish order should be around 50 yuan
- Crayfish for children should be Non-spicy flavor, such as garlic or other mild flavors
- To prevent stomach issues for children, restaurants with Fresh Ingredients should be selected
- The portion of crayfish ordered should be enough For Two People

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
