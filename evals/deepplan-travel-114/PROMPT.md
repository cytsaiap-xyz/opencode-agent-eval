# DeepPlanning Travel Task #114

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Nanning to Nanjing on November 12, 2025, and return on November 18. I'd appreciate your help in planning a detailed itinerary, including transportation, accommodation, dining, and attractions. I have a few specific requirements as follows—thank you so much for your assistance!

First, regarding transportation: I prefer to take a flight for the outbound journey, ideally on an Airbus-manufactured aircraft for greater comfort. For the ticket, please choose the cheapest direct flight available. As for accommodation, a two-star hotel would be sufficient—mainly we’re looking for good value. Also, since we’ll have a car, it would be best if the hotel could offer free parking, which would make things more convenient.

Regarding dining, I have a request: could you arrange for us to have one meal at a restaurant near 'Liu Chao Bo Wu Guan'? I’ve heard there are many great dining options in that area, but preferably one that supports online queuing or number pickup, so we don’t have to wait in line upon arrival and waste time.

For attractions, I’d like the itinerary to include high-quality spots—for example, the top three highest-rated recommended attractions. Please help me select must-visit places with minimal risk of disappointment.

There will be four people in our group, and we’ll need to book two rooms. I believe these are all my requirements—I hope everything is clear. Please go ahead and prepare the full itinerary for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Nanning`
- Destination: `['Nanjing']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_cheapest_manufacturer_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
- attraction_top_rated_must_visit

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
