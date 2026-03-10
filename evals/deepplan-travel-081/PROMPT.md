# DeepPlanning Travel Task #81

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Fuzhou to Hangzhou on November 12, 2025, and return on November 17, 2025. Could you help me plan this trip? I'd like to take the train, so please choose the earliest direct departure train for my outbound journey—arriving in Hangzhou earlier means more time to explore.  

For accommodation, I'm used to staying at 'Hanting'. Please find me the highest-rated 'Hanting' hotel. Oh, and there are three of us traveling, so we'll need to book two rooms.  

I especially enjoy experiencing 'Natural Scenery'. Please make sure to include the top-rated attraction in the 'Natural Scenery' category in the itinerary, since Hangzhou is famous for its beautiful landscapes. Additionally, I've heard there are quite a few good restaurants near the 'Leifeng Pagoda Scenic Area'. Could you pick the highest-rated restaurant in that area and schedule one meal there?  

That covers all my requirements—I believe I've provided all necessary details. Please go ahead and plan my full itinerary and budget without asking for further information! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Fuzhou`
- Destination: `['Hangzhou']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_earliest_departure_direct
- hotel_brand_highest_rated
- attraction_type_highest_rated
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
