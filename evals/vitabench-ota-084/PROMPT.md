# VitaBench Task: Ota #84

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You just broke up with your partner yesterday, and thinking of the trip to Yanbian that you had promised but never went on, you decide to go alone. First, check the recent fluctuation of flight ticket prices. Next week happens to be a short holiday, and you want to see how much more expensive the economy class tickets to Yanbian during the holiday are compared to this Friday. If the difference exceeds 500 yuan, you'll book tickets for this Friday and return on Sunday, with a business class ticket for the return flight. If the price difference is less than 500 yuan, you'll book tickets for the holiday itself and return two days later, with economy class for the return flight. You've heard that hotel prices in Yanbian are not too high, and you plan to spend no more than 500 yuan total for two nights' accommodation, choosing a hotel within 5km of Yanbian University. Hunchun Fangchuan Scenic Area is a must-visit place for you, and you plan to go there on the second day of your arrival, so you want to book the entrance tickets now.

## Context

- Current time: `2025-03-25 00:21:46`
- Domain: `ota`

## Requirements / Rubrics

- Query the price of economy class flights from Changchun to Yanji for next week's holiday (which is known to be Qingming Festival on April 4, 2025) (1280), and the price for Friday's economy class flights from Changchun to Yanji (580), with a price difference of 1280-580=700, exceeding 500 yuan. The departure flight date is March 28, 2025
- The departure flight is economy class
- The flight in the departure ticket order is from Changchun to Yanji
- The return flight ticket date should be March 30, 2025
- The departure flight is business class
- The flight in the departure ticket order is from Yanji to Changchun
- The hotel booking dates are March 28, 2025 and March 29, 2025
- The hotel must be within 5km of Yanbian University
- The total price for two nights at the hotel cannot exceed 500 yuan
- The attraction booking date is March 29, 2025
- The purchased ticket is an adult ticket

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
