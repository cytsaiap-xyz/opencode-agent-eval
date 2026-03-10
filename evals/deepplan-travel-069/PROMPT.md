# DeepPlanning Travel Task #69

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a trip from Shijiazhuang to Changsha, departing on November 12, 2025, and returning on November 16. Could you help me plan the entire itinerary? For transportation, I'd like to take a train back—I need you to pick the cheapest direct train option available, something comfortable and cost-effective.

For accommodation, I prefer a newer hotel, ideally one that has been renovated after 2024, so the rooms are clean and the facilities more modern. By the way, there are two of us traveling, but we only need to book one room.

Also, please include a meal near 'Yuelu Academy'—ideally at a restaurant that offers birthday set menus, since I'd like to celebrate my travel companion's birthday. The atmosphere should be nice and pleasant.

As for attractions, I’d like to visit some of the most recommended spots in Changsha. Please select the top three highest-rated ones and include them in the itinerary.

These are basically all my requirements. I believe I've provided enough information—please go ahead and start planning without asking for further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Shijiazhuang`
- Destination: `['Changsha']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_cheapest_direct
- hotel_newest_decoration
- restaurant_specific_tag_nearby
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
