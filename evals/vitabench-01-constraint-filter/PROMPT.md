# Multi-Constraint Restaurant Filter

Implement the functions in `filter.py`. The file imports restaurant data from `restaurants.json` (15 restaurants with various properties).

## Your Task

Implement these functions in `filter.py`:

1. **`get_all_restaurants()`** — Return all restaurants from the JSON data.

2. **`filter_restaurants(criteria)`** — Filter restaurants by multiple criteria (AND logic). All specified criteria must match. Return results sorted by rating descending, then distance ascending for ties. Key criteria:
   - `cuisines`: restaurant's cuisine must be in this list
   - `min_rating`: rating >= this value
   - `max_price_per_person`: avg price per person <= this value
   - `required_dietary_options`: restaurant must support ALL listed options
   - `max_delivery_time`: delivery time <= this value
   - `require_dine_in` / `require_chain`: boolean requirements
   - `max_distance`: distance <= this value
   - `open_at`: time string "HH:MM" — restaurant must be open (>= open time AND < close time)
   - `open_on_day`: lowercase day name — restaurant must NOT be closed on this day
   - `exclude_cuisines`: restaurant's cuisine must NOT be in this list

3. **`find_best_available(time, day_of_week, budget_per_person, max_delivery_minutes?, top_n?)`** — Find restaurants open at the given time and day, within budget. Optionally filter by max delivery time and limit to top N results. Sorted by rating descending.

4. **`find_meal_pairs(day_of_week, lunch_time, dinner_time, total_budget)`** — Find (lunch, dinner) restaurant pairs where both are open at their respective times and day, have different cuisines, and combined avg price per person doesn't exceed the budget. Sort by combined rating descending.
