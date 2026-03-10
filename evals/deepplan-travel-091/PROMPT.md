# DeepPlanning Travel Task #91

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

My two friends and I are planning a trip from Jinan to Chongqing on November 12, 2025. We’ll stay for five days, with our return scheduled for November 17, 2025. For transportation, we’d like to take flights—please check if there are suitable direct flight options available for both legs of the journey and go ahead and book them for us.

For accommodation, I’d prefer a four-star hotel. Also, we’ll have a car, so the hotel must provide free parking service. As for rooms, we’ll need two rooms for the three of us.

During this trip, I really want to visit the 'Shancheng Alley Traditional Style Area' and 'Chongqing Chaotianmen Square'—these two spots must be included in the itinerary. By the way, I heard there are some great restaurants near the 'Mountain City Trail - Jianxingpo Grand Stairway'. Could you help us pick one where we can join the queue online, and schedule a meal there? I think that would be quite convenient.

These are all my requirements—I believe I’ve covered everything. Please go ahead and plan the detailed itinerary for me directly, without needing to ask for further details. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Jinan`
- Destination: `['Chongqing']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_seat_status
- hotel_star_service_required
- attraction_must_visit_named
- restaurant_specific_tag_nearby

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
