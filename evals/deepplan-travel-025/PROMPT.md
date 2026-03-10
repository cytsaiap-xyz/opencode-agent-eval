# DeepPlanning Travel Task #25

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a three-day trip from Ningbo to Zhengzhou on November 12, 2025, returning on November 14. The total budget for this trip should be within 6500 yuan, I'd like you to help me arrange transportation, accommodation, meals, and sightseeing.

Regarding transportation, I'd prefer to take a flight back, ideally the shortest-duration direct flight available, so as to save time. For accommodation, please book the cheapest available option within the 'Hanting' hotel chain—just one room is needed, as there are two of us traveling.

By the way, I have two small requests regarding meals. First, while visiting the 'Zhengzhou Museum (Songshan Road Branch)', I’d like to find a nearby restaurant where we can take a virtual queue number online to avoid waiting in line. Second, I remember there are many great dining options around 'Qianxi Square (Big Corn Tower)'—could you help me find a seafood restaurant there? We’d like to try some local seafood.

That's about it! I believe I've provided all necessary information—please go ahead and plan everything for me accordingly. November 12, 2025 is Wednesday

## Trip Details

- Origin: `Ningbo`
- Destination: `['Zhengzhou']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_shortest_duration_direct
- hotel_cheapest_brand
- restaurant_specific_tag_nearby
- restaurant_specific_cuisine_nearby
- budget_constraint

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
