# VitaBench Task: Instore #55

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Valentine's Day is coming soon, and you want to surprise your girlfriend on Valentine's Day. You plan to find a place for a couples spa where you can both relax together. You want to find a spa club with European style decoration and couple suites, and you want to purchase a package that includes full body essential oil massage and petal bath. You plan to go there at 3 PM on Valentine's Day. After the spa, you plan to stroll around before having dinner. You want to take her to a French restaurant, preferably with live music performance to set the mood. You decide to order a couple dining package, but without escargot in the set menu as neither of you can really eat it. You need to make a reservation for 7 PM at the chosen restaurant. You want to keep today's expenses under 2000 yuan.

## Context

- Current time: `2024-02-13 15:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The booked spa should have European style decoration
- The spa package should include a couple suite
- The spa package should include full body essential oil massage
- The spa package should provide petal bath service
- The spa package should be available for two people
- The reserved spa should be Dream Paris Spa Club
- The spa reservation time should be 2024-02-14 15:00:00
- The number of people for the spa reservation should be 2
- The restaurant should be a French restaurant
- The restaurant should have music performance
- The restaurant package should be a couple dining option
- The restaurant package should have Escargot not included
- The total cost of the spa order and restaurant order should not exceed 2000 yuan
- The reserved restaurant should be Blue Moon French Restaurant
- The restaurant reservation time should be 2024-02-14 19:00:00
- The number of people for the restaurant reservation should be 2

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
