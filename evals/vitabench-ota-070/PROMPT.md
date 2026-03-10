# VitaBench Task: Ota #70

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Your child has been complaining about boredom during the winter break, and with your busy work schedule recently, you've decided to arrange for your husband to take the child on a trip to Jiayuguan this Sunday. They'll stay for a few days, and of course, visiting Fantawild Adventure Jiayuguan is a must. They will visit Fantawild on the second day after they arrive in Jiayuguan. Check if express pass tickets are available for under 500 yuan—if so, purchase two of them to save time waiting in lines; otherwise, just get basic admission tickets. You also need to book train tickets, especially high-speed train tickets for them. Prioritize first-class seats so that both your husband and child can travel comfortably. Make sure their arrival time is before 4:00 PM so they have enough time to settle into their hotel without rushing or delaying dinner plans. For accommodation, arrange all nights at the Fantawild-themed hotel—it's convenient since it eliminates unnecessary hassle from switching hotels and allows them to rest right after enjoying the park. However, ensure they check out on Lantern Festival, as it's time for everyone to head home and enjoy family reunion dinner together that evening.

## Context

- Current time: `2025-02-05 16:41:27`
- Domain: `ota`

## Requirements / Rubrics

- The attraction ticket order must be for Fantawild Adventure Jiayuguan
- The attraction ticket order must be for the second day after arriving in Jiayuguan (February 10, 2025)
- The attraction ticket order must be suitable for 2 people (1 adult and 1 child)
- The attraction ticket order must include express passes
- The train order must be for an EMU (Electric Multiple Unit) train
- The train tickets must be first class seats
- The train arrival time must be before 4:00 PM
- The train ticket order must be for travel from Xi'an to Jiayuguan
- The train ticket order must include 2 tickets
- The return journey must be scheduled for the morning of the Lantern Festival (February 12, 2025)
- The hotel in the accommodation order must be Fantawild Theme Hotel Jiayuguan
- The Lantern Festival date needs to be checked, which is February 12, 2025, so the hotel stay must be for February 09, 2025, February 10, 2025, and February 11, 2025
- The hotel order must be suitable for 2 people (1 adult and 1 child)

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
