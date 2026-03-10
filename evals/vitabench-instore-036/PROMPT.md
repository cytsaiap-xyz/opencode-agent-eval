# VitaBench Task: Instore #36

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You want to get a portrait photoshoot and are looking for a photography studio with a high return rate and professional equipment. You plan to purchase a personal portrait package, choosing the most affordable option. However, the package must include at least 10 retouched photos, and ideally you'd like to receive all the original photos. You suddenly realize you don't know what the weather will be like on Sunday - if it's sunny, you want to find a Western restaurant with a terrace for a nice meal, just a single set would be fine, and it should be within 3km of the photography studio. If it's overcast or rainy, you'll just go home. Oh, and you want to schedule the photography session for 10am.

## Context

- Current time: `2024-05-28 18:23:23`
- Domain: `instore`

## Requirements / Rubrics

- The photography studio should have a High Return Rate
- The photography studio's equipment should be Professional Equipment
- The photography studio order should be for the cheapest package
- The photography studio order should be for a Personal Portrait Photography package
- The photography studio package ordered should include 10 or more Retouched Photos
- The photography studio package ordered should include all original photos service
- Since the weather in Zhuhai on June 2, 2024 is sunny, the restaurant order should be for Western Food
- The Western restaurant should be no more than 3km (including 3km) from Starlight Photography Studio, 3rd Floor, Huafa Mall, 1688 Mingzhu South Road, Xiangzhou District, Zhuhai
- The Western restaurant order should allow for Terrace Dining
- The Western restaurant order should be a Single Set
- The photography studio appointment time should be 10:00:00 AM on June 2, 2024
- The photography studio reservation should be for 1 person
- The photography studio reservation should be with Starlight Photography Studio

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
