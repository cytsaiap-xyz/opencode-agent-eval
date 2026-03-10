# VitaBench Task: Cross Domain #81

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

One of your good buddies has returned to Danyang to inherit the family business and has invited you and two other friends who are still in Suzhou to visit Danyang this weekend. But since he's busy with the opening of his eyewear store, he's asked you to help arrange train tickets and hotel accommodations for everyone. You originally planned to leave right after work on Friday evening, but one of your friends probably won't arrive at the high-speed railway station until after 8 PM, so you want to check if there are tickets available around 9 PM. If not, you'll book tickets for around 9 AM on Saturday morning. Since your buddy said he would reimburse everything, you must book business class seats. As for the hotel, it needs to be close to the station, preferably within 1 km, and you plan to stay until Sunday noon checkout. You must book an e-sports gaming room where all four of you can stay together, and it must have professional gaming equipment and gaming chairs. Speaking of e-sports, you also want to order some Red Bull energy drinks and puffed snacks to be delivered to the hotel so you can game all night. You need 12 cans of Red Bull and about eight bags of puffed snacks, but with variety - three different kinds. Schedule the delivery for around 10:30 PM on Friday night, but if there are no suitable train tickets for Friday, then arrange delivery for around 9 PM on Saturday.

## Context

- Current time: `2026-08-06 19:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- Search for train tickets from Suzhou to Danyang around 9 PM, the result shows that tickets for August 7, 2026 are sold out, and need to purchase tickets for around 9 AM on August 8, 2026 [specifically, the departure time of the final booked train ticket should be between 8:45 and 9:15]
- The seat type for the train ticket order should be Business class seat
- The quantity of train tickets should be 3
- The booked hotel should be within 1km (inclusive) of Danyang Station, Zhanqian Road, Yunyang Street, Danyang, Zhenjiang, Jiangsu Province
- Hotel check-in date should be August 8, 2026
- Hotel check-out date should be August 9, 2026
- The room type in the hotel order should be a four-person room
- The room type in the hotel order should provide professional gaming equipment and gaming chair
- The food delivery order should include Red Bull
- The food delivery order should have a total of 12 cans of Red Bull
- The food delivery order should include puffed snacks
- The food delivery order should include 3 types of puffed snacks
- The food delivery order should have a total of 8 puffed snacks
- The Red Bull and puffed snacks in the food delivery order should come from the same store
- The delivery address for the food delivery order should be Danyang Station E-sports Hotel, 28 Zhanqian Road, Yunyang Street, Danyang, Zhenjiang, Jiangsu Province
- The expected delivery time for the food delivery order should be 21:00 on August 8, 2026

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
