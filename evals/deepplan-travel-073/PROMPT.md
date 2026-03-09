# DeepPlanning Travel Task #73

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I would like to travel from Jinan to Hangzhou on November 12, 2025, and return on November 16, 2025. I'd appreciate your help in arranging the entire trip, including transportation, accommodation, meals, and attractions. We plan to take the train both ways, and please book first-class seats since they're more comfortable.

For accommodation, I'd prefer a three-star hotel. Importantly, we'll be driving there, so the hotel must have a free parking lot—please make sure of that. By the way, there are three of us, but two rooms will be sufficient.

Regarding attractions, I'm particularly fond of places with historical and cultural ambiance. I've heard Hangzhou excels in this aspect—please select the highest-rated historical and cultural attraction and include it in the itinerary, making sure not to miss any highlights. Also, I've heard there are many great food options near "Leifeng Pagoda Scenic Area." Since we'll be visiting that area, please recommend the highest-rated restaurant nearby and arrange one meal there so we can try the local specialties.

These are basically all my requirements. I believe I've provided all necessary information—please go ahead and plan the itinerary directly without asking for further details. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Jinan`
- Destination: `['Hangzhou']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_seat_class
- hotel_star_service_required
- attraction_type_highest_rated
- restaurant_highest_rated

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
