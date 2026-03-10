# DeepPlanning Travel Task #7

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to travel from Xi'an to Taiyuan on November 16, 2025, and stay for two days, returning on the 17th. For transportation, I think taking the train is quite convenient, and I'd like to book first-class seats—please help me reserve first-class tickets for both directions.  

For accommodation, my budget is limited this time, so please find me the cheapest option among 2-star hotels; one room for two people will be enough.

By the way, I’d also like to visit the top-rated attractions in Taiyuan. Could you check which three are the most popular among the recommendations and include them in the itinerary? Oh, right—one more thing: I heard there are many great places to eat near "Clock Tower Street Pedestrian Street". It happens to be my birthday, so I’d like to have dinner at a restaurant nearby that offers birthday set menus. Please help me pick a suitable one and include it in the plan.

These are basically all my requirements—I believe I’ve provided all necessary information. Please go ahead and plan the itinerary and budget for me directly, without asking further preferences. November 16, 2025 is Sunday

## Trip Details

- Origin: `Xi'an`
- Destination: `['Taiyuan']`
- Duration: `2` days
- Departure: `2025-11-16`
- Return: `2025-11-17`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_seat_class
- hotel_cheapest_star
- attraction_top_rated_must_visit
- restaurant_specific_tag_nearby

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
