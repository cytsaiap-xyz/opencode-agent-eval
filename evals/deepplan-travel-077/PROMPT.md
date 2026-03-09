# DeepPlanning Travel Task #77

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'd like to go to Guangzhou for a few days, departing from Zhuhai. I plan to leave on November 12, 2025, and return on November 16. Could you help me arrange transportation, accommodation, meals, and attractions?

For transportation, I’d prefer to take the train one-way. An afternoon departure would be ideal—specifically a train between 13:00 and 17:00—so the timing isn’t too rushed.

Regarding accommodation, I’d like to stay at a Home Inn hotel. My budget is limited, so please help me find the cheapest branch they have and book a room there, there are two of us traveling, so we’ll need one rooms.

By the way, I have two small requests about meals! First, when visiting the 'Guangzhou Museum (Zhenhai Tower Exhibition Area)', could you help me find the nearby restaurant with the lowest average spending per person? I assume there should be plenty of options around there. Second, when I go to 'Flower City Square', I’ve heard there are some great restaurants on the must-try dining list. Please pick one that ranks in the top ten on that list and arrange a meal there—I’d love to taste some authentic local flavors.

Lastly, could you recommend some distinctive and worthwhile attractions in Guangzhou and help organize them into a well-planned itinerary? That covers all my needs. I believe I’ve provided enough information—please go ahead and plan out the full itinerary and budget for me! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Zhuhai`
- Destination: `['Guangzhou']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `2`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_departure_time_range
- hotel_cheapest_brand
- restaurant_cheapest_nearby_attraction
- restaurant_specific_tag_nearby

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
