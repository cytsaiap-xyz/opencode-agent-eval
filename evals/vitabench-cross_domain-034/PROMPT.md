# VitaBench Task: Cross Domain #34

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You're planning to find a hot spring hotel for you and your girlfriend this Sunday to relax. You want a secluded private hot spring bath, and cleanliness is most important. If there's a suitable one, you'd like to book it now. You also want to look at wine options to be delivered to your home around 7-8 PM on Saturday, so you can enjoy some wine while soaking in the hot spring. You just need one bottle. Your girlfriend doesn't like red wine or overly sweet wines; you prefer wine from a specialty wine store. Also, you need to check if it will rain this Sunday. If the weather is bad, you'll go a day earlier, and the wine should be delivered a day earlier too. Your girlfriend mentioned that Christmas is coming soon, so you want to check the exact date to book a restaurant for dinner at 7 PM that day. The restaurant should be upscale, preferably with terrace seating. The set menu can cost more than your usual spending but should not exceed 350 per person. Your girlfriend likes to try new things, so the cuisine shouldn't be limited to a single style. She works at Haibei Creative Park, so the restaurant should be close to her workplace.

## Context

- Current time: `2025-12-22 20:05:09`
- Domain: `cross_domain`

## Requirements / Rubrics

- The hotel booked should be a Hot Spring hotel
- The booked hotel should have a quiet environment
- The booked hotel must be Clean and Hygienic
- The room type of the booked hotel should include Private Hot Spring Bath
- Need to check the weather in Foshan on December 28, 2025 (Foshan weather is rainy, temperature 10-15°C, humidity 78%), rainy day, the hotel check-in date should be December 27, 2025
- The wine merchant should be a Wine Specialty Store
- The wine ordered should be White Wine
- The wine ordered should avoid Sweet wine types
- The expected delivery time for the wine should be December 26, 2025, 19:00-20:00
- The wine delivery address should be Evian Tianhui North Area, 60m Southeast of Liangping Road and Zhongchuang Lane Intersection, Nanhai District, Foshan, Guangdong Province
- Need to check when Christmas 2025 is, the result is December 25, 2025
- The restaurant booked should be a High-end Restaurant
- The restaurant booked should have a Terrace
- The location of the booked restaurant should be within 3000M of Haibei Creative Park
- The per person cost of the restaurant's set menu should be between 150-350 yuan
- The booked restaurant should offer Fusion Cuisine
- Need to book restaurant seats for Christmas (December 25, 2025) at 7 PM
- The number of people for the restaurant booking should be 2

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
