# DeepPlanning Travel Task #40

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

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

Read `task-data.json` for the full query and constraint details. Analyze the hard constraints and find the correct answers for each (hotel name, train number, restaurant, attraction, budget, etc.).

Write your answer to `answer.json` as a trip plan object with:
- `origin`, `destination`, `days`, `people_number`
- `outbound_transport`: `{type, number, departure, arrival, seat_class}`
- `inbound_transport`: same structure
- `hotel`: `{name, star, price_per_night, nights, rooms, services}`
- `meals`: array of `{restaurant_name, cuisine, near_attraction, special_requirement}`
- `attractions`: array of `{name, type, ticket_price}`
- `total_budget`: total cost
- `constraint_results`: dict mapping each constraint name to its satisfied value
