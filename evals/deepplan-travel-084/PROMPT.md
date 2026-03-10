# DeepPlanning Travel Task #84

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to travel from Hefei to Guangzhou on November 12, 2025, and stay until November 17 before returning to Hefei. Regarding transportation, I'd like to take a train for the return journey—please help me choose a direct train from Guangzhou to Hefei with the lowest price available.

For accommodation, I’d like to book a five-star hotel, but I don’t want to spend too much, so please find me the cheapest option that’s still five-star—remember, it’s for five nights.There are three of us traveling, so we’ll need two rooms.

As for dining, I’ve heard there are many great restaurants around 'Lychee Bay'. Could you help me find one that’s ranked in the Top 10 on the “Must-Try Restaurant List”? I’d love to try some authentic local cuisine there.

By the way, I’m really fond of natural landscapes. Could you include in my itinerary the highest-rated 'Natural Scenery' attraction in Guangzhou? I’d like to fully experience the feeling of being close to nature.

These are basically all my requirements—I believe I’ve provided all the necessary information. Please go ahead and plan my full itinerary and budget without asking for further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hefei`
- Destination: `['Guangzhou']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_cheapest_direct
- hotel_cheapest_star
- restaurant_specific_tag_nearby
- attraction_type_highest_rated

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
