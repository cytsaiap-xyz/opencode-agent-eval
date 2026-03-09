# DeepPlanning Travel Task #95

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning a trip from Xiamen to Nanchang on November 12, 2025, and will stay until returning on November 17. I'd like to ask you to help me plan the entire itinerary, including transportation, accommodation, meals, and attractions.

Regarding transportation, I’d prefer a later arrival time back in Xiamen, since I don’t want the trip to feel too rushed. Please just help me pick the latest direct train option available for the return journey.

For accommodation, I’d like to stay at 'Jinjiang Inn'. I've stayed there several times before and found it offers great value for money. This time, please find me the highest-rated hotel among all 'Jinjiang Inn' locations. There are three of us traveling, so we’ll need two rooms.

By the way, I also have some specific requests for meals. I heard there are quite a few dining options near the 'Bada Shanren Memorial Hall', and since I’m especially eager to visit this attraction, could you arrange a meal at the restaurant closest to it? Additionally, I really want to visit the 'Jiangxi Provincial Museum (New Museum)'. I’ve heard there are some restaurants nearby with good service—I’d like to dine at one that has a waiting area. Could you please arrange that as well?

That’s basically everything—hope I haven’t left out any important details! Just help me finalize the full itinerary. Thanks so much for your help! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Xiamen`
- Destination: `['Nanchang']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `3`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_latest_arrival_direct
- hotel_brand_highest_rated
- restaurant_closest_to_attraction
- restaurant_specific_tag_nearby

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
