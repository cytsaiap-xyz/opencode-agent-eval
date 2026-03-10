# DeepPlanning Travel Task #59

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I'm planning a trip from Shenzhen to Beijing on November 12, 2025, and returning on the 15th. Could you help me plan the itinerary? Please arrange flights for both directions. For the return flight, I'd prefer to arrive in Shenzhen between 11:00 AM and 3:00 PM, as that timing works best.

For accommodation, I’d like to book a three-star hotel with a gym, so we can work out in the morning or evening. The facilities and service should be reliable. There are four of us in total, so two rooms will be sufficient.

Regarding meals, I need arrangements for two occasions. One should be near "Sanlitun Taikoo Li" — I’d like to experience a restaurant offering birthday set menus. I’ve heard it’s very lively there and should have a great atmosphere. The other meal should be near "Tiananmen Square" — just find the most budget-friendly restaurant available, somewhere simple and cost-effective for a basic meal.

For attractions, please include all the classic and must-visit spots. Since this is my first time in Beijing, I definitely don’t want to miss any iconic landmarks — places like "Tiananmen Square" are must-sees.

That's about it — I've provided all the necessary details. Could you please put together a detailed itinerary for me? Thanks so much! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Shenzhen`
- Destination: `['Beijing']`
- Duration: `4` days
- Departure: `2025-11-12`
- Return: `2025-11-15`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- flight_arrival_time_range
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_cheapest_nearby_attraction

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
