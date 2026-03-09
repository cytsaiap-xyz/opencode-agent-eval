# VitaBench Task: Instore #37

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your online friend from Changsha is coming to meet you in person, arriving at South Railway Station tonight at 7 PM. You plan to pick him up and take him to a local Chengdu hot pot restaurant within 2km of the station. Since he mentioned he has a good appetite, you plan to order a set menu for four people to ensure there's enough food for both of you. You want a butter hot pot base, and you're aiming to keep the set menu price under 200 yuan. Later, you want to take him to a bar with live music performance in the Yulin Street area to experience Chengdu's bar culture, and the bar must be on the top-selling list. Since you're planning to take your friend sightseeing nearby tomorrow, you can't drink too much - just one different cocktail each is enough, and neither of you wants anything too sweet. You're looking for suitable set options, preferably a set for two, or if not available, two single person sets.

## Context

- Current time: `2023-03-22 18:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The hot pot restaurant should be within 2km (inclusive) of Chengdu Wuhou District South Railway Station
- The hot pot set ordered should be for four people
- The hot pot set ordered should have a butter base
- The hot pot set ordered should be within 200 yuan (inclusive)
- The hot pot restaurant ordered from should be a Chengdu local hot pot restaurant
- The bar must have live music performance
- The bar should be a top-selling merchant
- Agent should check if there are sets for two with different cocktails, and finding none; thus the bar order should be two single meals
- Since travel is needed tomorrow, the cocktail set ordered should be low alcohol content
- The cocktail set ordered should not contain high sugar content
- The bar order should include two different cocktails

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
