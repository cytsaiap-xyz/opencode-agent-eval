# DeepPlanning Travel Task #38

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning a trip from Hefei to Zhengzhou around November 12, 2025, and returning on the 14th. Could you help me plan the itinerary? Please include transportation, accommodation, meals, and attractions.

Let’s start with transportation. I’d like to take a train there, preferably departing between 5:00 PM and 9:00 PM so I can get some work done during the day. For the return journey, just arrange a convenient option—as long as it doesn’t get me home too late.

For accommodation, please find me a four-star hotel that ideally has a gym and is conveniently located, so it's easy to get around. I usually exercise regularly and would like to keep up my routine while traveling. By the way, there are three of us, but we only need two rooms.

I’d also appreciate your help with meal arrangements. One meal should be near 'Zhengzhou Museum New Hall'—please recommend the most affordable restaurant nearby, something with good value for money.

As for attractions, I’d like to see the highlights. I’ve heard Zhengzhou has several highly rated spots—please pick the top three highest-rated ones and include them in the itinerary.

That’s pretty much everything—I believe I’ve provided all necessary details. Please go ahead and create the plan for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hefei`
- Destination: `['Zhengzhou']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_departure_time_range
- hotel_star_service_required
- restaurant_cheapest_nearby_attraction
- attraction_top_rated_must_visit

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
