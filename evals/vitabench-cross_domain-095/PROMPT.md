# VitaBench Task: Cross Domain #95

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

This weekend, you're taking your bestie on a trip to Tianjin and want to avoid the hassle of washing underwear. You plan to buy disposable underwear—two pairs each for you and your friend should be enough, but if there's a pack with more, that's fine too. Additionally, you'd like to purchase a pair of non-disposable slippers for yourself in size 37-38. You also need to check the weather forecast for Tianjin during those two days. If it's going to rain, make sure to order some disposable raincoats as well. Before heading out on the trip, your bestie plans to stay at your home for two nights. She'll be driving over from Sanlitun soon. To prepare dinner tonight, find a nearby restaurant offering roast duck packages and pre-order one; the closer the better. Your bestie recently mentioned seeing online posts about how great business class service is on trains. Since tickets aren't too expensive for Tianjin trips anyway, you decide to check if there are any business-class seats available on high-speed trains departing the day after tomorrow to Tianjin. If they're available, choose the train with the longest travel time so you can enjoy more of the experience and book two tickets. Since you'll head out shortly for dinner elsewhere tonight, the delivery of both disposable underwear and slippers should be at 9:00 PM.

## Context

- Current time: `2024-11-07 19:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The delivery order must include disposable underwear
- The delivery order must include at least four disposable underwear
- The disposable underwear in the delivery order should be women's style
- The delivery order must include slippers
- The slippers in the delivery order should not be disposable
- The slippers in the delivery order should be size 37-38
- The slippers in the delivery order should be women's style
- The disposable underwear and slippers in the delivery order must come from the same store
- After checking, it was found that there will be no rain in Tianjin on November 9 and 10, 2024, so the delivery order should not include disposable raincoats
- The delivery address is Shenlong Jinqiao Community, North of Bridge No.1, Majuqiao, Tongzhou District, Beijing
- The estimated delivery time is 9 PM on November 7, 2024
- The dine-in restaurant should be within 2km of Shenlong Jinqiao Community, North of Bridge No.1, Majuqiao, Tongzhou District, Beijing
- The dine-in restaurant should be the closest one to Shenlong Jinqiao Community, North of Bridge No.1, Majuqiao, Tongzhou District, Beijing
- The dine-in restaurant should be a roast duck restaurant
- The dine-in order should be for a set meal for two people, not two single set meals
- The train tickets should be for a route from Beijing to Tianjin
- The train with the longest journey time should be selected
- The train departure date should be November 9, 2024
- The train seat type should be Business class seat

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
