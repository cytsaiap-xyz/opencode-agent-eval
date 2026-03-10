# DeepPlanning Shopping Task Level 2 #34

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting all my gear sorted out for the cold weather. First, I'm looking for a specific women's winter item from Arc'teryx in a purple color, size XL. For layering, I also need a women's Down Vest that has an average score greater than 4.5 and less than 5 one-star reviews. To go with that, I want a very popular Thermal Base Layer from Patagonia in dark green with a total sales volume of more than 4000. I also need to find a specific Bosideng item, the 'Women's Essential Thermal Mock Neck Top', making sure it has over 180 in stock, a transport time less than 4 days, and fewer than 15 two-star reviews. Then, I need something grey that can ship fast, in under 2 days, with an average score above 4.5 and more than 1200 total reviews. Finally, I'll get one more thing from Bosideng: a highly-rated, all-seasons product with more than 650 five-star reviews and fewer than 15 two-star reviews. Find me some products where the total price is no less than 4112 and no more than 4339.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
