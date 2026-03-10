# DeepPlanning Travel Task #11

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning to travel from Guiyang to Guilin on November 12, 2025, and will stay for just one day before returning on the 13th. The trip is quite short, so please help me arrange a tight itinerary! For transportation, I'd like to take a train—please check if there's the most affordable direct train option available; timing is flexible, as long as it helps save money.

For accommodation, I'd prefer something comfortable. I think three-star hotels offer great value for money, so please help me pick the one with the highest rating—just one night is needed. By the way, there are four of us in total, so we'll need two rooms.

Regarding meals, I've heard the scenery around 'Duxiu Peak' is especially beautiful, so I’d love to have a meal nearby with an outdoor seating option, where we can enjoy the view while eating. Additionally, I’d like to try Western cuisine—please arrange a meal at a Western restaurant near 'Wood Dragon Lake', preferably one offering a variety of fusion flavors so we can sample several specialties.

I’ve now mentioned all the places I’d like to visit and dine at. Please help me plan an itinerary based on these requirements. I believe I've provided all necessary budget and detail—feel free to go ahead and organize everything for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Guiyang`
- Destination: `['Guilin']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_cheapest_direct
- hotel_star_highest_rated
- restaurant_specific_tag_nearby
- restaurant_specific_cuisine_nearby

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
