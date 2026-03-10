# DeepPlanning Travel Task #79

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Shenzhen to Shanghai on November 12, 2025, and stay until November 16, 2025. Could you please help me design the entire itinerary, including transportation, accommodation, meals, and sightseeing arrangements?

Regarding transportation, I'd like to take a flight for the outbound journey—just a direct flight is fine. Please find me the most cost-effective option, since saving money is definitely preferable! For accommodation, I'm looking for something simple—just a three-star hotel will do, with the lowest possible price, as long as it's comfortable enough. After all, it's a trip meant for enjoyment. There are three of us in total, requiring two rooms—please make sure to book both rooms for me.

By the way, I'm especially interested in visiting Shanghai's iconic city landmarks. Could you please select the highest-rated ones and include them in the itinerary? Also, I've heard there are many popular attractions in Shanghai—please pick the top three highest-rated ones from the recommended list and add them to the plan. I only want to visit the most worthwhile places.

These are basically all my requirements. I believe I've provided all necessary information—please go ahead and start planning the detailed itinerary without asking me for further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Shenzhen`
- Destination: `['Shanghai']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_cheapest_direct
- hotel_cheapest_star
- attraction_type_highest_rated
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
