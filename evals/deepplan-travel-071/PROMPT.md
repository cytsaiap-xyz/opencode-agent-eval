# DeepPlanning Travel Task #71

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning to travel from Jinan to Hangzhou on November 12, 2025, and return on November 16, 2025. Could you please help me plan the trip?

First, regarding transportation, For the outbound journey, please choose train, and I'd like to arrive in Hangzhou as early as possible, so that I can have more time to explore upon arrival. As for accommodation, I prefer something comfortable—please find me a five-star hotel that has a swimming pool, as I really enjoy swimming. Also, there are four of us in total, so booking two rooms will be sufficient.

Regarding dining, I’d like to arrange two meals. One meal will be at a restaurant near 'Three Pools Mirroring the Moon', and I hope we won’t need to rush during dinner. Ideally, the restaurant should have a waiting area service so we can chat or rest a bit before being seated. For the other meal, we plan to eat near 'Hangzhou Hubin Intime IN77 Area A'. Could you please find the most affordable restaurant nearby with good value for money?

That’s about it for my itinerary. I believe I’ve provided all necessary information—please go ahead and arrange everything for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Jinan`
- Destination: `['Hangzhou']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_earliest_departure_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_cheapest_nearby_attraction

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
