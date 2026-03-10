# VitaBench Task: Delivery #16

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Today you want to order your regular vermicelli with lots of side dishes delivered to your home, and you prefer it mildly spicy. At the same time, you'd like to order a hot peach-flavored drink to relax. However, since you have an early shift tomorrow morning, you need to choose a drink with low caffeine content to avoid affecting your sleep quality tonight.

## Context

- Current time: `2026-09-24 11:57:29`
- Domain: `delivery`

## Requirements / Rubrics

- Vermicelli main dish order should choose Sichuan-Chongqing Noodle House (Hot and Sour Vermicelli • Dumplings • Rice Noodles) store
- Vermicelli main dish order should select Chongqing Pea Mix Hot and Sour Vermicelli + Golden Beans + Pickled Long Beans + Peanuts + Side Dishes product
- Vermicelli main dish order should select mild spicy flavor
- Vermicelli main dish order delivery address should be Nanhu Garden, No. 15 Dongzhai Road, Wucheng District, Jinhua City, Zhejiang Province
- Beverage order product should be peach flavor
- Peach flavor beverage order product should be low-caffeine or caffeine-free drink
- Peach flavor beverage order product should select hot drink
- Peach flavor beverage order delivery address should be Nanhu Garden, No. 15 Dongzhai Road, Wucheng District, Jinhua City, Zhejiang Province

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
