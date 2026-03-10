# DeepPlanning Travel Task #85

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Chengdu to Nanchang on November 12, 2025, and stay until November 17 before returning. Could you please help me plan the detailed itinerary, including transportation, accommodation, meals, and sightseeing arrangements? I'd like to take a flight there—could you find me the cheapest direct flight operated with a Boeing aircraft? My budget is limited, but a direct flight would be more convenient.

I don't have high requirements for accommodation—a three-star hotel will suffice. However, I’d really like to experience a hotel that offers robot room service if possible; that would be even better, as long as it's convenient. I only need to book one room since there are just two of us traveling.

Regarding meals, I have two small requests. First, upon arrival, I’d like to have a meal near 'Tianfu Airport'—preferably at a restaurant that supports online queuing so we can save time. Second, I really want to visit 'Aixi Lake Forest Wetland Park', and after touring around, we’ll likely be hungry. Could you help me find the nearest restaurant to 'Aixi Lake Forest Wetland Park' and arrange a meal there?

That covers most of my needs. I believe I’ve provided all necessary information—please go ahead and start planning the itinerary! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Chengdu`
- Destination: `['Nanchang']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_cheapest_manufacturer_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_closest_to_attraction

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
