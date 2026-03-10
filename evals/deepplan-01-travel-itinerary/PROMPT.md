# Travel Itinerary Planner

Implement a travel itinerary planner in `planner.py` using city data from `city-data.json` (8 attractions, 7 restaurants, 3 hotels).

## Your Task

Implement all functions in `planner.py`:

1. **`get_day_of_week(date_str)`** — Return lowercase day of week for "YYYY-MM-DD".

2. **`add_minutes(time, minutes)`** — Add minutes to "HH:MM" time, return new "HH:MM".

3. **`fits_in_time_window(start_time, end_time, open_time, close_time)`** — Check if [start, end] fits within [open, close].

4. **`estimate_travel_time(from_loc, to_loc)`** — Estimate travel minutes based on distance:
   - < 0.5km: 5 min, 0.5-2km: 10 min, 2-5km: 20 min, >5km: 35 min
   - Use Euclidean distance on lat/lng * 111 for approximate km.

5. **`generate_itinerary(request)`** — Create a multi-day itinerary:
   - Pick hotel within budget and star requirement
   - Each day: breakfast (near start), attractions, lunch (12-14:00), more attractions, dinner (18-20:00)
   - Respect attraction open hours and closed days
   - Include travel time between locations
   - Must include all `must_visit` attractions
   - No duplicate visits, stay within budget
   - Maximize number of attractions visited
   - Return None if constraints can't be met

6. **`validate_itinerary(itinerary, request)`** — Validate no time overlaps, open hour compliance, must-visit inclusion, budget compliance, no duplicates. Return `{"valid": bool, "errors": list}`.
