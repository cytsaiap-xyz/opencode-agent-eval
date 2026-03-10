# VitaBench Task: Cross Domain #72

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your mother has offered to reimburse your expenses to go to the provincial capital for fitness and weight loss training. You need to find a fully equipped fitness boot camp that must offer closed training with professional coaching guidance. You want to see if there are any training packages suitable for beginners with large weight loss needs, which must include coaching guidance, nutritional advice, and physical assessment. You want to book a one-month package. For professional fitness nutrition supplementation, you also want to order delivery of a tub of Whey Protein, BCAA Amino Acid, and two boxes of Post-workout Recovery Drink to be delivered to your home. You want to calculate how many times you've ordered takeout this week - if it's more than 5 times, you'll buy a train ticket to the provincial capital for tomorrow and start your weight loss program immediately; otherwise, you'll buy a High-speed Rail ticket for next Monday morning's earliest train and indulge yourself a bit more. For the train ticket, a Second Class Seat will be fine.

## Context

- Current time: `2025-01-07 18:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The weight loss boot camp ordered should be located in Shijiazhuang
- The boot camp ordered should be a closed training mode
- The boot camp package ordered must include Professional Coaching Guidance
- The boot camp package ordered should be suitable for people with large-scale weight loss needs
- The boot camp package ordered should be suitable for beginners
- The boot camp package ordered must include Fitness Test service
- The boot camp package ordered must include Nutritional Advice service
- The duration of the boot camp package should be one month
- The delivery address for the food delivery order should be Room 502, Building 3, Jinxin Community, 198 Dongfeng West Road, Lianchi District, Baoding, Hebei Province
- The food delivery order should include Whey Protein
- The food delivery order should include BCAA amino acid
- The food delivery order should include Post-workout Recovery Drink
- The quantity of BCAA amino acid in the food delivery order should be 1 tub
- The specification of the Post-workout Recovery Drink should be by the pack
- The quantity of Post-workout Recovery Drink in the food delivery order should be 2
- The three products in the food delivery order should come from the same store
- Need to check the order history for the past week, the result shows ordered food delivery 3 times, not exceeding 5 times, so should book a train ticket for January 13, 2025
- The train ticket in the order should be Second Class Seat
- The train in the order should be the earliest departure of the day
- The train in the order should be from Baoding to Shijiazhuang
- The train in the order should be High-speed Rail

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
