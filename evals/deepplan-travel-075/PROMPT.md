# DeepPlanning Travel Task #75

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning to travel from Changsha to Guangzhou on November 12, 2025, and return after my trip on November 16. I'd like you to help me arrange the entire itinerary, including transportation, accommodation, meals, and attractions. Regarding transportation, I'd prefer to take an Xiamen Airlines flight for the outbound journey—please just find me their cheapest direct flight option.

As for accommodation, I’d like to book a four-star hotel that ideally has both a washing machine and dryer, so I can do laundry during the trip, there are three of us traveling, so we’ll need two rooms.

By the way, I’d also like to include a special dinner during this trip, preferably at a restaurant near 'Beijing Road Pedestrian Street'. While you're at it, please check if any restaurants offer birthday set menus—I'd like to give a little surprise to my travel companion. Additionally, I’m particularly fond of cultural and historical attractions. Please select the highest-rated one in Guangzhou and include it in the itinerary, making sure the timing is reasonable.

That's about all my requirements. I believe this information should be sufficient—please go ahead and plan the full itinerary for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Changsha`
- Destination: `['Guangzhou']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_cheapest_airline_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
- attraction_type_highest_rated

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
