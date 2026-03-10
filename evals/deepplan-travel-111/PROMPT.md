# DeepPlanning Travel Task #111

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, analyze the data and write your answer to `answer.json`.

## User Query

I plan to travel from Zhuhai to Shanghai on November 12, 2025, and stay until around November 18. I'd appreciate your help in arranging the entire trip, including transportation, accommodation, meals, and sightseeing.

Regarding transportation, I’d like to take flights both ways, and please book first class for both legs of the journey—it’ll make the trip more comfortable. For accommodation, I prefer something budget-friendly. Please check the most affordable hotel under the 'Hanting' brand and book two rooms—we’re a group of four people.

There are a couple of places I must visit during this trip: one is 'Longhua Temple', and the other is 'Shanghai Tower Observation Deck'. Please make sure both are included in the itinerary. Additionally, I’d like to visit some top-rated attractions—since we’re making the trip, I want to see the most worthwhile spots. Please add the three highest-rated recommended attractions to the plan, and space them out comfortably so it’s not too rushed.

That’s about it—I believe I’ve provided all the necessary information. Please go ahead and create a detailed itinerary for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Zhuhai`
- Destination: `['Shanghai']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_seat_class
- hotel_cheapest_brand
- attraction_top_rated_must_visit
- attraction_must_visit_named

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
