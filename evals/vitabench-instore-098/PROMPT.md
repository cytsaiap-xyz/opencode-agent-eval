# VitaBench Task: Instore #98

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your brother, who is in college, is coming to visit you during his summer break. You want to find a seafood restaurant within 3km of your company. Your brother mentioned in advance that he wants to eat Boston Lobster and King Crab. He has a big appetite, so you plan to order a Three-Person Set Meal, or if that's not available, a Set Meal for Two. Since he rarely visits, you don't want to be late for the dinner. If the restaurant is more than 2km from your company, you'll make a reservation for 6 PM and cycle there; if it's within 2km, you'll book it for 5:30 PM and get a ride with a colleague who's heading in that direction. Also, check if the restaurant offers a Craft Beer Set for Two - if yes, buy a voucher for that; if not, just choose any drinks set for two. You haven't received your salary this month yet, so you need to control your spending - keep the total cost within 1000 yuan.

## Context

- Current time: `2024-08-09 15:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The recommended seafood restaurant is within 3km (inclusive) of Qingdao Film Studio, No.1 Shilaoren Tourist Park, Laoshan District, Qingdao
- The seafood restaurant order should include a food set meal
- The seafood restaurant order should include a beverage set meal
- For the food set meal in the seafood restaurant order, the user prefers a three-person set meal, or a two-person set meal if the former is unavailable. The result is available; the ordered food set meal should be a three-person set meal
- For the beverage set meal in the seafood restaurant order, the user prefers a craft beer set for two, or a drinks set for two if the former is unavailable. The result is available; the ordered beverage set meal should be a craft beer set for two
- The food set meal and beverage set meal should be from the same seafood restaurant
- The ordered food set meal in the seafood restaurant order should include Boston Lobster
- The ordered food set meal in the seafood restaurant order should include King Crab
- The total price of the seafood restaurant order should be within 1000 yuan (inclusive)
- The reserved seafood restaurant should be Pearl of the Sea Seafood Restaurant
- The distance between the user's company and the seafood restaurant needs to be checked. If it's more than 2km (exclusive), the reservation should be at 18:00:00 on 2024-08-09; otherwise, it should be at 17:30:00 on 2024-08-09. Upon checking, the distance between the user's company and the seafood restaurant is 900 meters, which is within 2km (inclusive), so the seafood restaurant reservation time is 17:30:00 on 2024-08-09
- The number of people for the seafood restaurant reservation is 2

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
