# DeepPlanning Travel Task #14

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Guiyang to Guilin for a two-day trip on November 12, 2025, and return on November 13, 2025. Could you please help me plan the itinerary, including transportation, hotel, dining, and sightseeing arrangements? The total budget for this trip should be within 2600 yuan， please consider it in the plan.

First, I’d like to take the earliest departing direct train to Guilin so I can arrive early and have more time. For accommodation, I’d prefer a comfortable stay—ideally a four-star hotel—and it must offer SPA services, as I want to relax during this trip. Regarding meals, there’s one place I definitely want to visit: I’ve heard that 'Asia Music Restaurant' is quite special, so please arrange one meal there for me. Also, I’d like to have a meal at the highest-rated restaurant near 'Impression Liu Sanjie'—I’ve heard there are many great dining options around there. Could you please check which one is the most worthwhile?

These are basically all my requirements. I believe I’ve provided sufficient information, so feel free to start planning the itinerary based on these conditions. Please work within this framework regarding budget and other details—no need to ask for further clarification. Thanks so much for your help! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Guiyang`
- Destination: `['Guilin']`
- Duration: `2` days
- Departure: `2025-11-12`
- Return: `2025-11-13`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- train_earliest_departure_direct
- hotel_star_service_required
- restaurant_must_eat_named
- restaurant_highest_rated
- budget_constraint

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
