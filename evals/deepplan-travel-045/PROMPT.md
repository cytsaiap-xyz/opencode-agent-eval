# DeepPlanning Travel Task #45

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I want to travel from Jinan to Chengdu, departing on November 12, 2025, and returning on the 15th. Could you help me plan the itinerary, including transportation, accommodation, meals, and attractions?

For transportation: please arrange a convenient outbound train option for me. For the return trip, I’d like the latest direct train that arrives back in Jinan, so I can stay in Chengdu as long as possible.

Regarding accommodation: my budget is between 310 and 340 yuan per night. Could you check if there are any suitable hotels available? By the way, we’re a group of three people, but two rooms will be enough.

As for dining, I have a few places I’d like to try—could you help me schedule them? One is a restaurant near the 'Kuanzhai Alley Scenic Area'—just pick one closest to the scenic area. Also, I’ve heard there are many good options around 'Heming Teahouse'—could you select the highest-rated restaurant there and include it in the plan?

That’s about it—I think I’ve provided all the necessary information. Please go ahead and prepare the full itinerary for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Jinan`
- Destination: `['Chengdu']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_latest_arrival_direct
- hotel_price_range
- restaurant_closest_to_attraction
- restaurant_highest_rated

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
