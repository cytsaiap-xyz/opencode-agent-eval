# VitaBench Task: Cross Domain #51

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You've been transferred to a new hospital, Tangshan People's Hospital, and your single dormitory is nearby. Today when you moved in, you found that both the washing machine and drainage pipe were broken. The maintenance staff won't come until the day after tomorrow, so you need to find a hotel close to the hospital for two nights, within 1 kilometer, and the cheapest room type will do. But you're sensitive to noise, so you need a hotel with good soundproofing. You also want to buy a new washing machine to be delivered to your dormitory - it must be quiet and energy-efficient, and from a major brand like Midea or Haier. You also need to check how far the hotel is from your dormitory to ensure convenient travel between them. To keep your spirits up, you want to find a Tangshan Time-honored Brand restaurant with a rating above 4.8, and dine there tonight. If reservations are possible, book a table for 7 PM; if not, schedule a hand care service instead, as you really don't want to wait in line.

## Context

- Current time: `2025-10-07 16:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The washing machine ordered must be a quiet operation washing machine
- The washing machine ordered must be an energy-saving model
- The washing machine brand must be either Midea or Haier
- The delivery address for the washing machine should be Tangshan People's Hospital Single Dormitory
- The hotel booked must be located within 1km (inclusive) of Tangshan People's Hospital
- The hotel must have good soundproofing
- The most economical room type must be selected for the hotel
- The hotel needs to be booked for two nights, with check-in dates on 2025-10-07 and 2025-10-08
- Distance information from the hotel to the user's dormitory must be provided, with the result showing Home Inn is approximately 150 meters from Tangshan People's Hospital Single Dormitory
- The restaurant ordered must be a Tangshan-style Time-honored Brand restaurant
- The restaurant rating must be higher than 4.8
- The restaurant reservation time must be 2025-10-07 19:00
- The reservation order must be for 1 person

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
