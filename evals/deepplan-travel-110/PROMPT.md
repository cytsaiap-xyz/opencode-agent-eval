# DeepPlanning Travel Task #110

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a trip from Hefei to Zhengzhou on November 12, 2025, staying until November 18. I'd appreciate your help in arranging the itinerary for this trip. For the return journey, I'll take a train and would prefer a direct service with the shortest travel time—getting home as quickly as possible would be ideal.

Regarding accommodation, my budget is between 350 and 390 yuan per night. Please help me find a suitable hotel within this price range. By the way, I'm traveling alone, so just one room is needed.

As for attractions, there are two must-visit places: 'Henan Museum' and 'Zhengzhou Shang Dynasty Ruins'. These two spots are essential—please make sure they’re included! Additionally, I’d like to find a restaurant near the 'Ruyi Lake Scenic Area' for a meal, preferably one that offers private room service, as that would be more convenient.

That's basically everything. I believe I've provided all necessary information. Please go ahead and arrange the full itinerary for me, including budget considerations—no need to ask me any further questions. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hefei`
- Destination: `['Zhengzhou']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_shortest_duration_direct
- hotel_price_range
- attraction_must_visit_named
- restaurant_specific_tag_nearby

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
