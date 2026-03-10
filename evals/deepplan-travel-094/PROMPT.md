# DeepPlanning Travel Task #94

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a trip from Shenyang to Nanjing on November 12, 2025, returning to Shenyang on November 17. Could you please help me plan the entire itinerary? I have a few specific requests. First, regarding transportation, I'd like to take a train for the outbound journey, preferably departing between 8:00 AM and 12:00 PM, as that timing works best. For accommodation, There are two of us traveling, so we’ll need one rooms. I’d like to stay in a three-star hotel, and I prefer something convenient—could you please find me a hotel with both a washing machine and dryer? That would make the stay more comfortable.

As for dining, during the trip I’d like to arrange one meal at a restaurant near 'Nanjing Jinghai Temple Memorial Hall'. I really enjoy outdoor settings, so it would be great if the restaurant offers outdoor seating. By the way, when visiting 'Nanjing Museum', I’d also like to have a meal at the nearest restaurant to save time and make the itinerary more efficient.

That's basically all—I think I've provided enough information. Please go ahead and plan the trip for me. Looking forward to your arrangement! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Shenyang`
- Destination: `['Nanjing']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_departure_time_range
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_closest_to_attraction

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
