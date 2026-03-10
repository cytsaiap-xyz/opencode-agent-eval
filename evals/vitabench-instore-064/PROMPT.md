# VitaBench Task: Instore #64

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Near the end of your workday, you want to find a nearby place for a facial treatment. You want to choose a beauty salon within 1km of your company, with a rating not lower than 4.8. You mainly want to deep cleanse your face, and if the salon offers Hifu, you'd prefer that because you've heard it's gentler and more thorough for cleansing, but the price shouldn't exceed 300 yuan or it wouldn't be worth it. Otherwise, you'll go with Aqua Peel. After purchasing, you want to make an appointment for 6:30 PM today. After making the appointment, you suddenly remember that after work, you need to deliver a document to Sofia Plaza, so you can only change the time to 6:30 PM tomorrow. In that case, you'll buy the cheapest set menu for 2-3 people at a Russian restaurant within 1km of your home, so your husband can bring the child directly there, and you can eat together after your facial treatment.

## Context

- Current time: `2024-11-05 17:20:01`
- Domain: `instore`

## Requirements / Rubrics

- The beauty salon should be within 1km (inclusive) from the 16th Floor, Yuanda Shopping Mall Office Building, 1268 Fifth Avenue, Qunli, Daoli District, Harbin
- The beauty salon's rating should not be less than 4.8
- The purchased beauty salon package should be a deep cleansing package
- After checking if the beauty salon has Hifu (High-Intensity Focused Ultrasound) packages, the result is positive, so the purchased package should be a Hifu package
- The price of the beauty salon order should not exceed 300 yuan
- The beauty salon appointment time should be November 6, 2024 at 18:30:00
- The number of people for the beauty salon appointment should be 1 person
- The appointed beauty salon should be Yashi Beauty Care Center
- The restaurant ordered from should be a Russian restaurant
- The restaurant order should be a Set Menu for 2-3 People
- The restaurant should be within 1km (inclusive) from CR Arch of Triumph, 218 Hongqi Street, Nangang District, Harbin
- The ordered Set Menu for 2-3 People should be the cheapest one in the restaurant

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
