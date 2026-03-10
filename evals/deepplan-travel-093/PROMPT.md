# DeepPlanning Travel Task #93

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a trip from Shenzhen to Beijing on November 12, 2025, returning on November 17, so roughly five days. Could you help me plan the itinerary? Please arrange transportation, accommodation, meals, and attractions.

Regarding transportation, I'd like to take a flight for the outbound journey. Could you help me find the cheapest direct flight with China Express Airlines? For accommodation, I don't have any special requirements—just a three-star hotel would be fine—and preferably the most budget-friendly option, since my travel budget is limited this time. By the way, there are only two of us traveling, so one room will suffice.

Oh, and I’d also like to schedule a meal at 'Yue She Restaurant (T+MALL Branch)'—I’ve heard the food there is excellent and I really want to try it this time! As for attractions, I’m particularly fond of places with a 'Historical and Cultural' atmosphere. Could you include the top-rated 'Historical and Cultural' site in the itinerary? Given that Beijing has so many worthwhile destinations, I’m sure there’s something impressive to see.

That covers all my requirements. I believe this information should be sufficient—please go ahead and prepare the travel plan for me without asking further questions about preferences. November 12, 2025 is Wednesday

## Trip Details

- Origin: `Shenzhen`
- Destination: `['Beijing']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_cheapest_airline_direct
- hotel_cheapest_star
- restaurant_must_eat_named
- attraction_type_highest_rated

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
