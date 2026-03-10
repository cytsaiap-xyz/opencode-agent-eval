# DeepPlanning Travel Task #66

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to fly from Urumqi to Changsha on November 12, 2025, stay until November 16, and then return. There will be four people traveling together, so we’ll take flights for transportation—please help me select suitable flights and try to arrange convenient departure and return times.

For accommodation, I’d like something comfortable and conveniently located since we’re traveling to relax. Please help me find the highest-rated hotel in Changsha—we need to book two rooms.

I’ve heard that Changsha has some great natural scenery, so I hope the itinerary can include the top-rated attraction in the 'natural风光' category. Also, aren’t there many popular attractions in Changsha? Please pick the three highest-rated ones from the attraction recommendations—I want to check them all!

That’s basically it. I think I’ve provided all the necessary information—please go ahead and prepare a detailed travel plan for me. Thanks so much! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Urumqi`
- Destination: `['Changsha']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_seat_status
- hotel_highest_rated
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
