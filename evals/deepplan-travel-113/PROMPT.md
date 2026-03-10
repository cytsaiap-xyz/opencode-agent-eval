# DeepPlanning Travel Task #113

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a trip from Nanchang to Chongqing departing on November 12, 2025, and staying until November 18, 2025—6 days in total. Could you help me arrange this journey? There are four of us, and we'd like to take trains for the entire round-trip. Please select suitable train services for us.

For accommodation, I’d like a five-star hotel, preferably one that offers robot room service. Just book two rooms—we want to stay comfortably and also experience some unique services.

Regarding dining, there are two places I especially want to try. One is a restaurant near the 'Nanshan One Tree Scenic Area'—please make sure to find one with a waiting area service, since we’ll be a group. The other is 'Bayi Road Food Street', where I’d like to have authentic Sichuan cuisine—please pick a well-reviewed restaurant there.

As for attractions, Chongqing has many great spots. Please help me plan an itinerary that includes both classic highlights and some more unique destinations. Overall, these are my requirements. Kindly arrange a full schedule for me—I’m looking forward to your recommendations! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Nanchang`
- Destination: `['Chongqing']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_seat_status
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
