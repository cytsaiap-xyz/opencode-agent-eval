# DeepPlanning Travel Task #103

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a trip from Hohhot to Beijing on November 12, 2025, and will return on November 18. Could you please help me plan this trip, including arrangements for transportation, accommodation, meals, and attractions?

Let's start with transportation. For the outbound journey, you can arrange any train departure time that's convenient. However, for the return trip, I'd prefer to return to Hohhot as late as possible so I can spend more time in Beijing. Also, please make sure to book direct train services—transfers are too troublesome.

For accommodation, a three-star hotel is sufficient—I don't have high requirements for lodging. However, I'll be driving there myself, so it would be best if the hotel offers free parking, which would be more convenient.

Regarding meals, there’s one thing I definitely want: I’d like to have a meal near the 'National Aquatics Center (Water Cube)'. Just pick the restaurant there with the lowest average spending per person so I can try some local affordable cuisine—the budget doesn’t need to be high.

As for attractions, I’ve heard Beijing has many must-visit places. Please select the top three highest-rated ones from your recommendations and include them in the itinerary—that way I won’t miss out on the highlights.

That’s basically all I need. I think I've provided all the necessary information—please go ahead and prepare the detailed travel plan and budget for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hohhot`
- Destination: `['Beijing']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_latest_arrival_direct
- hotel_star_service_required
- restaurant_cheapest_nearby_attraction
- attraction_top_rated_must_visit

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
