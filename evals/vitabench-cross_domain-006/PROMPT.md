# VitaBench Task: Cross Domain #6

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your city is going to hold a pet-friendly marathon event on the 25th, with both the start and finish at the sports center. You want to bring your Golden Retriever to participate. The race starts very early, so the night before you want to find a special hotel within 6km that allows Large Dogs Allowed, preferably one with a Massage Bathtub where you can enjoy a good soak to prepare for the half marathon the next day. If suitable, you'd like to book the room now. You also want to find a sports restaurant within 3km of the finish line that allows pets, preferably with nutrition meals specifically designed for athletes, so you can replenish your energy after the run. You'll need to reserve a table at the restaurant, and 1pm should be appropriate. You also want to search for pet food delivery nearby. You need to order two bags of Chicken Breast, a snack can, and a Stainless Steel Dog Food Bowl to be delivered to the restaurant, so you don't have to carry them yourself.

## Context

- Current time: `2025-04-19 18:23:19`
- Domain: `cross_domain`

## Requirements / Rubrics

- The hotel booked must be pet-friendly
- The hotel booked must have a Massage Bathtub
- The hotel booking date should be 2025-04-24
- The booked hotel should be within 6km (inclusive) of the sports center
- The restaurant booked should be within 3km (inclusive) of the sports center
- The restaurant booked must allow pets
- The restaurant booked must have nutritional meals designed for athletes
- The restaurant reservation time should be 13:00:00 on 2025-04-25
- The restaurant reservation should be for 1 person
- The delivery address for the pet food order should be Athletes' Nutrition Restaurant, 35 Keyuan Avenue, Xixiangtang District, Nanning, Guangxi Province
- The expected delivery time for the pet food order should be around 13:00 on 2025-04-25 [meaning the expected delivery time should be within the 12:45-13:15 timeframe]
- The pet food order should include Chicken Breast
- The pet food order should include canned pet snacks
- The pet food order should include a dog food bowl
- All items in the pet food order should be from the same store
- The quantity of Chicken Breast in the pet food order should be 2
- The quantity of canned pet snacks in the pet food order should be 1
- The quantity of dog food bowl in the pet food order should be 1

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
