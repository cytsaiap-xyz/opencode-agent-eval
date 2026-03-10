# DeepPlanning Travel Task #13

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Guiyang to Guilin for a two-day trip on November 12, 2025, and return on the 13th. Could you please help me plan the itinerary, including transportation, accommodation, meals, and sightseeing arrangements?

For the return journey, I’d like to take a train—please find the cheapest direct train available. You can choose a suitable departure time, as long as it’s convenient. For accommodation, I’d prefer a four-star hotel that offers robot room service, as that would make the stay more enjoyable. Also, I’d like to include two meals in the itinerary: one at the restaurant closest to "Mulong Lake" so I can go there directly after sightseeing, and another near "Li River Gallery", preferably at a restaurant with a waiting area service so I can sit comfortably if there’s a wait.

These are basically all my requirements—I believe I’ve provided everything needed. Please go ahead and plan the itinerary for me without asking for further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Guiyang`
- Destination: `['Guilin']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_cheapest_direct
- hotel_star_service_required
- restaurant_closest_to_attraction
- restaurant_specific_tag_nearby

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
