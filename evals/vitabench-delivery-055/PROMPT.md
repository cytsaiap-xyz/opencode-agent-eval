# VitaBench Task: Delivery #55

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You need to go to the Toyota Car Dealership at 2 PM today to pick up your car. Before that, you want to order some delicious Sichuan dishes at home to enjoy with your boyfriend. It shouldn't be pre-made dishes. One dish for each of you will be enough, and you don't need to order staple food as you already have some at home. In the afternoon, you want to order desserts to be delivered to the 4S shop as a thank you gift for the sales representative, but the sales rep is allergic to caffeine. At 6 PM, you'll be going to La Terre restaurant nearby for dinner, but the set meal you purchased at the restaurant doesn't include drinks. You want to order milk tea to be delivered to the restaurant separately, and neither you nor your boyfriend drink sweetened beverages.

## Context

- Current time: `2025-12-27 10:55:37`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the lunch Sichuan cuisine order should be Zone B, South A Zone, Yalan Garden, Yulin Street, Wuhou District, Chengdu, Sichuan Province
- The delivery time for the lunch Sichuan cuisine order should be around 12:00 on December 27, 2025, no later than 14:00
- The selected restaurant for the lunch Sichuan cuisine order should have a rating of 4.5 or above
- The items in the lunch Sichuan cuisine order should be freshly made dishes, not pre-made dishes
- The lunch Sichuan cuisine order should include 2 dishes, for two people to share
- The delivery address for the thank-you dessert order should be Toyota Car Dealership
- The delivery time for the thank-you dessert order should be before 14:00 on December 27, 2025
- The items in the thank-you dessert order should not contain caffeine
- The delivery address for the evening beverage order should be La Terre (Renhe New City Branch) restaurant (the complete address is 2nd Floor, Renhe Spring International Plaza, No. 505 West Section of Fucheng Avenue, Wuhou District, Chengdu, Sichuan Province, but it's acceptable as long as the restaurant name is correct)
- The delivery time for the evening beverage order should be after 18:00 on December 27, 2025
- All beverages in the evening beverage order should be selected with no sugar or no additional sugar
- The evening beverage order should include 2 drinks, for two people to consume

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
