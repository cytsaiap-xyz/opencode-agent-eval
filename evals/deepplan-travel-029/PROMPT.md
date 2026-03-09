# DeepPlanning Travel Task #29

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning to travel from Fuzhou to Suzhou on November 12, 2025, and stay for three days, returning on November 14, 2025. Could you please help me plan the entire trip, including transportation, accommodation, meals, and sightseeing?

Regarding transportation, I'd like to take a train for my return journey. Please check if there's the most affordable direct train available—I'm not in a hurry, and as long as the comfort level is acceptable, that's fine.

For accommodation, I'd like to stay at a Hilton brand hotel. My budget is limited, so please pick the cheapest option they offer. I only need two nights, and I don't have high requirements, we need 1 room for 2 people.

As for dining, I have two small requests. First, I really want to have a meal near 'Songhelou (Guanqian Branch)'. I've heard there are some good restaurants around there—could you help me find one that offers private rooms and is comfortable to sit in? Second, I'd love to visit the 'Suzhou Museum', and I was wondering if you could arrange a meal nearby. Please choose the highest-rated restaurant in the area so I can try some local specialties.

That's about it—please go ahead and plan everything for me. I think I've provided all the necessary details, so no need to ask me any further questions! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Fuzhou`
- Destination: `['Suzhou']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_cheapest_direct
- hotel_cheapest_brand
- restaurant_specific_tag_nearby
- restaurant_highest_rated

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
