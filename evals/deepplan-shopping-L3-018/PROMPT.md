# DeepPlanning Shopping Task Level 3 #18

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm preparing for a multi-season outdoor adventure and need to pick up several items online. First, I'm looking for a popular product with strong customer approval—it must have monthly sales exceeding 400 and more than 700 five-star reviews. Next, I need something specifically called Men's XT-Quest All-Terrain Bottoms in size L, and I'm particular about it having exactly 11 three-star ratings in its distribution. Then, I'm searching for an all-seasons item with the name Trail Explorer that has accumulated more than 400 total reviews to ensure it's well-tested. Finally, I need a winter product called Men's UA HOVR™ Phantom Winter Running Shoes with over 250 total reviews, but I'm being very selective about quality—it must have fewer than 2 one-star ratings and fewer than 3 two-star ratings to ensure minimal negative feedback.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
