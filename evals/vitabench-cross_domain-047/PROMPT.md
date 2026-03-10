# VitaBench Task: Cross Domain #47

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You're moving to Zhongjian Cloud View today and want to treat the four friends who are helping you move to hotpot near there tonight. Since you're treating them, you hope to find a restaurant with a nice environment, with a set meal costing no more than 150 per person, but you can't eat seafood. You also want the restaurant to be close to your new home so everyone won't have to walk too far. While packing at your old place, you've discovered you don't have enough storage boxes and need to quickly buy three medium-sized ones to organize your items. You need them delivered as soon as possible, preferably from somewhere nearby, but they need to be sturdy. Also, you'll need to make a reservation at the hotpot restaurant. The move will probably take another three hours, so you'll have to eat late. After making the reservation, purchase the hotpot set meal, and when you arrive at the restaurant, you can just verify and use it. After finishing the move today, you'll finally have time tomorrow to visit your parents in your hometown, so you also want to check the train schedule to Zibo. Your parents' home is close to Zibo North Railway Station, only about ten minutes away. You want to find a ticket that arrives around 11:30 am so you won't need to help your parents prepare lunch. When returning the day after tomorrow, your parents will come with you to see your new home, so you want to check return tickets as well, with a departure time around 5 or 6 pm. Just check the train information and confirm the schedules without purchasing the tickets yet, as you need to discuss with your parents first.

## Context

- Current time: `2024-11-02 16:45:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The dine-in restaurant should be a hotpot restaurant
- The hotpot restaurant should be within 500 meters of Zhongjian Cloud View
- The hotpot restaurant's environment rating should be 4.2 or above
- Need to make a reservation at the hotpot restaurant for around 19:45 on 2024-11-02 [meaning the reservation time should be between 19:30 and 20:00]
- The reservation should be for 5 People
- The hotpot restaurant's set meal should cost less than 150 yuan per person, with a total price under 750 yuan
- The hotpot restaurant's set meal should not include seafood (fish/shrimp/crab) dishes
- The delivery order should be for Medium Storage Box
- The delivery order should be sturdy and durable, with labels such as Thickened, Extra Hard, PP Material, etc.
- The storage box order should be delivered on November 2, 2024, and should be from the closest available merchant, which should be JD Home Supermarket
- The delivery address for the storage box should be Room 1902, Unit 1, Building 9, Ronghui City, 2000 Olympic West Road, Lixia District, Jinan, Shandong Province
- Need to check train schedules from Jinan to Zibo on 2024-11-03, should provide information on trains arriving around 11:30, G167 (11:05-11:35) or G171 (10:50-11:25)
- Need to check train schedules from Jinan to Zibo North Railway Station on 2024-11-03 [result should be G167 or G169]
- Agent needs to check train schedules from Zibo to Jinan on 2024-11-05, should provide information on trains departing between 17:00-18:00, result is G258 (17:15-17:45)
- Agent should not book any train tickets

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
