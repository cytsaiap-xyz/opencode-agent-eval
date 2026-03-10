# DeepPlanning Travel Task #96

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Sanya to Nanjing on November 12, 2025, and return on November 17, 2025. There will be two of us. For transportation, we intend to take flights both ways—please directly help me select suitable flights.

Regarding accommodation, I’d like something comfortable. Please find me a hotel that was renovated after 2023, as newer properties generally offer a better experience. We only need to book one room for two people.

By the way, there are two places in Nanjing where I especially want to try local food. One is near 'Yuhuatai Martyrs Cemetery'—I hope to find a restaurant with a waiting area service so we don’t have to rush our timing. The other is near 'Meiling Palace'—could you please find me the restaurant with the lowest average spending per person? I just want something casual where we can still taste local specialties.

These are basically all my requirements. Please go ahead and plan the itinerary and budget for me directly—no need to ask me any further details. November 12, 2025 is Wednesday

## Trip Details

- Origin: `Sanya`
- Destination: `['Nanjing']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_seat_status
- hotel_newest_decoration
- restaurant_specific_tag_nearby
- restaurant_cheapest_nearby_attraction

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
