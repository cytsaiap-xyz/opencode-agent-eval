# DeepPlanning Travel Task #37

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Wuhan to Nanjing on November 12, 2025, and stay for three days, returning on November 14. The total budget for this trip should be within 5500 yuan, Could you please help me arrange the entire itinerary, including transportation, accommodation, meals, and sightseeing? For the outbound journey, I’d like to take the earliest direct train available so that I can have more time to explore upon arrival in Nanjing.

For accommodation, I’d prefer a four-star hotel, and the rooms should ideally support screen mirroring via TV, as we are traveling as a group of three and will need to book two rooms.

Regarding dining, there are two places I’m particularly interested in. One is a restaurant near the 'Nanjing Eye Pedestrian Bridge'—I’ve heard there are many great dining options there. Could you please recommend one where I can reserve a table online or join the queue virtually? That would be much more convenient. Also, I must have one meal at 'New Bailu (Nanjing Central Mall Branch)', which was highly recommended by a friend who said their dishes are exceptionally delicious. Please include this in the plan as well.

These are all my requirements. I believe the information provided is sufficient—please go ahead and create the full itinerary without needing to ask me for further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Wuhan`
- Destination: `['Nanjing']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_earliest_departure_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_must_eat_named
- budget_constraint

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
