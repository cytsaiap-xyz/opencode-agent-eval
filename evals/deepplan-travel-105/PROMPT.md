# DeepPlanning Travel Task #105

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning a trip from Wuhan to Hangzhou on November 12, 2025, and will return on November 18. Please help me plan the entire itinerary, including transportation, accommodation, meals, and sightseeing arrangements.

Regarding transportation, I'd prefer the outbound flight to depart between 4:00 PM and 8:00 PM, so it's not too rushed and the timing feels more comfortable. For accommodation, I'd like to stay somewhere nice—could you check which Hilton hotel has the highest rating and book one room for me?

As for dining, I've heard that a restaurant called 'Yun She Tea Cuisine' is particularly good, and I definitely want to try it this time—please include it in the plan. By the way, are there also many good restaurants near 'Hangzhou Arts & Crafts Museum'? I'd like to try one there as well, preferably at a restaurant that offers a waiting area service, as that would be more convenient.

That's basically everything. Please go ahead and plan the full itinerary for me—I've provided all the information needed, so no need to ask further questions. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Wuhan`
- Destination: `['Hangzhou']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_departure_time_range
- hotel_brand_highest_rated
- restaurant_specific_tag_nearby
- restaurant_must_eat_named

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
