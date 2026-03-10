# VitaBench Task: Delivery #35

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You got promoted and want to celebrate with your child by ordering Guangshunxing's pig stomach chicken and dim sum. Just three dishes will be fine. Since you had a late lunch and aren't hungry yet, delivery by 9 PM is okay.

## Context

- Current time: `2025-11-27 18:55:25`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the family dinner order celebrating promotion should be Xinyuan Residential Area, 180 meters southeast of the intersection of Huangshanglong Road and Minxiangyuan Road, Yunlong District, Xuzhou City, Jiangsu Province
- The estimated delivery time for the family dinner order celebrating promotion should be before 9:00 PM on November 27, 2025
- The restaurant for the family dinner order celebrating promotion should be a Guangshunxing brand store
- The family dinner order celebrating promotion should contain 3 dishes in total
- The family dinner order celebrating promotion should include pig stomach chicken as the main dish, and at least one dim sum item (such as shumai)

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
