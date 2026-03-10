# DeepPlanning Travel Task #56

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a trip from Kunming to Zhengzhou around November 12, 2025, and returning on November 15. Could you help me plan the entire itinerary? I need your assistance with transportation, accommodation, dining, and sightseeing arrangements.

Let’s start with transportation. For the outbound journey, I’d like to book a direct flight with China Eastern Airlines—please pick the cheapest available fare. For the return trip, just arrange a suitable direct flight.

For accommodation, I’d like something comfortable. Please find me a three-star hotel that ideally offers SPA services, as I really want to relax on this trip.

Regarding dining, there are two specific requests. Near 'Beilong Lake Wetland Park', could you check which restaurant offers birthday set menus? And near 'Chenghuang Temple', I’d like to try a halal restaurant—please recommend one with good reviews.

That covers my requirements—I believe I’ve provided all necessary details. Please go ahead and prepare a complete travel itinerary and budget for me without asking for further information. November 12, 2025 is Wednesday

## Trip Details

- Origin: `Kunming`
- Destination: `['Zhengzhou']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_cheapest_airline_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
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
