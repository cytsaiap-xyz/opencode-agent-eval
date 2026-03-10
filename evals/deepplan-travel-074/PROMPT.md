# DeepPlanning Travel Task #74

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a trip from Harbin to Dalian, departing on November 12, 2025, and returning on November 16, 2025. Could you please help me plan the entire itinerary? For transportation, I'd like to take a high-speed train for the outbound journey—please find me the cheapest direct train available, as that would offer good value and convenience.

For accommodation, comfort isn't a top priority—just help me book a three-star hotel, preferably the most affordable option. There are two of us traveling, so we only need one room.

By the way, I have two small dining requests—please arrange them accordingly. First, for one meal, I'd like to eat near 'Dalian Museum'—could you find me the restaurant with the lowest average spending per person? Just something simple will do. Second, I've heard there are many great food options in the 'Qingniwa Bridge Commercial District'—please pick the highest-rated restaurant there and include it in the plan, as I'd like to try some popular local cuisine.

That covers all my requirements—I've provided all the necessary details, so feel free to go ahead and create the full itinerary. Thanks so much! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Harbin`
- Destination: `['Dalian']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_cheapest_train_type
- hotel_cheapest_star
- restaurant_cheapest_nearby_attraction
- restaurant_highest_rated

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
