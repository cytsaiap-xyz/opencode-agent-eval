# VitaBench Task: Delivery #81

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You need to be on set filming continuously from 2 PM to 11:30 PM today, so you want to order a curry omurice to be delivered before you start, and it should be a bit spicy. You also want to prepare some sweet snacks with taro filling that are soft in texture for everyone on set. You plan to order 20 pieces to be delivered around 3-4 PM.

## Context

- Current time: `2025-08-02 11:57:08`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the curry omurice order should be 1588 Wenhua Road, Weifang Xinchen Plaza, Kuiwen District, Weifang City, Shandong Province
- The estimated delivery time for the curry omurice order should be before 14:00 on August 2, 2025
- The items in the curry omurice order should have spicy characteristics or contain pepper or other seasonings
- The delivery address for the taro dessert order should be 1588 Wenhua Road, Weifang Xinchen Plaza, Kuiwen District, Weifang City, Shandong Province
- The estimated delivery time for the taro dessert order should be between 15:00 and 16:00 on August 2, 2025
- The items in the taro dessert order should be sweet pastries containing taro filling
- The items in the taro dessert order should have a soft and tender texture
- The total quantity of items in the taro dessert order should be 20 pieces

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
