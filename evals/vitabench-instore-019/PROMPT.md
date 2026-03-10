# VitaBench Task: Instore #19

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're planning to propose to your girlfriend on Chinese Valentine's Day and want to confirm the exact date first. You want to reserve a table at a high-end restaurant for 12 PM that day, and after lunch, go to KTV for the formal proposal. It would be best to secure the restaurant reservation today. You're looking for a highly-rated Western restaurant with a terrace and lake view, preferably offering a sirloin steak set for two, with a price not exceeding 500. You and your girlfriend will walk to the KTV after the meal, so the restaurant and KTV should be within 2km of each other. You want to purchase a 3-hour Small Room package that includes champagne, snacks, and scene decoration. After placing the order and payment, you want to book it for 2:30 PM on Chinese Valentine's Day.

## Context

- Current time: `2025-08-04 10:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The reservation time for the Western restaurant should be at noon (12:00) on Chinese Valentine's Day (August 29, 2025)
- The number of people for the Western restaurant reservation should be 2
- The Western restaurant should have a terrace
- The Western restaurant should have a lake view
- The Western restaurant should provide a sirloin steak set for two, rather than two individual set meals
- The price of the sirloin steak set for two at the Western restaurant should be within 500 yuan (including 500 yuan)
- The rating of the Western restaurant should be 4.3 or above
- The KTV should be within 2km (including 2km) of the Lakeside Western Restaurant at the intersection of Xinhua Road and Yuhe Road, Bailang River Scenic Area, Kuiwen District, Weifang City, Shandong Province
- The duration of the KTV booking should be 3 hours
- The KTV booking should be for a Small Room
- The KTV booking should include champagne
- The KTV booking should include snacks
- The KTV booking should include scene decoration
- The KTV reservation time should be at 2:30 PM on Chinese Valentine's Day (August 29, 2025)
- The number of people for the KTV reservation should be 2
- The reserved KTV should be Starry Sky KTV

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
