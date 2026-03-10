# DeepPlanning Travel Task #12

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a two-day trip from Guiyang to Guilin on November 12, 2025, returning on the 13th. Could you please help me plan a detailed itinerary? I'll be traveling alone by train, and for both the outbound and return journeys, I'd like to book first-class seats since they're more comfortable.

For accommodation, I'd prefer a four-star hotel with a gym, as I work out every day and would like to stay at a hotel that has fitness facilities. Also, could you help me arrange dining options? When I visit 'Li River Bamboo Rafting (Yangdi-Xingping Section)', I’d like to have a meal at a nearby restaurant—ideally one where I can take a virtual queue online in advance to save time. Additionally, I’d like to visit 'Mulong Lake'. Could you include an opportunity there to enjoy Western cuisine, preferably at a restaurant offering a variety of international flavors?

That's basically all I need. Please help me organize the entire itinerary—I just need you to lay it out clearly. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Guiyang`
- Destination: `['Guilin']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_seat_class
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_specific_cuisine_nearby

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
