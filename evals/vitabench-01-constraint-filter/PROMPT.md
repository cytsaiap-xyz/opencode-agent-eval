# Multi-Constraint Restaurant Filter

Implement the functions in `filter.ts`. The file imports restaurant data from `restaurants.json` (15 restaurants with various properties).

## Your Task

Implement these functions in `filter.ts`:

1. **`getAllRestaurants()`** — Return all restaurants from the JSON data.

2. **`filterRestaurants(criteria)`** — Filter restaurants by multiple criteria (AND logic). All specified criteria must match. Return results sorted by rating descending, then distance ascending for ties. Key criteria:
   - `cuisines`: restaurant's cuisine must be in this list
   - `minRating`: rating >= this value
   - `maxPricePerPerson`: avg price per person <= this value
   - `requiredDietaryOptions`: restaurant must support ALL listed options
   - `maxDeliveryTime`: delivery time <= this value
   - `requireDineIn` / `requireChain`: boolean requirements
   - `maxDistance`: distance <= this value
   - `openAt`: time string "HH:MM" — restaurant must be open (>= open time AND < close time)
   - `openOnDay`: lowercase day name — restaurant must NOT be closed on this day
   - `excludeCuisines`: restaurant's cuisine must NOT be in this list

3. **`findBestAvailable(time, dayOfWeek, budgetPerPerson, maxDeliveryMinutes?, topN?)`** — Find restaurants open at the given time and day, within budget. Optionally filter by max delivery time and limit to top N results. Sorted by rating descending.

4. **`findMealPairs(dayOfWeek, lunchTime, dinnerTime, totalBudget)`** — Find [lunch, dinner] restaurant pairs where both are open at their respective times and day, have different cuisines, and combined avg price per person doesn't exceed the budget. Sort by combined rating descending.
