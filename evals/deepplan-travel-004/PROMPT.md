# DeepPlanning Travel Task #4

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to travel from Changchun to Dalian on November 12, 2025, stay for one day, and return to Changchun on the evening of November 13. Could you please help me plan my itinerary, including transportation, accommodation, meals, and attractions?

Regarding transportation, I’d like to arrive back in Changchun as late as possible—could you help me choose the latest direct train that arrives on the same day? I prefer a more relaxed pace, so please don’t make the schedule too tight.

For accommodation, I’m looking for a three-star hotel with both a washing machine and dryer, which would be more convenient since I’m only staying one night and want things to be stress-free. By the way, I’m quite interested in Dalian’s natural scenery—I’ve heard the coastal views are especially beautiful. Could you include the highest-rated nature attraction in the itinerary so I can experience the highlight?

For dining, I’d like to find a restaurant near 'Donggang Business District'—I’ve heard it’s a great area. The restaurant must offer a waiting area service so I won’t have to worry about long queues.

That covers everything. Please arrange the full itinerary for me—I’ve provided all the details needed, so no need to ask for further information. November 12, 2025 is Wednesday

## Trip Details

- Origin: `Changchun`
- Destination: `['Dalian']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_latest_arrival_direct
- hotel_star_service_required
- attraction_type_highest_rated
- restaurant_specific_tag_nearby

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
