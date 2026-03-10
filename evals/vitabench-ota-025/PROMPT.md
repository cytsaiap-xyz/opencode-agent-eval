# VitaBench Task: Ota #25

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

For this year's family trip, you're planning to visit Tianshui to see the magnificent scenery of Maiji Mountain. First, you need to buy High-Speed Rail tickets from Xi'an to Tianshui. You plan to leave at 2 PM the day after tomorrow, it takes about half an hour to get to the railway station, and you don't want to wait more than an hour for the train. Once in Tianshui, you need to find accommodation that must be within 1km of the Maijishan Grottoes entrance, and it can't be lower quality than the type of places you usually stay. Your party consists of two adults and one child who is only five years old. You need either a Family Room or a twin room, but it should be the same room throughout your stay to avoid the hassle of changing rooms. You'll be staying for four days and three nights. You also want to buy tickets for the Maijishan Grottoes now, and you want to avoid weekends to prevent overcrowding at the scenic area.

## Context

- Current time: `2025-08-12 15:36:44`
- Domain: `ota`

## Requirements / Rubrics

- The high-speed rail order date must be August 14, 2025
- The high-speed rail must be from Xi'an to Tianshui
- The high-speed rail departure time must be between 2:30-3:30 PM the day after tomorrow (August 14)
- The quantity of high-speed rail tickets must be 3
- The booked hotel must be within 1km of the entrance to Maijishan Grottoes (i.e., Maijishan Grottoes, Maiji Mountain Scenic Spot, Maiji District, Tianshui, Gansu Province)
- The hotel must be four-star or above
- The hotel room type must be Family Room or Twin Room
- The hotel check-in dates must be August 14, 2025, August 15, 2025, and August 16, 2025, respectively
- The hotel room types should be consistent
- The scenic spot for the ticket order must be Maijishan Grottoes
- The Maijishan tickets date cannot be on weekends (i.e., cannot be August 16 or August 17)
- The total quantity of tickets in the ticket order should be 3
- The ticket order should include 2 Adult Tickets
- The ticket order should include 1 Child Ticket

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
