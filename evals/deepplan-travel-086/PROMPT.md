# DeepPlanning Travel Task #86

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

My friend and I are planning a trip from Chongqing to Zhengzhou on November 12, 2025, staying until our return on November 17, 2025. Could you please help us plan the entire itinerary, including transportation, accommodation, meals, and sightseeing? The total budget for this trip should be within 6000 yuan.

Regarding transportation, we plan to take flights both ways—please help us choose specific flights that have reasonable timing. For accommodation, we’d like a three-star hotel, and we only need to book one room for two people. Ideally, the room should have a TV with screen mirroring capability so we can watch movies at night.

By the way, there are two restaurants I’m particularly interested in visiting. One is 'Qiyu Cantonese Tea Restaurant'—I’ve heard their Hong Kong-style dim sum is very authentic, so please arrange for us to have one meal there. The other is the restaurant closest to 'Zhengzhou Shangdu National Archaeological Site Park'; after visiting the park, we’d like to have a meal nearby to avoid traveling too far.

That covers all our main requirements. I believe I’ve provided all necessary information—please go ahead and start planning the itinerary. Thanks so much for your help! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Chongqing`
- Destination: `['Zhengzhou']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_seat_status
- hotel_star_service_required
- restaurant_must_eat_named
- restaurant_closest_to_attraction
- budget_constraint

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
