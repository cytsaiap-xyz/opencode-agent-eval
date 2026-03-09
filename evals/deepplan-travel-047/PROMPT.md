# DeepPlanning Travel Task #47

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning a trip from Jinan to Hangzhou on November 12, 2025, and will return on November 15. Could you please help me plan this trip? Since I don't want to get up too early or leave too late on the departure day, could you arrange a train departing between 10:00 AM and 2:00 PM? For the return journey, there are no special requirements—just pick a suitable time.

For accommodation, I'd like to stay in a newer hotel, preferably one that has been recently renovated in 2025, as it would be more comfortable. By the way, there are two of us traveling, so just one room is needed.

As for sightseeing, there are two places I really want to visit: the "China Knife, Scissors, and Sword Museum" and the "West Lake Musical Fountain"—please make sure both are included in the itinerary. Also, I've heard that Hangzhou has many relaxing spots, such as those offering "leisure experiences." Could you include your recommended spots of this type? I’d prefer a relaxed and unhurried pace throughout the trip.

Regarding meals, please suggest some good local restaurants along the way—ideally ones featuring authentic local cuisine. That covers all my requirements. I believe I’ve provided enough information; please go ahead and create the full itinerary for me. Thanks so much! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Jinan`
- Destination: `['Hangzhou']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_departure_time_range
- hotel_newest_decoration
- attraction_must_visit_named
- attraction_all_of_type

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
