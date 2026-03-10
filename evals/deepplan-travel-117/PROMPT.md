# DeepPlanning Travel Task #117

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

I plan to travel from Hohhot to Beijing on November 12, 2025, and stay there until November 18, 2025. Could you please help me plan the entire trip, including transportation, accommodation, meals, and sightseeing?

First, for transportation to Beijing, I’d like to take a train—preferably a bullet train (D-series). Please help me choose the cheapest direct train option available. For accommodation, I’d like to stay in a five-star hotel to ensure comfort, and ideally the hotel should offer robot room service, which would make my stay more convenient. By the way, I’m traveling alone, so I only need one room.

Regarding dining, I have two small requests. On one day, I’d like to find a restaurant near 'Tsinghua University', preferably one that offers a waiting area service so I don’t have to wait in line too long. Another time, when I’m near 'Sanlitun Taikoo Li', could you help me find the restaurant with the lowest average spending per person? That way, I can save a bit on food expenses.

Those are basically all my requirements. I’ve provided all the necessary information, so feel free to arrange the full itinerary and budget directly without needing to ask me for further details. Thanks so much! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hohhot`
- Destination: `['Beijing']`
- Duration: `7` days
- Departure: `2025-11-12`
- Return: `2025-11-18`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_cheapest_train_type
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_cheapest_nearby_attraction

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
