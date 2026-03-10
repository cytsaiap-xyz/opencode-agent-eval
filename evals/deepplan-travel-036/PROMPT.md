# DeepPlanning Travel Task #36

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning to travel from Guangzhou to "Quanzhou" on November 12, 2025, and stay for three days, returning on November 14. The total budget for this trip should be within 3000 yuan, Could you please help me plan the itinerary? For transportation, I'd like to take a flight for the outbound journey—please pick the cheapest direct flight available, as my budget is limited and I'd prefer to save where possible. For accommodation, I’d like to book a three-star hotel. By the way, I really enjoy swimming, so the hotel must have a swimming pool—please make sure to note this requirement.

"Quanzhou" seems to have many amazing natural attractions—I’d like to visit and check off all of them during this trip, so please include them in the itinerary. Additionally, I’ve heard that the area is also famous for its historical and cultural sites. Could you please select the highest-rated historical and cultural attraction and add it to the schedule? I’d like to deeply experience the local culture.

That’s basically everything! I believe I’ve provided all the necessary information. Please go ahead and start planning my trip—just take care of both the budget and the details for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Guangzhou`
- Destination: `['Quanzhou']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_cheapest_direct
- hotel_star_service_required
- attraction_all_of_type
- attraction_type_highest_rated
- budget_constraint

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
