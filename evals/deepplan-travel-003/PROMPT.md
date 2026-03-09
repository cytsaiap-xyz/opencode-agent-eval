# DeepPlanning Travel Task #3

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Harbin to Dalian on November 12, 2025, and return to Harbin the next day, in the evening of November 13, 2025. Since this trip is short, I’d like the itinerary to be simple and relaxed. By the way, please help me choose the latest arriving direct train for my return journey so that I can spend more time in Dalian.

For accommodation, I personally prefer "All Seasons Hotel" — I find their service consistently reliable and the facilities quite good. To save some money, please book the cheapest one available under the "All Seasons Hotel" brand. Since I’m traveling alone, just one room will suffice.

Additionally, I really want to explore some relaxing and enjoyable spots. I’ve heard Dalian has many leisure-oriented attractions, and I’d like to visit all of them this time — they seem perfect for unwinding. Please include all recommended 'Leisure Experience' category attractions in the itinerary and arrange them as logically as possible.

Oh, and I’ve heard there are many great restaurants near 'Youhao Square'. I’d like to have a meal there this time, preferably at a place with outdoor seating — dining outside feels more atmospheric. Please pick a restaurant with good ratings and ideally some local特色 (characteristics).

These are basically all my requirements. I believe I’ve provided all necessary information — please go ahead and start planning my itinerary without asking for further details! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Harbin`
- Destination: `['Dalian']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_latest_arrival_direct
- hotel_cheapest_brand
- attraction_all_of_type
- restaurant_specific_tag_nearby

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
