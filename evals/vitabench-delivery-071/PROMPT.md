# VitaBench Task: Delivery #71

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You are planning to enjoy quality Haidilao Hot Pot at home with your husband and young daughter tonight. You are ready to accommodate your child's preferences. You also plan to order two buckets of the fruit tea you ordered yesterday, as your daughter likes the sweet and sour flavor, without adding extra ice.

## Context

- Current time: `2024-09-14 17:08:00`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the fruit tea order should be Zhinong Li, Opposite to the North of Huaxin Garden, Xingfu South Road, Zhifu District, Yantai, Shandong Province
- The estimated delivery time for the fruit tea order should be around 2024-09-14 18:00:00
- The fruit tea order should select Auntie Shanghai Select Tea (Xingfu Middle Road Branch) as the store
- The fruit tea order should select Extra Large Bucket of Fruit Tea as the product
- The temperature attribute for the fruit tea order should be selected as No Ice
- The delivery address for the hot pot order should be Zhinong Li, Opposite to the North of Huaxin Garden, Xingfu South Road, Zhifu District, Yantai, Shandong Province
- The estimated delivery time for the hot pot order should be around 2024-09-14 18:00
- The hot pot order should select a product with tomato flavor to cater to children's preferences
- The hot pot order should select a set meal suitable for 2-3 people

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
