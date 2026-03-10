# Multi-Service Booking Coordinator

Implement a cross-service booking coordinator in `coordinator.py` that finds valid hotel + restaurant combinations from the data in `services.json`.

## Your Task

Implement all functions in `coordinator.py`:

1. **`calculateDistance(a, b)`** — Calculate distance in km between two lat/lng locations using the Haversine formula.

2. **`getDayOfWeek(dateStr)`** — Return the lowercase day of week for a "YYYY-MM-DD" date string (e.g., "saturday").

3. **`findBookingPlans(request)`** — Find all valid hotel+restaurant combos satisfying:
   - Hotel available for all nights between check-in and check-out dates
   - Hotel has required amenities and minimum star rating
   - Restaurant open on dinner date (day of week) and at dinner time
   - Restaurant can fit the party size
   - If `needsReservation`, restaurant must accept reservations
   - If `cuisinePreferences` given, restaurant cuisine must match one
   - Total cost (hotel nights * rate + restaurant price/person * party) within budget
   - Sort by restaurant rating desc, then total cost asc

4. **`findBestPlan(request)`** — Return the top plan from findBookingPlans, or null.

5. **`findTransport(hotel, restaurant)`** — Find cheapest transport where the departure point is within 2km of hotel and arrival point within 2km of restaurant. Fall back to taxi (id "t4") if none found.
