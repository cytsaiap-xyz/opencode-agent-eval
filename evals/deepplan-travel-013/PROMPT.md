# DeepPlanning Travel Task #13

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

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

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
