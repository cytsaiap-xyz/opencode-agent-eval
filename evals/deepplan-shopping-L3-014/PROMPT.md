# DeepPlanning Shopping Task Level 3 #14

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm preparing for my winter running routine and need to pick up a few essentials. First, I'm looking for the Nike Women's Air Zoom Pegasus 40 Running Shoes in size 38, suitable for all seasons, and it must have exactly 20 two-star ratings. Next, I need something with Nike Tech Fleece Women's Winter Full-Zip Hoodie in the name, perfect for winter, and it has to arrive within 1 day since I'm starting my training soon. Finally, I'm searching for a well-reviewed product in size M that has more than 390 total reviews and fewer than 15 three-star ratings to ensure it's a quality piece that will complement my workout gear.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
