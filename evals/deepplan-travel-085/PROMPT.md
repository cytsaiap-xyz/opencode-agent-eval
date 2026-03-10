# DeepPlanning Travel Task #85

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to travel from Chengdu to Nanchang on November 12, 2025, and stay until November 17 before returning. Could you please help me plan the detailed itinerary, including transportation, accommodation, meals, and sightseeing arrangements? I'd like to take a flight there—could you find me the cheapest direct flight operated with a Boeing aircraft? My budget is limited, but a direct flight would be more convenient.

I don't have high requirements for accommodation—a three-star hotel will suffice. However, I’d really like to experience a hotel that offers robot room service if possible; that would be even better, as long as it's convenient. I only need to book one room since there are just two of us traveling.

Regarding meals, I have two small requests. First, upon arrival, I’d like to have a meal near 'Tianfu Airport'—preferably at a restaurant that supports online queuing so we can save time. Second, I really want to visit 'Aixi Lake Forest Wetland Park', and after touring around, we’ll likely be hungry. Could you help me find the nearest restaurant to 'Aixi Lake Forest Wetland Park' and arrange a meal there?

That covers most of my needs. I believe I’ve provided all necessary information—please go ahead and start planning the itinerary! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Chengdu`
- Destination: `['Nanchang']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_cheapest_manufacturer_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_closest_to_attraction

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
