# Multi-Constraint Restaurant Filter

You are a service agent helping users find restaurants. Read the restaurant data in `restaurants.json` (15 restaurants with various properties) and answer the following queries.

## Your Task

Read `restaurants.json` and answer each query below. Write your results to `answer.json`.

### Queries

1. **all_restaurants**: Return all 15 restaurants (full objects).

2. **chinese_restaurants**: Filter restaurants where cuisine is "chinese". Sort by rating descending, then distance ascending.

3. **high_rated**: Filter restaurants with rating >= 4.5. Sort by rating descending, then distance ascending.

4. **vegetarian_and_vegan**: Filter restaurants that support BOTH "vegetarian" AND "vegan" dietary options. Sort by rating descending.

5. **budget_friendly**: Filter restaurants with avg_price_per_person <= 15. Sort by rating descending.

6. **dine_in_only**: Filter restaurants that have dine-in (`has_dine_in` is true). Exclude those without. Sort by rating descending.

7. **open_early**: Filter restaurants open at "08:30" (business_hours.open <= "08:30" AND business_hours.close > "08:30"). Sort by rating descending.

8. **open_on_monday**: Filter restaurants NOT closed on "monday". Sort by rating descending.

9. **exclude_american_italian**: Filter restaurants whose cuisine is NOT "american" and NOT "italian". Sort by rating descending.

10. **combined_filter**: Filter restaurants that: support "vegetarian" dietary option, are within 3km distance, have avg_price_per_person <= 20, and are NOT closed on "wednesday". Sort by rating descending, then distance ascending.

11. **best_available_thursday_lunch**: Find restaurants open at "12:30" on "thursday" (not closed on thursday, business_hours.open <= "12:30" < business_hours.close), with avg_price_per_person <= 30. Sort by rating descending.

12. **best_available_friday_fast_delivery**: Find restaurants open at "12:00" on "friday", with avg_price_per_person <= 50, and delivery_time_minutes <= 30. Sort by rating descending.

13. **meal_pairs_friday**: Find (lunch, dinner) restaurant pairs where: lunch restaurant is open at "12:00" on "friday", dinner restaurant is open at "19:00" on "friday", they have DIFFERENT cuisines, and combined avg_price_per_person <= 60. Sort by combined rating descending. Return as array of `[lunch_restaurant, dinner_restaurant]` pairs.

## Output Format

Write `answer.json` with the query names as keys, each containing the array of matching restaurant objects (or pairs for meal_pairs). Each restaurant should include at minimum: `id`, `name`, `cuisine`, `rating`, `distance_km`, `avg_price_per_person`.
