# VitaBench Task: Ota #17

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your parents are in their seventies and often reminisce about their days as sent-down youth in rural areas. You plan to take them to Yan'an to revisit their youthful years for a special nostalgic trip. You plan to depart together from your location on the 8th of next month. Since your parents are elderly and may find long journeys tiring, you want to check train tickets first. If the journey exceeds 12 hours (including transfer waiting time for non-direct routes), flying might be more suitable. The main priority is to arrive on the 8th, with shorter travel time being preferable. For accommodation, you're looking for a renovated Traditional Cave Dwelling inn that preserves the architectural features of the past while offering Modern Amenities. You plan to book one twin room and one king room for three nights initially, as your itinerary isn't fully decided yet. After booking the hotel, you also want to explore nearby places that might evoke your parents' memories, such as their former schools, supply and marketing cooperatives, or collective farm sites.

## Context

- Current time: `2023-09-19 20:31:26`
- Domain: `ota`

## Requirements / Rubrics

- The departure must be from Nanning (user's residence)
- The destination must be Yan'an
- The arrival time must be October 8, 2023
- Need to check train tickets first, with the result showing that the train journey takes more than 12 hours, so air travel must be chosen instead of train
- The flight ticket should be for the shortest flight, which is CA1834
- The quantity for the flight ticket order should be 3
- The homestay booking must be a renovated traditional Cave Dwelling homestay
- The homestay booking must preserve architectural features
- The homestay booking must have Modern Amenities
- The homestay booking must include 3 nights in a twin room
- The homestay booking must include 3 nights in a king room
- The check-in dates for the twin room must be October 8, 2023, October 9, 2023, and October 10, 2023 respectively
- The check-in dates for the king room must be October 8, 2023, October 9, 2023, and October 10, 2023 respectively
- Need to inquire about all youth-related scenic spots, with results showing Yan'an Youth Museum and Yan'an Rural Life Experience Park including historical sites such as schools, supply and marketing cooperatives, or collective farm sites from that era

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
