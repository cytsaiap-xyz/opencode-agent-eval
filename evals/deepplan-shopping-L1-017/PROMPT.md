# DeepPlanning Shopping Task Level 1 #17

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm putting together a new athletic outfit and need a few specific pieces. First, I'm looking for a 'Crewneck Top' that can arrive quickly, so the transport time must be less than 2 days. It needs to be well-reviewed, with an average score over 4.5, more than 40 four-star reviews, and fewer than 15 three-star reviews. To complement that, I want a very popular item for women from the brand Ralph Lauren. Specifically, it must be Pink, size L, and have over 1000 five-star ratings. Lastly, to complete the set, I need some 'Performance Tights' from Puma in size L. I'm looking for quality, so they must have an average score greater than 4.5 and more than 150 four-star ratings.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
