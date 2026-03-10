# DeepPlanning Travel Task #108

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to travel from Shenzhen to Beijing on November 12, 2025, and return to Shenzhen on November 18, 2025. This time, I’d like you to help me plan the itinerary, including transportation, accommodation, meals, and sightseeing arrangements.

For the outbound journey, I’d like to arrive in Beijing as early as possible to have more time for activities on the first day. Could you please help me choose the earliest direct flight available? For the return trip, no specific arrangements are needed—just go with whatever is most convenient.

Regarding accommodation, a three-star hotel would be sufficient. However, I really enjoy swimming and would like to relax during the trip, so the hotel we stay at must have a swimming pool. Also, there are only two of us traveling, so one room will be enough.

As for dining, I have two specific requests. First, I’m particularly looking forward to visiting the 'National Aquatics Center (Water Cube)'. After touring the site, I’d like to have a meal nearby—preferably at a restaurant that offers private rooms, so we can enjoy a quieter dining atmosphere. Second, I’m also excited to visit the 'Summer Palace'. I’ve heard there are many great places to eat around there, so please help me find the highest-rated restaurant nearby and arrange a meal there.

These are roughly my thoughts—I believe the information provided is sufficient. Please go ahead and prepare the full itinerary for me. Thanks so much for your help! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Shenzhen`
- Destination: `['Beijing']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_earliest_departure_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_highest_rated

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
