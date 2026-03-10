# DeepPlanning Travel Task #52

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Shanghai to Enshi on November 12, 2025, returning on November 15. The trip is short, so I'd like to keep the itinerary紧凑 (well-packed). For transportation, please help me book a direct flight with the shortest flying time—I prefer not to spend too much time en route.  

For accommodation, I’m particularly fond of 'Atour', and since my budget is limited this time, please just pick their most affordable hotel option. There are three of us traveling, so I’ll need two rooms.

By the way, I’ve heard there are many great restaurants near 'Enshi City Leisure Street'. I’d like to have one meal there during the trip—ideally at a restaurant with outdoor seating, as I think dining outside would let me enjoy the local atmosphere. Also, could you arrange a few scenic spots for me? I’ve heard Enshi has many interesting places; please check the top-rated attractions and include the three highest-scoring ones in the itinerary—I only want to visit the most worthwhile spots.

That covers all my requirements. Please go ahead and plan out the transportation, accommodation, dining, and sightseeing schedule directly—no need to ask for further details. Thanks in advance! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Shanghai`
- Destination: `['Enshi']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_shortest_duration_direct
- hotel_cheapest_brand
- restaurant_specific_tag_nearby
- attraction_top_rated_must_visit

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
