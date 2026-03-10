# DeepPlanning Travel Task #40

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning to travel from Hangzhou to Nanchang for a two-day trip on November 12, 2025, and return on November 14, 2025. The total budget for this trip should be within 3000 yuan, By the way, I'd like to take the train both ways—could you please book first-class seats for me? I think it will be more comfortable.

For accommodation, nothing too fancy is needed. Please help me pick a three-star hotel in Nanchang, preferably the most affordable option available. I'll be traveling alone, so just one room is enough. Also, I've heard there's a place called "Chengjie's Little Restaurant" that's especially good—I definitely want to have one meal there this trip; it sounds worth trying. Oh right, there's also a scenic spot called "Bayinshanren Memorial Hall." I've heard there are many great restaurants nearby—could you help me select the highest-rated one and arrange a meal there?

That's basically all I need. Please help me refine the itinerary and dining arrangements. I believe I've provided all the necessary information—feel free to start planning! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hangzhou`
- Destination: `['Nanchang']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_seat_class
- hotel_cheapest_star
- restaurant_must_eat_named
- restaurant_highest_rated
- budget_constraint

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
