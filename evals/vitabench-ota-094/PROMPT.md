# VitaBench Task: Ota #94

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You originally planned to climb Mount Tai on the weekend. After sharing with your hiking friends, they were also interested, but some had already climbed Mount Tai before. After discussion, you all decided to climb Laoshan Mountain together. You plan to first take a train from Linyi to Qingdao, then take transportation to Laoshan. The arrival time for the outbound train should be before 10:30 AM. Considering that hiking requires energy and you don't want to sit on the train for too long, you only look at High-Speed Rail options and buy First Class Seat tickets. There are 5 people in total for this trip, and you will purchase all the train tickets in advance. You plan to arrive on Saturday and start climbing immediately, then each return to their respective cities after coming down in the evening. For the return journey, you only need to buy tickets for yourself and two others from your city, choosing the latest departure time, also High-Speed Rail with First Class Seat. Once all train tickets are confirmed, cancel the Mount Tai train tickets you bought three days ago. The other two friends who are not from Linyi plan to meet you on Friday and depart together on Saturday. You plan to book a Twin Room for them within 3km of your home. The hotel must have a rating above 4.0, include Wake-up Service, and not exceed 400 yuan. You will also purchase the entrance tickets for all five people. If there's a breeze that day, buy tickets for the Laoshan Yangkou Scenic Area; if the weather is hot, buy tickets for the Laoshan Taiqing Scenic Area.

## Context

- Current time: `2027-11-17 21:37:41`
- Domain: `ota`

## Requirements / Rubrics

- The outbound train ticket order should be from Linyi to Qingdao
- The outbound train ticket order should be High-Speed Rail
- The outbound train ticket order should arrive before 10:30
- The outbound train ticket order should be for First Class Seat
- The outbound train ticket order should be for 5 tickets
- The outbound train ticket order date should be November 20, 2027
- The return train ticket order should be from Qingdao to Linyi
- The return train ticket order should be High-Speed Rail
- The return train ticket order should be the last train departing on that day
- The return train ticket order should be for First Class Seat
- The return train ticket order should be for 3 tickets
- The return ticket order date should be November 20, 2027
- The status of the historical train ticket order from Linyi to Tai'an is cancelled
- The booked hotel should be within 3km of user's home
- The booked hotel rating should be above 4.0
- The booked hotel should include Wake-up Service
- The hotel booking date should be November 19, 2027
- The hotel booking cost should not exceed 400 yuan
- The hotel booking should be for a Standard Twin Room
- Given the weather in Qingdao on November 20, 2027 is breeze, the ticket purchased should be for Laoshan Yangkou Scenic Area
- The purchased tickets should be for November 20, 2027
- The purchased tickets should be Adult Ticket
- The purchased tickets should be for 5 people

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
