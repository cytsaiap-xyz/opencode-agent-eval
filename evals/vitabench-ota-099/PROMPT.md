# VitaBench Task: Ota #99

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your wife has recently encountered some unpleasant issues at work and is feeling down. You want to take her out for a change of scenery. You've heard that Nanxun Ancient Town in Huzhou is beautiful and want to take her there. You now want to book train tickets, hotel, and admission tickets. You plan to stay one night in the ancient town and are initially considering leaving next Saturday. Once you confirm the travel dates, you can arrange round-trip transportation. You don't have specific requirements for the mode of transportation, but your wife has a fear of flying. Also, if you have to get up too early, you both might be in a bad mood all day. For the return trip, any time that's not too late works. You also want to learn about admission tickets for Nanxun Ancient Town Scenic Area, and you want to buy the package that includes a boat tour to experience watertown boating on Saturday. Regarding accommodation, you prefer a Jiangnan Style guesthouse. You both like to dine in your room, so it would be more convenient if the hotel offers Room Service.

## Context

- Current time: `2024-05-24 19:12:53`
- Domain: `ota`

## Requirements / Rubrics

- Transportation mode should be train
- The outbound train ticket date should be June 8, 2024
- Should avoid booking outbound train tickets with early departure times, the outbound train number should be D3135
- The quantity of outbound train tickets should be 2
- Should avoid booking return train tickets with late arrival times, the return train number should be D3142
- The quantity of return train tickets should be 2
- The scenic area to be booked should be Nanxun Ancient Town Scenic Area
- Tickets should include boat tour packages
- Ticket type should be Adult Ticket + Boat Tour Package
- The ticket date should be June 8, 2024
- The quantity of tickets should be 2
- The booked guesthouse style should be Jiangnan Style
- The booked guesthouse should provide Room Service
- The check-in date for the guesthouse should be June 8, 2024

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
