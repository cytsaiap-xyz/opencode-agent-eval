# VitaBench Task: Ota #51

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You and your sister have heard that the cherry blossoms at Slender West Lake and the spring scenery at Ge Garden are quite famous. You plan to start a flower-viewing trip to Yangzhou during the Qingming Festival holiday. You're planning to depart on Qingming Festival day, taking a train that arrives around 8 o'clock. This way you can go to Slender West Lake in the morning and Ge Garden in the afternoon. The next day, you'll visit Daming Temple during the day and take a train to Nanjing around 8 o'clock in the evening. However, you need to check the weather conditions in Yangzhou during this period. If the weather is sunny and pleasant, you want to see if Slender West Lake offers ticket packages that include Hanfu photo sessions. If not available or if it rains, just regular admission tickets will do. For the other two attractions, you just want to visit them casually, so regular tickets are fine. Once the ticket types are confirmed, both the attraction tickets and round-trip train tickets can be booked in advance. By the way, since you're not far from Yangzhou, Second-class seat tickets will be sufficient. For accommodation, you want to book your most frequently stayed hotel brand, and you're looking for a hotel within 3 kilometers of Yangzhou Commercial Center. This way, you can explore the shopping center with your sister in the evening. You and your sister are about the same age and always have endless conversations, so one king room will be sufficient.

## Context

- Current time: `2023-03-22 17:27:42`
- Domain: `ota`

## Requirements / Rubrics

- The departure location of the outbound ticket should be Nanjing, and the destination should be Yangzhou
- The departure date of the outbound ticket should be April 5, 2023
- The arrival time of the outbound ticket should be around 08:00
- The seat type in the outbound ticket order should be Second-class seat
- The quantity in the outbound ticket order should be 2
- The departure location of the return ticket should be Yangzhou, and the destination should be Nanjing
- The departure date of the return ticket should be April 6, 2023
- The arrival time of the return ticket should be around 20:00
- The seat type in the return ticket order should be Second-class seat
- The quantity in the return ticket order should be 2
- The scenic spot order should include Slender West Lake
- Need to check the weather in Yangzhou on 2023-04-05, the result is sunny, and the tickets in the Slender West Lake scenic spot order should include a Hanfu photo package
- The number of tickets in the Slender West Lake scenic spot order should be 2
- The ticket date in the Slender West Lake scenic spot order should be 2023-04-05
- The scenic spot order should include Ge Garden
- The number of tickets in the Ge Garden scenic spot order should be 2
- The ticket date in the Ge Garden scenic spot order should be 2023-04-05
- The ticket type in the Ge Garden scenic spot order should be Adult ticket
- The scenic spot order should include Daming Temple
- The number of tickets in the Daming Temple scenic spot order should be 2
- The ticket date in the Daming Temple scenic spot order should be 2023-04-06
- The ticket type in the Daming Temple scenic spot order should be Adult ticket
- The hotel brand to be ordered should be Atour
- The distance between the ordered hotel and Yangzhou Commercial Center, 666 Wenchang Middle Road, Guangling District, Yangzhou, Jiangsu Province should be less than or equal to 3 kilometers
- The room type in the hotel order should be King Room
- The check-in date of the hotel order should be April 5, 2023

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
