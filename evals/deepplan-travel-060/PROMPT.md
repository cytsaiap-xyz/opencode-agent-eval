# DeepPlanning Travel Task #60

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a trip from Urumqi to Changsha on November 16, 2025, returning on the 19th, making it a four-day trip in total. For transportation, I'd like to take flights both ways, and I want to book first class since it'll be more comfortable during the flight.

Regarding accommodation, I usually enjoy staying at Orange Hotel, so I’d like to stay with them again this time. However, my budget is limited, so please just help me pick the most affordable hotel under the Orange brand.

Also, a friend has been highly recommending 'Xiangzhiwei Self-Service Restaurant (Four Twos and Two Kings Authorized Store)', saying their food is especially authentic. I definitely want to try it during this visit—please arrange one meal there for me. Additionally, I’d like to visit 'Hunan Martyrs' Park'. After sightseeing, I’ll probably be hungry, so please help me find the nearest restaurant to that park and arrange a meal there as well, so I don’t have to travel far.

That’s basically everything. I believe I’ve provided all the necessary information—please go ahead and plan out the detailed itinerary for me. I’m all set and ready to go! November 16, 2025 is Sunday

## Trip Details

- Origin: `Urumqi`
- Destination: `['Changsha']`
- Duration: `4` days
- Departure: `2025-11-16`
- Return: `2025-11-19`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_seat_class
- hotel_cheapest_brand
- restaurant_must_eat_named
- restaurant_closest_to_attraction

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
