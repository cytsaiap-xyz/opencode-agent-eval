# VitaBench Task: Instore #58

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

After work today, you want to continue practicing yoga, but you'd like to try a different yoga studio, not the one you've been to before. You want to find a place near your hospital that offers aerial yoga, purchase a trial package, and make an appointment for 6 PM, planning to finish around 8 PM. Your husband texts that he wants to find a place near home for fried chicken as a late-night snack. You're also a bit hungry, but you don't want to eat these fried foods. You both decide to find one place to buy a salad combo and a fried chicken combo, which you'll redeem when you arrive at the store.

## Context

- Current time: `2024-06-07 17:15:00`
- Domain: `instore`

## Requirements / Rubrics

- Query user's historical behavior. The user has been to Tranquil Yoga Center before, so the recommended yoga studio cannot be Tranquil Yoga Center
- The ordered yoga studio should not be more than 5 kilometers (including 5 kilometers) from the Cardiology Department, 3rd Floor, Outpatient Building, Guiyang First People's Hospital, Huaguoyuan CBD, Nanming District, Guiyang City
- The ordered product in the yoga studio order needs to be an experience package
- The ordered product in the yoga studio order needs to be an Aerial yoga program
- The user has scheduled to arrive at 18:00 on June 7, 2024, and plans to finish the experience at 20:00 on June 7, 2024. Therefore, the product ordered in the yoga studio order should provide a 2-hour experience duration
- The booked yoga studio should be Sky Yoga Studio
- The booking time for the yoga studio is 18:00 on June 7, 2024
- The number of people for the yoga studio reservation is 1
- The ordered restaurant should be within 800 meters from Room 1203, Building A, Financial Center, 162 Beijing Road, Yunyan District, Guiyang City
- The restaurant order should include a salad combo
- The quantity of salad combo in the restaurant order should be 1
- The restaurant order should include a fried chicken combo
- The quantity of fried chicken combo in the restaurant order should be 1
- The salad combo in the restaurant order must be for a single person
- The fried chicken combo in the restaurant order must be for a single person
- The salad combo and fried chicken combo in the restaurant order need to be ordered from the same store

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
