# DeepPlanning Travel Task #106

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Jinan to Chengdu on November 12, 2025, and return after sightseeing until November 18. I'd like you to help me plan the entire trip, including transportation, accommodation, dining, and sightseeing arrangements. The total budget for this trip should be within 8000 yuan.

For transportation, I’d prefer to take a flight for the outbound journey—ideally a direct flight. Please check which flight has the lowest fare, and just book the cheapest one. Regarding accommodation, I’d like to stay somewhere comfortable, so could you please find me a hotel that was renovated in 2024 or later? By the way, there are two of us traveling, so we only need to book one room.

As for meals, could you arrange one dinner at a restaurant near 'People's Park'? We’re looking for the option with the lowest average spending per person—somewhere simple where we can try local specialties. Also, when visiting the 'Sichuan Museum', please arrange a meal as well. I’ve heard there are many restaurants featured on must-eat lists nearby; please pick one ranked in the top ten and make the reservation.

That’s basically all I need. I’ve shared my requirements for transportation, accommodation, and dining—please go ahead and prepare the full itinerary for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Jinan`
- Destination: `['Chengdu']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_cheapest_direct
- hotel_newest_decoration
- restaurant_cheapest_nearby_attraction
- restaurant_specific_tag_nearby
- budget_constraint

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
