# DeepPlanning Travel Task #112

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning a trip from Wuhan to Hangzhou on November 12, 2025, and returning on November 18. I'd like you to help me plan the entire itinerary, including transportation, accommodation, dining, and sightseeing.

Regarding transportation, I’d like to take a flight for the outbound journey, as early as possible—ideally the first available direct flight—to maximize my time in Hangzhou upon arrival. For the return trip, there's no need to depart particularly early; just a convenient and suitable time will be fine.

For accommodation, I’d like to book a hotel that has been recently renovated, preferably one that was refurbished after 2025, as it will likely offer greater comfort. By the way, we are a group of four people, so I’ll need two rooms—please arrange that accordingly.

There are also a few specific dining spots I really want to try. For example, I’ve heard the food at 'Feng Yue Oriental Cuisine' is exceptional, so I definitely want to include a meal there during this trip. Additionally, while visiting the 'Zhejiang Museum of Natural History', could you please recommend a restaurant ranked in the top 10 on the “Must-Eat List”? I’d like to experience some of the most highly acclaimed local cuisine.

That covers everything—I believe I've provided all necessary details. Please go ahead and start planning my itinerary without needing to ask me further questions. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Wuhan`
- Destination: `['Hangzhou']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_earliest_departure_direct
- hotel_newest_decoration
- restaurant_specific_tag_nearby
- restaurant_must_eat_named

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
