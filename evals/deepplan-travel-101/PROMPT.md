# DeepPlanning Travel Task #101

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Fuzhou to Hangzhou on November 12, 2025, and return to Fuzhou on November 18, 2025. Could you please help me plan the entire trip, including transportation, accommodation, meals, and sightseeing arrangements? By the way, I'd like to take trains both ways, and for the outbound journey, please choose the most affordable high-speed train that's direct.

As for accommodation, there should be plenty of four-star hotels in Hangzhou—please pick the one with the highest guest rating. I prefer staying at well-reviewed hotels because they feel more comfortable and reliable. There are two of us traveling, so we’ll need one rooms.

Also, there are two places I especially want to visit: 'Qinghefang Pedestrian Street' and 'Viewing Fish at Flower Harbor'. Please make sure both are included in the itinerary. Additionally, when visiting 'Viewing Fish at Flower Harbor', I’d like to have a meal nearby—ideally at a halal restaurant. I’ve heard Hangzhou has some good halal cuisine, and I’d like to give it a try.

That covers my main requirements. I believe I've provided all necessary information—please go ahead and create the travel plan without asking me further questions about preferences! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Fuzhou`
- Destination: `['Hangzhou']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_cheapest_train_type
- hotel_star_highest_rated
- attraction_must_visit_named
- restaurant_specific_cuisine_nearby

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
