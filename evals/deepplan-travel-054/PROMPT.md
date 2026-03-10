# DeepPlanning Travel Task #54

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I'm planning a four-day trip from Jinan to Chengdu on November 12, 2025, returning on the 15th. Could you help me plan a detailed itinerary? There are four of us traveling, and we'll be flying both ways. When booking flights, please choose direct flights with reasonable prices and convenient timing—avoiding overly inconvenient departure or arrival times.

For accommodation, I'd like a three-star hotel that definitely has a gym, as I need to work out every day—the gym is a must! We’ll need two rooms for four people. Could you also recommend some suitable hotels?

Regarding dining, I have two small requests. First, there's a place called "Sunset & You Bistro" that I really want to visit—I've heard it's quite special, so please make sure to include a meal there. Second, one day we'll be visiting the "Chengdu Museum," and I'd like to find the cheapest restaurant nearby for one meal—could you help arrange that as well?

As for attractions, just focus on Chengdu’s more popular spots. I don’t have any specific places in mind, so please select several classic ones and include them in the itinerary.

That covers all my basic requirements—I believe I've provided enough information. Could you please help me plan the trip now? November 12, 2025 is Wednesday

## Trip Details

- Origin: `Jinan`
- Destination: `['Chengdu']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_seat_status
- hotel_star_service_required
- restaurant_must_eat_named
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
