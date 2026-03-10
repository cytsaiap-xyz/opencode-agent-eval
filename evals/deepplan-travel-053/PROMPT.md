# DeepPlanning Travel Task #53

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to travel from Hefei to Chengdu on November 12, 2025, and stay for a few days, returning on the 15th—a total of four days and three nights. For transportation, I’d like to take a flight there; please help me choose a direct flight with the lowest possible fare, as my budget is limited. For the return trip, I’ll also fly—no special requirements, and the timing can be flexible.

For accommodation, I’d like to book a room in a four-star hotel, preferably one that offers robot meal delivery service. It seems very convenient and interesting, so please help me find options that meet this criterion.

By the way, I’d like to arrange a special meal during the trip. I’ve heard there are many great dining options near 'Shu Feng Ya Yun Sichuan Opera Theater'. Could you please help me find the highest-rated restaurant in that area so I can experience authentic local cuisine? Additionally, for attractions, I’d like to visit the most iconic must-see spots—please include the top three highest-rated attractions recommended in your tool, and schedule them reasonably throughout the itinerary.

That covers all my needs. The information should be clear, so please go ahead and prepare the full travel plan and arrangements for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hefei`
- Destination: `['Chengdu']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_cheapest_direct
- hotel_star_service_required
- restaurant_highest_rated
- attraction_top_rated_must_visit

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
