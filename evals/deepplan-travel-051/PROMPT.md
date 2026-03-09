# DeepPlanning Travel Task #51

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Zhuhai to Shanghai on November 12, 2025, and return to Zhuhai on November 15, 2025. The total budget for this trip should be within 14000 yuan, There will be four of us in total, and we intend to take trains for the entire journey—could you please help us check suitable train schedules?

For accommodation, we’d like something comfortable. Please arrange for us the highest-rated hotel in downtown Shanghai. We’ll need two rooms for four people, so kindly pay attention to the room types.

Regarding dining, I have two specific requests that I’d appreciate your help incorporating into the plan. For our first meal, I’d like to dine at 'Panlu Western Restaurant at Pullman Shanghai Jing'an Hotel (Pullman Shanghai Jing'an Hotel)'—I’ve heard the ambiance and food there are exceptional and would love to experience it. Additionally, we’d like to have one meal at a restaurant near 'Liu Haisu Art Museum' with outdoor seating. Could you please recommend a well-reviewed option?

That covers the basic requirements for our itinerary. Please go ahead and plan out the transportation, accommodation, dining, and sightseeing arrangements accordingly—no need to ask for further details. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Zhuhai`
- Destination: `['Shanghai']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_seat_status
- hotel_highest_rated
- restaurant_specific_tag_nearby
- restaurant_must_eat_named
- budget_constraint

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
