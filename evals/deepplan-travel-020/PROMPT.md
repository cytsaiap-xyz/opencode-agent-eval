# DeepPlanning Travel Task #20

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a one-day trip from Ningbo to Suzhou on November 12, 2025, and returning on the 13th. Could you please help me plan the itinerary? For transportation, I'd like to take a train for the outbound journey—please pick the most affordable direct train option with good value for money.

For accommodation, I’d like to stay at a hotel priced between 330 and 360 yuan per night, and please keep the budget within this range. By the way, there are four of us in total, so we’ll need to book two rooms.

Regarding dining, I’d like the arrangements to be a bit more thoughtful. I’ve heard that there are quite a few good restaurants near 'Suzhou Museum', and I’d love to try some during this visit. Could you please select the highest-rated restaurant near 'Suzhou Museum' for one meal, and also check if there are any nearby restaurants offering outdoor seating where we could have another meal?

That covers all my requirements—I believe I've provided all necessary information. Please go ahead and plan the full itinerary for me, including transportation, accommodation, dining, and sightseeing. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Ningbo`
- Destination: `['Suzhou']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_cheapest_direct
- hotel_price_range
- restaurant_highest_rated
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
