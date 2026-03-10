# DeepPlanning Travel Task #41

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a trip from Xiamen to Nanchang on November 12, 2025, and will return on November 15. Could you help me arrange a detailed itinerary? For the outbound journey, I'd like to take a flight—preferably the earliest direct flight available that day—so I can arrive earlier and have more time to explore.

For accommodation, I don't have high requirements—just something simple and clean. Please book a two-star hotel, but ideally one with robot room service. We are four people, so we'll need two rooms.

By the way, I have a few small requests regarding meals. One meal should be arranged near 'Jiangxi Provincial Museum (New Venue)', as I heard there are many restaurants nearby. Please find one with private dining rooms and make a reservation for us. Also, there's a restaurant called 'Yumao Tangyun Restaurant'—a friend highly recommended it, and I definitely want to try it during this trip. Could you include this restaurant in the itinerary as well?

That covers most of my requirements. Feel free to arrange the rest, including sightseeing spots and other meals. I believe I've provided all necessary information—please go ahead and plan everything for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Xiamen`
- Destination: `['Nanchang']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_earliest_departure_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_must_eat_named

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
