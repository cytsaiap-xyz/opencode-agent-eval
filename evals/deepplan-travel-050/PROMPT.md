# DeepPlanning Travel Task #50

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning to travel from Shanghai to Enshi on November 12, 2025, and return on the 15th. Could you please help me plan a detailed itinerary? I'd prefer an earlier departure time for the outbound flight—somewhere between 6:00 AM and 10:00 AM—so I can arrive early and have more time to explore. For accommodation, I don't have very high requirements; just find me a comfortable three-star hotel with a swimming pool—comfort is still important. By the way, I'm especially interested in visiting historical and cultural attractions in Enshi. I've heard some have particularly high ratings—please pick the one with the highest rating and include it in the itinerary. Also, I've heard that the local 'Canyon Flavor Restaurant' is quite special, and I'd like to try it once—could you arrange it for either lunch or dinner on one of the days? These are my main requirements. I think I've provided all the necessary information—please go ahead and prepare the full itinerary for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Shanghai`
- Destination: `['Enshi']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_departure_time_range
- hotel_star_service_required
- attraction_type_highest_rated
- restaurant_must_eat_named

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
