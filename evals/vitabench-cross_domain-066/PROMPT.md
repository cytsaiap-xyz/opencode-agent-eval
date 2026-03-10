# VitaBench Task: Cross Domain #66

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Your gaming guild is about to celebrate its two-year anniversary, and tomorrow at 5:00 PM, you're meeting up with your long-time gaming buddies in person. You also plan to experience the popular KTV culture while you're at it. You're looking for a modern chain KTV with advanced equipment, preferably offering luxury rooms and professional sound systems. Since everyone is a student, you'd like to keep the cost under 50 yuan per person. There are 9 core members in your guild: one member is currently studying abroad, and three others haven't managed to secure train tickets yet. However, you need to book a singing package now and reserve the room as well. You estimate that you'll be singing until around 10:00 PM, so you should also check if the KTV is close to a subway station. To ensure everyone's voice stays protected during karaoke night, you'll need to purchase throat lozenges, honey, and throat protection spray—make sure all three items come from one store and cost no more than 50 yuan total—and have them delivered directly to the KTV. For those three members trying to get tickets from Jinan for tomorrow morning's arrival time: help them search for available train tickets immediately (only seated ones; skip if it's no seat type) and buy them right away if they're available!

## Context

- Current time: `2025-11-02 14:23:11`
- Domain: `cross_domain`

## Requirements / Rubrics

- The KTV ordered should be a chain KTV
- The KTV room ordered should be a luxury room
- The guild has 9 core members, plus the user, there are 10 people in total for the gathering, but 1 person is abroad and cannot come, so the room ordered should accommodate 9 people
- The cost per person cannot exceed 50, with 9 people, so the KTV package price cannot exceed 450 yuan
- The KTV ordered should have professional sound system
- The KTV package should be available before 10:00 PM
- Need to check the subway station near the KTV, and the result is Yaner Island Road Station (Line 2)
- The delivery order includes throat lozenges
- The delivery order includes honey
- The delivery order includes throat protection spray
- The three delivery items must be ordered from the same store
- The delivery address for the ordered items is Star Party KTV (Qingdao Mykal Store), 6F, Mykal (Qingdao Main Store), 69 Hong Kong Middle Road, Shinan District, Qingdao, Shandong Province
- The estimated delivery time for the ordered items is between 17:00:00-18:00:00 on 2025-11-03
- The total price of the ordered items for delivery does not exceed 50 yuan
- The arrival time of the booked train tickets should be in the morning of 2025-11-03
- The booked tickets cannot be No Seat type
- The booked tickets should be student tickets
- The booked tickets are from Jinan to Qingdao
- The quantity of train tickets order is 3

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
