# VitaBench Task: Delivery #19

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You have a sudden meeting at 1:30 PM, and you plan to have lunch with your colleague. You want to order from that potato noodle place you often eat at, this time with sesame sauce, and also order a mixed rice for your colleague, who absolutely loves seafood.

## Context

- Current time: `2026-03-25 11:53:41`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the user's potato noodle order should be Weifang Government Service Center, No. 3396 Dongfang Road, Kuiwen District, Weifang City, Shandong Province
- The estimated delivery time for the potato noodle order should be before 1 PM on March 25, 2026
- The potato noodle order should select Xu Youdao Potato Noodles (Weifang Xinhua Branch) as the merchant
- The potato noodle order should include products with sesame sauce flavor
- The delivery address for the mixed rice order should be Weifang Government Service Center, No. 3396 Dongfang Road, Kuiwen District, Weifang City, Shandong Province
- The estimated delivery time for the mixed rice order should be before 1 PM on March 25, 2026
- The mixed rice order should include seafood products

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
