# DeepPlanning Shopping Task Level 1 #40

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting my wardrobe updated and have a few specific items in mind. First, I'm looking for something in a size 39 that's highly rated, so it must have more than 150 five-star ratings and a total review count greater than 200. I also need a popular women's item in Navy Blue; to make sure it's a best-seller, I want it to have a monthly sales volume of more than 750. Finally, I'm searching for a summer piece from The North Face. It needs to be a size L in Burgundy and have a monthly sales volume of more than 500.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
