# DeepPlanning Travel Task #10

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'd like to take a short trip to Guangzhou. My plan is to depart from Zhuhai on November 12, 2025, and return on November 13. Since time is tight, could you help me arrange a two-day itinerary? I have a few specific requests—please see if you can incorporate all of them.

First, regarding transportation: I’d like to arrive in Guangzhou as early as possible to maximize my sightseeing time, so please choose the earliest available direct train for the outbound journey. For accommodation, I’d prefer a comfortable stay—please book me a five-star hotel. Most importantly, the hotel must have a gym; I exercise daily and would like to maintain my routine during the trip.

As for dining, I have two small requests. On the day I visit the 'Guangdong Museum', I’d like to have a meal at a nearby restaurant that offers private room service—it would be more convenient. Additionally, I’ve heard there are many Western restaurants near 'Tianhe City'; could you pick one highly-rated Western restaurant with diverse cuisine options and arrange a meal there?

That’s about it—I hope my requirements are clear. Please help me organize a detailed itinerary accordingly! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Zhuhai`
- Destination: `['Guangzhou']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_earliest_departure_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_specific_cuisine_nearby

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
