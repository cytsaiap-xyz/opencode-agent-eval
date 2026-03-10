# VitaBench Task: Instore #81

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You've been ordering takeout every day recently and are getting a bit tired of it, so you plan to reward yourself with BBQ this Saturday night. You want to check the weather for Saturday evening first. If it rains, you'll find a Korean self-service BBQ restaurant within 500 meters of your apartment and get a single-person All-You-Can-Eat package, then go home to rest after eating. If it doesn't rain, you plan to go to an area within 500 meters of Jianxi Wanda to find the highest-rated Korean self-service BBQ restaurant and get a single-person package, preferably with Unlimited Time. After dinner, you want to get your nails done at a nail salon within 500 meters of Jianxi Wanda where you can choose any Style of Your Choice. You expect to finish dinner around 8 PM and need a salon that's Open until 10 PM. You plan to get your favorite Half-tips + Structure Package, and go directly there to have it done. Since you won't get paid until next Monday, you want to keep your total spending under 300 yuan. Once you've decided on the package, you'll make an appointment for 8:20 PM.

## Context

- Current time: `2025-03-27 08:46:21`
- Domain: `instore`

## Requirements / Rubrics

- On March 29, 2025, the weather in Luoyang is cloudy without rain, so the Korean Self-service BBQ restaurant should be within 500 meters (inclusive) of Jianxi Wanda
- Need to search for Korean Self-service BBQ restaurants that meet the criteria, select the one with the highest rating, which is Korean Charcoal BBQ, so the Korean Self-service BBQ restaurant order should be from Korean Charcoal BBQ
- The order from the Korean Self-service BBQ restaurant should be a Single Person Package
- The Korean Self-service BBQ restaurant order should have Unlimited Time
- The distance from the nail salon to Jianxi Wanda should be within 500m (inclusive)
- The nail salon's closing time should be at or after 10 PM
- The nail salon order should allow Style of Your Choice
- The nail salon order should be a Half-tips + Structure Nail Package
- The total expenditure for both the nail salon and Korean Self-service BBQ restaurant should be within 300 yuan. The price of the items in the Korean Self-service BBQ restaurant order is 172 yuan. Therefore, the nail salon package price should be less than or equal to 128 yuan
- The nail salon should accept reservations
- The nail salon that should be reserved is Fingertip Art Nail Salon
- The reservation time for the nail salon is 2025-03-29 20:20:00
- The number of people for the nail salon reservation is 1

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
