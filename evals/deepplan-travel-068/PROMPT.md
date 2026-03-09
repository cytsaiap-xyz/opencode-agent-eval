# DeepPlanning Travel Task #68

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Harbin to Dalian on November 12, 2025, and stay until November 16, 2025, before returning. Could you please help me arrange transportation, accommodation, meals, and sightseeing? I’d like to return as late as possible so I can enjoy more time in Dalian, so please choose the latest available direct train for the return trip.

For accommodation, I’d like the price to be controlled between 340 and 370 RMB per night—nothing too expensive; just a regular clean and comfortable place is fine. There are two of us traveling, so we’ll need one rooms. Also, for one of the meals, I’d like to dine at a restaurant near 'Dalian Natural Museum', preferably one where I can take a virtual queue number online so I don’t have to waste too much time waiting.

As for attractions, I’m particularly interested in natural scenery spots. I’ve heard Dalian is great in this regard—please pick the highest-rated one and include it in the itinerary. That’s about it—I think I’ve provided all the necessary information. Please go ahead and prepare the full travel plan for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Harbin`
- Destination: `['Dalian']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_latest_arrival_direct
- hotel_price_range
- restaurant_specific_tag_nearby
- attraction_type_highest_rated

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
