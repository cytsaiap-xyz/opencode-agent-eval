# DeepPlanning Travel Task #72

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a trip from Xi'an to Beijing on November 12, 2025, and returning on November 16. The main purpose of this trip is to relax and visit a few places in Beijing. Regarding transportation, I’ve always been used to flying with 'China Eastern Airlines', so could you please help me pick the cheapest direct flight they offer? I don't have specific time preferences—lowest price is the top priority.

As for accommodation, I’m a member of 'Atour', and I’ve always found their properties good value. So this time, please just book the most affordable hotel under the Atour brand. There are four of us, so two rooms will be sufficient.

By the way, during this trip, I really want to visit 'Beijing Dashilan' and the 'National Aquatics Center (Water Cube)'—these two spots must be included in the itinerary. Also, I heard there are many great food options near the 'Monument to the People's Heroes'. Could you help me find the highest-rated restaurant nearby? We’d love to try it out.

That’s about it—I think I’ve covered everything. Please help me plan the trip accordingly. Looking forward to your arrangement! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Xi'an`
- Destination: `['Beijing']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_cheapest_airline_direct
- hotel_cheapest_brand
- restaurant_highest_rated
- attraction_must_visit_named

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
