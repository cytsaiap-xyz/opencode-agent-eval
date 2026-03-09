# DeepPlanning Travel Task #109

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Jinan to Chongqing on November 12, 2025, and return on November 18. Please help me plan the itinerary, including transportation, accommodation, dining, and sightseeing arrangements. By the way, I'd like to take a flight for the outbound journey—preferably a direct flight with a lower price; no special requirements otherwise.

For accommodation, I’d like something comfortable—a four-star hotel would be great. I sometimes enjoy watching TV series or movies in the evening, so it would be convenient if the hotel room has a TV that supports screen mirroring. There are four of us in total, so please book two rooms.

Additionally, there’s a special arrangement during this trip: I’d like to have a meal near "Chongqing Chaotianmen Square" at a restaurant that offers birthday set menu services. Could you please check if there are any suitable options? Oh, and another meal will be around "Chongqing Shibachi Traditional Style Area"—we’re on a tight budget, so could you find the cheapest restaurant with the lowest per-person cost? Just schedule both meals at convenient times for sightseeing.

That covers all my requirements. I’ve provided all the details clearly, so you can go ahead and plan the itinerary directly—no need to ask for further information. November 12, 2025 is Wednesday

## Trip Details

- Origin: `Jinan`
- Destination: `['Chongqing']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_cheapest_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_cheapest_nearby_attraction

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
