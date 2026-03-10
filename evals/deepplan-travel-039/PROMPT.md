# DeepPlanning Travel Task #39

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a three-day trip from Nanchang to Chongqing on November 12, 2025, with my return on November 14, 2025. For transportation, I'd like to take a flight for the outbound journey—ideally the earliest direct flight available—so I can arrive in Chongqing as early as possible and have a more flexible schedule.

For accommodation, my budget is between 240 and 290 yuan per night; please keep the price within this range and help me select a suitable hotel. Also, there are three of us traveling together, so we’ll need two rooms.

By the way, I’m especially looking forward to experiencing Chongqing’s food scene. Could you arrange a meal at a restaurant near the 'Chongqing Two Rivers Night Cruise'? I’ve heard there are many restaurants from the “must-try” lists in that area—please pick one ranked in the top ten on such a list; it should be a safe choice! Oh, and there’s another spot called the 'Mountain City Trail · Jianxing Slope Grand Stairway'—the photos look very authentic to Chongqing. I expect it’ll be tiring walking around there, so could you also arrange a meal at a restaurant closest to this attraction? Ideally, it should be convenient to reach on foot.

That covers everything—I believe I’ve provided all necessary details. Please go ahead and plan the entire itinerary for me without asking for further information. November 12, 2025 is Wednesday

## Trip Details

- Origin: `Nanchang`
- Destination: `['Chongqing']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_earliest_departure_direct
- hotel_price_range
- restaurant_specific_tag_nearby
- restaurant_closest_to_attraction

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
