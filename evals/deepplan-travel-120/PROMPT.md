# DeepPlanning Travel Task #120

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a trip from Zhuhai to Chengdu on November 12, 2025, staying until November 18, 2025, with the return journey also flying back from Chengdu. I'd like to ask you to help me plan the itinerary, including transportation, accommodation, meals, and sightseeing arrangements.

Regarding transportation, for the outbound trip I'd prefer to take a flight, ideally the earliest direct departure available, so that I can have more time to explore upon arrival in Chengdu. For the return trip, please help me find a suitable flight option as well.

For accommodation, I’d like to book a three-star hotel—something that meets basic needs is fine. However, there’s one small requirement: the hotel must offer free parking service, as I may rent a car during the trip, and having on-site parking would be more convenient.

For dining, I have two specific requests. First, when visiting the 'Dujiangyan Scenic Area', could you recommend a restaurant with outdoor seating? I think it would be lovely to enjoy a meal there while taking in the scenery. Second, for a meal near the 'Chengdu Wuhou Shrine Museum', please suggest a restaurant that's as close as possible, ideally within walking distance, so I can go straight there after sightseeing without needing to travel far.

That's about it! Thank you for helping me organize everything—I've included all the necessary information, so please go ahead and prepare the full itinerary for me. November 12, 2025 is Wednesday

## Trip Details

- Origin: `Zhuhai`
- Destination: `['Chengdu']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_earliest_departure_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_closest_to_attraction

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
