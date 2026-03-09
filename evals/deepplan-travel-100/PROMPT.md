# DeepPlanning Travel Task #100

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to depart from Guangzhou to Quanzhou on November 12, 2025, and stay for 6 days, with my return trip on November 17, 2025. I'd like you to help me plan the entire itinerary, including transportation, accommodation, dining, and sightseeing arrangements.

Regarding transportation, I’d like to take a train back. Could you please find me the cheapest available direct train? This way, I can save money while enjoying the scenery along the way.

For accommodation, a 3-star hotel is sufficient—clean and comfortable is all I need. By the way, parking is a must, as we’ll be driving there. The hotel must offer free parking service.

As for attractions, I really want to visit all the sites labeled with "natural风光". I’ve heard that Quanzhou’s natural scenery is amazing, so I definitely don’t want to miss those. Additionally, I’d like to visit the highest-rated "leisure experience" attraction to try out the most recommended local leisure activity.

That covers my main requirements—I believe I’ve provided all necessary information. Please go ahead and arrange a detailed itinerary for me without needing to ask for further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Guangzhou`
- Destination: `['Quanzhou']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_cheapest_direct
- hotel_star_service_required
- attraction_all_of_type
- attraction_type_highest_rated

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
