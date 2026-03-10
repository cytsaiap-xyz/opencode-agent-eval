# VitaBench Task: Ota #85

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You've always longed to visit Xining, Qinghai, to experience the sacred atmosphere of Tibetan Buddhism and the unique charm of plateau culture. Next Thursday and Friday, your school is holding a sports meet, so classes are canceled for teachers. Coincidentally, your husband will be on a business trip and your child is staying at school—leaving you free from responsibilities. You've decided to take this opportunity for a solo trip. Your departure date will be next Thursday, with plans to return on the Monday after next. You can start booking round-trip flight tickets now: choose a morning flight for departure and avoid red-eye flights for the return journey. The total cost of both tickets should not exceed 3,000 yuan. For accommodation: you'd like to stay in a hotel that has opened within the past two years and offers oxygen supply facilities; since it's a solo trip, you also want the hotel to provide wake-up call services. Once you find a hotel meeting all these criteria, book it in advance—it'll be convenient enough if all four nights are spent at the same place. Keep total lodging expenses around 2,000 yuan. As for activities: visiting Ta'er Monastery and Qinghai Lake are musts during this trip—you also plan to explore some local specialty museums while there. Purchase admission tickets for Qinghai Lake on whichever day has the highest temperature during your stay; as for Ta'er Monastery and museum visits, schedule those by buying tickets dated next Saturday.

## Context

- Current time: `2027-09-17 16:15:27`
- Domain: `ota`

## Requirements / Rubrics

- The departure flight is from Harbin to Xining
- The departure flight date is September 23, 2027
- The departure flight time is in the morning
- The return flight is from Xining to Harbin
- The return flight date is September 27, 2027
- The return flight cannot be a red-eye flight
- The total cost of departure and return flights cannot exceed 3000 yuan
- The hotel booking dates are September 23, 2027, September 24, 2027, September 25, 2027, September 26, 2027
- The booked hotel must have opened in the last two years
- The booked hotel must provide oxygen facilities
- The booked hotel must have wake-up call service
- The total cost of the hotel order should be around 2000 yuan
- Check the weather in Xining from September 23-27, 2027, and find that September 25 has the highest temperature (10-23 ℃), so the ticket date for Qinghai Lake is September 25, 2027
- The ticket type purchased for Qinghai Lake is adult ticket
- The ticket date for Ta'er Monastery should be September 26, 2027
- The ticket type purchased for Ta'er Monastery is adult ticket
- The ticket date for the museum should be September 26, 2027

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
