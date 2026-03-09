# DeepPlanning Travel Task #16

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning a two-day trip from Hangzhou to Shaoxing on November 12, 2025, returning on the 13th. Could you please help me plan my itinerary, including transportation, accommodation, meals, and sightseeing?

On the day of departure, I'd like to arrive in Shaoxing as early as possible. Could you help me choose the earliest direct train available? That way, I can have more time to enjoy the city upon arrival. For accommodation, please find me the highest-rated hotel in Shaoxing—just one room for two people. We’d like to stay somewhere comfortable.

By the way, I’m especially interested in experiencing Shaoxing’s natural scenery this time. Please include all recommended nature-based attractions in the itinerary—don’t miss any. Also, there seem to be many restaurants around 'Shaoxing East Lake Scenic Area', and I’ve heard the views there are amazing. After visiting East Lake, we’d like to have a meal nearby. Could you please arrange a restaurant that has a waiting area? It would be great if we could rest there while waiting for our table.

That covers most of my requirements—I believe I’ve provided all necessary information. Please go ahead and prepare a detailed itinerary along with a budget plan for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hangzhou`
- Destination: `['Shaoxing']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_earliest_departure_direct
- hotel_highest_rated
- restaurant_specific_tag_nearby
- attraction_all_of_type

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
