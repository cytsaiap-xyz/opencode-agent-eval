# DeepPlanning Travel Task #48

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Nanning to Nanjing on November 12, 2025, and return on the 15th. For transportation, please book me the cheapest available direct flight ticket, since my budget is limited—every bit saved helps. For accommodation, I’d like a hotel with a swimming pool, preferably two-star. Simple facilities are fine, but it must have a swimming pool.

Oh, by the way, there are two dining spots I’m particularly interested in. One is at 'Nanjing 1912 Block'—I’ve heard there are lots of great food options there, so please pick the highest-rated restaurant and include it in the plan. The other is near 'Nanjing Eye Pedestrian Bridge', where I’d like to try Western cuisine, preferably something with a mix of international flavors. Please find a suitable option and arrange that as well.

That’s basically all—I’ve provided all the information needed. Just go ahead and create the itinerary for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Nanning`
- Destination: `['Nanjing']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_cheapest_direct
- hotel_star_service_required
- restaurant_highest_rated
- restaurant_specific_cuisine_nearby

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
