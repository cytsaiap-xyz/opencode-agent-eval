# DeepPlanning Travel Task #27

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Hangzhou to Nanchang for a three-day trip on November 12, 2025, returning on November 14. Could you please help me arrange the itinerary including transportation, accommodation, meals, and sightseeing?

Regarding transportation, I’d like to depart as early as possible—earlier is better—and preferably take a direct train so that we’ll have more time to explore upon arrival in Nanchang. For accommodation, I care about the hotel’s facilities and environment, so please choose a hotel renovated after 2023 to ensure comfort. By the way, there are three of us traveling together, so we’ll need two rooms—thanks in advance!

For dining, there’s one place I’m particularly eager to try: 'Xinghualou (Shui Guanyin Pavilion)'. I’ve heard there are many great restaurants around there. Could you arrange for us to have a meal in that area? Ideally, pick a restaurant offering outdoor seating—I think dining outdoors in Nanchang would be quite enjoyable. Additionally, if possible, please also recommend the highest-rated restaurant near 'Xinghualou (Shui Guanyin Pavilion)' so we can dine there once as well.

These are basically all my requirements. I believe I’ve provided sufficient information—please go ahead and plan the itinerary directly without needing to ask for further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hangzhou`
- Destination: `['Nanchang']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_earliest_departure_direct
- hotel_newest_decoration
- restaurant_specific_tag_nearby
- restaurant_highest_rated

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
