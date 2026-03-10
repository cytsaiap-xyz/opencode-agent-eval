# DeepPlanning Travel Task #43

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a trip from Urumqi to Shanghai, departing on November 12, 2025, and returning on November 15, 2025. Could you help me plan the entire itinerary, including transportation, accommodation, meals, and sightseeing?

For transportation, I have a small request: my return flight should ideally arrive between 2:00 PM and 6:00 PM, as this timing works perfectly and won’t feel too rushed. Regarding accommodation, I do care about comfort—I’d like to stay at the highest-rated two-star hotel available. Could you please help me find a suitable option? By the way, there are four of us traveling, so we’ll need to book two rooms.

For dining, there are two must-include meals. First, I really want to have a meal at 'Gong Li Restaurant (Zhengda Store)'—a friend recommended it highly, saying the food is exceptional, so I definitely want to try it. Second, could you arrange another meal near 'St. Ignatius Cathedral of Shanghai (Xujiahui Catholic Diocese)'? Ideally, it should be at one of the Top 10 must-try restaurants in that area, so I can experience the most authentic and distinctive Shanghainese cuisine.

That’s pretty much everything! If there are other interesting places worth visiting—especially iconic or representative attractions—feel free to include them in the itinerary. I’ve provided all the details clearly, so please go ahead and create a complete travel plan for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Urumqi`
- Destination: `['Shanghai']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_arrival_time_range
- hotel_star_highest_rated
- restaurant_specific_tag_nearby
- restaurant_must_eat_named

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
