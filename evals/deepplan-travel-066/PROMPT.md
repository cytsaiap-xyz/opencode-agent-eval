# DeepPlanning Travel Task #66

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to fly from Urumqi to Changsha on November 12, 2025, stay until November 16, and then return. There will be four people traveling together, so we’ll take flights for transportation—please help me select suitable flights and try to arrange convenient departure and return times.

For accommodation, I’d like something comfortable and conveniently located since we’re traveling to relax. Please help me find the highest-rated hotel in Changsha—we need to book two rooms.

I’ve heard that Changsha has some great natural scenery, so I hope the itinerary can include the top-rated attraction in the 'natural风光' category. Also, aren’t there many popular attractions in Changsha? Please pick the three highest-rated ones from the attraction recommendations—I want to check them all!

That’s basically it. I think I’ve provided all the necessary information—please go ahead and prepare a detailed travel plan for me. Thanks so much! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Urumqi`
- Destination: `['Changsha']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_seat_status
- hotel_highest_rated
- attraction_type_highest_rated
- attraction_top_rated_must_visit

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
