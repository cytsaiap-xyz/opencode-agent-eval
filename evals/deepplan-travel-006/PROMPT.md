# DeepPlanning Travel Task #6

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Xi'an to Taiyuan for a one-day trip on November 12, 2025, and return to Xi'an on November 13, 2025. Could you please help me plan the entire itinerary, including transportation, accommodation, dining, and sightseeing arrangements?

Regarding transportation, I'd like to take a train for the outbound journey, preferably a direct one with the shortest possible travel time, so I can have more time to explore upon arrival. The accommodation doesn't need to be fancy—I just need a two-star hotel. However, I have quite a few clothes to wash; could you please choose a hotel that has both a washing machine and a dryer? There are two of us traveling, so we only need to book one room.

By the way, there are two dining spots I'm particularly interested in—could you help me arrange them? One is a restaurant near "Fenhe Scenic Area", and I'd like to be able to take a virtual queue number online in advance so we don't have to wait too long. The other is around "Chunyang Palace"; I've heard there are many great local eats nearby. Please help me pick the highest-rated restaurant there and include it in the plan.

That covers all my requirements—I believe I've provided all necessary information. Please go ahead and prepare the full itinerary for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Xi'an`
- Destination: `['Taiyuan']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_shortest_duration_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_highest_rated

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
