# DeepPlanning Travel Task #86

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

My friend and I are planning a trip from Chongqing to Zhengzhou on November 12, 2025, staying until our return on November 17, 2025. Could you please help us plan the entire itinerary, including transportation, accommodation, meals, and sightseeing? The total budget for this trip should be within 6000 yuan.

Regarding transportation, we plan to take flights both ways—please help us choose specific flights that have reasonable timing. For accommodation, we’d like a three-star hotel, and we only need to book one room for two people. Ideally, the room should have a TV with screen mirroring capability so we can watch movies at night.

By the way, there are two restaurants I’m particularly interested in visiting. One is 'Qiyu Cantonese Tea Restaurant'—I’ve heard their Hong Kong-style dim sum is very authentic, so please arrange for us to have one meal there. The other is the restaurant closest to 'Zhengzhou Shangdu National Archaeological Site Park'; after visiting the park, we’d like to have a meal nearby to avoid traveling too far.

That covers all our main requirements. I believe I’ve provided all necessary information—please go ahead and start planning the itinerary. Thanks so much for your help! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Chongqing`
- Destination: `['Zhengzhou']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_seat_status
- hotel_star_service_required
- restaurant_must_eat_named
- restaurant_closest_to_attraction
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
