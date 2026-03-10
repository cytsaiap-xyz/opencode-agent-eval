# DeepPlanning Travel Task #102

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I have a plan to travel from Xi'an to Beijing on November 12, 2025, and return on November 18. Could you please help me plan the entire trip, including transportation, accommodation, meals, and sightseeing? The total budget for this trip should be within 18000 yuan.

Regarding transportation, I’d like to book a flight departing between 7:00 AM and 11:00 AM—this time slot works best for me. As for accommodation, I don’t have high requirements for hotel星级—I’m fine with a three-star hotel. However, it would be great if the hotel has both a washing machine and a dryer, so I can easily do laundry.

By the way, I have two small requests about dining. First, when I visit the ‘National Swimming Center (Water Cube)’, please recommend the highest-rated restaurant nearby—I’ve heard there are many delicious options in that area. Second, when I’m around ‘Nanluoguxiang’, please arrange a meal at a restaurant ranked in the Top 10 on the “Must-Eat List”—I’d like to try something special.

That’s basically all I need. Please go ahead and start planning my itinerary. I believe I’ve provided all the necessary information—looking forward to your proposal! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Xi'an`
- Destination: `['Beijing']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_departure_time_range
- hotel_star_service_required
- restaurant_highest_rated
- restaurant_specific_tag_nearby
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
