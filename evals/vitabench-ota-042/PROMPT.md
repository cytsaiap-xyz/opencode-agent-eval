# VitaBench Task: Ota #42

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You're thinking about taking your parents to Libo Xiaoqikong Scenic Area during the wet season. You had originally booked high-speed rail tickets to depart from Chengdu next Saturday morning together, but after seeing news about possible severe rainstorms in Guizhou during those days, you're concerned about safety and considering rescheduling the trip to the Saturday after next. You need to cancel your previously booked high-speed rail tickets first, then arrange new round-trip tickets. For the new plan, you'll arrive in Guiyang on Saturday, visit the Xiaoqikong Scenic Area on Sunday with a pre-arranged car, return to Guiyang by private car that evening, and then head back to Chengdu on Monday. You want to book the same train you had before for the outbound journey, but the return tickets don't matter. Additionally, you need to prepare admission tickets for all three people, which should include sightseeing bus tickets. You also want to book hotels in advance so you can check in directly upon arrival. You prefer accommodations within 2km of the railway station, ideally one King Room and one Twin Room.

## Context

- Current time: `2021-07-23 21:35:13`
- Domain: `ota`

## Requirements / Rubrics

- The order status of train ticket from Chengdu to Guiyang North on July 31, 2021 should be cancelled
- The train number for August 7, 2021 should be G2954
- The quantity of train tickets for August 7, 2021 should be 3
- The order status of train tickets for August 7, 2021 should be paid
- The train ticket for August 9, 2021 should be from Guiyang North to Chengdu
- The quantity of train tickets for August 9, 2021 should be 3
- The order status of train tickets for August 9, 2021 should be paid
- The scenic spot ordered should be Libo Xiaoqikong Scenic Area
- The scenic spot tickets should include Sightseeing Bus tickets
- The quantity of scenic spot tickets should be 3
- The date of use for the scenic spot tickets should be August 8, 2021
- The hotel should be within 2km of Guiyang North Railway Station
- The booking dates for the Twin Room in the hotel order should be August 7, 2021 and August 8, 2021
- The booking dates for the King Room in the hotel order should be August 7, 2021 and August 8, 2021
- The hotel budget should be 300-500 yuan per night

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
