# DeepPlanning Shopping Task Level 3 #10

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm putting together a new workout wardrobe and need to order several items online. First, I'm looking for the Li-Ning Women's Cool-Dry Training Top specifically, and I want to make sure it has exactly 25 two-star rating counts and 350 four-star rating counts to match my quality expectations. Next, I need something from Peacebird in size 39 that can arrive within 3 days since I need it quickly, and it's important that it has fewer than 15 one-star reviews to ensure good quality. Finally, I want to add an all-seasons item to my order that's well-stocked and popular - it needs to have more than 200 units in stock and over 400 total reviews so I know it's a reliable choice that won't go out of stock soon.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
