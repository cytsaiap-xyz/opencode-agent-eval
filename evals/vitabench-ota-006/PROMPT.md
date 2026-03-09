# VitaBench Task: Ota #6

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

For your plan to visit the original site of your favorite IP, you're going to Anyang this weekend to see the Yinxu Ruins. You need to find accommodation in Anyang, preferably not too far from Yinxu, within 2 kilometers. You want to stay at a guesthouse with vintage decoration, with a room rate not exceeding 250 yuan, just for Saturday night. You haven't booked your return train ticket for Sunday yet; you want to choose a train that departs after 10 AM and has the shortest travel time. However, if the train leaves after 3 PM, your accommodation in Anyang must allow late check-out until 2 PM. You also want to know if there are any other historical sites in Anyang related to Feng Shen (Investiture of the Gods), where you can take photos in Hanfu.

## Context

- Current time: `2025-05-16 16:18:21`
- Domain: `ota`

## Requirements / Rubrics

- Train tickets must be for departures at or after 10 AM
- Train tickets should be dated for Sunday, May 18, 2025
- The return train ticket must be the shortest duration option available, which is G1571 (15:42-16:28, 46 minutes duration)
- Since the return train departs after 3 PM (such as G1571 at 15:42), the guesthouse must allow late check-out until 2 PM
- The guesthouse should be within 2km of Yinxu Ruins, Xiaotun Village, Yindu District, Anyang, Henan Province
- The guesthouse decoration style must be Retro style
- The total price of the guesthouse booking must be less than or equal to 250 yuan
- The guesthouse booking must be for Saturday night (May 17, 2025)
- Information about historical sites related to Feng Shen (Gods Canonization) in Anyang should be searched, with the result being Youli City (where King Wen of Zhou was imprisoned, and the birthplace of 'I Ching')

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
