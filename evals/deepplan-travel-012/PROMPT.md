# DeepPlanning Travel Task #12

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a two-day trip from Guiyang to Guilin on November 12, 2025, returning on the 13th. Could you please help me plan a detailed itinerary? I'll be traveling alone by train, and for both the outbound and return journeys, I'd like to book first-class seats since they're more comfortable.

For accommodation, I'd prefer a four-star hotel with a gym, as I work out every day and would like to stay at a hotel that has fitness facilities. Also, could you help me arrange dining options? When I visit 'Li River Bamboo Rafting (Yangdi-Xingping Section)', I’d like to have a meal at a nearby restaurant—ideally one where I can take a virtual queue online in advance to save time. Additionally, I’d like to visit 'Mulong Lake'. Could you include an opportunity there to enjoy Western cuisine, preferably at a restaurant offering a variety of international flavors?

That's basically all I need. Please help me organize the entire itinerary—I just need you to lay it out clearly. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Guiyang`
- Destination: `['Guilin']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_seat_class
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_specific_cuisine_nearby

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
