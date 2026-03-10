# VitaBench Task: Delivery #5

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You want to order beef ball rice noodles delivered to your office around 6:30 PM, and hope the beef balls are fresh and hand-pounded. Since you're working overtime and can't accompany your girlfriend on Valentine's Day, plus she's on her period and emotionally unstable, you also want to order a dessert from this taro-loving place to be delivered to her home, and it must be from a reliable store.

## Context

- Current time: `2025-02-14 17:55:12`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the beef ball rice noodle order should be Huixin Cultural Office, 1st Floor, Hengqin Innovation Way, No. 111 Tianyu Road, Xiangzhou District, Zhuhai City, Guangdong Province
- The estimated delivery time for the beef ball rice noodle order should be around 18:30 on February 14, 2025
- The beef balls selected in the beef ball rice noodle order should be freshly hand-pounded, and this feature should be reflected in the product label or description
- The delivery address for the dessert order should be Huafa Shoufu, South Side of Gang'ao Avenue, Xiangzhou District, Zhuhai City, Guangdong Province
- The estimated delivery time for the dessert order should be between 18:15 and 18:30 on February 14, 2025
- A reliable dessert shop should be ordered from, typically characterized by high ratings, Chain Store guarantee, and Authentic flavors
- The product selected in the dessert order should contain taro paste elements, which should be reflected in the product name or description
- The ordered dessert should not be cold

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
