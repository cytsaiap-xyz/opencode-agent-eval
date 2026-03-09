# VitaBench Task: Cross Domain #98

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your girlfriend always says you're being perfunctory, so this Saturday you want to give your girlfriend a thoughtful date. You plan to find a beautifully decorated party house, preferably with KTV, game area and photo area, where you can play all day. You need to buy a two-person package. For the party, you need to prepare some snacks. You want to order delivery for three or four popular snacks and a large portion of freshly cut fruit platter. She doesn't eat grapes, but must have peach. You also want to search if there's a metro station near the party house to see how to get there conveniently. You want to book the arrival time for Saturday in advance, at 11 o'clock, and the delivery can arrive around 11 or 12 o'clock. Oh, and you also want to check your order history to see when you last bought flowers for your girlfriend. If it's been over a month, you'll order the same bouquet again, delivered to the party house like the food. Otherwise, you want to find out if there's a Ferris wheel within 3km of the party house. If so, you'll buy two tickets. If not, you'll look for other romantic attractions, as you want to take your girlfriend to see the night view.

## Context

- Current time: `2025-09-19 09:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The party house to be ordered should be beautifully decorated
- The party house to be ordered must have KTV, game area and photo area functions, not just a single function
- The party house must be available for reservation
- The package for the party house order must be a two-person package
- The party house package must be available for all-day play
- The party house reservation time must be Saturday (September 20, 2025) at 11:00
- The party house reservation must be for 2 people
- The food delivery order must include three types of popular snacks
- The food delivery order must include a fresh fruit cut platter
- The popular snacks and fruit cut should come from the same store
- The fruit cut platter should be a large portion
- The fruit cut platter should not contain grapes
- The fruit cut platter must contain peach
- The food delivery order needs to comply with the user's dietary restrictions, cannot contain high-purine foods (such as seafood, organ meats) and alcoholic beverages
- The food delivery arrival time should be between 11:00 and 12:00 on September 20, 2025
- The food delivery location must be the party house (Fantasy Party House, 500 Hubin South Road, Siming District, Xiamen City, Fujian Province)
- Must check the history of flower purchases in past orders, the result shows that a sweet confession rose bouquet was purchased on July 15, 2025, which was more than 2 months ago
- Need to order a sweet confession rose bouquet
- The flower delivery location must be the party house (Fantasy Party House, 500 Hubin South Road, Siming District, Xiamen City, Fujian Province)
- The flower delivery arrival time should be between 11:00 and 12:00 on September 20, 2025
- Need to check and provide information about metro stations near the party house; the result is Hubin East Road Metro Station (Line 1; Line 3)

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
