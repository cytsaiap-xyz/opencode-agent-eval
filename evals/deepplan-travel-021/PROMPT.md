# DeepPlanning Travel Task #21

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Fuzhou to Suzhou for a three-day trip starting on November 12, 2025, returning on November 14. I'd like you to help me arrange transportation, accommodation, dining, and sightseeing. Regarding transportation, I’d prefer to arrive back in Fuzhou as late as possible on the return journey so I can spend more time in Suzhou—please check if there are any direct train options with the latest arrival time.

For accommodation, my budget is between 270 and 320 yuan per night. Please recommend a suitable hotel within this price range and the location should be convenient,we are two peole, need 1 room. Additionally, I especially want to visit the 'Three Bridges Scenic Area' and the 'Suzhou Museum'—these two places are must-visits, so please include them in the itinerary. By the way, I’ve heard there are many great restaurants near the 'Shantang Street Scenic Area'. Could you help me find a restaurant ranked in the top ten on the “must-eat” list and schedule one meal there? I’d like to try some local specialties.

These are all my requirements. I believe the information provided is complete, so please go ahead and plan the full itinerary and budget without asking for further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Fuzhou`
- Destination: `['Suzhou']`
- Duration: `3` days
- Departure: `2025-11-12`
- Return: `2025-11-14`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_latest_arrival_direct
- hotel_price_range
- attraction_must_visit_named
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
