# VitaBench Task: Instore #22

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You want to go to a hot spring alone on Sunday to relax and hope to find a place with suitable prices based on your previous consumption habits. You have several requirements: first, there must be a package that includes spa services; second, there must be pools with different temperatures; third, the room must have good privacy. Since you don't have anything planned for the next day, you want to book a single person package with overnight accommodation, scheduling it for around 8 PM. As for dinner that night, you want to find a highly-rated restaurant within 2km of the hot spring that serves Sour Soup Beef, with a Single Serving Package priced under 60. Also, both the hot spring venue and dinner restaurant must offer Free Parking.

## Context

- Current time: `2025-03-14 16:25:00`
- Domain: `instore`

## Requirements / Rubrics

- Hot spring store orders must include SPA services
- The hot spring establishment must provide Free Parking service
- Products ordered at hot spring establishments must offer Multi-temperature Pools for selection
- Products ordered at hot spring establishments must provide good Private Space
- Products ordered at hot spring establishments should be priced between 180-300 yuan (inclusive)
- Products ordered at hot spring establishments should include Accommodation
- Products ordered at hot spring establishments should be Single Serving packages
- The reserved hot spring establishment should be Yunding Hot Spring Resort
- The number of people for the hot spring reservation is 1
- The reservation time for the hot spring establishment is March 16, 2025 at 20:00:00
- The restaurant must provide Free Parking service
- The restaurant must be within 2km (inclusive) of Yunding Hot Spring Resort, 88 Hot Spring Road, Qiantao Township, Huaxi District, Guiyang
- Products ordered at the restaurant must include Sour Soup Beef
- The restaurant rating should be 4.2 or above
- Restaurant orders should be Single Serving packages
- Restaurant order prices should be within 60 yuan

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
