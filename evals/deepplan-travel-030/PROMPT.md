# DeepPlanning Travel Task #30

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Chongqing to Zhengzhou on November 12, 2025, and stay for three days, returning on November 14. Could you help me plan the entire trip? I need arrangements for transportation, accommodation, meals, and sightseeing.

For the return journey, I'd like to take a train—could you please choose the fastest direct train available? For accommodation, I want something comfortable; please book the highest-rated hotel in Zhengzhou. There are two of us traveling, so one room will be enough.

Regarding meals, I’d like to experience some good local restaurants. Could one meal be arranged near 'Zhengdong New District CBD'? Just pick the highest-rated restaurant in that area. Also, I’d like to have a meal near the 'Yellow River Museum'. This time my budget is limited, so please find the restaurant with the lowest average cost per person nearby and recommend one.

These are basically all my requirements. Please go ahead and prepare the full itinerary and budget plan for me—no need to ask me further preferences! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Chongqing`
- Destination: `['Zhengzhou']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_shortest_duration_direct
- hotel_highest_rated
- restaurant_highest_rated
- restaurant_cheapest_nearby_attraction

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
