# DeepPlanning Travel Task #98

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to depart from Guangzhou on November 12, 2025, and travel to Quanzhou for a few days, returning on November 17. The trip will be approximately six days and five nights. Could you please help me plan the itinerary, including transportation, accommodation, meals, and sightseeing arrangements?

Regarding transportation, I’d like to take a flight for the outbound journey, preferably a direct one, with the lowest price possible—saving on airfare is always good. For the return trip, please also arrange a flight, ideally not too tight on time.

For accommodation, I don’t have high demands—just a clean and comfortable place. I often stay at "Home Inn" and find it quite convenient, so this time, please just find the most affordable "Home Inn" hotel available. We’ll need accommodation for five nights, and by the way, there are four of us traveling together, so please book two rooms.

As for attractions, I’m especially fond of natural scenery. I’ve heard Quanzhou has many beautiful natural landscapes. Could you please include all the nature-based attractions mentioned in the attraction recommendation tool? I’d like to visit all of them and don’t want to miss any.

One more thing—I’ve heard that ''Tianhou Palace'' is a famous spot in Quanzhou, and I plan to visit and have a meal nearby. Could you help me find a restaurant near ''Tianhou Palace'' that offers an online number-taking or queue reservation service? That would make dining more convenient and save time.

These are all my requirements. I believe I’ve provided sufficient information, so please go ahead and plan accordingly—no need to ask for further details. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Guangzhou`
- Destination: `['Quanzhou']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_cheapest_direct
- hotel_cheapest_brand
- attraction_all_of_type
- restaurant_specific_tag_nearby

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
