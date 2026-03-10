# VitaBench Task: Ota #65

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Next month, you and teachers from your group will take students from the discussion group to Urumqi for a month-long investigation. After discussing with other teachers in your group, you decide to go first to make preparations. You plan to take a train to Urumqi on Saturday, which allows you to gradually adapt to the climate change. You need to book the train tickets now, and you want a lower berth. You prefer a Soft sleeper (lower berth), but a Hard sleeper (lower berth) would be acceptable if soft sleepers aren't available. After arriving in Urumqi, you want to find a place within 2km of the railway station to rest for one night. You hope the accommodation is Tidy and not priced higher than your usual spending level. Taking advantage of this opportunity, you want to visit the Tianshan Grand Canyon, which is quite far. Only one teacher from your group is willing to go sightseeing with you, scheduled for the first Saturday in June, so you need to buy the entrance tickets for that day in advance.

## Context

- Current time: `2024-05-23 14:17:30`
- Domain: `ota`

## Requirements / Rubrics

- The train ticket order's departure time is Saturday (May 25, 2024)
- The train ticket order must be for a lower berth
- The train ticket order should be for a Soft sleeper (lower berth)
- The hotel check-in date should be the evening of arrival (May 27, 2024)
- The hotel environment must be Tidy
- The hotel must be located within 2km (inclusive) of Urumqi Railway Station
- The hotel order price must be between 500-1000 yuan
- The scenic spot in the ticket order must be Tianshan Grand Canyon
- The date on the ticket order must be the first Saturday in June 2024, which is June 1
- The ticket order must include 2 Adult tickets

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
