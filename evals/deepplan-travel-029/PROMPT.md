# DeepPlanning Travel Task #29

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning to travel from Fuzhou to Suzhou on November 12, 2025, and stay for three days, returning on November 14, 2025. Could you please help me plan the entire trip, including transportation, accommodation, meals, and sightseeing?

Regarding transportation, I'd like to take a train for my return journey. Please check if there's the most affordable direct train available—I'm not in a hurry, and as long as the comfort level is acceptable, that's fine.

For accommodation, I'd like to stay at a Hilton brand hotel. My budget is limited, so please pick the cheapest option they offer. I only need two nights, and I don't have high requirements, we need 1 room for 2 people.

As for dining, I have two small requests. First, I really want to have a meal near 'Songhelou (Guanqian Branch)'. I've heard there are some good restaurants around there—could you help me find one that offers private rooms and is comfortable to sit in? Second, I'd love to visit the 'Suzhou Museum', and I was wondering if you could arrange a meal nearby. Please choose the highest-rated restaurant in the area so I can try some local specialties.

That's about it—please go ahead and plan everything for me. I think I've provided all the necessary details, so no need to ask me any further questions! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Fuzhou`
- Destination: `['Suzhou']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_cheapest_direct
- hotel_cheapest_brand
- restaurant_specific_tag_nearby
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
