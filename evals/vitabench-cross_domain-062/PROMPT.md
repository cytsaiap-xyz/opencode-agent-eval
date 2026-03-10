# VitaBench Task: Cross Domain #62

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Next Saturday is your 10-year high school reunion, and your homeroom teacher is about to retire. Each classmate has contributed 150 yuan, and you want to organize a farewell party for the teacher at 2 PM. You're looking for a larger tea house near Mixc Mall that can accommodate your group of 20 people with a large private room where you can chat and drink tea. You want to check if they have suitable set packages, and if so, book the space for 2 PM that day, though you don't need to purchase the package yet. You also want to order a multi-layer cake large enough for 20 people. The teacher prefers a dignified and cozy style, not a longevity peach or Internet celebrity style cake. It should be delivered around 3-4 PM. The teacher's wife wants to take him to Beihai for a few days, but she's elderly and doesn't know how to book tickets online, so you want to help book tickets for Sunday morning and surprise them. If the budget allows, you'd like to arrange business class seats for them; otherwise, first class seats.

## Context

- Current time: `2025-06-21 19:14:45`
- Domain: `cross_domain`

## Requirements / Rubrics

- The recommended tea house should be located near Nanning Mixc Mall, specifically within Nanning Mixc Mall or within 3km of it
- The recommended tea house should have a large private room that can accommodate at least 20 people
- The recommended tea house set should be suitable for 20 people
- The recommended tea house set should include tea
- The tea house reservation should be for Tea Tasting House
- The tea house reservation date should be June 28, 2025 at 2pm
- The tea house reservation should be for 20 people
- The delivery product should be a multi-layer cake
- The ordered cake should serve 20 people
- The ordered cake style must be dignified and cozy
- The ordered cake style cannot be longevity peach style
- The ordered cake cannot be internet celebrity style
- The cake delivery time should be June 28, 2025 between 3-4pm
- The cake delivery location should be Tea Tasting House, No.140 Minzu Avenue, Qingxiu District, Nanning City, Guangxi Zhuang Autonomous Region
- The total budget is 3000 yuan, the train ticket budget cannot exceed 3000 minus the cost of the tea house order minus the cost of the cake order, therefore the ordered train tickets should be business class seat
- The train ticket order date should be the morning of June 29, 2025
- The quantity of train tickets should be 2

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
