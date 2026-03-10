# DeepPlanning Travel Task #62

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to travel from Nanning to Nanjing on November 12, 2025, and stay for a few days, returning on the 16th. I'd like you to help me plan the entire trip, including transportation, accommodation, meals, and sightseeing arrangements.

First, regarding transportation: I’d like to take a flight for the outbound journey, preferably a direct one, with the lowest price possible. Since it's a short-haul flight, affordability is important.

As for accommodation, I don’t have high requirements—just a two-star hotel will suffice. However, there’s one small request: the hotel must have a swimming pool, as I’d like to squeeze in some time to swim and relax. There are three of us traveling, so we’ll need two rooms. Please help me select a suitable hotel.

By the way, for dining, I have a small wish—I’ve heard that 'Nanjing 1912 Block' is quite famous, and I’d like to visit that area. Could you arrange a meal at a restaurant closest to 'Nanjing 1912 Block'? That way, we can go straight to dinner after sightseeing, which would be more convenient.

Finally, for attractions, I really want to experience the local leisure atmosphere. Could you pick the highest-rated spot among all 'Leisure Experience' attractions in Nanjing and include it in the itinerary? I’d like to visit the most worthwhile place to fully enjoy the experience.

That covers everything—I believe I've provided all necessary information. Please go ahead and prepare the full itinerary and budget plan for me without needing to ask further details. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Nanning`
- Destination: `['Nanjing']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_cheapest_direct
- hotel_star_service_required
- restaurant_closest_to_attraction
- attraction_type_highest_rated

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
