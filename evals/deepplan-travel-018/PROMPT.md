# DeepPlanning Travel Task #18

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning a two-day trip from Hangzhou to Shaoxing on November 12, 2025, returning on the 13th. There are four of us in total, and we've decided to take the train this time—could you please help arrange the round-trip train schedules for us? Oh, the total budget for this trip should be within 2000 yuan, please consider it in the plan.

For accommodation, I'd like something comfortable—a four-star hotel would be ideal. Just pick the one with the highest rating. By the way, we'll need to book two rooms for the four of us.

I've heard that there are many great free attractions in Shaoxing, and I'd like to include all of them in the itinerary—two days should be enough to get around. Also, I saw recommendations for the 'Night Cruise on the Ring River' as being quite interesting. Since we'll be in that area, could you please help find the cheapest restaurant per person and arrange a meal there?

That's basically everything. Please go ahead and plan the full itinerary—I don't need to provide any further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hangzhou`
- Destination: `['Shaoxing']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_seat_status
- hotel_star_highest_rated
- attraction_all_free_attractions
- restaurant_cheapest_nearby_attraction
- budget_constraint

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
