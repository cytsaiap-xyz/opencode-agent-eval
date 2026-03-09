# DeepPlanning Travel Task #82

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning to travel from Nanchang to Chongqing on November 12, 2025, and stay there until November 17, 2025. The schedule is quite flexible, so could you help me plan the trip? For transportation, I don't mind the departure details—no need to leave particularly early—but for the return journey, could you please choose the latest direct train that arrives back in Nanchang? That way, I can spend more time exploring Chongqing.

For accommodation, I'd like to stay somewhere comfortable, so please arrange a five-star hotel for me directly. Just one small request: the hotel room should have screen mirroring capability on the TV, as I might want to stream videos or movies in the evening.

Regarding dining, I've heard there are lots of great food options around the 'Chongqing Shibati Traditional Style Area'. Could you help me find the most affordable restaurant near there by average cost per person? I’d love to try some authentic local cuisine with good value.

By the way, Chongqing must have many interesting attractions. Could you pick the top three highest-rated spots from the recommendations and include them in my itinerary? I’d like to visit all of them.

That's it—I think I've covered everything. Please go ahead and create a detailed travel plan for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Nanchang`
- Destination: `['Chongqing']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_latest_arrival_direct
- hotel_star_service_required
- restaurant_cheapest_nearby_attraction
- attraction_top_rated_must_visit

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
