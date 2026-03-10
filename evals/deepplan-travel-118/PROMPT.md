# DeepPlanning Travel Task #118

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Chongqing to Zhengzhou on November 12, 2025, and return on November 18, 2025. Could you please help me plan the entire trip, including transportation, accommodation, dining, and sightseeing arrangements?

Regarding transportation, I’d like to take a train when going—preferably departing between 7:00 AM and 11:00 AM, so that I’ll still have time to explore upon arrival in Zhengzhou. For the return journey, feel free to arrange it at any time; there are no specific requirements.

For accommodation, I’d like to stay at ‘如家’. I’m used to their service and find it comfortable, but this time I hope for a better experience—please help me book the highest-rated hotel under the ‘如家’ brand. We are a group of three people, so we’ll need two rooms.

For sightseeing, I’d like to make the most of my visit. I’ve heard Zhengzhou has many great attractions—please directly select the top three highest-rated ones from your recommendation tools and include them in the itinerary. Additionally, I especially enjoy natural scenery such as mountains and lakes—please add one more top-rated attraction in the ‘自然风光’ category to the plan.

As for dining, I don’t have any particular requests at the moment. You can simply recommend some local specialty restaurants along the way based on the itinerary. I’d like to experience Zhengzhou’s local cuisine—please arrange it accordingly.

These are basically all my requirements, and I believe I’ve provided sufficient information. Please go ahead and start planning a detailed itinerary for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Chongqing`
- Destination: `['Zhengzhou']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_departure_time_range
- hotel_brand_highest_rated
- attraction_top_rated_must_visit
- attraction_type_highest_rated

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
