# DeepPlanning Travel Task #83

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Wuhan to Nanjing on November 12, 2025, and return on November 17. I'd appreciate your help in planning my itinerary, including transportation, accommodation, dining, and sightseeing arrangements.

Regarding transportation, I’d like to depart as early as possible. Please help me choose the earliest available direct train so that I’ll still have time to explore upon arrival in Nanjing. For accommodation, a four-star hotel would be suitable. Kindly select the most cost-effective and cheapest option available—I just need one room for two people.

I already have a general idea about Nanjing’s attractions—I’m particularly fond of places with a strong Historical and Cultural atmosphere, and I’d like to visit representative sites with excellent reviews. Could you please include one iconic 'Historical and Cultural' attraction in the itinerary? Additionally, I’d also like to visit some highly rated, must-see spots—please pick the top three highest-rated attractions from recommendations and include them in the schedule.

That covers all my requirements. I’ve provided all the necessary information—feel free to go ahead and create the full itinerary for me. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Wuhan`
- Destination: `['Nanjing']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_earliest_departure_direct
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
