# DeepPlanning Shopping Task Level 2 #25

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting into a new outdoor hobby and need to order some gear. First, I urgently need Trail Shoes with a transport time of less than 2 days. They must be highly rated, with an average score over 4.5, more than 150 four-star ratings, and fewer than 10 one-star ratings. To go with them, I want a specific item that's Yellow. It should be popular and in-stock, so I'm looking for something with over 650 five-star ratings and a stock quantity of more than 180. Lastly, I need another piece of equipment that is well-regarded, with an average score greater than 4.5, more than 30 three-star reviews, and fewer than 10 two-star reviews. Please help me find options that fall within a budget of 1985 to 2369.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
