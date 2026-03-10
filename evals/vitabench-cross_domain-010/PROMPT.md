# VitaBench Task: Cross Domain #10

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You went back to your hometown Puyang this weekend, and in the afternoon, you've arranged to go to an arcade with your friend. You want to see which arcade offers the most value for their token packages and buy from there. Both you and your friend haven't been to an arcade for a long time, so today you want to play to your heart's content and plan to buy 600 tokens. If the game tokens cost less than 150 yuan, you'll treat your friend and yourself to two drinks from Mixue Ice Cream, otherwise you won't get drinks. Also, check if there are any highly-rated izakayas near the arcade, with an average cost of around 150 yuan per person. You want one with nice decor that's good for taking photos. Preferably the set menu would include alcohol, as your friend likes plum wine. If you find a suitable place, you want to reserve seats for around 18:00 tonight and purchase a set menu voucher. By the way, your work-from-home application has been approved, so you can return to Luoyang next Wednesday. Now you're wondering if you can refund your ticket for tomorrow and rebook. You want to book a train departing around 7 or 8 PM, so you can have one more meal at home.

## Context

- Current time: `2026-01-04 14:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- Need to compare game token package prices at different arcades in Puyang, choose the most cost-effective one; Super Player Arcade's 600 Game Tokens Package at ¥198 offers the best value
- Due to game token prices exceeding budget, cannot purchase any drinks from Mixue Ice Cream or elsewhere
- The reserved izakaya should be within 600m of Super Player Arcade
- The reserved izakaya should be suitable for photo check-ins
- The izakaya reservation time should be 2026-01-04 18:00
- The izakaya reservation should be for 2 people
- The izakaya order should be placed at Sakura Izakaya
- The izakaya set menu ordered should be priced between ¥280-320
- The izakaya set menu ordered should include Plum Wine
- Need to cancel the order with order number S17550148871188176_O00001
- The departure station of the train ticket order should be Puyang Station
- The arrival station of the train ticket order should be Luoyang Station
- The train ticket ordered should be for a train departing between 19:00-20:00 on 2026-01-07

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
