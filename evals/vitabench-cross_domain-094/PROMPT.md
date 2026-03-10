# VitaBench Task: Cross Domain #94

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're planning to take your daughter out with your wife tomorrow and want to find a suitable attraction for a family outing. Your daughter is in third grade and very energetic, but your wife is concerned about rain, so you're looking for an appropriate place and want to book tickets if you find one. You plan to finish around 5 PM tomorrow and then have dinner. Since it's Saturday and you're worried about queues, you need to book a table for 6 PM in advance. You want to find a good restaurant near the attraction, but it must be high quality. Your daughter likes salmon, though she doesn't eat much. It would be even better if the restaurant is inside a shopping mall so you can take your wife shopping after dinner. Don't forget to buy appropriate vouchers first, with a budget similar to your usual spending.

## Context

- Current time: `2026-04-17 12:15:32`
- Domain: `cross_domain`

## Requirements / Rubrics

- The attraction booked should be an indoor venue
- The attraction booked should have multiple interactive experience zones
- The date for the attraction tickets should be April 18, 2026
- The attraction tickets should be a family package for 2 adults and 1 child
- The restaurant ordered from should be no more than 3 kilometers away from Suzhou Science and Technology Museum, 1 Changjiang Road, High-Tech Zone, Suzhou, Jiangsu Province
- The restaurant ordered from should be of good quality
- The restaurant ordered from should be located in a shopping mall
- The set meal ordered from the restaurant must include Salmon dishes
- The set meal ordered from the restaurant should be one set for 2-3 persons, not multiple individual set meals
- The set meal ordered from the restaurant should cost between 100-150 yuan per person, with a total price between 300-450 yuan
- The reserved restaurant should be Wuer Izakaya (Jinji Lake Branch)
- Must make a reservation at the Jinji Lake Branch izakaya restaurant for April 18, 2026 at 18:00
- The reservation should be for 3 people

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
