# VitaBench Task: Delivery #76

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You want to order two sets of Xiabu Xiabu's individual beef hot pot meal as lunch for yourself and your boyfriend, requesting a non-spicy, savory flavor. You also plan to order an ice drink from LELECHA Tea, but you don't drink anything with caffeine. You hope both items can be delivered before 12 noon.

## Context

- Current time: `2025-08-16 10:59:27`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for LELECHA Tea order should be Greenland Yuansheng International, Intersection of Jinshui East Road and Dongfeng South Road, Zhengdong New District, Jinshui District, Zhengzhou City, Henan Province
- The estimated delivery time for LELECHA Tea order should be before 12:00 on August 16, 2025
- When choosing LELECHA Tea drinks, select products with no tea base to avoid caffeine
- The delivery address for Xiabu Xiabu Hot Pot order should be Greenland Yuansheng International, Intersection of Jinshui East Road and Dongfeng South Road, Zhengdong New District, Jinshui District, Zhengzhou City, Henan Province
- The estimated delivery time for Xiabu Xiabu Hot Pot order should be before 12:00 on August 16, 2025
- When choosing Xiabu Xiabu Hot Pot set, select non-spicy savory flavor, avoiding mild spicy or spicy flavors

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
