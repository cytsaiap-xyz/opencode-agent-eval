# DeepPlanning Travel Task #70

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'd like to go to Xiamen for a few days, departing from Hohhot. The departure date is set for November 12, 2025, and returning on November 16—about five days in total. The total budget for this trip should be within 7000 yuan. For transportation, I hope the outbound flight departs between 1:00 PM and 5:00 PM, so I don’t have to rush too early in the morning. The return flight can be scheduled at any time—I don’t have specific requirements for that.

For accommodation, I’d like to book a hotel with a nightly rate between 370 and 420 yuan—moderately priced is fine. There are two of us traveling, so one room will be enough. By the way, please make sure to include all the 'leisure experience' attractions mentioned in the recommended tools. Xiamen seems to have many relaxing spots, and since it’s a rare trip, I’d like to experience them all.

Also, I’ve heard there are quite a few restaurants near 'Xiamen University Siming Campus'. Could you help arrange one meal around that area? Preferably choose a restaurant with a waiting area, so we won’t have to stand around idly—there should be quite a crowd there, after all.

That’s about it—I believe I’ve provided all the necessary information. Please go ahead and plan a detailed itinerary and budget for me directly, without needing to ask for further details. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hohhot`
- Destination: `['Xiamen']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_departure_time_range
- hotel_price_range
- attraction_all_of_type
- restaurant_specific_tag_nearby
- budget_constraint

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
