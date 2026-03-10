# DeepPlanning Travel Task #31

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'd like to travel from Fuzhou to Hangzhou for three days on November 12, 2025, returning to Fuzhou on November 14. For transportation, I plan to take the train. Please help me choose a train that departs between 6:00 AM and 10:00 AM so that I can arrive in Hangzhou with enough time to enjoy a full day of sightseeing. For accommodation, I’d like to book a four-star hotel, preferably one with robot room service—it seems very convenient, and the location should be near the attractions, so that I can travel to the attractions conveniently. By the way, there are three of us, so booking two rooms will be sufficient.

I’d like this trip to be relaxed and focus on must-see attractions. Could you select the top three highest-rated spots from your recommended list and include them in the itinerary? I want to experience the highlights. Also, I really want to have a meal at 'Yinhu Restaurant - Qiushan Branch'—I’ve heard it’s quite special—please arrange that in the schedule. That covers everything! Please go ahead and plan a complete itinerary for me—I believe I’ve provided all the necessary details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Fuzhou`
- Destination: `['Hangzhou']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_departure_time_range
- hotel_star_service_required
- attraction_top_rated_must_visit
- restaurant_must_eat_named

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
