# DeepPlanning Travel Task #92

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to travel from Sanya to Nanjing on November 12, 2025, staying until November 17. Could you please help me plan a rough itinerary, including arrangements for transportation, accommodation, meals, and sightseeing?

For transportation, I’d like to fly to Nanjing—could you help me find a direct flight with the lowest possible fare? The same goes for the return trip—just a direct flight with a budget-friendly price would be best.

Regarding accommodation, I’m particularly fond of 'Hilton' hotels—their service and facilities are great. Could you please find and book the highest-rated 'Hilton' hotel in Nanjing? By the way, there are three of us traveling, so we’ll need two rooms.

As for dining, there are a few places I really want to try—please help me arrange them. First, I’ve heard that the environment at 'Eleven Scenic Terrace Bar (Confucius Temple Pedestrian Street Branch)' is amazing, and it’s a must-visit spot for me. Could you schedule one meal there? Also, we’re planning to visit the 'Yuhuatai Martyrs Cemetery'. If there’s a restaurant nearby offering birthday set meals, could you recommend and reserve one for us to try?

That’s about it—I believe all the necessary information is included. Please go ahead and create a detailed itinerary for me without needing to ask further questions about my preferences. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Sanya`
- Destination: `['Nanjing']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_cheapest_direct
- hotel_brand_highest_rated
- restaurant_must_eat_named
- restaurant_specific_tag_nearby

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
