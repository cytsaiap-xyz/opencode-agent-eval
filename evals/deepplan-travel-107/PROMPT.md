# DeepPlanning Travel Task #107

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Ningbo to Zhengzhou on November 12, 2025, and return on November 18, 2025. There are four of us in total, and we'd like to take flights for both the outbound and return journeys. Could you please help me check for suitable flight options?

For accommodation, I’d like to book a three-star hotel that ideally offers SPA services, so we can relax after a day of sightseeing. We’ll need two rooms—please recommend a hotel with good value for money.

By the way, during this trip to Zhengzhou, there are two places I really want to visit: 'Henan Museum' and 'Sanhuangzhai'. Please make sure both are included in the itinerary. Also, after visiting the 'Zhengzhou Shang Dynasty Ruins', we’d like to find the most affordable nearby restaurant with low average spending per person for lunch or dinner—please help arrange that as well.

That covers all my requirements. I believe I’ve provided all necessary information—please go ahead and plan the full itinerary for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Ningbo`
- Destination: `['Zhengzhou']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_seat_status
- hotel_star_service_required
- restaurant_cheapest_nearby_attraction
- attraction_must_visit_named

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
