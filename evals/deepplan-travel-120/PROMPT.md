# DeepPlanning Travel Task #120

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a trip from Zhuhai to Chengdu on November 12, 2025, staying until November 18, 2025, with the return journey also flying back from Chengdu. I'd like to ask you to help me plan the itinerary, including transportation, accommodation, meals, and sightseeing arrangements.

Regarding transportation, for the outbound trip I'd prefer to take a flight, ideally the earliest direct departure available, so that I can have more time to explore upon arrival in Chengdu. For the return trip, please help me find a suitable flight option as well.

For accommodation, I’d like to book a three-star hotel—something that meets basic needs is fine. However, there’s one small requirement: the hotel must offer free parking service, as I may rent a car during the trip, and having on-site parking would be more convenient.

For dining, I have two specific requests. First, when visiting the 'Dujiangyan Scenic Area', could you recommend a restaurant with outdoor seating? I think it would be lovely to enjoy a meal there while taking in the scenery. Second, for a meal near the 'Chengdu Wuhou Shrine Museum', please suggest a restaurant that's as close as possible, ideally within walking distance, so I can go straight there after sightseeing without needing to travel far.

That's about it! Thank you for helping me organize everything—I've included all the necessary information, so please go ahead and prepare the full itinerary for me. November 12, 2025 is Wednesday

## Trip Details

- Origin: `Zhuhai`
- Destination: `['Chengdu']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_earliest_departure_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_closest_to_attraction

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
