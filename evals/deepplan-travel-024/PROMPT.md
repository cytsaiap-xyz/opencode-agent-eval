# DeepPlanning Travel Task #24

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to travel from Nanchang to Chongqing for a three-day trip on November 12, 2025, and return to Nanchang on November 14. Could you help me plan the entire itinerary, including transportation, accommodation, meals, and activities? Regarding transportation, I’d like the outbound train to depart between 11:00 AM and 3:00 PM—this timing works well so I don’t have to wake up too early or rush too late.  

For accommodation, I’d like to stay at a five-star hotel that ideally offers SPA services, so I can fully relax during the trip.  

As for sightseeing, I’m particularly interested in visiting places in Chongqing with historical and cultural significance. Since time is limited, please arrange for me the top-rated historical and cultural attraction—it seems definitely worth visiting. Also, I can’t miss Chongqing’s local cuisine! I’ve heard there are many great restaurants near 'Baysi Road Delicious Food Street'. Please select one restaurant in that area that offers a waiting area service, so I won’t have to wait around inconveniently.  

These are all my requirements—I believe I’ve provided sufficient information. Please go ahead and plan the itinerary for me directly without asking for further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Nanchang`
- Destination: `['Chongqing']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_departure_time_range
- hotel_star_service_required
- attraction_type_highest_rated
- restaurant_specific_tag_nearby

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
