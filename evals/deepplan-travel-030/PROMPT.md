# DeepPlanning Travel Task #30

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to travel from Chongqing to Zhengzhou on November 12, 2025, and stay for three days, returning on November 14. Could you help me plan the entire trip? I need arrangements for transportation, accommodation, meals, and sightseeing.

For the return journey, I'd like to take a train—could you please choose the fastest direct train available? For accommodation, I want something comfortable; please book the highest-rated hotel in Zhengzhou. There are two of us traveling, so one room will be enough.

Regarding meals, I’d like to experience some good local restaurants. Could one meal be arranged near 'Zhengdong New District CBD'? Just pick the highest-rated restaurant in that area. Also, I’d like to have a meal near the 'Yellow River Museum'. This time my budget is limited, so please find the restaurant with the lowest average cost per person nearby and recommend one.

These are basically all my requirements. Please go ahead and prepare the full itinerary and budget plan for me—no need to ask me further preferences! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Chongqing`
- Destination: `['Zhengzhou']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_shortest_duration_direct
- hotel_highest_rated
- restaurant_highest_rated
- restaurant_cheapest_nearby_attraction

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
