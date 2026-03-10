# VitaBench Task: Instore #57

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Recently, you want to learn something new in your after-work hours. You've heard from friends that flower arrangement can calm the mind and enhance aesthetic sense, so you decide to find a shop with a rating of 4.5 or above to buy a beginner flower arrangement introduction course. You hope to find the store closest to your company, and the package with the longest teaching time. After purchasing, you plan to book a class for tomorrow evening at 5 PM. After making the reservation, you think that traffic might be heavy at that time, so you postpone the appointment by one hour. You haven't had seafood for a long time and miss salmon, so you plan to find a seafood buffet restaurant with free parking within 2km of the flower shop for dinner after the course. If there's a single person meal that matches your usual spending habits, you'll buy it directly; if not, something slightly more expensive is acceptable, but not exceeding 300 yuan. Estimating you'll get home by 9:30 PM after dinner, you plan to find a foot massage place within 500m of your home with a rating of 4.5 or above. You don't want to sleep too late, so you're looking to buy a one-hour foot massage package priced under 100 yuan, and walk straight home after the massage.

## Context

- Current time: `2024-04-18 16:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The flower arrangement shop should have a rating of 4.5 or above
- The flower arrangement shop should be the closest one to iFLYTEK Artificial Intelligence Research Institute, 12th Floor, Building C3, Innovation Industrial Park, 2800 Innovation Avenue, High-tech District, Hefei
- The ordered item at the flower arrangement shop should be a beginner flower arrangement introduction course package
- The ordered item at the flower arrangement shop should have the longest teaching duration
- The reserved flower arrangement shop should be Floral Life
- The reservation time for the flower arrangement shop should be 2024-04-19 18:00
- The number of people for the flower arrangement shop reservation should be 1
- The seafood buffet restaurant should be within 2000m (inclusive) of Floral Life, 3rd Floor, Building A, Technology Entrepreneurship Plaza, 2560 Innovation Avenue, High-tech District, Hefei
- The seafood buffet restaurant should provide free parking
- The ordered item at the seafood buffet restaurant should be a single person package
- The ordered item at the seafood buffet restaurant should include salmon
- User behavior history needs to be checked; the user's usual spending on Japanese cuisine is 250 yuan, and since there's no package that matches the user's usual consumption habits, the price of the ordered item at the seafood buffet restaurant should be within 300 yuan (inclusive)
- The foot massage shop should be within 500m (inclusive) of Room 502, Unit 2, Building 8, Rongqiao Central Park, Wangjiang West Road and Qianshan Road Intersection, Shushan District, Hefei
- The foot massage shop should have a rating of 4.5 or above
- The foot massage shop should guarantee massage service availability on 2024-04-19 21:30
- The ordered item at the foot massage shop should be a single person foot massage package
- The usage duration of the ordered item at the foot massage shop should be 1 hour
- The price of the ordered item at the foot massage shop should be within 100 yuan (inclusive)

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
