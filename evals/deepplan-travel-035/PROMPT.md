# DeepPlanning Travel Task #35

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Nanning to Chongqing for a three-day trip on November 12, 2025, and return on November 14. Could you help me plan a detailed itinerary? For transportation, I'd like to take a flight for the outbound journey—please help me choose a direct flight with the shortest flying time, and try to avoid anything too inconvenient.

For accommodation, please find a three-star hotel with a swimming pool. There are four of us traveling, so we’ll need to book two rooms.

By the way, for dining, I’d like to try authentic Sichuan cuisine. Please arrange one meal at a well-reviewed restaurant near 'Hongyan Revolutionary Memorial Hall'. Also, I’m especially fond of natural scenery—please check which attraction in Chongqing has the highest rating among the 'natural风光' category and make sure to include it in the itinerary.

That’s basically all—I’ve clarified the overall requirements. Just go ahead and plan it for me; no need to ask for further details. November 12, 2025 is Wednesday

## Trip Details

- Origin: `Nanning`
- Destination: `['Chongqing']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_shortest_duration_direct
- hotel_star_service_required
- restaurant_specific_cuisine_nearby
- attraction_type_highest_rated

## Your Task

Read `task-data.json` for the full query and constraint details. Analyze the hard constraints and find the correct answers for each (hotel name, train number, restaurant, attraction, budget, etc.).

Write your answer to `answer.json` as a trip plan object with:
- `origin`, `destination`, `days`, `people_number`
- `outbound_transport`: `{type, number, departure, arrival, seat_class}`
- `inbound_transport`: same structure
- `hotel`: `{name, star, price_per_night, nights, rooms, services}`
- `meals`: array of `{restaurant_name, cuisine, near_attraction, special_requirement}`
- `attractions`: array of `{name, type, ticket_price}`
- `total_budget`: total cost
- `constraint_results`: dict mapping each constraint name to its satisfied value
