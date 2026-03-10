# DeepPlanning Travel Task #18

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

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
