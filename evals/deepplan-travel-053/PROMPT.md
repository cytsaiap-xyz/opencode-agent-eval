# DeepPlanning Travel Task #53

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Hefei to Chengdu on November 12, 2025, and stay for a few days, returning on the 15th—a total of four days and three nights. For transportation, I’d like to take a flight there; please help me choose a direct flight with the lowest possible fare, as my budget is limited. For the return trip, I’ll also fly—no special requirements, and the timing can be flexible.

For accommodation, I’d like to book a room in a four-star hotel, preferably one that offers robot meal delivery service. It seems very convenient and interesting, so please help me find options that meet this criterion.

By the way, I’d like to arrange a special meal during the trip. I’ve heard there are many great dining options near 'Shu Feng Ya Yun Sichuan Opera Theater'. Could you please help me find the highest-rated restaurant in that area so I can experience authentic local cuisine? Additionally, for attractions, I’d like to visit the most iconic must-see spots—please include the top three highest-rated attractions recommended in your tool, and schedule them reasonably throughout the itinerary.

That covers all my needs. The information should be clear, so please go ahead and prepare the full travel plan and arrangements for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hefei`
- Destination: `['Chengdu']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_cheapest_direct
- hotel_star_service_required
- restaurant_highest_rated
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
