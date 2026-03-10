# DeepPlanning Travel Task #26

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a three-day trip from Shanghai to Xiamen on November 12, 2025, returning on the 14th. The total budget for this trip should be within 7500 yuan, I'd like you to help me plan the itinerary, including transportation, accommodation, meals, and sightseeing.

Regarding transportation, I'd prefer to take a direct flight there—please help me pick the cheapest available flight to save both time and cost. For accommodation, I'm an Atour member and usually stay at their hotels, so I'd like to prioritize Atour this time as well. Please find the most affordable Atour hotel for us. By the way, there are four of us traveling, so we'll need to book two rooms.

For dining, I have two specific places in mind. One is 'Longtou Road Snack Street'—I've heard it's very lively with lots of options. Could you please recommend a restaurant nearby that has a waiting area? That way, we won't get bored if we have to wait in line. The other is 'Shuzhuang Garden'. I'd like to find a good seafood restaurant near there to really enjoy some authentic Xiamen seafood. Could you help me pick a place with solid reviews?

That's pretty much everything! I've provided all the information needed. Please go ahead and create a full itinerary based on these requirements—no need to ask for further details. Thanks so much! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Shanghai`
- Destination: `['Xiamen']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_cheapest_direct
- hotel_cheapest_brand
- restaurant_specific_tag_nearby
- restaurant_specific_cuisine_nearby
- budget_constraint

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
