# VitaBench Task: Cross Domain #91

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

On Qixi Festival, you want to take your girlfriend to ARANYA for a middle-class holiday experience and propose to her. Your girlfriend loves wearing high heels and can't walk long distances, so you need to check if you can drive into the park, or if not, buy shuttle service tickets. You'll definitely want to take photos to commemorate the occasion, so you plan to find a high-end restaurant with good ambiance in the park and purchase a meal for two that includes alcohol. Additionally, you want to search for nearby flower shops that can deliver to the restaurant. Your girlfriend likes pink roses and dislikes other colors of roses, but you think the bouquet shouldn't be too monochrome. If suitable, you want to purchase the restaurant set menu now, with seating reserved for 6 PM. The flowers should be delivered at that time too.

## Context

- Current time: `2025-08-10 18:23:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- According to research, vehicles are not allowed in the ARANYA Community, so the purchased tickets should include shuttle service
- The date of use for the purchased tickets should be August 29, 2025
- The number of tickets to purchase is 2
- The delivery address for the bouquet order should be Coastline Restaurant next to the Auditorium, ARANYA Community, Beidaihe District, Qinhuangdao, Hebei Province
- The delivery time for the bouquet order should be 6 PM on August 29, 2025
- The roses in the ordered bouquet must be pink
- The ordered bouquet cannot contain only roses
- The restaurant to order from should be inside the ARANYA Park
- The restaurant should have a good Ambiance
- The meal ordered at the restaurant should be a Meal for Two, not two Individual Meals
- The set ordered at the restaurant should Include Alcohol
- The reserved restaurant is Coastline Restaurant
- The restaurant reservation time is 6 PM on August 29, 2025
- The number of people for the restaurant reservation is 2

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
