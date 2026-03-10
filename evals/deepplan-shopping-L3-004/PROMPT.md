# DeepPlanning Shopping Task Level 3 #4

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm planning a weekend outdoor adventure and need to grab a few essentials quickly. First, I'm looking for All-Terrain Cargo Trousers in Camel color with a 2-day transport time and total sales volume exceeding 2800 units. To go with that, I need a size 44 item that has exactly 4 three-star ratings and just 1 one-star rating. Next, I want something with Himalayan in the name that's really popular—it must have more than 350 five-star reviews, monthly sales over 200, and arrive in less than 3 days. Finally, I need a Chuck Taylor Patch Crewneck Sweatshirt with an average rating above 4.5, more than 50 four-star reviews, and transport time under 3 days to complete my outfit.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
