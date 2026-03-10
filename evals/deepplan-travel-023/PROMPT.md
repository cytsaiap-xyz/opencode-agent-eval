# DeepPlanning Travel Task #23

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a three-day trip from Wuhan to Hangzhou, departing on November 12, 2025, and returning on November 14. I'd like you to help me arrange the entire itinerary, including transportation, accommodation, meals, and sightseeing.

For transportation, the outbound flight should have a convenient departure time—nothing too early or too late. For the return journey, please schedule a flight that arrives in Wuhan between 7:00 PM and 11:00 PM, so I’ll have plenty of time and won’t need to rush.

For accommodation, I’d like to stay at a three-star hotel—comfortable but not overly luxurious. By the way, I really want to relax during this trip, so it would be great if the hotel has a swimming pool where I can swim to unwind. Also, there are three of us traveling together, so we’ll need to book two rooms.

Regarding dining, please arrange one meal at the highest-rated restaurant near 'Lingyin Temple' so I can try the local specialties. Oh, and I’ve heard there are many great restaurants around 'Yanggong Causeway'—please pick one that offers online queue reservation and include it in the plan, so we won’t have to wait too long if it gets crowded.

That’s basically all I need—please incorporate these requirements into the itinerary, and feel free to adjust other details based on practical considerations! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Wuhan`
- Destination: `['Hangzhou']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_arrival_time_range
- hotel_star_service_required
- restaurant_highest_rated
- restaurant_specific_tag_nearby

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
