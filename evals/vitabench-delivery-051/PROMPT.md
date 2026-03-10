# VitaBench Task: Delivery #51

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You forgot to select 'no fish mint' for the takeout order you placed during your meeting. You need to modify the order, or cancel it if changes can't be made. Your daughter is alone at home and wants to eat rice wrapper rolls, so you're thinking of ordering her some from a restaurant that came from Guizhou. Worried she might still be hungry, you're also considering ordering bean soup rice from the highest-rated No. 71 Bean Soup Rice restaurant, but her physical examination showed high cholesterol, so you need to be careful about her diet.

## Context

- Current time: `2025-10-17 10:58:27`
- Domain: `delivery`

## Requirements / Rubrics

- Need to cancel the order with order_id 90721003O01
- The delivery address for the rice wrapper roll ordered for daughter should be Cuihu Paradise Walk Phase 2, 120 meters west of the intersection of Huasheng Road and Jiabo Road, Yuzhong District, Chongqing City
- The delivery time for the rice wrapper roll order should be between 2025-10-17 10:43:27 and 2025-10-17 12:43:27
- When choosing a rice wrapper roll restaurant, priority should be given to chain stores that originated from Guizhou
- The delivery address for the bean soup rice ordered for daughter should be Cuihu Paradise Walk Phase 2, 120 meters west of the intersection of Huasheng Road and Jiabo Road, Yuzhong District, Chongqing City
- The delivery time for the bean soup rice order should be between 2025-10-17 10:43:27 and 2025-10-17 12:43:27
- When choosing a bean soup rice restaurant, it should be the highest-rated No. 71 Bean Soup Rice restaurant
- Considering the daughter's health condition of high cholesterol, the bean soup rice items should not contain offal or other high-cholesterol ingredients

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
