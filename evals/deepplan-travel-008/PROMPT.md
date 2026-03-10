# DeepPlanning Travel Task #8

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'd like to plan a short trip from Xi'an to Taiyuan, departing on November 12, 2025, and returning on November 13, 2025. The itinerary is quite simple—could you help me arrange it?

For transportation, I think taking the train is the most convenient option. Please book a bullet train (D-series) for the outbound journey, and just pick the most cost-effective direct option available. I don't have specific time preferences; I just appreciate that bullet trains are fast and comfortable.

As for accommodation, I don't need anything luxurious—just a three-star hotel will suffice. However, there's one small request: ideally, the hotel should have both a washing machine and a dryer, so we can easily manage our laundry. By the way, there will be two of us traveling, so one room is enough.

Regarding sightseeing, there are two places in Taiyuan I'm most eager to visit: 'Clock Tower Street Pedestrian Street' and 'Fenhe Scenic Area'. Please make sure both are included in the itinerary—one offers vibrant local atmosphere, and the other beautiful natural scenery, both of which interest me greatly.

For dining, could you help me find a Western restaurant near 'Food Street'? I'd like to try a place offering fusion cuisine. I've heard there are many good options around there—please recommend one with high ratings.

That covers all my requirements—I believe I've provided sufficient details. Please go ahead and prepare the full travel plan and budget estimate for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Xi'an`
- Destination: `['Taiyuan']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_cheapest_train_type
- hotel_star_service_required
- attraction_must_visit_named
- restaurant_specific_cuisine_nearby

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
