# DeepPlanning Travel Task #2

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a two-day trip from Harbin to Dalian on November 12, 2025, returning on November 13. Could you help me arrange the itinerary? There are four of us traveling, and we'd like to take the train round-trip—please just pick a suitable train for us.

For accommodation, I have a small request: I'd like to find a hotel that has been newly renovated after 2025. Staying somewhere newer just puts us in a better mood. Since there are four of us, we'll need to book two rooms—please help arrange that as well.

By the way, for dining, I’d like to have one meal arranged near 'Xinghai Bay Boardwalk'. Ideally, it would be at a restaurant offering private room service—I think it would feel more comfortable and private.

Also, this trip is all about relaxation. I’ve heard Dalian has some fantastic 'Leisure Experience' attractions, and I’d like to visit all the recommended spots of this type. Please include all of them in the plan—don’t miss any.

That’s basically everything. I believe I've provided all necessary information. Please help me plan the full itinerary and budget—just go ahead and arrange everything without needing to ask me further preferences. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Harbin`
- Destination: `['Dalian']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_seat_status
- hotel_newest_decoration
- restaurant_specific_tag_nearby
- attraction_all_of_type

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
