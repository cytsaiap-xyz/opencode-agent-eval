# DeepPlanning Travel Task #32

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning to visit Zhengzhou from Hefei for three days starting November 12, 2025, and returning on November 14. Please help me arrange transportation, accommodation, meals, and sightseeing. For transportation, I'd like to leave a bit later on my return trip so I can spend a bit more time in Zhengzhou—please check if there's a direct train to Hefei that departs latest and book it for me. For accommodation, just choose a three-star hotel, but I have a friend who will come to visit me and he'll be driving, so the hotel must have free parking.

For attractions, there are two places I must visit: 'Henan Museum' and 'Yellow River Museum'—please arrange both in the itinerary. Also, could you schedule one meal at a restaurant near 'David Plaza Shopping Center'? I’ve heard the restaurants there are very good, but it would be best if you could find one that supports online number-taking/queuing to save time.

That basically covers all my requirements. I believe I’ve provided all the necessary information—just go ahead and plan the itinerary for me without asking for anything else. November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hefei`
- Destination: `['Zhengzhou']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_latest_arrival_direct
- hotel_star_service_required
- attraction_must_visit_named
- restaurant_specific_tag_nearby

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
