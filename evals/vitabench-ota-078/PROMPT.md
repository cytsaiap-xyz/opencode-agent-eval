# VitaBench Task: Ota #78

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Next week, you and your husband plan to take your child to Jilin for a trip. You plan to travel to the Changbai Mountain area next Thursday evening, spend Friday enjoying the local attractions, and return on Saturday. When choosing a hotel, several conditions must be met: it must have free parking, as you plan to rent a car near the station and drive around the local attractions. The hotel should have hot springs; the room should feature a heated kang bed, which is a unique local characteristic; you need a family room, preferably with breakfast included. After booking accommodation, you can look at scenic area tickets. You plan to purchase a multi-attraction combo ticket, which offers better value for money. Since you will be driving yourselves, you don't need to buy tickets that include shuttle bus service. Your child is 9 years old this year, so you should check if the scenic areas offer special Child Tickets to take advantage of applicable discounts.

## Context

- Current time: `2024-12-23 13:45:27`
- Domain: `ota`

## Requirements / Rubrics

- Hotel booking dates must be January 2, 2025 and January 3, 2025 respectively
- The hotel must be located near Changbai Mountain (such as Songjianghe Town in Fusong County or other areas surrounding the Changbai Mountain scenic area)
- The hotel must provide free parking service
- The hotel must have hot spring facilities
- The room must be a heated kang bed type
- The hotel booking must be for family rooms
- The hotel must provide breakfast service
- The attraction tickets must be multi-site combo tickets
- The tickets must not include shuttle bus service
- Child ticket discounts available for a 9-year-old child must be inquired about
- Different combo ticket purchase options must be compared for price differences, with the result showing that purchasing two adult combo tickets and one child combo ticket separately is cheaper than a family combo ticket, therefore the ticket order must include 2 adult combo tickets and 1 child combo ticket
- The attraction tickets must be for January 3, 2025

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
