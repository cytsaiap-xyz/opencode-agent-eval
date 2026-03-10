# VitaBench Task: Delivery #6

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your classmate is coming to visit you at your home. She is allergic to mangoes, so you want to cancel the mango mochi order you just placed and reorder from this shop with one blueberry flavor and one mint dark chocolate flavor mochi, without black sesame mochi skin, and you need the merchant to provide gloves. You also plan to order a combined set of boiled and deep-fried dishes from Sister Xu's Boiled and Deep-fried, without coriander/fish mint root.

## Context

- Current time: `2025-11-01 13:57:55`
- Domain: `delivery`

## Requirements / Rubrics

- Successfully cancel the user's order for Mango Pomelo Sago Cheese Mochi at Nuojiji Mochi Shop·Coffee (Shida South Road Branch), with order number 10721002T01
- The merchant for the new order should still be Nuojiji Mochi Shop·Coffee (Shida South Road Branch)
- The reordered mochi items should be Mint Dark Chocolate Cheese Mochi and Blueberry and Mulberry Cheese Mochi (Slightly Sour)
- The specifications for the reordered mochi items should avoid black mochi skin, preferring options such as coconut or white Oreo flavor
- The reordered mochi order needs to include a note requesting disposable gloves from the merchant
- The delivery address for the reordered mochi should be No.1 Shida South Road, Qingshanhu District, Nanchang City, Jiangxi Province (200 meters from Exit 4 of Shida South Road Metro Station), Shida South Road No.1 Complex
- Should purchase boiled and deep-fried food from Sister Xu's Boiled and Deep-fried (Shunwai Road Branch)
- The boiled and deep-fried order should only include one set meal that contains both boiled and deep-fried items
- The boiled and deep-fried order needs to include a note requesting no coriander and no fish mint, in accordance with the user's dietary restrictions of no coriander/fish mint
- The delivery address for the Sister Xu's Boiled and Deep-fried order should be No.1 Shida South Road, Qingshanhu District, Nanchang City, Jiangxi Province (200 meters from Exit 4 of Shida South Road Metro Station), Shida South Road No.1 Complex

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
