# DeepPlanning Travel Task #1

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a two-day trip from Hefei to Nanjing on November 12, 2025, returning in the evening of the 13th. The total budget for this trip should be within 3000 yuan. There are three of us traveling, and we'll take the train since it should be quite convenient—please help me choose a suitable train schedule.

For accommodation, I have specific preferences: I'd like a three-star hotel with a swimming pool, and please book two rooms.

There are several places I must visit during this trip, including 'Nanjing Deji Plaza' and 'Nanjing City Wall Taicheng Scenic Area'—please make sure to include both in the itinerary. Also, I’d like to have a meal near 'Laomendong', preferably at a restaurant that offers birthday set menus, as one of my friends has a birthday and we’d like to celebrate together.

That's basically everything—I've provided all the details clearly. Please go ahead and plan the itinerary for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hefei`
- Destination: `['Nanjing']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_seat_status
- hotel_star_service_required
- restaurant_specific_tag_nearby
- attraction_must_visit_named
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
