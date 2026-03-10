# DeepPlanning Travel Task #26

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a three-day trip from Shanghai to Xiamen on November 12, 2025, returning on the 14th. The total budget for this trip should be within 7500 yuan, I'd like you to help me plan the itinerary, including transportation, accommodation, meals, and sightseeing.

Regarding transportation, I'd prefer to take a direct flight there—please help me pick the cheapest available flight to save both time and cost. For accommodation, I'm an Atour member and usually stay at their hotels, so I'd like to prioritize Atour this time as well. Please find the most affordable Atour hotel for us. By the way, there are four of us traveling, so we'll need to book two rooms.

For dining, I have two specific places in mind. One is 'Longtou Road Snack Street'—I've heard it's very lively with lots of options. Could you please recommend a restaurant nearby that has a waiting area? That way, we won't get bored if we have to wait in line. The other is 'Shuzhuang Garden'. I'd like to find a good seafood restaurant near there to really enjoy some authentic Xiamen seafood. Could you help me pick a place with solid reviews?

That's pretty much everything! I've provided all the information needed. Please go ahead and create a full itinerary based on these requirements—no need to ask for further details. Thanks so much! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Shanghai`
- Destination: `['Xiamen']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_cheapest_direct
- hotel_cheapest_brand
- restaurant_specific_tag_nearby
- restaurant_specific_cuisine_nearby
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
