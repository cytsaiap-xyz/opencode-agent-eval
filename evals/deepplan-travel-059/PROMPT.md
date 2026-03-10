# DeepPlanning Travel Task #59

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a trip from Shenzhen to Beijing on November 12, 2025, and returning on the 15th. Could you help me plan the itinerary? Please arrange flights for both directions. For the return flight, I'd prefer to arrive in Shenzhen between 11:00 AM and 3:00 PM, as that timing works best.

For accommodation, I’d like to book a three-star hotel with a gym, so we can work out in the morning or evening. The facilities and service should be reliable. There are four of us in total, so two rooms will be sufficient.

Regarding meals, I need arrangements for two occasions. One should be near "Sanlitun Taikoo Li" — I’d like to experience a restaurant offering birthday set menus. I’ve heard it’s very lively there and should have a great atmosphere. The other meal should be near "Tiananmen Square" — just find the most budget-friendly restaurant available, somewhere simple and cost-effective for a basic meal.

For attractions, please include all the classic and must-visit spots. Since this is my first time in Beijing, I definitely don’t want to miss any iconic landmarks — places like "Tiananmen Square" are must-sees.

That's about it — I've provided all the necessary details. Could you please put together a detailed itinerary for me? Thanks so much! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Shenzhen`
- Destination: `['Beijing']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_arrival_time_range
- hotel_star_service_required
- restaurant_specific_tag_nearby
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
