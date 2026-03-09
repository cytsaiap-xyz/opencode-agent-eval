# VitaBench Task: Ota #2

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You recently secured a big deal, and looking at the substantial bonus, you decided to reward yourself with a trip to Dali to experience the beautiful scenery of Erhai Lake and Cangshan Mountain. You've already requested leave from your boss and plan to depart on the 10th of next month. Harbin is indeed quite far from Yunnan, and since you want to save time but also enjoy the scenery along the railway journey, you're considering flying to Chongqing first and then taking a train. You've already found suitable flight tickets, though they're still a bit expensive, so you plan to wait for the price to drop. You had already booked the train ticket from Chongqing to Dali, but your younger cousin who's in college suddenly told you that she will be transferring in Harbin on her way home during summer break and wants to stay at your place for one night, precisely on the 10th. You plan to adjust your itinerary by canceling the previously booked train ticket and purchasing a new one departing on the 12th, preferably for the same train. If the same train isn't available, one departing about an hour later would also be acceptable. Dali is a popular tourist destination, so accommodation needs to be arranged in advance. You want to experience a homestay with Bai Ethnic Style, and it would be ideal if you could see the scenery of Cangshan Mountain and Erhai Lake. You also hope to have breakfast included at your accommodation. You might also visit Lijiang, so you plan to book three nights in Dali first.

## Context

- Current time: `2027-06-28 12:23:11`
- Domain: `ota`

## Requirements / Rubrics

- The train ticket order status for July 10, 2027 should be cancelled
- The train number for July 10, 2027 is K9619, with departure time at 18:30. The tickets for this train on July 12, 2027 are sold out, so the tickets for July 12, 2027 should be for train K9622 which departs one hour later (departure time at 19:30)
- The train ticket order status for July 12, 2027 should be paid
- The reserved homestay should have Bai Ethnic Style
- The reserved homestay should have views of Erhai Lake and Cangshan Mountain
- The reserved homestay should include breakfast
- The homestay reservation should include three nights, specifically for July 12, 2027, July 13, 2027, and July 14, 2027

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
