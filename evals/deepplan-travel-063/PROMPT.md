# DeepPlanning Travel Task #63

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Harbin to Beijing on November 12, 2025, and stay until November 16, 2025. Could you please help me design the entire itinerary, including transportation, accommodation, meals, and sightseeing arrangements?

Regarding transportation, I’d like to take a flight for the outbound journey. Could you help me choose a direct flight operated by an Airbus-made aircraft? Just the cheapest fare option would be fine. For the return trip, feel free to arrange any suitable flight as long as the timing is reasonable.

For accommodation, please book me the highest-rated three-star hotel in Beijing—comfort is quite important to me. By the way, there are three of us traveling, so we’ll need two rooms.

As for dining, I have a few small requests. First, I’ve heard great things about a place called 'pebbles卵石庭院墨西哥餐厅'—I’d really like to try it this time, so could you arrange one meal there? Also, when we visit 'Beihai Park', could you find a nearby restaurant that offers private room service? That way, we can relax a bit more during our meal.

That’s pretty much everything—I’ve clarified all the information I have. Please go ahead and plan it out for me directly; no need to ask me further questions about specific preferences. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Harbin`
- Destination: `['Beijing']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_cheapest_manufacturer_direct
- hotel_star_highest_rated
- restaurant_must_eat_named
- restaurant_specific_tag_nearby

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
