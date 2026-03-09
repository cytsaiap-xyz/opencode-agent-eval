# DeepPlanning Shopping Task Level 2 #17

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm updating my wardrobe and need to get a few pieces quickly for the new season. First, I'm looking for a long-sleeve top that's suitable for spring/autumn. It needs to have a stock quantity of more than 200 and a transport time of less than 2 days. To go with it, I need something in a size 40 that can also arrive in under 2 days; it must be a popular item with more than 1200 total reviews and at least 150 four-star reviews. I'm also searching for some culottes from Ralph Lauren in a size L that have more than 250 five-star ratings. Finally, I need a basic white item for women with an average score greater than 4.5 that can be delivered in less than 4 days. I'm looking for something that costs somewhere in the range of 14886 to 14957.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
