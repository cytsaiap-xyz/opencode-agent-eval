# DeepPlanning Travel Task #99

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to travel from Sanya to Nanjing for a few days on November 12, 2025, and return on November 17, 2025. Could you please help me arrange this trip?

For transportation, I’d like to take a flight for the outbound journey—let’s go with China Eastern Airlines. Please check their cheapest direct flight option.

For accommodation, I’d like to book a three-star hotel that ideally has a swimming pool, so I can relax there in the evenings after coming back.

There are already a few attractions in Nanjing that I’m particularly interested in visiting: 'Music Stage at Sun Yat-sen Mausoleum Scenic Area in Zhongshan Scenic Area' and 'Yuhuatai Martyrs Cemetery'—please make sure both are included in the itinerary. Additionally, I’m very interested in historical and cultural sites, so if you could find the highest-rated ones and add them to the plan as well, that would be great.

These are basically all my requirements—I believe I’ve covered everything clearly. Please go ahead and prepare the full itinerary for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Sanya`
- Destination: `['Nanjing']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_cheapest_airline_direct
- hotel_star_service_required
- attraction_must_visit_named
- attraction_type_highest_rated

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
