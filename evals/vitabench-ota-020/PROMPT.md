# VitaBench Task: Ota #20

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You've been having such bad luck lately, and a friend recommended that you visit Mount Wutai to pray for better fortune. You want to check flights to Mount Wutai for this Saturday, preferably the shortest flight duration, and you're okay with prices around one thousand yuan. The arrival time should be before 6 PM, as you plan to wake up early on Sunday to visit Mount Wutai, which shows more sincerity. For Mount Wutai tickets, you'd prefer the package that includes a Vegetarian Meal. If that's available, purchase one ticket. If not, buy a regular ticket, but for accommodation, you definitely want a guesthouse that serves Vegetarian Food and has Zen Style Decoration, allowing you to truly experience the Peaceful Atmosphere of Buddhist Culture.

## Context

- Current time: `2023-08-09 23:23:01`
- Domain: `ota`

## Requirements / Rubrics

- The departure date for the flight booking should be 2023-08-12
- The destination for the flight booking should be Mount Wutai Airport
- The flight price should be around 1000 yuan
- The arrival time of the flight should be before or at 18:00
- Choose the flight with the shortest flying time, the flight in the order should be MU2156 (flying time 1 hour 45 minutes)
- Need to check if Mount Wutai Scenic Area tickets with Vegetarian Meal are available, the result is no, should purchase Regular Admission
- The attraction in the ticket order should be Mount Wutai Scenic Area
- The ticket date in the attraction order should be 2023-08-13
- The accommodation type should be inn
- Need to check if Mount Wutai Scenic Area tickets with Vegetarian Meal are available, the result is no, the inn ordered must provide Vegetarian Food service
- The decoration style of the inn should be Zen Style
- The check-in date in the inn order should be 2023-08-12

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
