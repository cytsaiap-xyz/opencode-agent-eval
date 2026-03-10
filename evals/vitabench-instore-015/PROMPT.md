# VitaBench Task: Instore #15

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

This weekend you plan to go to KTV with your girlfriend to celebrate your birthday, and you want to buy a package that includes drinks. You intend to compare several high-rated KTVs in the city center. The package you buy this time can be a bit more expensive, but should not exceed twice your usual spending level. You're worried that bad weather might affect your mood, so you want to check the weather for both weekend days and schedule for whichever day doesn't rain. You plan to go at 6 PM, and if neither day has rain, you'll go on Saturday. A two-hour package will be sufficient. After KTV, you also want to have a night snack with your girlfriend at a hot pot restaurant near your home. You're looking for a place with a two-person private room that accepts reservations, and you want to reserve for 9 PM.

## Context

- Current time: `2025-05-30 18:26:28`
- Domain: `instore`

## Requirements / Rubrics

- The KTV to be ordered should have a rating of 4.0 or above
- The KTV package must include drinks
- The KTV package must not exceed 360 yuan (based on twice the upper limit of the user's leisure entertainment consumption of 120-180 yuan)
- The duration of the KTV package should be 2 hours
- Check the weather information for the weekend (May 31st: sunny 20-28℃, June 1st: light rain 19-25℃), as it won't rain on the 31st, the KTV reservation time should be 2025-05-31 at 18:00:00
- The number of people for the KTV reservation should be 2
- The KTV to be booked should be Xingju KTV (Shinan Mixc Branch)
- The night snack venue must be a Hot pot restaurant
- The night snack venue must be within 3km of home (Sea View Garden, 76 Yan'an Road)
- The night snack venue must have a Two-person private room
- The night snack venue must support advance reservations
- The reservation time for the night snack venue must be 2025-05-31 at 21:00:00
- The number of people for the night snack reservation should be 2

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
