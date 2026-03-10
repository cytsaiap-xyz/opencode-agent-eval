# DeepPlanning Travel Task #97

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a trip from Changchun to Dalian on November 12, 2025, and will return on November 17, 2025. I'd like to keep things relaxed this time, so I’d appreciate your help arranging transportation, hotel, meals, and sightseeing.

For transportation, I’d like to take a train back home. Could you please find me the shortest-duration direct train available? I don’t want to spend too much time en route—ideally a direct one that takes me straight home.

As for accommodation, I don’t have very high requirements this time—just a decent three-star hotel would be fine. However, I usually work out, so the hotel must have a gym. Please make sure of that when booking. Also, there are four of us in total, so we’ll need two rooms.

Regarding dining, I’ve heard that 'Lvda Impression · Dalian Local Cuisine Restaurant (Xinghai Branch)' is excellent and offers authentic local flavors. We definitely want to try it this trip—please include it in the itinerary.

Additionally, I really enjoy natural scenery and would love to visit a beautiful outdoor spot. I understand Dalian has many great attractions—could you please select the highest-rated one among the ‘natural风光’ category and include it in the plan?

That covers most of my needs. I believe I've provided all necessary information—please go ahead and plan the full itinerary for me. Thanks so much for your help! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Changchun`
- Destination: `['Dalian']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_shortest_duration_direct
- hotel_star_service_required
- restaurant_must_eat_named
- attraction_type_highest_rated

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
