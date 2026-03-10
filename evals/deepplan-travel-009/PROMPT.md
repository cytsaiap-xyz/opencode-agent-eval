# DeepPlanning Travel Task #9

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a two-day trip from Zhuhai to Guangzhou on November 12, 2025, and returning on the 13th. Could you help me plan the itinerary? I'd like to set off early, so please check for me the earliest direct train for the outbound journey. For the return trip, just pick a convenient time.

For accommodation, I’d like to book a five-star hotel, but my budget is limited—so just choose the most affordable option available. I’ll be staying in a single room.

Regarding meals, I have two small requests. First, I want to visit the 'Museum of the Nanyue King (Palace Exhibition Area)', and after sightseeing, I’d like to have lunch nearby—please find me the cheapest restaurant in that area with the lowest average spending per person. Second, I’ve heard that the 'Zhou Zhi Ji Tea Restaurant (Guangren Road Branch)' is quite famous, and I definitely want to try it during this trip—please include it in the plan.

Those are all my requirements. Could you please help me work out a detailed itinerary and budget? Just provide me with a complete plan—thanks! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Zhuhai`
- Destination: `['Guangzhou']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_earliest_departure_direct
- hotel_cheapest_star
- restaurant_cheapest_nearby_attraction
- restaurant_must_eat_named

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
