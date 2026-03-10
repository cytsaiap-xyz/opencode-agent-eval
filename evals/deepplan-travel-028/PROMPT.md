# DeepPlanning Travel Task #28

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to travel from Fuzhou to Hangzhou for a few days on November 16, 2025, and return on November 18. I'd appreciate your help in planning this trip, including arrangements for transportation, accommodation, meals, and sightseeing.

Regarding transportation, I’d like to take a train for the outbound journey—earlier departure would be better. Please arrange a train departing between 6:00 AM and 10:00 AM. For accommodation, I’d like to stay at a four-star hotel that ideally has a swimming pool, as I enjoy swimming and don’t want to skip my workout during the trip. By the way, there are three of us, so we’ll need two rooms.

For dining, I must visit a restaurant called 'Changhua Yijia Ren Restaurant (Gongchengshan Community Branch)'—I’ve heard their food is very authentic, so please include it in the itinerary. As for attractions, I’m especially keen on visiting 'Jiuxi Yanshu'—I’ve heard the scenery there is absolutely beautiful. Also, we must go to the 'Zhejiang Provincial Museum (Gushan Branch)', which seems to have a strong cultural atmosphere.

These are basically all my requirements—I believe I’ve provided all necessary information. Please go ahead and plan the itinerary directly without asking for further details! November 16, 2025 is Sunday

## Trip Details

- Origin: `Fuzhou`
- Destination: `['Hangzhou']`
- Duration: `3` days
- Departure: `2025-11-16`
- Return: `2025-11-18`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_departure_time_range
- hotel_star_service_required
- restaurant_must_eat_named
- attraction_must_visit_named

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
