# DeepPlanning Travel Task #79

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Shenzhen to Shanghai on November 12, 2025, and stay until November 16, 2025. Could you please help me design the entire itinerary, including transportation, accommodation, meals, and sightseeing arrangements?

Regarding transportation, I'd like to take a flight for the outbound journey—just a direct flight is fine. Please find me the most cost-effective option, since saving money is definitely preferable! For accommodation, I'm looking for something simple—just a three-star hotel will do, with the lowest possible price, as long as it's comfortable enough. After all, it's a trip meant for enjoyment. There are three of us in total, requiring two rooms—please make sure to book both rooms for me.

By the way, I'm especially interested in visiting Shanghai's iconic city landmarks. Could you please select the highest-rated ones and include them in the itinerary? Also, I've heard there are many popular attractions in Shanghai—please pick the top three highest-rated ones from the recommended list and add them to the plan. I only want to visit the most worthwhile places.

These are basically all my requirements. I believe I've provided all necessary information—please go ahead and start planning the detailed itinerary without asking me for further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Shenzhen`
- Destination: `['Shanghai']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_cheapest_direct
- hotel_cheapest_star
- attraction_type_highest_rated
- attraction_top_rated_must_visit

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
