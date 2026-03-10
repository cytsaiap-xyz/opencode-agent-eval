# DeepPlanning Travel Task #32

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning to visit Zhengzhou from Hefei for three days starting November 12, 2025, and returning on November 14. Please help me arrange transportation, accommodation, meals, and sightseeing. For transportation, I'd like to leave a bit later on my return trip so I can spend a bit more time in Zhengzhou—please check if there's a direct train to Hefei that departs latest and book it for me. For accommodation, just choose a three-star hotel, but I have a friend who will come to visit me and he'll be driving, so the hotel must have free parking.

For attractions, there are two places I must visit: 'Henan Museum' and 'Yellow River Museum'—please arrange both in the itinerary. Also, could you schedule one meal at a restaurant near 'David Plaza Shopping Center'? I’ve heard the restaurants there are very good, but it would be best if you could find one that supports online number-taking/queuing to save time.

That basically covers all my requirements. I believe I’ve provided all the necessary information—just go ahead and plan the itinerary for me without asking for anything else. November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hefei`
- Destination: `['Zhengzhou']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_latest_arrival_direct
- hotel_star_service_required
- attraction_must_visit_named
- restaurant_specific_tag_nearby

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
