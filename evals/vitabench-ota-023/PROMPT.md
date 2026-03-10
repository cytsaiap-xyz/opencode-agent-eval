# VitaBench Task: Ota #23

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Since watching "The Investiture of the Gods", my child has become very interested in Bigan. Taking advantage of the National Day holiday, you plan to take your child to visit the Bigan Temple in Xinxiang. Now you want to check high-speed train tickets to Xinxiang for the day before National Day, and you can accept any train departing between 9 am and 3 pm. Either First class seat or Second class seat would be fine, but you and your child need to be in the same car. You also don't like crowded places, so you'll check which type of seat has more tickets available and book that one. Your child is currently in middle school, and you also want to see how to buy tickets for Bigan Temple more economically. You plan to visit these attractions on the 2nd, fearing the 1st would be too crowded. By the way, you also need to find accommodation, preferably not too far from the attractions, within 5 kilometers. The hotel should be three-star since you'll be staying until checking out on the 3rd. Your child is growing up and doesn't want to sleep with you anymore, so if you buy Second class seat tickets for the high-speed train, you'll book two king rooms; if you get First class seat tickets, you'll book one twin room and have your child make do.

## Context

- Current time: `2023-09-11 16:04:12`
- Domain: `ota`

## Requirements / Rubrics

- The train tickets ordered should be high-speed rail tickets
- The departure date of the ordered train tickets should be September 30, 2023
- The departure time of the ordered train tickets should be between 9:00-15:00
- The train tickets ordered should be First class seat or Second class seat
- Priority should be given to seats with more available tickets, G1571 Second class seat (156 tickets)
- The train ticket order should include 2 Second class seat tickets
- The date for the admission tickets should be 2023-10-02
- Need to inquire about the purchasing method for Bigan Temple tickets, provide the most cost-effective ticket plan, and the ticket order should include 1 Adult ticket and 1 Student ticket
- The hotel ordered should be a three-star hotel
- The distance between the ordered hotel and Bigan Temple, Bigan Avenue, Weihui City, Xinxiang, Henan Province should be less than or equal to 5 kilometers
- The hotel order should include rooms for three nights, which must be 2023-09-30, 2023-10-01, and 2023-10-02 respectively
- Since Second class seat tickets were purchased for the high-speed rail, the room type in the hotel order should be king room, with quantity of each item being 2

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
