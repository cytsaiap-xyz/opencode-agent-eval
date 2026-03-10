# DeepPlanning Travel Task #88

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Tianjin to Zhengzhou on November 12, 2025, and return on November 17, 2025. The entire trip will be about 6 days—please help me plan a detailed itinerary.

For transportation, I’d like to take trains for the entire journey. Please book first-class seats for both outbound and return trips, as they’re more comfortable and allow me to relax and rest during the ride. For accommodation, I’d like to stay somewhere nice—please find me the highest-rated hotel in Zhengzhou. Since this is a vacation, comfort is important.

By the way, I’d like to visit all recommended 'Natural Scenery' attractions. I’ve heard the natural landscapes around Zhengzhou are quite impressive, so I’d like to experience as much as possible. Also, please arrange one meal at a restaurant near the 'Xinmi Huangdi Palace Royal Hot Spring Resort Hotel'. There are four of us traveling, so we’ll need two rooms. By the way, it would be great if this restaurant offers a waiting area service, so we can rest comfortably while waiting.

That’s pretty much everything—I believe I’ve provided all necessary details. Please go ahead and prepare the full itinerary for me without asking for further information. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Tianjin`
- Destination: `['Zhengzhou']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_seat_class
- hotel_highest_rated
- restaurant_specific_tag_nearby
- attraction_all_of_type

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
