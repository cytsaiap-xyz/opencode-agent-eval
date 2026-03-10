# DeepPlanning Travel Task #90

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a trip from Chongqing to Xiamen on November 12, 2025, and will stay there until November 17, 2025. Could you please help me plan the entire itinerary, including transportation, accommodation, dining, and sightseeing?

Regarding transportation, I'd like to take a flight for the outbound journey, preferably a direct one. Please check which direct flight is the cheapest. As for accommodation, I hope to stay somewhere comfortable, in a hotel that has been newly renovated or redecorated after 2023, so the environment would be better. There are only two of us traveling, so one room will be sufficient.

By the way, I heard Xiamen has quite a few great 'Art Exhibition' venues. This time, I’d like to include all recommended 'Art Exhibition' attractions to fully experience the artistic atmosphere. Also, I’ve heard there are some nice spots perfect for relaxation—could you please find the top-rated one among the 'Leisure Experience' category and include it in the itinerary?

These are basically all my requirements. I believe I've provided enough information—please go ahead and start planning my trip! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Chongqing`
- Destination: `['Xiamen']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_cheapest_direct
- hotel_newest_decoration
- attraction_all_of_type
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
