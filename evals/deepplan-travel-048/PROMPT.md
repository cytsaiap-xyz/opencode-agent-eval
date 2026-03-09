# DeepPlanning Travel Task #48

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Nanning to Nanjing on November 12, 2025, and return on the 15th. For transportation, please book me the cheapest available direct flight ticket, since my budget is limited—every bit saved helps. For accommodation, I’d like a hotel with a swimming pool, preferably two-star. Simple facilities are fine, but it must have a swimming pool.

Oh, by the way, there are two dining spots I’m particularly interested in. One is at 'Nanjing 1912 Block'—I’ve heard there are lots of great food options there, so please pick the highest-rated restaurant and include it in the plan. The other is near 'Nanjing Eye Pedestrian Bridge', where I’d like to try Western cuisine, preferably something with a mix of international flavors. Please find a suitable option and arrange that as well.

That’s basically all—I’ve provided all the information needed. Just go ahead and create the itinerary for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Nanning`
- Destination: `['Nanjing']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_cheapest_direct
- hotel_star_service_required
- restaurant_highest_rated
- restaurant_specific_cuisine_nearby

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
