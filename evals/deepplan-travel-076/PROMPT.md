# DeepPlanning Travel Task #76

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning to travel from Harbin to Beijing on November 12, 2025, and return on November 16, 2025. This time, I'd like you to help me plan the itinerary. For transportation, I'd like to take the train when going—preferably departing between 7:00 AM and 11:00 AM, so that I’ll still have time to explore upon arrival in Beijing. For accommodation, I’d prefer a newer hotel, ideally renovated after 2024, that’s clean and comfortable to stay in. By the way, I really want to visit some of the city's landmarks this trip—could you pick the highest-rated one and include it in the itinerary? Since it's my first time in Beijing, I definitely want to check out those must-visit spots.

Also, I’ve heard there are many great restaurants in the '798 Art District'—could you arrange for me to have a meal there one day? Preferably at a restaurant with a waiting area, just in case it gets crowded so I can wait comfortably. That covers all my requirements. I've provided all the information—please go ahead and plan everything for me without asking for further details. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Harbin`
- Destination: `['Beijing']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_departure_time_range
- hotel_newest_decoration
- attraction_type_highest_rated
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
