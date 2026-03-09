# DeepPlanning Travel Task #116

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning a trip from Changchun to Dalian on November 12, 2025, returning on November 18, so I'll be there for several days. Could you help me plan the itinerary, including transportation, accommodation, meals, and sightseeing arrangements?

For the outbound journey, I'd like to take a high-speed train. Please check if there's the most affordable direct train option available—high-speed rail is fast and comfortable, which suits this trip well. As for accommodation, I think '全季' hotels are quite good with great value for money. Just help me find the cheapest room they offer. By the way, I'm traveling alone, so booking one room will be sufficient.

Regarding dining, there are two specific meal plans I’d like to arrange. One day, I want to have a meal near 'Dalian North Station'—ideally at a restaurant where I can take a virtual queue online, as that would save me quite a bit of waiting time. The other is tied to my visit to the 'Dalian Jinshitan Life Mystery Museum'. I’ve heard there are many great food options around there; could you help me pick the highest-rated restaurant nearby for one meal and recommend some local specialties?

That covers all my requirements—I've provided all the necessary details. Please go ahead and prepare the full travel plan for me. Thanks so much for your help! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Changchun`
- Destination: `['Dalian']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_cheapest_train_type
- hotel_cheapest_brand
- restaurant_specific_tag_nearby
- restaurant_highest_rated

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
