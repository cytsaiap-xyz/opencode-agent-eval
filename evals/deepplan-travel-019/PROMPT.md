# DeepPlanning Travel Task #19

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to travel from Hangzhou to "Shaoxing" on November 12, 2025, and stay for two days, returning on the 13th. I'd like you to help me plan the entire trip, including transportation, accommodation, attractions, and meals.

Let’s start with transportation. For the outbound journey, I’d prefer a high-speed train or regular train departing between 6:00 AM and 7:00 AM, so I can arrive early and have more time to explore. For the return trip, the timing is more flexible—just schedule it according to the itinerary.

For accommodation, I don’t have any special requirements—just a comfortable two-star hotel will be fine. However, there’s one small request: the TV in the room must support screen mirroring, as I’d like to use the TV to watch something relaxing at night. By the way, there are two of us traveling, but we only need to book one room.

Regarding attractions, I’m particularly interested in natural scenery spots in "Shaoxing." I’ve heard the mountains and rivers there are beautiful—please help include these scenic areas in the itinerary. Also, I’ve heard that "Shaoxing" has quite a few free attractions. If possible, I’d like to visit those as well—saving some money would be great!

As for dining, I don’t have strict requirements. Just check what good local specialty restaurants are near the itinerary locations and recommend a few options.

That covers all my needs—I believe I’ve provided all the necessary information. Please go ahead and create a detailed travel plan for me. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hangzhou`
- Destination: `['Shaoxing']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_departure_time_range
- hotel_star_service_required
- attraction_all_free_attractions
- attraction_all_of_type

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
