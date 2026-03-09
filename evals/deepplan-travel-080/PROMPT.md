# DeepPlanning Travel Task #80

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Shenzhen to Hangzhou for a few days, departing on November 12, 2025, and returning on November 16, 2025. The total budget for this trip should be within 16000 yuan. For transportation, I'd like to take the train both ways and book first-class seats—they're more comfortable. For accommodation, please find me the highest-rated hotel under the Home Inn brand; I just want a clean and comfortable place to stay. Oh, and we’re a group of four people, so we’ll need two rooms.

Regarding meals, there are a couple of places I must include. One is a restaurant near 'Longjing Village'—I’ve heard the surroundings are lovely, but preferably choose one with a waiting area service for convenience. Also, I really want to have a meal at 'Normal University Family Joyful Restaurant (Jiru Garden Branch)'—a friend recommended it before, saying the food is very authentic, and this trip will be the perfect chance to try it.

These are basically all my requirements. I’ve provided all the information needed, so please go ahead and plan the detailed itinerary for me—no need to ask for further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Shenzhen`
- Destination: `['Hangzhou']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_seat_class
- hotel_brand_highest_rated
- restaurant_specific_tag_nearby
- restaurant_must_eat_named

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
