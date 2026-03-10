# DeepPlanning Shopping Task Level 3 #19

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm putting together my winter wardrobe and need to pick up a few essentials. First, I'm looking for a product from Zara in size 42 for men, and it must have "Winter Boots" in the product name. Quality is important, so it needs to have fewer than 5 one-star reviews. Next, I need to get the Men's Urban Utility Cargo Pants specifically, and I'm checking reviews carefully—it should have exactly 850 total reviews with 150 of those being 4-star ratings. Then, I also need something in size M that's really popular, with monthly sales exceeding 1000 units. Finally, I'm searching for a men's item in size XL, and I want to see some honest feedback, so it should have more than 3 two-star reviews to help me understand any potential issues.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
