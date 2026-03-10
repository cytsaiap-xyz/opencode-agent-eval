# DeepPlanning Travel Task #55

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to travel from Tianjin to Zhengzhou on November 12, 2025, and stay there until November 15, 2025. Could you please help me plan the entire trip, including transportation, accommodation, dining, and sightseeing?  The total budget for this trip should be within 4000 yuan, I have a few specific ideas—just hear me out.

First, regarding transportation: I’d like to take a train to Zhengzhou, with departure ideally between 5:00 PM and 9:00 PM. This way, I can finish up some daytime tasks before heading out. Please check what train options are available during that time slot. For the return journey, it doesn’t matter—no need to be particular about timing.

As for accommodation, I’d like to stay in a three-star hotel—not too shabby in service. Lately, I’ve really enjoyed spa treatments and would love to relax during the trip, so the hotel should ideally offer spa services. Please help me find a suitable option. Just one room for two people is needed.

By the way, regarding meals, there are two places I especially want to try. One is a restaurant near 'Zijingshan Park'—I’d like to have a birthday dinner there, preferably at a place offering birthday set menus, since this occasion is quite special. The other is a restaurant near 'Zhengzhou Shangdu National Archaeological Site Park'—please pick the one with the highest rating nearby, so we can dine with greater confidence.

That’s basically all. I believe I’ve provided all the necessary information. Please go ahead and start planning—I don’t need to be asked for further details. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Tianjin`
- Destination: `['Zhengzhou']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_departure_time_range
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_highest_rated
- budget_constraint

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
