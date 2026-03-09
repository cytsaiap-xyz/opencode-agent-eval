# DeepPlanning Travel Task #67

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

## User Query

I plan to travel from Hohhot to Xiamen on November 12, 2025, staying until November 16, 2025. I'd appreciate your help in planning the entire trip, including transportation, accommodation, dining, and sightseeing arrangements.

Regarding transportation, I intend to take round-trip flights and would like to book first class for a more comfortable journey. By the way, for accommodation, I hope to keep the nightly rate between 650 and 700 yuan—please help me choose a hotel that offers good value and a great experience within this price range.

During my stay, I’d like to visit the highest-rated attractions. Since I have four full days, please arrange and recommend the top three attractions with the highest scores in your recommendation system—ideally places worth exploring in depth. Oh, and one particularly important request: I’d like to have one meal at a restaurant near 'Huangcuo Beach' that offers birthday set menus, as I’m planning to celebrate my birthday there.

That covers all my requirements—I’ve provided all the necessary details. Please go ahead and create a complete itinerary for me. Thank you! November 12, 2025 is Wednesday

## Trip Details

- Origin: `Hohhot`
- Destination: `['Xiamen']`
- Duration: `5` days
- Departure: `2025-11-12`
- Return: `2025-11-16`
- Travelers: `1`
- Rooms needed: `1`

## Hard Constraints to Satisfy

- flight_seat_class
- hotel_price_range
- attraction_top_rated_must_visit
- restaurant_specific_tag_nearby

## Your Task

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
