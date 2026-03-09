# DeepPlanning Travel Task #58

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning a trip from Hefei to Guangzhou around November 16, 2025, and returning on November 19, 2025. For transportation, I'll take the train—please book me the cheapest direct train option available. I have some requirements for accommodation: the hotel should preferably be renovated after 2025, as I'd like a clean and comfortable stay. By the way, during this trip, I really want to visit the top locally recommended attractions. Please pick the three highest-rated spots and include them in my itinerary—popular must-visit places are definitely a safe bet.

Also, my birthday falls right in the middle of this trip. I’d like to celebrate at a restaurant near the 'Millennium Ancient Path Ruins'. Could you please recommend a restaurant there that offers birthday set menus? The overall experience should be quite good.

That covers all my needs—I believe I've provided sufficient information. Please go ahead and plan my itinerary accordingly! November 16, 2025 is Sunday

## Trip Details

- Origin: `Hefei`
- Destination: `['Guangzhou']`
- Duration: `4` days
- Departure: `2025-11-16`
- Return: `2025-11-19`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_cheapest_direct
- hotel_newest_decoration
- attraction_top_rated_must_visit
- restaurant_specific_tag_nearby

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
