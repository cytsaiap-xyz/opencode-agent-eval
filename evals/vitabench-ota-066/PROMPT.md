# VitaBench Task: Ota #66

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You and your mom plan to visit Jinshan Temple in Zhenjiang next Sunday. Now you're looking for train tickets and want to book the one with the shortest travel time. You plan to stay overnight in Zhenjiang and return the next day. Since you're traveling with your mother, the hotel environment can't be too poor. A chain hotel would be preferable, with a rating no lower than 4.5 for better assurance. One room is enough, but you and your mom aren't comfortable sharing one bed. You suddenly remember that the Double Ninth Festival is coming soon, vaguely recalling it's either on the 23rd or 24th. If it's on the 23rd, you should book return tickets that arrive around 10 AM, since you need to visit your grandparents at noon; if it's on the 24th, you can book return tickets that arrive around 7 or 8 PM. Oh, and for both ways, you want seats of the highest class. As for the entrance tickets, it depends on next Sunday's weather - if it rains, buy regular tickets; if it's sunny, buy tickets that include the "Water Charm Jiangsu" combined ticket.

## Context

- Current time: `2023-10-15 14:30:00`
- Domain: `ota`

## Requirements / Rubrics

- Departure location of the outbound train ticket should be Wuxi
- Destination of the outbound train ticket should be Zhenjiang
- Departure date of the outbound train ticket should be October 22, 2023
- The ordered outbound train should be the one with the shortest travel time among available options, the train in the outbound ticket order should be G7095 (47 minutes travel time)
- The quantity in the outbound train ticket order should be 2
- The seat type in the outbound train ticket order should be Business class seat
- Departure location of the return train ticket should be Zhenjiang
- Destination of the return train ticket should be Wuxi
- Departure date of the return train ticket should be October 23, 2023
- Need to check the date of Double Ninth Festival in 2023, which is October 23, 2023, so the arrival time of the return ticket should be around 10:00
- The quantity in the return train ticket order should be 2
- The seat type in the return train ticket order should be Hard sleeper
- The hotel to be booked should be a Chain hotel
- The rating of the booked hotel should be greater than or equal to 4.5
- The check-in date of the hotel should be October 22, 2023
- The room type in the hotel order should be twin room
- The attraction to be booked should be Zhenjiang Jinshan Temple
- Need to check the weather in Zhenjiang on October 22, 2023, which is sunny, so the ticket type in the attraction order should be the ticket with "Water Charm Jiangsu"
- The quantity in the attraction order should be 2
- The date in the attraction order should be 2023-10-22

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
