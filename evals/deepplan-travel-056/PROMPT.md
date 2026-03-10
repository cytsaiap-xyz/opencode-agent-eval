# DeepPlanning Travel Task #56

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a trip from Kunming to Zhengzhou around November 12, 2025, and returning on November 15. Could you help me plan the entire itinerary? I need your assistance with transportation, accommodation, dining, and sightseeing arrangements.

Let’s start with transportation. For the outbound journey, I’d like to book a direct flight with China Eastern Airlines—please pick the cheapest available fare. For the return trip, just arrange a suitable direct flight.

For accommodation, I’d like something comfortable. Please find me a three-star hotel that ideally offers SPA services, as I really want to relax on this trip.

Regarding dining, there are two specific requests. Near 'Beilong Lake Wetland Park', could you check which restaurant offers birthday set menus? And near 'Chenghuang Temple', I’d like to try a halal restaurant—please recommend one with good reviews.

That covers my requirements—I believe I’ve provided all necessary details. Please go ahead and prepare a complete travel itinerary and budget for me without asking for further information. November 12, 2025 is Wednesday

## Trip Details

- Origin: `Kunming`
- Destination: `['Zhengzhou']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_cheapest_airline_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_specific_cuisine_nearby

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
