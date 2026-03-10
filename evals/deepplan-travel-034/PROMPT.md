# DeepPlanning Travel Task #34

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'd like to arrange a trip from Fuzhou to Suzhou, departing on November 12, 2025, and returning on November 14, with a total of three people traveling together. We plan to take the train both ways, so please help me select suitable train services and arrange the seats accordingly.

For accommodation, I’d like to book a hotel under the Hilton brand. Since our budget is limited, please just pick the most affordable option within their chain. We’ll need two rooms—kindly help us check availability and make the booking.

During this trip to Suzhou, I especially want to visit the 'Retreat and Reflection Garden' and 'Shiquan Street'—these two locations must be included in the itinerary. Additionally, I’ve heard that Suzhou has many highly-rated attractions. Could you please select the top three highest-rated ones from the recommended list and include them as well? I’d love to experience more of the local highlights.

That covers the basics. Please go ahead and plan the full itinerary and arrangements for me—no need to ask for further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Fuzhou`
- Destination: `['Suzhou']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_seat_status
- hotel_cheapest_brand
- attraction_must_visit_named
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
