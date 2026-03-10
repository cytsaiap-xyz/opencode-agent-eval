# VitaBench Task: Ota #26

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You are invited to attend an industry forum in Hohhot, and you think since you're making this rare trip, why not also visit the Hulunbuir Grassland. The forum will be held on the 5th of next month, and you plan to spend two days and one night in Hulunbuir. You can go either before or after the forum, mainly considering which flight tickets would be cheaper, all in Economy Class. After finalizing your grassland itinerary, you need to arrange all related flight tickets, including round-trip flights to and from Taizhou. If you attend the forum first, you need to arrive in Hohhot one day before the forum begins, and travel to Hulunbuir the day after the forum ends. If you visit Hulunbuir first, then attend the forum, you should arrive in Hohhot one day before the forum begins, and return to Taizhou the day after the forum ends. Regarding accommodation, when visiting the grassland, you naturally want to experience staying in a Yurt. You don't need to worry about accommodation in Hohhot as the organizers have already booked it for you. You need to confirm your accommodation now.

## Context

- Current time: `2025-04-01 14:30:00`
- Domain: `ota`

## Requirements / Rubrics

- The forum will be held on May 5, 2025. If traveling to Hulunbuir before the forum, one should travel from Taizhou to Hulunbuir (Hailar) on May 3, 2025, from Hulunbuir (Hailar) to Hohhot on May 4, 2025, and from Hohhot back to Taizhou on May 6, 2025. If traveling to Hulunbuir after the forum, one should travel from Taizhou to Hohhot on May 4, 2025, from Hohhot to Hulunbuir (Hailar) on May 6, 2025, and from Hulunbuir (Hailar) back to Taizhou on May 7, 2025. After calculation, if traveling to Hulunbuir before the forum, the total airfare would be 4000 yuan; if traveling to Hulunbuir after the forum, the total airfare would be 4250 yuan. Therefore, one should travel to Hulunbuir before the forum.
- The first flight should be from Taizhou to Hulunbuir (Hailar)
- The departure date of the first flight should be May 3, 2025
- The seat type for the first flight should be Economy Class
- The second flight should be from Hulunbuir (Hailar) to Hohhot
- The departure date of the second flight should be May 4, 2025
- The seat type for the second flight should be Economy Class
- The third flight should be from Hohhot to Taizhou
- The departure date of the third flight should be May 6, 2025
- The seat type for the third flight should be Economy Class
- The accommodation order should book a Yurt
- The accommodation order should include a room for May 3, 2025

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
