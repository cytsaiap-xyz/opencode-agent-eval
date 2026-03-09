# VitaBench Task: Ota #54

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You're in a long-distance relationship with your partner, and haven't seen each other for a long time. He has always yearned to visit Asia's largest waterfall group, and coincidentally, it's currently the best viewing season. You're thinking about arranging a spontaneous trip to give him a big surprise. The travel date is set for the day after the Dragon Boat Festival. You plan to arrive in the morning and then enter the scenic area. First, you need to check the ticket prices for Huangguoshu Waterfall Scenic Area and the sightseeing bus fees. Once you've confirmed the ticket information, immediately book and pay for them. Meanwhile, keep an eye on flights from Beijing to Guiyang on the morning of the Dragon Boat Festival. Considering how hard he works, you plan to book him a Business class cabin seat so he can travel more comfortably. For transportation methods, you also need to check the weather conditions in both places. If the weather is sunny, you'll choose to drive, which allows you to enjoy the scenery along the way more freely; if it's rainy on either side, you'll look into taking the High-speed rail with First class seat tickets. For accommodation, look for hotels within 10km of Huangguoshu that have ratings of 4.0 or above, feature Ethnic feature characteristics, and offer Waterfall view. Just book for the first night of arrival, and you need a room with a king bed.

## Context

- Current time: `2023-06-09 16:49:17`
- Domain: `ota`

## Requirements / Rubrics

- Check the specific date of the Dragon Boat Festival in 2023 (June 22, 2023), and the scenic area ticket date must be June 23, 2023 (the second day of the Dragon Boat Festival)
- Check and provide ticket price information for Huangguoshu Waterfall Scenic Area (Adult ticket 240 yuan, Scenic area shuttle bus ticket 50 yuan, Adult ticket + Sightseeing bus combo 280 yuan), the purchased ticket should be Adult ticket + Sightseeing bus combo
- The number of tickets purchased should be 2
- The date of the flight reservation should be 2023-06-22
- The departure time of the flight in the order should be in the morning
- The reserved flight should be Business class cabin
- Check the weather conditions for Guiyang and Anshun on 2023-06-23, which are showers and sunny respectively; if one of them is rainy, then purchase train tickets from Guiyang to Anshun
- The train tickets purchased should be High-speed rail
- The seats for the train tickets should be First class seat
- The number of train tickets purchased should be 2
- The hotel reservation date should be June 23, 2023
- The reserved hotel should have Ethnic feature
- The reserved hotel should have a Waterfall view
- The reserved hotel should be within 10km of Huangguoshu
- The reserved hotel should have a rating of 4.0 or above
- The room type in the hotel order should be a King Room

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
