# VitaBench Task: Ota #27

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

This year marks the 20th anniversary of your high school graduation, and you've arranged to go on a pilgrimage to Lhasa, Tibet with five same-gender high school friends. As the main planner, you want to book everyone's flights and accommodations in advance. You all plan to depart from Hangzhou on the 3rd of next month. Regarding transportation, you want to check if it's possible to arrive in Lhasa by train on the 4th; if not, you'll fly, booking an afternoon departure to avoid waking up early. You haven't decided on the exact number of days for the trip yet, so you plan to book accommodations for three nights first. For hotels, you hope to find one with Tibetan characteristics, since everyone is visiting Tibet for the first time. You want accommodations with Oxygen Supply Facilities, with comfort being more important than price, though everyone should have the same standard of accommodation, keeping the total cost under 5,000 yuan. After booking the accommodations, you need to check out popular attractions.

## Context

- Current time: `2021-06-21 21:31:56`
- Domain: `ota`

## Requirements / Rubrics

- Departure city must be Hangzhou
- Destination must be Lhasa, Tibet
- Departure date must be the 3rd of next month (July 3, 2021)
- Should check all trains departing from Hangzhou, with results showing that none can reach the destination by July 4, thus air travel should be selected
- The quantity for the flight order should be 6
- The departure time for the flight should be in the afternoon
- The hotel booking dates should be July 3, 2021, July 4, 2021, and July 5, 2021
- The hotel must have Oxygen Supply Facilities
- The hotel must have Tibetan-style Decoration
- The hotel accommodation should be comfortable
- All room types in the hotel order should be the same
- The hotel rooms should accommodate 6 people
- The total price of the hotel order needs to be less than or equal to 5000 yuan
- Need to check information on popular attractions in Lhasa, with results showing Potala Palace (4.8 stars, 200 yuan ticket), Jokhang Temple (4.7 stars, 85 yuan ticket), Barkhor Street (4.5 stars, Free Admission), and Norbulingka (4.3 stars, 60 yuan ticket)

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
