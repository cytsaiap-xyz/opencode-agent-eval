# Travel Itinerary Planner

Implement a travel itinerary planner in `planner.ts` using city data from `city-data.json` (8 attractions, 7 restaurants, 3 hotels).

## Your Task

Implement all functions in `planner.ts`:

1. **`getDayOfWeek(dateStr)`** — Return lowercase day of week for "YYYY-MM-DD".

2. **`addMinutes(time, minutes)`** — Add minutes to "HH:MM" time, return new "HH:MM".

3. **`fitsInTimeWindow(startTime, endTime, openTime, closeTime)`** — Check if [start, end] fits within [open, close].

4. **`estimateTravelTime(from, to)`** — Estimate travel minutes based on distance:
   - < 0.5km: 5 min, 0.5-2km: 10 min, 2-5km: 20 min, >5km: 35 min
   - Use Euclidean distance on lat/lng * 111 for approximate km.

5. **`generateItinerary(request)`** — Create a multi-day itinerary:
   - Pick hotel within budget and star requirement
   - Each day: breakfast (near start), attractions, lunch (12-14:00), more attractions, dinner (18-20:00)
   - Respect attraction open hours and closed days
   - Include travel time between locations
   - Must include all `mustVisit` attractions
   - No duplicate visits, stay within budget
   - Maximize number of attractions visited
   - Return null if constraints can't be met

6. **`validateItinerary(itinerary, request)`** — Validate no time overlaps, open hour compliance, must-visit inclusion, budget compliance, no duplicates. Return `{ valid, errors }`.
