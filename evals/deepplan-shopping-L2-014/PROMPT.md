# DeepPlanning Shopping Task Level 2 #14

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting my wardrobe ready for the season and need a few things for myself. First, I'm searching for a popular women's summer item in a size M; it has to be a bestseller with a total sales volume over 4000 and more than 100 four-star ratings. Then, I’m also looking for a high-quality women’s product in Khaki. To make sure it’s well-received, I want it to have more than 150 four-star reviews but fewer than 10 one-star reviews and fewer than 10 two-star reviews. Finally, I specifically need 'Straight-Leg Trousers' from the brand Peacebird in size M. Since I need them soon, the transport time must be less than 5 days, and I only want to see options with fewer than 15 three-star ratings. My budget is between 1056 and 1458.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
