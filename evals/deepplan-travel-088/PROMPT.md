# DeepPlanning Travel Task #88

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to travel from Tianjin to Zhengzhou on November 12, 2025, and return on November 17, 2025. The entire trip will be about 6 days—please help me plan a detailed itinerary.

For transportation, I’d like to take trains for the entire journey. Please book first-class seats for both outbound and return trips, as they’re more comfortable and allow me to relax and rest during the ride. For accommodation, I’d like to stay somewhere nice—please find me the highest-rated hotel in Zhengzhou. Since this is a vacation, comfort is important.

By the way, I’d like to visit all recommended 'Natural Scenery' attractions. I’ve heard the natural landscapes around Zhengzhou are quite impressive, so I’d like to experience as much as possible. Also, please arrange one meal at a restaurant near the 'Xinmi Huangdi Palace Royal Hot Spring Resort Hotel'. There are four of us traveling, so we’ll need two rooms. By the way, it would be great if this restaurant offers a waiting area service, so we can rest comfortably while waiting.

That’s pretty much everything—I believe I’ve provided all necessary details. Please go ahead and prepare the full itinerary for me without asking for further information. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Tianjin`
- Destination: `['Zhengzhou']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_seat_class
- hotel_highest_rated
- restaurant_specific_tag_nearby
- attraction_all_of_type

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
