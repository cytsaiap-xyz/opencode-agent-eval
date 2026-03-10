# DeepPlanning Travel Task #41

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

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

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
