# VitaBench Task: Delivery #65

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're planning to entertain friends at home and just learned they're bringing their children, so you need to order another serving of the tofu pudding you just looked at. You also want to order a pound of beef jerky that you regularly buy for them to try. Considering that your friend is currently trying to lose weight, while also accommodating their family's taste preferences, you want to choose lean, non-spicy beef jerky with fruitwood fragrance and cumin flavor.

## Context

- Current time: `2025-10-03 16:02:58`
- Domain: `delivery`

## Requirements / Rubrics

- Order one more serving of tofu pudding from order D0721003T01
- The delivery address for the beef jerky order should be Jingcheng Xiufu, No. 288 Zhangba East Road, Yanta District, Xi'an City, Shaanxi Province
- The beef jerky order should select Taizu Military Rations: Freshly Baked Beef Jerky (Xi'an Branch) as the merchant
- The beef jerky order should select lean type products, avoiding marbled mixed types
- The total weight of beef jerky products in the order should be one jin (500g)

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
