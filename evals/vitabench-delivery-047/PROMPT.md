# VitaBench Task: Delivery #47

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You want to pre-order tomorrow's breakfast, small dumplings with [Spleen-Strengthening and Stomach-Nourishing] Pumpkin Millet Porridge, delivered directly to the law firm. You don't eat meat filling. Tomorrow morning at 10 o'clock, your intern will be meeting a client with you, and you want to bring her something to drink that can also keep her hands warm. To avoid decision paralysis, you both will have exactly the same drink, but she is avoiding sugar and doesn't drink coffee.

## Context

- Current time: `2025-10-09 20:25:22`
- Domain: `delivery`

## Requirements / Rubrics

- The breakfast order delivery address should be Beijing Deheng (Wuxi) Law Firm, 801-808, 8th Floor, Ping An Wealth Center, 15 Financial First Street, Taihu New City, Binhu District, Wuxi City, Jiangsu Province
- The estimated delivery time for the breakfast order should be before 2025-10-10 10:00:00
- The soup dumplings in the breakfast order should not contain meat
- The breakfast order should include two items: soup dumplings and [Spleen-Strengthening and Stomach-Nourishing] Pumpkin Millet Porridge
- The beverage order delivery address should be Beijing Deheng (Wuxi) Law Firm, 801-808, 8th Floor, Ping An Wealth Center, 15 Financial First Street, Taihu New City, Binhu District, Wuxi City, Jiangsu Province
- The estimated delivery time for the beverage order should be around 2025-10-10 10:00:00
- The beverage order should select warm drinks suitable for warming hands
- The beverage order should not include coffee, but can include other beverages such as tea, juice, etc.
- The beverage order should select drinks with no sugar or less sugar
- The beverage order should include 2 servings of the same beverage item

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
