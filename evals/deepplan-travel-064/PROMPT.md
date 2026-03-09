# DeepPlanning Travel Task #64

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Urumqi to Shanghai on November 12, 2025, and will stay until November 16, 2025. I'd like to ask for your help in planning my itinerary, including transportation, accommodation, meals, and sightseeing arrangements.

Regarding transportation, I’d like to take a flight for the outbound journey, preferably on a Boeing aircraft model. In terms of budget, please help me find the cheapest direct flight from Urumqi to Shanghai—direct flights are more convenient. For accommodation, I’d like to stay in a four-star hotel, ideally the one with the highest rating, so that we can be more comfortable. There are two of us, so just one room will suffice.

As for the itinerary, I especially want to visit some relaxing yet distinctive places—such as highly recommended 'Leisure Experience' attractions. Please include the one with the highest rating. By the way, for dining, I must visit 'Yu Jian Huaiyang (West Bund Phoenix Nest Branch)' this time—I’ve heard the restaurant is excellent, and I really want to try their dishes. Please make sure to schedule enough time for a meal there.

These are basically all my requirements. I believe I've provided all necessary information, so please go ahead and start planning—no need to ask me further details. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Urumqi`
- Destination: `['Shanghai']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_cheapest_manufacturer_direct
- hotel_star_highest_rated
- attraction_type_highest_rated
- restaurant_must_eat_named

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
