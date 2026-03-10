# DeepPlanning Travel Task #78

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning to travel from Ningbo to Zhengzhou for five days, departing on November 12, 2025, and returning on November 16. Could you help me plan the entire trip? I need your assistance with transportation, accommodation, meals, and sightseeing arrangements.

For transportation, I'd like to take a train for the outbound journey—preferably a direct one. Please just pick the option with the lowest ticket price. For accommodation, my budget is between 250 and 280 yuan per night; please choose a high-value hotel that's comfortable. By the way, I'm traveling alone, so I only need to book one room.

Also, I plan to visit the 'Zhengzhou Museum New Branch' during this trip. I've heard there are many great restaurants nearby—could you arrange a meal at one of the Top 10 must-try restaurants on the local dining list? I’d like to taste some authentic local specialties. For attractions, I want to visit the most iconic and recommended spots. Please check the top three highest-rated attractions in your recommendation tool and include them all in the itinerary.

That covers all my requirements—I believe I’ve provided enough information. Please go ahead and design the trip for me directly! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Ningbo`
- Destination: `['Zhengzhou']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_cheapest_direct
- hotel_price_range
- restaurant_specific_tag_nearby
- attraction_top_rated_must_visit

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
