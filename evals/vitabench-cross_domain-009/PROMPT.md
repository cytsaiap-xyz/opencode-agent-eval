# VitaBench Task: Cross Domain #9

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your friend is moving to Nanping after getting married, and this weekend you're going there for her housewarming celebration. You want to prepare a practical housewarming gift, and a tableware set would be nice - it should be of good quality, priced over three hundred yuan, and she likes minimalist modern design styles. You plan to have it delivered to your home so you can pack it in your suitcase tonight to prevent any damage. Your friend hopes you can stay nearby for one night on Saturday to continue helping organize her new home the next day, so you need to book a hotel first, and she'll reimburse you. You're interested in experiencing a smart home hotel, but don't want her to spend too much, so the cheapest room type in the hotel will do. You think you'll both be tired after setting up the new house, so you want to treat her to a sauna on Sunday evening. You're checking if there are any two-person packages near her home that include disposable sauna clothes. If you find something suitable, you'll order it now to prevent her from insisting on paying when you're there.

## Context

- Current time: `2025-02-27 18:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The housewarming gift ordered must be a tableware set
- The housewarming gift ordered should cost no less than 300 yuan
- The housewarming gift ordered must have a Modern Minimalist design style
- The delivery address for the housewarming gift order should be Donghu Shuguang City, Opposite to Dongqiao Management Committee, Dongqiao Development Zone, Jiaocheng District, Ningde, Fujian Province
- The delivery time for the housewarming gift order should be before the evening of February 27, 2025
- The hotel ordered should be within 3km (inclusive) of Fuxin Building, 60 meters northwest of the intersection of Laizhou Street and Binjiang Road, Yanping District, Nanping, Fujian Province
- The hotel ordered should be a Smart Home hotel
- The room type ordered should be the cheapest room type in the hotel
- The hotel check-in date should be March 1, 2025 for one night
- The sauna merchant ordered should be within 3km of Fuxin Building, 60 meters northwest of the intersection of Laizhou Street and Binjiang Road, Yanping District, Nanping, Fujian Province
- The sauna package ordered should be a Two-Person Package
- The sauna package ordered needs to include two female disposable sauna clothes

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
