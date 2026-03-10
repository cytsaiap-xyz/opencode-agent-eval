# Multi-Service Booking Coordinator

You are a service agent that helps users find hotel + restaurant booking combinations. Read the service data in `services.json` and answer the following booking queries.

## Your Task

Read `services.json` (contains hotels, restaurants, and transport options with locations, pricing, availability, etc.) and answer each query below. Write your results to `answer.json`.

### Queries

1. **distance_same_point**: Calculate the distance in km between the same point `{lat: 40.7128, lng: -74.006}` and itself. Provide: `distance_km`.

2. **distance_nyc_landmarks**: Calculate distance between Times Square `{lat: 40.7580, lng: -73.9855}` and downtown `{lat: 40.7128, lng: -74.006}`. Provide: `distance_km` (should be between 4-8km).

3. **day_of_week_checks**: What day of the week is: "2025-03-15", "2025-03-16", "2025-03-17", "2025-03-18"? Provide: `days` object mapping each date to its lowercase day name.

4. **booking_plans_basic**: Find all valid hotel+restaurant booking plans for: check-in 2025-03-15, check-out 2025-03-17, party size 2, budget $1000, dinner date 2025-03-15, dinner time 19:00. Each plan must have hotel available for all nights, restaurant open on that day and time, accommodates party size, total cost within budget. Sort by restaurant rating descending, then total cost ascending. Provide: array of plans, each with `hotel` (name, id), `restaurant` (name, id, rating), `total_cost`, `hotel_cost`, `restaurant_cost`, `nights`.

5. **booking_plans_4star**: Same as above but require minimum 4-star hotel, budget $2000. Provide: array of plans.

6. **booking_plans_pool_spa**: Same as basic but require hotel amenities ["pool", "spa"], budget $2000. Provide: array of plans. Note which hotel has both.

7. **booking_plans_monday**: Find plans for check-in 2025-03-17 (monday), check-out 2025-03-18, party size 2, budget $2000, dinner on 2025-03-17 at 19:00. Restaurants closed on monday should be excluded. Provide: array of plans.

8. **booking_plans_large_party**: Party size 5, check-in 2025-03-15, check-out 2025-03-16, budget $5000, dinner 2025-03-15 at 19:00. Exclude restaurants with max_party_size < 5. Provide: array of plans.

9. **booking_plans_tight_budget**: Budget $120, check-in 2025-03-15, check-out 2025-03-16, party size 2, dinner 2025-03-15 at 12:00. Provide: array of plans (very limited options).

10. **best_plan**: Find the single best plan from query 4 (highest restaurant rating, lowest cost tiebreaker). Provide: the plan object.

11. **no_plan_possible**: Budget $10, check-in 2025-03-15, check-out 2025-03-16, party size 2, dinner 2025-03-15 at 19:00. Provide: `null` or empty result.

12. **transport_hotel_to_restaurant**: Find the best (cheapest) transport option from Budget Inn `{lat: 40.7580, lng: -73.9855}` to Sushi World `{lat: 40.7505, lng: -73.9934}`. Match by proximity (within 2km of each endpoint). Provide: transport object with `id`.

## Output Format

Write `answer.json` with query names as keys containing the requested data.
