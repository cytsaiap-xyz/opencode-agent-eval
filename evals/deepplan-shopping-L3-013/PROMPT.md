# DeepPlanning Shopping Task Level 3 #13

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm planning a weekend getaway and need to pick up a few essentials. First, I'm looking for something from Bosideng that's perfect for Spring/Autumn weather, specifically an item with Chukka Boots in the name. Then, I need a product that can arrive super quickly—transport time must be just 1 day—and it should have exactly 35 three-star reviews. Next, I want to get something with 'Palm Sketch' in the name that's popular and well-stocked, so it needs more than 90 units in stock and over 120 total reviews. Finally, I'm after a highly-rated item from The North Face with an average rating above 4.5 and more than 450 five-star reviews to ensure top quality.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
