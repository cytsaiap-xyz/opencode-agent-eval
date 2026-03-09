# DeepPlanning Travel Task #115

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Hefei to "Zhengzhou Shang Dynasty Ruins" on November 12, 2025, and return on November 18th. Could you please help me plan the itinerary? For transportation, I'd like to take a train for the outbound journey, preferably departing between 4:00 PM and 8:00 PM, so I can have the morning free for packing and keep things relaxed. For the return trip, any time is fine—no need to be particular about the schedule.

For accommodation, I’d like to stay in a four-star hotel, mainly hoping for comfortable service and environment. By the way, we are three people and will need two rooms. Also, it would be great if the rooms have screen-mirroring functionality on the TV—I usually like to watch shows or movies at night.

For sightseeing, I’d like to focus on the must-see highlights. I heard that the recommended tools list highly-rated attractions; could you just pick the top three highest-rated ones and include them in the plan? I trust that popular spots won’t disappoint!

One small request: I remember there are quite a few restaurants near the "Zhengzhou Shang Dynasty Ruins". After visiting that area, I’d like to have a meal at a well-rated halal restaurant. Could you please recommend and include one with good ratings?

That’s basically all. I’ve provided all the information needed—please go ahead and prepare the full itinerary and budget plan for me without asking for further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hefei`
- Destination: `['Zhengzhou']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_departure_time_range
- hotel_star_service_required
- attraction_top_rated_must_visit
- restaurant_specific_cuisine_nearby

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
