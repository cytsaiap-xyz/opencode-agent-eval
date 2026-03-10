# VitaBench Task: Instore #97

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You and three friends who all enjoy trying foreign cuisine have decided to find a foreign restaurant for a gathering tomorrow. You've decided to try Thai cuisine, and you need to order a set menu that's enough for four people and includes Tom Yum and Yellow Curry Chicken. For this Thai meal, each of you has contributed 100 yuan, and you can't exceed this amount. After ordering the set menu, make a reservation as you plan to dine at 6 PM tomorrow evening. To make the gathering more fulfilling, you all plan to find a place to relax in the afternoon. After discussing, you've decided to find a Cat Café where you can purchase a package with free drink refills. This package should also offer unlimited time since you don't know how long you'll stay. Oh, and the Cat Café shouldn't be too far from the restaurant, preferably within 1 kilometer.

## Context

- Current time: `2025-08-15 15:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The ordered restaurant needs to provide Thai cuisine
- The restaurant order must be a 4-person set meal, not multiple individual set meals
- The restaurant set meal must include Tom Yum
- The restaurant set meal must include Yellow Curry Chicken
- Since there are 4 people dining, and each person is expected to pay 100 yuan, the calculation is 4*100=400 yuan. Therefore, the restaurant set meal price needs to be within 400 yuan (including 400 yuan)
- The reserved restaurant should be Thai Home Thai Cuisine
- The restaurant reservation time is 18:00 on August 16, 2025
- The restaurant reservation is for 4 people
- The ordered cat café package needs to accommodate 4 people (purchase a four-person meal or purchase 4 single-person meals)
- The ordered cat café package must have unlimited time
- The ordered cat café package must include free drink refills
- The ordered cat café must be within 1 kilometer (including 1 kilometer) from Thai Home Thai Cuisine, 2nd Floor, Building B, Kaixuan Plaza, No. 168 Zhongzhou Middle Road, Xigong District, Luoyang

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
