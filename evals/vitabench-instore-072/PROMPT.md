# VitaBench Task: Instore #72

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You recently want to try fencing and are looking for a fencing club with a rating above 4.3. As a beginner, you prefer to find a basic training trial class with just one session, but if that's not available, you would accept a One-on-One single experience package. After selecting a package and making the payment, you want to schedule your experience for Saturday at 2 PM. On Sunday morning, four friends from Sichuan will be visiting, and you want to treat them well by finding a Hunan cuisine restaurant within 4km of your home. You hope the restaurant has a private room so you can have more comfortable conversations. You plan to order a 4-Person Package that includes the classic dish Chopped Chili Fish Head, but due to recent digestive issues, you need to avoid spicy and fried foods, so you also want to purchase a separate Single Person Package with only non-spicy dishes. Your total budget for the weekend should not exceed 1000.

## Context

- Current time: `2025-03-07 10:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The fencing club should have a rating of 4.3 or above
- Need to check if the fencing club that meets the rating requirements offers a trial basic training class, the result is no, so the product ordered from the fencing club should be a One-on-One single experience class
- The package ordered from the fencing club should be available for adults
- The package ordered from the fencing club should be suitable for beginners
- The appointed fencing club should be Jianfeng Fencing Club
- The appointment time for the fencing club should be 2025-03-08 14:00:00
- The number of people for the fencing club appointment should be 1
- The restaurant should be a Hunan cuisine restaurant
- The restaurant should be within 4km (including 4km) of Lugu New Changhai Center, 627 Lugu Avenue, Yuelu District, Changsha
- The restaurant should provide a private room
- The restaurant order should include a 4-Person Package
- The 4-Person Package ordered from the restaurant should include Chopped Chili Fish Head
- The restaurant order should include a Single Person Package
- The Single Person Package ordered should only include Non-Spicy dishes
- The Single Person Package ordered should not include fried dishes
- The Single Person Package and the 4-Person Package should come from the same restaurant
- The total cost of the fencing club order and the restaurant order should not exceed 1000 yuan

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
