# DeepPlanning Travel Task #119

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a trip from Zhengzhou to Quanzhou on November 12, 2025, and returning to Zhengzhou on November 18. Could you please help me plan the entire itinerary, including transportation, accommodation, meals, and sightseeing?

For transportation, I'd like to take a flight for the outbound journey—please help me choose the shortest-duration direct flight, as long travel times can be tiring. Regarding accommodation, my budget is between 280 and 330 yuan per night; could you recommend some suitable hotels? By the way, there are three of us traveling together, so we'll need to book two rooms.

For attractions, I'd like to visit the most worthwhile places, so please select and include the top three highest-rated spots from the recommendations. Also, my friend specifically mentioned 'Auspicious Restaurant (Dengfu Street Branch)', saying the food there is especially authentic. I’d like to try it during this trip—could you arrange one meal there for us?

That covers all my requirements—I believe I've provided all necessary information. Please go ahead and prepare a detailed itinerary and budget for me. Thanks so much! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Zhengzhou`
- Destination: `['Quanzhou']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_shortest_duration_direct
- hotel_price_range
- attraction_top_rated_must_visit
- restaurant_must_eat_named

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
