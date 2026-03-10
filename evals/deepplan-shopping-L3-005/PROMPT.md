# DeepPlanning Shopping Task Level 3 #5

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm putting together a complete outdoor adventure outfit and need to find three specific items online. First, I'm looking for a Women's Rho Hybrid Zip Neck Top that's proven popular with customers - it needs to have more than 25 four-star reviews and total sales volume exceeding 4000 to ensure it's a reliable choice. Next, I need an all-seasons item that has solid customer feedback, specifically one with exactly 50 three-star ratings and more than 3000 total reviews, which shows it's been thoroughly tested by many buyers. Finally, I'm searching for Women's Omni-Shield Adventure Trek Pants targeted specifically for women, and I need the exact item that has 18 four-star ratings and 689 total sales volume - these specific numbers help me identify the right product variant I've been researching.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
