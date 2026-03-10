# DeepPlanning Travel Task #15

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'd like to plan a trip from Fuzhou to Quanzhou, departing on November 12, 2025, and returning on November 13, 2025—just two days. I’d prefer to take the train both ways, and for comfort, first-class seats would be great. Please help me choose suitable train departures.

For accommodation, I’d like to stay at the highest-rated hotel in Quanzhou to ensure a good experience. There are two of us traveling, so one room will be sufficient.

Regarding meals, I have two small requests. First, I’d like to dine once at 'Zhen Ai Jia Restaurant'—I’ve heard it’s quite special, so please make sure to include it in the plan. Second, we’ll be visiting 'Qingjing Ancient Temple', and after sightseeing, we plan to have a meal nearby. Ideally, the restaurant should allow online queue registration, which would be more convenient.

That covers everything. Please arrange the transportation, accommodation, dining, and sightseeing for me. I believe the information provided is sufficient—go ahead and make the arrangements without needing to ask me further questions! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Fuzhou`
- Destination: `['Quanzhou']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_seat_class
- hotel_highest_rated
- restaurant_must_eat_named
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
