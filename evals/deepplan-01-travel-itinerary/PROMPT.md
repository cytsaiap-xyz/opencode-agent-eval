# Travel Itinerary Planner

You are a travel planning agent. Read the city data in `city-data.json` (8 attractions, 7 restaurants, 3 hotels) and plan itineraries based on the following requests.

## Planning Rules

- Pick a hotel within budget and star requirement
- Each day: breakfast (near start), attractions, lunch (12:00-14:00), more attractions, dinner (18:00-20:00)
- Respect attraction open hours and closed days
- Include travel time between locations (< 0.5km: 5 min, 0.5-2km: 10 min, 2-5km: 20 min, >5km: 35 min, using Euclidean distance on lat/lng * 111 for approximate km)
- Must include all `must_visit` attractions
- No duplicate visits, stay within budget (hotel * nights + all meals + all entry fees)
- Maximize number of attractions visited

## Your Task

Read `city-data.json` and answer each query below. Write your results to `answer.json`.

### Queries

1. **day_of_week**: What day of the week are these dates? "2025-03-15", "2025-03-17", "2025-03-19". Provide: object mapping date to lowercase day name.

2. **time_calculations**: What time is it after adding these minutes? "09:00" + 90 min, "09:00" + 60 min, "23:00" + 30 min, "09:45" + 30 min, "14:30" + 0 min. Provide: object mapping "start+minutes" to result time.

3. **travel_time_estimates**: Estimate travel time between these location pairs:
   - Very close: `{lat: 34.0, lng: -117.37}` to `{lat: 34.001, lng: -117.371}` (expected: 5 min)
   - Medium: `{lat: 34.0, lng: -117.37}` to `{lat: 34.01, lng: -117.38}` (expected: 10 min)
   - Far: `{lat: 34.0, lng: -117.37}` to `{lat: 34.04, lng: -117.35}` (expected: 20 min)
   Provide: array of `{from, to, minutes}`.

4. **itinerary_1day**: Plan a 1-day trip starting 2025-03-15 (saturday) with budget $500. Provide: itinerary with `hotel` (name, stars), `days` (array with day items), `total_cost`, `total_attractions`.

5. **itinerary_2day**: Plan a 2-day trip starting 2025-03-15 with budget $800. Provide: same structure, at least 2 attractions.

6. **itinerary_must_visit**: Plan a 2-day trip starting 2025-03-15, budget $1000, must visit attractions "a1" (History Museum) and "a2" (Botanical Garden). Provide: itinerary confirming both are included.

7. **itinerary_4star_hotel**: Plan a 1-day trip starting 2025-03-15, budget $1000, minimum 4-star hotel. Provide: itinerary with hotel stars >= 4.

8. **itinerary_impossible**: Plan a 1-day trip on 2025-03-17 (monday), budget $1000, must visit "a5" (Science Center, closed Mon+Tue). Provide: `null` (impossible).

9. **itinerary_low_budget**: Plan a 2-day trip starting 2025-03-15, budget $50. Provide: `null` or very minimal plan within budget.

## Output Format

Write `answer.json` with query names as keys. Each itinerary should have: `hotel`, `days` (array of day objects with `items`), `total_cost`, `total_attractions`. Each day item should have: `start_time`, `end_time`, `type` (attraction/meal/travel), `name`, `cost`.
