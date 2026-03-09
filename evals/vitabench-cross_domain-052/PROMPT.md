# VitaBench Task: Cross Domain #52

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You just earned your PhD degree and are very excited. You've decided to celebrate this important life milestone in a special way. Tonight, you want to order delivery from a top restaurant to celebrate, preferring exquisite cuisine like French or Italian high-end food, but you don't eat offal. The delivery should arrive within an hour to maintain the food quality. Tomorrow, you plan to invite your supervisor and two close classmates for a celebration meal. Your supervisor likes Hunan cuisine, so you're looking for a restaurant with an average of 200 yuan per person, and you want to book a private room for 11:30. Ideally, there should be a stylish tea house near the restaurant where you can go after the meal. You want to purchase a set that includes Qihong tea, which your supervisor likes. You've been preparing for your thesis defense recently and haven't exercised for a while, so tomorrow night you're planning to go night climbing to 'view all mountains as small,' but you don't want to go too far from home - no more than 50km. If it's within that distance, you'll buy tickets.

## Context

- Current time: `2026-04-22 18:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The delivery address for the takeout order is Room 502, Unit 1, Building 13, Sunac Xingyao Wuzhou, 28 Youyi Road, Hexi District, Tianjin
- The estimated delivery time for the takeout order should be before 19:15:00 on 2026-04-22 (including 19:15:00)
- The takeout order should be from a French or Italian restaurant
- The dishes ordered in the takeout order should be high-end cuisine
- The dishes ordered in the takeout order should avoid offal
- The reserved restaurant should be a Hunan cuisine restaurant
- The reservation is for 4 people
- The restaurant reservation time is 11:30:00 on April 23, 2026
- The reserved restaurant has an average cost of 200 yuan per person
- The tea house in the order should be elegant
- The set in the tea house order should be sufficient for four people
- The set in the tea house order should include Qihong tea
- The merchant in the tea house order should be within 3km of Xiang Yu Restaurant, 128 Nanjing Road, Heping District, Tianjin
- The scenic spot ordered should be within 50km of Room 502, Unit 1, Building 13, Sunac Xingyao Wuzhou, 28 Youyi Road, Hexi District, Tianjin
- The purchased scenic spot tickets should be valid for night use

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
