# DeepPlanning Travel Task #87

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I'm planning a trip from Shanghai to Xiamen, departing on November 12, 2025, and returning on November 17, 2025. This time, I'd like you to help me plan the entire itinerary, including transportation, accommodation, meals, and sightseeing arrangements. The total budget for this trip should be within 13000 yuan.

Let’s start with transportation. For the outbound journey, I’d like to take a train. Could you please check for me the cheapest direct train option available? I don’t have specific time requirements—as long as it departs on that day, it's fine.

For accommodation, I’d like to book a five-star hotel that ideally has a gym, since I exercise every day and don’t want to interrupt my routine while traveling. By the way, there are four of us in total, so I’ll need to book two rooms.

Regarding meals, I have two small requests. First, please arrange a meal at a restaurant near 'Xiamen Botanical Garden Expo Park'. I’ve heard some restaurants there offer outdoor seating, which sounds very pleasant—I’d appreciate it if you could pick one with outdoor seating options. Second, when we’re visiting 'Jimei School Village', I’d like to find a place to eat nearby. Our budget is relatively limited there—could you please find the most affordable restaurant in that area?

These are basically all my requirements. I believe I’ve provided all necessary information, so please go ahead and plan the full itinerary for me without needing to ask further questions about preferences. Thanks so much for your help! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Shanghai`
- Destination: `['Xiamen']`
- Duration: `6` days
- Departure: `2025-11-12`
- Return: `2025-11-17`
- Travelers: `4`
- Rooms needed: `2`

## Hard Constraints to Satisfy

- train_cheapest_direct
- hotel_star_service_required
- restaurant_specific_tag_nearby
- restaurant_cheapest_nearby_attraction
- budget_constraint

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
