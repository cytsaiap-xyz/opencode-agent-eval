# DeepPlanning Shopping Task Level 3 #8

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm preparing for the winter basketball season and need to get my gear sorted out. First, I need the Men's All-Weather Traction Winter Basketball Shoes in size 41, and I'm looking specifically for the listing that has exactly 178 units in stock. To complement those, I'm searching for a black item that's proven popular—it must have monthly sales exceeding 300, total sales over 2500, and more than 140 four-star reviews. Next, I want to add the Men's ColdGear Infrared® Insulated Long Sleeve Top from Under Armour to my cart; I'm looking for the version with exactly 10 four-star ratings and 0 one-star ratings. Finally, I need a winter-suitable product that can arrive within 1 day, and it should have a strong rating profile with exactly 385 five-star reviews and 16 two-star reviews.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
