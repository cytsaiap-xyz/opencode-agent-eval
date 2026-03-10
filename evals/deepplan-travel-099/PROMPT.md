# DeepPlanning Travel Task #99

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Sanya to Nanjing for a few days on November 12, 2025, and return on November 17, 2025. Could you please help me arrange this trip?

For transportation, I’d like to take a flight for the outbound journey—let’s go with China Eastern Airlines. Please check their cheapest direct flight option.

For accommodation, I’d like to book a three-star hotel that ideally has a swimming pool, so I can relax there in the evenings after coming back.

There are already a few attractions in Nanjing that I’m particularly interested in visiting: 'Music Stage at Sun Yat-sen Mausoleum Scenic Area in Zhongshan Scenic Area' and 'Yuhuatai Martyrs Cemetery'—please make sure both are included in the itinerary. Additionally, I’m very interested in historical and cultural sites, so if you could find the highest-rated ones and add them to the plan as well, that would be great.

These are basically all my requirements—I believe I’ve covered everything clearly. Please go ahead and prepare the full itinerary for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Sanya`
- Destination: `['Nanjing']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_cheapest_airline_direct
- hotel_star_service_required
- attraction_must_visit_named
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
