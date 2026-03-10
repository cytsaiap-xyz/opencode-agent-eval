# DeepPlanning Travel Task #7

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Xi'an to Taiyuan on November 16, 2025, and stay for two days, returning on the 17th. For transportation, I think taking the train is quite convenient, and I'd like to book first-class seats—please help me reserve first-class tickets for both directions.  

For accommodation, my budget is limited this time, so please find me the cheapest option among 2-star hotels; one room for two people will be enough.

By the way, I’d also like to visit the top-rated attractions in Taiyuan. Could you check which three are the most popular among the recommendations and include them in the itinerary? Oh, right—one more thing: I heard there are many great places to eat near "Clock Tower Street Pedestrian Street". It happens to be my birthday, so I’d like to have dinner at a restaurant nearby that offers birthday set menus. Please help me pick a suitable one and include it in the plan.

These are basically all my requirements—I believe I’ve provided all necessary information. Please go ahead and plan the itinerary and budget for me directly, without asking further preferences. November 16, 2025 is Sunday

## Trip Details

- Origin: `Xi'an`
- Destination: `['Taiyuan']`
- Duration: `2` days
- Departure: `2025-11-16`
- Return: `2025-11-17`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_seat_class
- hotel_cheapest_star
- attraction_top_rated_must_visit
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
