# DeepPlanning Travel Task #60

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a trip from Urumqi to Changsha on November 16, 2025, returning on the 19th, making it a four-day trip in total. For transportation, I'd like to take flights both ways, and I want to book first class since it'll be more comfortable during the flight.

Regarding accommodation, I usually enjoy staying at Orange Hotel, so I’d like to stay with them again this time. However, my budget is limited, so please just help me pick the most affordable hotel under the Orange brand.

Also, a friend has been highly recommending 'Xiangzhiwei Self-Service Restaurant (Four Twos and Two Kings Authorized Store)', saying their food is especially authentic. I definitely want to try it during this visit—please arrange one meal there for me. Additionally, I’d like to visit 'Hunan Martyrs' Park'. After sightseeing, I’ll probably be hungry, so please help me find the nearest restaurant to that park and arrange a meal there as well, so I don’t have to travel far.

That’s basically everything. I believe I’ve provided all the necessary information—please go ahead and plan out the detailed itinerary for me. I’m all set and ready to go! November 16, 2025 is Sunday

## Trip Details

- Origin: `Urumqi`
- Destination: `['Changsha']`
- Duration: `4` days
- Departure: `2025-11-16`
- Return: `2025-11-19`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_seat_class
- hotel_cheapest_brand
- restaurant_must_eat_named
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
