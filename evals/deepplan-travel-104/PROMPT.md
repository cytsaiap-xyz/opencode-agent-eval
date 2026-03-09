# DeepPlanning Travel Task #104

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning a trip from Hangzhou to Nanchang on November 12, 2025, returning on November 18. Specifically, I have a few small requests—could you please help me arrange the itinerary? For the return journey, I'd like to take a train, preferably a direct one with the shortest possible travel time to save time. For accommodation, please choose a hotel within the price range of 240 to 290 RMB per night—my budget is roughly in that range.

By the way, I’d also like to schedule two restaurant visits during the trip. One should be near Bayi Square, preferably at a restaurant that offers a waiting area service, which would be more convenient, rating high priority. The other should be near 'Aixi Lake Forest Wetland Park'—please find me the highest-rated restaurant nearby, as I’d like to experience some local specialties.

That's basically all—I believe I've provided all the necessary information. Please go ahead and plan the itinerary for me directly without asking further preferences. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hangzhou`
- Destination: `['Nanchang']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_shortest_duration_direct
- hotel_price_range
- restaurant_specific_tag_nearby
- restaurant_highest_rated

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
