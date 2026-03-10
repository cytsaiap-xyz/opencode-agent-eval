# VitaBench Task: Cross Domain #82

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your friend is coming to visit from out of town, and you want to treat her to the popular experience of 'enjoying Hot Pot while singing.' Now you're looking for a KTV that offers this special service. You want a package with extended duration, about 4 Hours should be enough. Check if there's anything suitable, and book a Small Room for tonight at 8 PM, plus a package. Your throat always hurts after singing, so check if there are any Throat Lozenges available for delivery, preferably delivered to the pickup station within 40 minutes, as you might forget later when you get busy. Your home isn't convenient with many family members around, so you also want to book a hotel to relax and chat privately with your friend at night. You need a hotel within 1km of the KTV, priced around 250-350 yuan, with a rating of 4.8 or above.

## Context

- Current time: `2024-03-15 15:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The in-store merchant should be a KTV
- The in-store merchant should provide both singing and Hot Pot services
- The in-store merchant should provide Small Room
- The ordered in-store product should be a 4-Hour package
- The reserved in-store merchant should be Pure K (Yangjiaping Branch)
- The in-store reservation time should be 2024-03-15 20:00:00
- The number of people for the in-store reservation should be 2
- The ordered delivery product should be Throat Lozenges
- The delivery address must be ZTO Express Office, 24 Xingsheng Road, Yangjiaping, Jiulongpo District, Chongqing
- The estimated delivery time should be before 2024-03-15 16:10:00
- The hotel to be booked should be within 1 kilometer of Pure K, 66 Pedestrian Street, Yangjiaping, Jiulongpo District, Chongqing
- The hotel rating should be greater than or equal to 4.8
- The hotel price should be greater than or equal to 250 yuan and less than or equal to 350 yuan
- The hotel check-in date should be March 15, 2025

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
