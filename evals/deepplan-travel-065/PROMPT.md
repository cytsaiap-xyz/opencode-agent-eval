# DeepPlanning Travel Task #65

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Changchun to Hangzhou on November 12, 2025, and return on November 16. Could you please help me arrange the entire trip, including transportation, accommodation, meals, and attractions?

Regarding transportation, feel free to choose any flight for the outbound journey—I don't have specific time requirements, so just pick a suitable one. For the return trip, I’d like to arrive back in Changchun between 2:00 PM and 6:00 PM, so please pay attention to the timing.

For accommodation, I’d like to book a four-star hotel, as I think this category generally offers good service and facilities. I’m also particularly interested in experiencing a hotel that provides robot room service—could you help me find such a place? By the way, there are three of us traveling, so we’ll need two rooms.

As for attractions, there are two places I especially want to visit: "Su Di Chun Xiao" and "Longjing Village"—please make sure both are included in the itinerary. You can recommend some other suitable spots as well. Regarding dining, I’d like to have a meal at a restaurant near "Ping Hu Qiu Yue Viewing Spot", preferably one where we can try local specialty dishes.

That covers all my requirements—I believe I’ve provided enough information. Please help me plan the trip accordingly, and just present the full itinerary when ready! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Changchun`
- Destination: `['Hangzhou']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_arrival_time_range
- hotel_star_service_required
- attraction_must_visit_named
- restaurant_closest_to_attraction

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
