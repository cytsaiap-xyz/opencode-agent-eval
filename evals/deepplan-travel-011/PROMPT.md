# DeepPlanning Travel Task #11

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning to travel from Guiyang to Guilin on November 12, 2025, and will stay for just one day before returning on the 13th. The trip is quite short, so please help me arrange a tight itinerary! For transportation, I'd like to take a train—please check if there's the most affordable direct train option available; timing is flexible, as long as it helps save money.

For accommodation, I'd prefer something comfortable. I think three-star hotels offer great value for money, so please help me pick the one with the highest rating—just one night is needed. By the way, there are four of us in total, so we'll need two rooms.

Regarding meals, I've heard the scenery around 'Duxiu Peak' is especially beautiful, so I’d love to have a meal nearby with an outdoor seating option, where we can enjoy the view while eating. Additionally, I’d like to try Western cuisine—please arrange a meal at a Western restaurant near 'Wood Dragon Lake', preferably one offering a variety of fusion flavors so we can sample several specialties.

I’ve now mentioned all the places I’d like to visit and dine at. Please help me plan an itinerary based on these requirements. I believe I've provided all necessary budget and detail—feel free to go ahead and organize everything for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Guiyang`
- Destination: `['Guilin']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_cheapest_direct
- hotel_star_highest_rated
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
