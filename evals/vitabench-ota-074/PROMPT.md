# VitaBench Task: Ota #74

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your experience-sharing event in Chengdu has successfully concluded today, and after hearing from local colleagues that it only takes two to three hours by high-speed train to reach Langzhong Ancient City, you've decided to change your return plans and spend the weekend there. You want to first check the availability of high-speed train tickets. If there are trains departing after 8:00 PM with available seats, book one for tonight. If not, opt for the earliest train tomorrow morning instead. For the return journey, you plan to purchase a first-class train ticket on Sunday noon back from Langzhong. Once the train tickets are booked, decide how many nights of accommodation you'll need based on your departure time (either one or two nights). Book a hotel inside the ancient city itself—your colleague mentioned that excellent options can be found around 200 yuan per night with great value for money. Since this plan changes your original itinerary, reschedule your flight back to Kunming for Sunday afternoon around 5:00 PM–6:00 PM. Economy class will suffice.

## Context

- Current time: `2025-03-21 11:17:32`
- Domain: `ota`

## Requirements / Rubrics

- The departure location of the outbound train should be Chengdu
- The destination of the outbound train should be Langzhong
- Need to check if there are high-speed train tickets from Chengdu to Langzhong after 20:00 (including 20:00) on 2025-03-21, and the result is yes (Train D5181 departing at 20:35 on 2025-03-21), the date in the outbound train ticket order should be 2025-03-21
- The departure location of the return train should be Langzhong
- The destination of the return train should be Chengdu
- The departure date of the return train should be 2025-03-23
- The departure time of the return train should be around 12:00
- The seat type in the return train order should be first class seat
- The hotel ordered should be located within the Langzhong Ancient City
- The price of the hotel ordered should be around 200 yuan
- The hotel order should include rooms for two nights, which must be 2025-03-21 and 2025-03-22 respectively
- The status of the order with order ID S17557512511049624_O00001 should be cancelled
- The departure date of the flight ordered should be 2025-03-23
- The takeoff time of the flight ordered should be between 17:00-18:00
- The seat type in the flight ticket order should be economy class

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
