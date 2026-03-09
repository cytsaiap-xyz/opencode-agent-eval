# DeepPlanning Shopping Task Level 3 #16

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm preparing for a winter city break and need to order a few essentials quickly. First, I need an overcoat that's highly rated with an average score above 4.5 and more than 400 five-star reviews. Since I'm leaving soon, the transport time must be under 2 days, and it needs to have stock quantity over 80 to ensure availability. Next, I'm looking for something from Puma with 'Suede' in the name—it should be popular with more than 500 total reviews so I know it's a trusted choice. Finally, I want to add a yellow item to brighten up my wardrobe. This one also needs an average rating above 4.5 and must have more than 25 four-star reviews to confirm its quality.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
