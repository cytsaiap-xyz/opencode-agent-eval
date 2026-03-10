# DeepPlanning Travel Task #42

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to fly from Xi'an to Beijing on November 12, 2025, and stay until November 15, 2025. I'd like you to help me arrange this trip, including transportation, accommodation, meals, and places to visit. For the outbound flight, I’d like to arrive in Beijing as early as possible—could you please choose the earliest departing direct flight available with 'Eastern Airlines'? That way, I’ll have most of the day left to explore after arrival.

I'm not too particular about where I stay, but I've always found 'Home Inn' to be great value for money. I'd like to stay at one of their properties again this time—please just find me the highest-rated 'Home Inn' hotel. Since I’m traveling alone, I only need one room.

As for sightseeing, I’m especially interested in 'Historical and Cultural' attractions. I’ve heard Beijing has many such sites—could you please include the top-rated 'Historical and Cultural' attractions in my itinerary? It would feel like a wasted trip to go to Beijing without seeing them.

Oh, and by the way—dining! I’ve heard there are quite a few restaurants near 'Beijing Zoo'. I’d like to have one meal in that area. Could you please recommend a well-reviewed restaurant nearby and include it in the plan?

That covers all my requirements—I believe I’ve provided enough information. Please go ahead and plan my full itinerary accordingly. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Xi'an`
- Destination: `['Beijing']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_earliest_airline_direct
- hotel_brand_highest_rated
- attraction_type_highest_rated
- restaurant_closest_to_attraction

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
