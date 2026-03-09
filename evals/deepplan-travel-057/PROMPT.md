# DeepPlanning Travel Task #57

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning a trip from Zhengzhou to Quanzhou on November 12, 2025, and will return on November 15, 2025. There are 4 people  Could you please help me plan the itinerary? For the outbound journey, I'd like to take a flight—ideally the shortest-duration direct flight available, since saving time means more time to enjoy the destination.  

For accommodation, please arrange a four-star hotel that offers free parking, as we may rent a car during our stay.  

By the way, what are the top-rated attractions in Quanzhou? I really want to make the most of this trip, so please include the three highest-rated spots from your recommendation tools.  

One more thing—I heard dining around 'Donghai Bay' is especially convenient. Could you find me the cheapest restaurant in that area (lowest average spending per person) and schedule one meal there so I can try some local specialties?  

That's about all my requirements. I believe I've provided enough information—please go ahead and start planning my itinerary! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Zhengzhou`
- Destination: `['Quanzhou']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_shortest_duration_direct
- hotel_star_service_required
- attraction_top_rated_must_visit
- restaurant_cheapest_nearby_attraction

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
