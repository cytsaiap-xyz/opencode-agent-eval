# DeepPlanning Travel Task #51

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Zhuhai to Shanghai on November 12, 2025, and return to Zhuhai on November 15, 2025. The total budget for this trip should be within 14000 yuan, There will be four of us in total, and we intend to take trains for the entire journey—could you please help us check suitable train schedules?

For accommodation, we’d like something comfortable. Please arrange for us the highest-rated hotel in downtown Shanghai. We’ll need two rooms for four people, so kindly pay attention to the room types.

Regarding dining, I have two specific requests that I’d appreciate your help incorporating into the plan. For our first meal, I’d like to dine at 'Panlu Western Restaurant at Pullman Shanghai Jing'an Hotel (Pullman Shanghai Jing'an Hotel)'—I’ve heard the ambiance and food there are exceptional and would love to experience it. Additionally, we’d like to have one meal at a restaurant near 'Liu Haisu Art Museum' with outdoor seating. Could you please recommend a well-reviewed option?

That covers the basic requirements for our itinerary. Please go ahead and plan out the transportation, accommodation, dining, and sightseeing arrangements accordingly—no need to ask for further details. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Zhuhai`
- Destination: `['Shanghai']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_seat_status
- hotel_highest_rated
- restaurant_specific_tag_nearby
- restaurant_must_eat_named
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
