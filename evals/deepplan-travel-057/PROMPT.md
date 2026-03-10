# DeepPlanning Travel Task #57

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a trip from Zhengzhou to Quanzhou on November 12, 2025, and will return on November 15, 2025. There are 4 people  Could you please help me plan the itinerary? For the outbound journey, I'd like to take a flight—ideally the shortest-duration direct flight available, since saving time means more time to enjoy the destination.  

For accommodation, please arrange a four-star hotel that offers free parking, as we may rent a car during our stay.  

By the way, what are the top-rated attractions in Quanzhou? I really want to make the most of this trip, so please include the three highest-rated spots from your recommendation tools.  

One more thing—I heard dining around 'Donghai Bay' is especially convenient. Could you find me the cheapest restaurant in that area (lowest average spending per person) and schedule one meal there so I can try some local specialties?  

That's about all my requirements. I believe I've provided enough information—please go ahead and start planning my itinerary! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Zhengzhou`
- Destination: `['Quanzhou']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_shortest_duration_direct
- hotel_star_service_required
- attraction_top_rated_must_visit
- restaurant_cheapest_nearby_attraction

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
