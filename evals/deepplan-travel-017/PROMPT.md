# DeepPlanning Travel Task #17

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a day trip from Hangzhou to Shaoxing on November 12, 2025, and returning on November 13. Could you please help me plan a detailed itinerary? For transportation, I'd like to depart as early as possible—please pick the earliest direct train so I can arrive in Shaoxing early and have plenty of time to explore.

Regarding accommodation, I don't have any special requirements—just good value for money. By the way, I'm used to staying at 'Home Inn' hotels. Please help me find the cheapest option they have; since I'll be traveling alone, just book one room.

For dining, there are two things I’d like to arrange. First, I want to have a meal near 'Bazhi Bridge', preferably at a restaurant that offers a waiting area service, so it's more convenient in case there’s a queue. Second, I’ve heard that 'Chengji Small Restaurant' is quite famous, and I definitely want to try it—please include a meal there in the plan.

As for attractions, please recommend some of Shaoxing’s classic highlights—I trust your judgment! That covers all my needs. I believe I've provided all necessary information, so please go ahead and prepare the full itinerary without asking for further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hangzhou`
- Destination: `['Shaoxing']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_earliest_departure_direct
- hotel_cheapest_brand
- restaurant_specific_tag_nearby
- restaurant_must_eat_named

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
