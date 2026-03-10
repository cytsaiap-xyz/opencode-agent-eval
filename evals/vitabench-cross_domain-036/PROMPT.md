# VitaBench Task: Cross Domain #36

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You and your two friends are planning to try paragliding tomorrow and want to see if there are any suitable packages. If so, you can purchase them now. You've also arranged to meet for dinner tonight at People's Square after work and can check out restaurants in that area. You want to indulge in some barbecue and  BBQ skewers, and all of you have bigger appetites than ordinary people. If there's a suitable package, you can buy it first and reserve a table. You'll head there directly after work, arriving around 7:00 PM. You remember there's a shop near People's Square providing Chaoshan specialty drinks, and each of you could get one to enjoy at the restaurant, though one of your friends doesn't eat Grass Jelly. Your friend texted that there might be heavy rain tonight, and you want to confirm this. If it does, you won't go to People's Square. Instead, you will invite your friends to your home for food delivery, and tomorrow all of you can leave together from your home. They live quite close to your home and can arrive around 6:20 PM, and the food delivery should arrive around the same time.

## Context

- Current time: `2025-05-16 14:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The number of paragliding experience packages ordered is 3
- The ordered restaurant should be within 3km of People's Square in Nanguan District, Changchun City, Jilin Province
- The restaurant package ordered should include barbecue or BBQ skewers
- The restaurant portion ordered should be larger than a meal for three people
- The reserved BBQ restaurant is Chuan Shuo BBQ
- The reserved BBQ restaurant time is May 16, 2025, 19:00
- The number of people of the reserved BBQ restaurant is 3
- The delivery merchant should provide Chaoshan Specialty drinks
- The delivery merchant should be near People's Square
- The delivery address is Chuan Shuo BBQ (50m from Northeast Corner of People's Square), Nanguan District, Changchun City, Jilin Province
- The expected delivery time is May 16, 2025, 19:00
- The number of items ordered for delivery is 3
- At least one delivery item should not contain Grass Jelly

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
