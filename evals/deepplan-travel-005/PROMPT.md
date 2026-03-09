# DeepPlanning Travel Task #5

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Changchun to Dalian on November 12, 2025, and stay for two days, returning on the 13th. For this trip, I'd like to take the train both ways and prefer "first-class seat" since it's more comfortable. Please check what suitable train options are available and help me arrange them.

For accommodation, I’d like a three-star hotel with a gym—ideally somewhere I can exercise in the evening. By the way, there are three of us traveling together, so we’ll need two rooms. Just pick a comfortable place for us.

During this trip to Dalian, I really want to experience some natural scenery. I’ve heard there are some great scenic spots—please arrange for us to visit the highest-rated one in the natural landscape category. Also, the area around "Zhongshan Square" seems quite lively, and I’ve heard there are many good restaurants nearby. Could you help me find the highest-rated restaurant in that area and arrange a meal there?

That covers all my requirements. Please go ahead and plan a detailed itinerary for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Changchun`
- Destination: `['Dalian']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_seat_class
- hotel_star_service_required
- attraction_type_highest_rated
- restaurant_highest_rated

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
