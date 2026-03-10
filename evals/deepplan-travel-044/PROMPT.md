# DeepPlanning Travel Task #44

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to fly from Jinan to Chongqing on November 12, 2025, and return on November 15, 2025. Could you please help me plan my itinerary? For transportation, I’d like to book a direct flight for the outbound journey, preferably the most affordable fare available on an Airbus aircraft—I’d like to keep costs down.  

For accommodation, I’m looking for a four-star hotel. By the way, I’m quite interested in tech-oriented experiences, so it would be great if the hotel offers robot room service—that feels really cool!

Regarding dining, I have two small requests. First, I’d like to find a restaurant near 'Mountain City Trail · Jianxingpo Grand Stairway'—I heard some restaurants there allow online queue reservations, which seems very convenient. Also, near the 'Mountain City Lane Traditional Style Area', I’d like to try the restaurant with the lowest average spending per person, since I also want to experience authentic local cuisine.

That’s basically all! I think I’ve provided all the necessary information, so feel free to go ahead and plan the full itinerary—no need to ask me for further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Jinan`
- Destination: `['Chongqing']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_cheapest_manufacturer_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_cheapest_nearby_attraction

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
