# DeepPlanning Travel Task #22

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a three-day trip from Guangzhou to Quanzhou departing on November 12, 2025, and returning on November 14. Could you help me plan the entire itinerary, including transportation, accommodation, meals, and attractions?

Regarding transportation, I'd like to take flights both ways. First class would be more comfortable, so please help me find suitable flight options. As for accommodation, I don't have any special requirements—just book a three-star hotel. Preferably, the room should support screen mirroring, so we can relax and watch a movie at night. Also, there are four of us traveling, so we'll need two rooms—please make sure to reserve them accordingly.

I'm really looking forward to Quanzhou. I've heard it has many great attractions. Since time is limited, please select the top three highest-rated spots and include them in the itinerary—I only want to visit the most worthwhile places. By the way, I heard there are lots of good eats around 'Anping Bridge'. Could you check if there are any fast-food restaurants nearby and arrange one casual meal there for us? Nothing fancy—just something simple and quick.

That should be everything. I've provided all the necessary details—please go ahead and prepare a complete itinerary for me! Oh, the total budget for this trip should be within 17000 yuan, please consider it in the plan. November 12, 2025 is Wednesday

## Trip Details

- Origin: `Guangzhou`
- Destination: `['Quanzhou']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_seat_class
- hotel_star_service_required
- attraction_top_rated_must_visit
- restaurant_specific_cuisine_nearby
- budget_constraint

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
