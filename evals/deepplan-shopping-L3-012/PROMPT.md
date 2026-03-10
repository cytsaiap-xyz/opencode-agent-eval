# DeepPlanning Shopping Task Level 3 #12

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm putting together a complete summer wardrobe and need to find three specific items online. First, I'm looking for a women's product with "Linen" in the name that has excellent reviews - it needs more than 280 five-star reviews and fewer than 5 one-star reviews to ensure quality. Next, I want something with "Off The Wall" in the name that's proven popular with minimal negative feedback; it should have total sales volume greater than 3500, fewer than 3 one-star reviews, and fewer than 4 two-star reviews. Finally, I need an item in size 39 that has exactly 45 four-star ratings and a total of 388 reviews, which suggests it has consistent customer feedback. These three pieces should give me a well-rounded collection with reliable quality based on their review patterns.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
