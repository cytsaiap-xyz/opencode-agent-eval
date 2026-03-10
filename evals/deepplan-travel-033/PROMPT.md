# DeepPlanning Travel Task #33

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Harbin to Beijing on November 12, 2025, and return on November 14, 2025. For transportation, I'd like to take the train both ways—please help me book first-class seat tickets, as they're more comfortable, especially since it's not a short journey.

For accommodation, I’d like a three-star hotel. Also, I’ve been really wanting to relax lately—could you please find one that offers SPA services? It would help me unwind after each day of sightseeing.

By the way, I have two small requests regarding meals. First, please arrange a meal at a restaurant near 'Shichahai', preferably one with a waiting area so it’s more convenient even if it's busy. Second, I’d like to have a meal near 'Tsinghua University'—for this one, pick the restaurant with the lowest average cost per person; I want to try the most cost-effective option.

That's basically everything. I’ve provided all the information needed, so please go ahead and arrange the itinerary for me—thanks so much! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Harbin`
- Destination: `['Beijing']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_seat_class
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_cheapest_nearby_attraction

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
