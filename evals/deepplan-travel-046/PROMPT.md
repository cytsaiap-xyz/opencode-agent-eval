# DeepPlanning Travel Task #46

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning a trip from Shenyang to Nanjing on November 12, 2025, and will return on the 15th. I'd like you to help me plan this journey, including transportation, accommodation, food, and sightseeing arrangements. There are three of us in total, so please book two rooms.

Regarding transportation, I think taking the high-speed train is quite convenient, so I won't choose a flight for the outbound trip—just arrange a high-speed train ticket for me, preferably a direct one with the lowest fare. Please follow the same arrangement for the return trip as well.

As for accommodation, I’d like to stay somewhere more comfortable this time. Could you check if there are any five-star hotels in Nanjing with exceptionally high ratings? Just go ahead and book the top-rated one. We’re three people needing two rooms.

By the way, for dining, I really want to have a meal near the 'Nanjing Eye Pedestrian Bridge'—I’ve heard there are quite a few good restaurants around there. I’d like to try Western cuisine, preferably a place offering a variety of international flavors. Please find me a highly rated restaurant and make arrangements.

For attractions, I’m especially fond of places with historical and cultural charm—must-visit classic landmarks. Just pick the highest-rated one and include it in the itinerary; I trust your recommendation!

That covers all my requirements—I believe I've provided all necessary details. Please go ahead and plan the full itinerary without asking for further information! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Shenyang`
- Destination: `['Nanjing']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_cheapest_train_type
- hotel_star_highest_rated
- restaurant_specific_cuisine_nearby
- attraction_type_highest_rated

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
